import importlib.util
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

from PIL import Image, ImageDraw

SKILL_DIR = Path(__file__).resolve().parents[1]
SCRIPTS = SKILL_DIR / "scripts"
sys.path.insert(0, str(SCRIPTS))


def load_module(name: str):
    path = SCRIPTS / f"{name}.py"
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Unable to load {path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


BACKGROUND = load_module("background_utils")
ASSEMBLER = load_module("assemble_extended_atlas")
DESPILL = load_module("despill_chroma_edges")
PREPARE = SCRIPTS / "prepare_pet_run.py"
EXTRACT = SCRIPTS / "extract_strip_frames.py"
INSPECT = SCRIPTS / "inspect_frames.py"
VALIDATE = SCRIPTS / "validate_atlas.py"


class NativeAlphaPipelineTest(unittest.TestCase):
    def transparent_strip(self, frame_count: int, color: tuple[int, int, int, int]) -> Image.Image:
        strip = Image.new("RGBA", (frame_count * 120, 240), (12, 34, 56, 0))
        draw = ImageDraw.Draw(strip)
        for index in range(frame_count):
            left = index * 120 + 20
            draw.rectangle((left, 40, left + 79, 199), fill=color)
        return strip

    def test_auto_mode_preserves_visible_pixels_matching_fallback_key(self) -> None:
        image = self.transparent_strip(1, (255, 0, 255, 255))

        cleaned, mode, profile = BACKGROUND.prepare_sprite_source(
            image,
            chroma_key=(255, 0, 255),
            threshold=96,
            background_mode="auto",
        )

        self.assertEqual(mode, "transparent")
        self.assertEqual(cleaned.getpixel((40, 80)), (255, 0, 255, 255))
        self.assertEqual(cleaned.getpixel((0, 0)), (0, 0, 0, 0))
        self.assertGreater(profile["transparent_pixels"], 0)

    def test_auto_mode_falls_back_to_chroma_for_opaque_source(self) -> None:
        image = Image.new("RGB", (120, 240), "#FF00FF")
        ImageDraw.Draw(image).rectangle((20, 40, 99, 199), fill=(20, 40, 80))

        cleaned, mode, _profile = BACKGROUND.prepare_sprite_source(
            image,
            chroma_key=(255, 0, 255),
            threshold=96,
            background_mode="auto",
        )

        self.assertEqual(mode, "chroma")
        self.assertEqual(cleaned.getpixel((0, 0)), (0, 0, 0, 0))
        self.assertEqual(cleaned.getpixel((40, 80)), (20, 40, 80, 255))

    def test_required_transparency_rejects_opaque_source(self) -> None:
        with self.assertRaisesRegex(ValueError, "requires a real alpha channel"):
            BACKGROUND.prepare_sprite_source(
                Image.new("RGB", (64, 64), "white"),
                chroma_key=(0, 255, 0),
                threshold=96,
                background_mode="transparent",
            )

    def test_internal_alpha_hole_does_not_hide_an_opaque_background(self) -> None:
        image = Image.new("RGBA", (120, 120), (255, 0, 255, 255))
        ImageDraw.Draw(image).rectangle((45, 45, 74, 74), fill=(0, 0, 0, 0))

        cleaned, mode, _profile = BACKGROUND.prepare_sprite_source(
            image,
            chroma_key=(255, 0, 255),
            threshold=96,
            background_mode="auto",
        )

        self.assertEqual(mode, "chroma")
        self.assertIsNone(cleaned.getbbox())

    def test_look_row_auto_mode_uses_native_alpha(self) -> None:
        with tempfile.TemporaryDirectory() as temporary_directory:
            strip_path = Path(temporary_directory) / "look-row.png"
            self.transparent_strip(8, (255, 0, 255, 255)).save(strip_path)

            cells, mode = ASSEMBLER.extract_row_strip_cells_with_mode(
                strip_path,
                (255, 0, 255),
                96,
                "auto",
            )

            self.assertEqual(mode, "transparent")
            self.assertEqual(len(cells), 8)
            self.assertTrue(all(cell.getbbox() for cell in cells))
            self.assertTrue(
                all(
                    any(
                        red == 255 and green == 0 and blue == 255 and alpha > 16
                        for red, green, blue, alpha in cell.getdata()
                    )
                    for cell in cells
                )
            )

    def test_native_alpha_cleanup_preserves_visible_colors(self) -> None:
        image = Image.new("RGBA", (4, 4), (255, 0, 255, 255))
        image.putpixel((0, 0), (10, 20, 30, 0))

        cleaned, report = DESPILL.preserve_native_alpha(image)

        self.assertEqual(cleaned.getpixel((2, 2)), (255, 0, 255, 255))
        self.assertEqual(cleaned.getpixel((0, 0)), (0, 0, 0, 0))
        self.assertEqual(report["algorithm"], "native-alpha-pass-through")
        self.assertTrue(report["alpha_preserved"])
        self.assertEqual(report["spill_suppressed_pixels"], 0)

    def test_extended_manifest_selects_cleanup_from_source_provenance(self) -> None:
        with tempfile.TemporaryDirectory() as temporary_directory:
            root = Path(temporary_directory)
            transparent_manifest = root / "transparent.json"
            mixed_manifest = root / "mixed.json"

            ASSEMBLER.write_manifest(
                transparent_manifest,
                root / "spritesheet.webp",
                base_background_modes=["transparent"] * 9,
                look_background_modes=["transparent", "transparent"],
            )
            ASSEMBLER.write_manifest(
                mixed_manifest,
                root / "spritesheet.webp",
                base_background_modes=["transparent"] * 9,
                look_background_modes=["transparent", "chroma"],
            )

            transparent = json.loads(transparent_manifest.read_text())
            mixed = json.loads(mixed_manifest.read_text())
            self.assertEqual(transparent["backgroundMode"], "transparent")
            self.assertEqual(transparent["cleanupMode"], "native-alpha")
            self.assertEqual(mixed["backgroundMode"], "mixed")
            self.assertEqual(mixed["cleanupMode"], "mixed")

    def test_mixed_cleanup_does_not_touch_native_alpha_row_colors(self) -> None:
        atlas = Image.new("RGBA", (192, 416), (0, 0, 0, 0))
        draw = ImageDraw.Draw(atlas)
        draw.rectangle((40, 40, 151, 167), fill=(255, 0, 255, 255))
        draw.rectangle((40, 248, 151, 375), fill=(20, 40, 80, 255))
        draw.rectangle((40, 248, 41, 375), fill=(255, 0, 255, 128))

        cleaned, report = DESPILL.decontaminate_mixed_atlas(
            atlas,
            chroma_key=(255, 0, 255),
            row_background_modes=["transparent", "chroma"],
        )

        self.assertEqual(cleaned.getpixel((80, 80)), (255, 0, 255, 255))
        self.assertNotEqual(cleaned.getpixel((40, 300)), (255, 0, 255, 128))
        self.assertIn("mixed-native-alpha", report["algorithm"])
        self.assertGreater(report["spill_suppressed_pixels"], 0)
        self.assertEqual(
            report["row_background_modes"],
            ["transparent", "chroma"],
        )

    def test_prepare_defaults_to_transparent_with_chroma_fallback(self) -> None:
        with tempfile.TemporaryDirectory() as temporary_directory:
            run_dir = Path(temporary_directory) / "run"
            subprocess.run(
                [
                    sys.executable,
                    str(PREPARE),
                    "--pet-name",
                    "Alpha Test",
                    "--pet-notes",
                    "a magenta mascot",
                    "--output-dir",
                    str(run_dir),
                ],
                check=True,
                capture_output=True,
                text=True,
            )

            request = json.loads((run_dir / "pet_request.json").read_text())
            prompt = (run_dir / "prompts" / "rows" / "idle.md").read_text()
            self.assertEqual(request["background_mode"]["preferred"], "transparent")
            self.assertEqual(request["background_mode"]["fallback"], "chroma")
            self.assertIn("Prefer a real RGBA image", prompt)
            self.assertIn("chroma-key background as the only fallback", prompt)

    def test_frame_inspection_skips_chroma_color_gate_for_native_alpha_rows(self) -> None:
        with tempfile.TemporaryDirectory() as temporary_directory:
            root = Path(temporary_directory)
            decoded = root / "decoded"
            frames = root / "frames"
            decoded.mkdir()
            self.transparent_strip(6, (255, 0, 255, 255)).save(decoded / "idle.png")

            subprocess.run(
                [
                    sys.executable,
                    str(EXTRACT),
                    "--decoded-dir",
                    str(decoded),
                    "--output-dir",
                    str(frames),
                    "--states",
                    "idle",
                    "--chroma-key",
                    "#FF00FF",
                ],
                check=True,
                capture_output=True,
                text=True,
            )
            review_path = root / "review.json"
            subprocess.run(
                [
                    sys.executable,
                    str(INSPECT),
                    "--frames-root",
                    str(frames),
                    "--json-out",
                    str(review_path),
                    "--states",
                    "idle",
                ],
                check=True,
                capture_output=True,
                text=True,
            )

            review = json.loads(review_path.read_text())
            self.assertTrue(review["ok"])
            self.assertEqual(review["rows"][0]["background_mode"], "transparent")
            self.assertTrue(
                all(
                    frame["chroma_adjacent_pixels"] == 0
                    for frame in review["rows"][0]["frames"]
                )
            )

    def test_atlas_validation_limits_chroma_checks_to_fallback_rows(self) -> None:
        frame_counts = [6, 8, 8, 4, 5, 8, 6, 6, 6, 8, 8]
        with tempfile.TemporaryDirectory() as temporary_directory:
            root = Path(temporary_directory)
            atlas_path = root / "atlas.png"
            manifest_path = root / "manifest.json"
            report_path = root / "validation.json"
            atlas = Image.new("RGBA", (1536, 2288), (0, 0, 0, 0))
            draw = ImageDraw.Draw(atlas)
            for row, frame_count in enumerate(frame_counts):
                for column in range(frame_count):
                    color = (255, 0, 255, 255) if row == 0 else (20, 40, 80, 255)
                    left = column * 192 + 60
                    top = row * 208 + 70
                    draw.rectangle((left, top, left + 71, top + 71), fill=color)
            draw.rectangle((6 * 192 + 60, 70, 6 * 192 + 131, 141), fill=(255, 0, 255, 255))
            atlas.save(atlas_path)
            manifest_path.write_text(
                json.dumps(
                    {
                        "rowBackgroundModes": [
                            "transparent",
                            *["chroma"] * 10,
                        ]
                    }
                )
            )

            subprocess.run(
                [
                    sys.executable,
                    str(VALIDATE),
                    str(atlas_path),
                    "--require-v2",
                    "--chroma-key",
                    "#FF00FF",
                    "--background-manifest",
                    str(manifest_path),
                    "--json-out",
                    str(report_path),
                ],
                check=True,
                capture_output=True,
                text=True,
            )

            report = json.loads(report_path.read_text())
            self.assertTrue(report["ok"])
            self.assertEqual(report["row_background_modes"][0], "transparent")
            self.assertTrue(
                all(
                    cell["opaque_chroma_key_pixels"] == 0
                    for cell in report["cells"]
                    if cell["row"] == 0
                )
            )


if __name__ == "__main__":
    unittest.main()
