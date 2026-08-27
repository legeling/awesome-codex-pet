#!/usr/bin/env python3
"""Assemble a standard Codex pet atlas plus 16 look-direction frames."""

from __future__ import annotations

import argparse
import json
import math
import re
import sys
from pathlib import Path

from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from background_utils import (
    BACKGROUND_MODES,
    clear_transparent_rgb,
    prepare_sprite_source,
)
from extract_strip_frames import component_frame_groups, component_group_image

COLUMNS = 8
STANDARD_ROWS = 9
EXTENDED_ROWS = 11
STANDARD_ROW_STATES = [
    "idle",
    "running-right",
    "running-left",
    "waving",
    "jumping",
    "failed",
    "waiting",
    "running",
    "review",
]
CELL_WIDTH = 192
CELL_HEIGHT = 208
ATLAS_WIDTH = COLUMNS * CELL_WIDTH
STANDARD_ATLAS_HEIGHT = STANDARD_ROWS * CELL_HEIGHT
EXTENDED_ATLAS_HEIGHT = EXTENDED_ROWS * CELL_HEIGHT
LOOK_DIRECTION_LABELS = [
    "000",
    "022.5",
    "045",
    "067.5",
    "090",
    "112.5",
    "135",
    "157.5",
    "180",
    "202.5",
    "225",
    "247.5",
    "270",
    "292.5",
    "315",
    "337.5",
]
IMAGE_SUFFIXES = {".png", ".webp", ".jpg", ".jpeg"}
MIN_DETACHED_COMPONENT_PIXELS = 128
DEFAULT_EDGE_MARGIN = 2
DEFAULT_EDGE_PIXEL_THRESHOLD = 24


class CellGeometry:
    def __init__(self, height: int, lower_center_x: float, bottom: int) -> None:
        self.height = height
        self.lower_center_x = lower_center_x
        self.bottom = bottom


def edge_alpha_count(image: Image.Image, margin: int) -> int:
    alpha = image.getchannel("A")
    width, height = alpha.size
    total = 0
    for box in (
        (0, 0, width, margin),
        (0, height - margin, width, height),
        (0, 0, margin, height),
        (width - margin, 0, width, height),
    ):
        total += sum(alpha.crop(box).histogram()[1:])
    return total


def parse_hex_color(value: str) -> tuple[int, int, int]:
    if not re.fullmatch(r"#[0-9a-fA-F]{6}", value):
        raise SystemExit(f"invalid chroma key color: {value}; expected #RRGGBB")
    return tuple(int(value[index : index + 2], 16) for index in (1, 3, 5))


def fit_to_cell(image: Image.Image) -> Image.Image:
    bbox = image.getbbox()
    target = Image.new("RGBA", (CELL_WIDTH, CELL_HEIGHT), (0, 0, 0, 0))
    if bbox is None:
        return target

    sprite = image.crop(bbox).convert("RGBA")
    max_width = CELL_WIDTH - 10
    max_height = CELL_HEIGHT - 10
    scale = min(max_width / sprite.width, max_height / sprite.height, 1.0)
    if scale != 1.0:
        sprite = sprite.resize(
            (max(1, round(sprite.width * scale)), max(1, round(sprite.height * scale))),
            Image.Resampling.LANCZOS,
        )
    left = (CELL_WIDTH - sprite.width) // 2
    top = (CELL_HEIGHT - sprite.height) // 2
    target.alpha_composite(sprite, (left, top))
    return remove_small_detached_components(target)


def remove_small_detached_components(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    alpha = rgba.getchannel("A")
    width, height = rgba.size
    visited: set[tuple[int, int]] = set()
    components: list[list[tuple[int, int]]] = []

    for y in range(height):
        for x in range(width):
            if (x, y) in visited or alpha.getpixel((x, y)) <= 16:
                continue

            component: list[tuple[int, int]] = []
            stack = [(x, y)]
            visited.add((x, y))
            while stack:
                current_x, current_y = stack.pop()
                component.append((current_x, current_y))
                for next_x, next_y in (
                    (current_x - 1, current_y),
                    (current_x + 1, current_y),
                    (current_x, current_y - 1),
                    (current_x, current_y + 1),
                ):
                    if (
                        next_x < 0
                        or next_x >= width
                        or next_y < 0
                        or next_y >= height
                        or (next_x, next_y) in visited
                        or alpha.getpixel((next_x, next_y)) <= 16
                    ):
                        continue
                    visited.add((next_x, next_y))
                    stack.append((next_x, next_y))
            components.append(component)

    if not components:
        return rgba

    largest = max(len(component) for component in components)
    pixels = rgba.load()
    for component in components:
        if len(component) == largest or len(component) >= MIN_DETACHED_COMPONENT_PIXELS:
            continue
        for x, y in component:
            pixels[x, y] = (0, 0, 0, 0)
    return rgba


def opaque_points(image: Image.Image) -> list[tuple[int, int]]:
    alpha = image.getchannel("A")
    width, height = image.size
    return [(x, y) for y in range(height) for x in range(width) if alpha.getpixel((x, y)) > 16]


def lower_band_points(
    points: list[tuple[int, int]], top: int, bottom: int
) -> list[tuple[int, int]]:
    threshold = top + (bottom - top) * 0.72
    return [(x, y) for x, y in points if y >= threshold] or points


def cell_geometry(cell: Image.Image) -> CellGeometry | None:
    points = opaque_points(cell)
    if not points:
        return None

    ys = [y for _, y in points]
    top = min(ys)
    bottom = max(ys) + 1
    lower_points = lower_band_points(points, top, bottom)
    return CellGeometry(
        height=bottom - top,
        lower_center_x=sum(x for x, _ in lower_points) / len(lower_points),
        bottom=bottom,
    )


def normalize_cell_to_geometry(
    cell: Image.Image,
    target: CellGeometry,
    scale: float,
) -> Image.Image:
    bbox = cell.getbbox()
    if bbox is None:
        return cell

    source_geometry = cell_geometry(cell)
    if source_geometry is None or source_geometry.height <= 0:
        return cell

    left, top, right, bottom = bbox
    crop = cell.crop(bbox)
    scaled_width = max(1, round(crop.width * scale))
    scaled_height = max(1, round(crop.height * scale))
    if crop.size != (scaled_width, scaled_height):
        crop = crop.resize((scaled_width, scaled_height), Image.Resampling.LANCZOS)

    local_lower_center_x = source_geometry.lower_center_x - left
    target_left = round(target.lower_center_x - local_lower_center_x * scale)
    target_top = target.bottom - scaled_height

    output = Image.new("RGBA", (CELL_WIDTH, CELL_HEIGHT), (0, 0, 0, 0))
    output.alpha_composite(crop, (target_left, target_top))
    return remove_small_detached_components(output)


def normalize_cells_to_reference(
    cells: list[Image.Image],
    reference_cell: Image.Image,
    scale: float | None = None,
) -> list[Image.Image]:
    target = cell_geometry(reference_cell)
    if target is None:
        raise SystemExit("neutral reference cell must contain visible pixels")

    if scale is None:
        scale = normalization_scale(cells, target)
    return [normalize_cell_to_geometry(cell, target, scale) for cell in cells]


def normalization_scale(cells: list[Image.Image], target: CellGeometry) -> float:

    geometries = [cell_geometry(cell) for cell in cells]
    if any(geometry is None for geometry in geometries):
        raise SystemExit("look direction cells must contain visible pixels")

    visible_geometries = [geometry for geometry in geometries if geometry is not None]
    max_height = max(geometry.height for geometry in visible_geometries)
    max_width = max(cell.getbbox()[2] - cell.getbbox()[0] for cell in cells)
    scale_limits = [
        target.height / max_height,
        (CELL_WIDTH - 10) / max_width,
        (CELL_HEIGHT - 10) / max_height,
        1.0,
    ]
    margin = 5
    for cell, geometry in zip(cells, geometries):
        if geometry is None:
            continue
        left, _, right, _ = cell.getbbox()
        local_lower_center_x = geometry.lower_center_x - left
        left_extent = local_lower_center_x
        right_extent = right - left - local_lower_center_x
        if left_extent > 0:
            scale_limits.append((target.lower_center_x - margin) / left_extent)
        if right_extent > 0:
            scale_limits.append((CELL_WIDTH - margin - target.lower_center_x) / right_extent)
        scale_limits.append((target.bottom - margin) / geometry.height)
    return min(scale_limits)


def load_base_rows(base_atlas_path: Path) -> Image.Image:
    with Image.open(base_atlas_path) as opened:
        base = opened.convert("RGBA")
    if base.width != ATLAS_WIDTH or base.height not in {
        STANDARD_ATLAS_HEIGHT,
        EXTENDED_ATLAS_HEIGHT,
    }:
        raise SystemExit(
            f"base atlas must be 1536x1872 or 1536x2288; got {base.width}x{base.height}"
        )

    extended = Image.new("RGBA", (ATLAS_WIDTH, EXTENDED_ATLAS_HEIGHT), (0, 0, 0, 0))
    standard_region = base.crop((0, 0, ATLAS_WIDTH, STANDARD_ATLAS_HEIGHT))
    extended.alpha_composite(standard_region, (0, 0))
    return extended


def extract_row_strip_cells(
    row_strip_path: Path,
    chroma_key: tuple[int, int, int],
    threshold: float,
) -> list[Image.Image]:
    cells, _detected_mode = extract_row_strip_cells_with_mode(
        row_strip_path,
        chroma_key,
        threshold,
        "auto",
    )
    return cells


def extract_row_strip_cells_with_mode(
    row_strip_path: Path,
    chroma_key: tuple[int, int, int],
    threshold: float,
    background_mode: str,
) -> tuple[list[Image.Image], str]:
    with Image.open(row_strip_path) as opened:
        try:
            strip, detected_mode, _alpha = prepare_sprite_source(
                opened,
                chroma_key=chroma_key,
                threshold=threshold,
                background_mode=background_mode,
            )
        except ValueError as exc:
            raise SystemExit(f"{row_strip_path}: {exc}") from exc

    groups = component_frame_groups(strip, COLUMNS)
    if groups is None:
        raise SystemExit(
            f"could not identify {COLUMNS} ordered pose groups in {row_strip_path}; "
            "resynthesize the complete source row with separated poses"
        )
    return [component_group_image(strip, group) for group in groups], detected_mode


def validate_normalized_look_cells(
    cells: list[Image.Image],
    direction_offset: int,
    edge_margin: int,
    edge_pixel_threshold: int,
) -> None:
    for index, cell in enumerate(cells):
        edge_pixels = edge_alpha_count(cell, edge_margin)
        if edge_pixels > edge_pixel_threshold:
            label = LOOK_DIRECTION_LABELS[direction_offset + index]
            raise SystemExit(
                f"look direction {label} has {edge_pixels} non-transparent pixels near "
                "its final cell edge after deterministic registration; resynthesize the "
                "complete source row"
            )


def normalized_label(value: str) -> str:
    return value.lower().replace(".", "").replace("-", "").replace("_", "")


def labels_for_path(path: Path) -> list[str]:
    normalized_stem = normalized_label(path.stem)
    exact_matches = [
        label for label in LOOK_DIRECTION_LABELS if normalized_label(label) == normalized_stem
    ]
    if exact_matches:
        return exact_matches

    numeric_tokens = [float(token) for token in re.findall(r"\d+(?:\.\d+)?", path.stem)]
    return [
        label
        for label in LOOK_DIRECTION_LABELS
        if any(float(label) == token for token in numeric_tokens)
    ]


def image_files(path: Path) -> list[Path]:
    return sorted(p for p in path.iterdir() if p.suffix.lower() in IMAGE_SUFFIXES)


def load_look_cells_from_dir(
    cells_dir: Path,
    chroma_key: tuple[int, int, int],
    threshold: float,
    background_mode: str,
) -> tuple[list[Image.Image], list[str]]:
    files = image_files(cells_dir)
    cells_by_label: dict[str, Path] = {}
    for path in files:
        for label in labels_for_path(path):
            cells_by_label.setdefault(label, path)

    if len(cells_by_label) == len(LOOK_DIRECTION_LABELS):
        ordered_files = [cells_by_label[label] for label in LOOK_DIRECTION_LABELS]
    elif len(files) >= len(LOOK_DIRECTION_LABELS):
        ordered_files = files[: len(LOOK_DIRECTION_LABELS)]
    else:
        raise SystemExit(
            f"look cells dir must contain 16 labeled or sortable images; found {len(files)}"
        )

    cells: list[Image.Image] = []
    detected_modes: list[str] = []
    for path in ordered_files:
        with Image.open(path) as opened:
            try:
                cell, detected_mode, _alpha = prepare_sprite_source(
                    opened,
                    chroma_key=chroma_key,
                    threshold=threshold,
                    background_mode=background_mode,
                )
            except ValueError as exc:
                raise SystemExit(f"{path}: {exc}") from exc
        cells.append(cell)
        detected_modes.append(detected_mode)
    row_modes = [
        combined_background_mode(detected_modes[:COLUMNS]),
        combined_background_mode(detected_modes[COLUMNS:]),
    ]
    if any(mode == "mixed" for mode in row_modes):
        raise SystemExit(
            "individual look cells within one atlas row use mixed background modes; "
            "normalize each row to one transparent or chroma source mode before assembly"
        )
    return cells, row_modes


def load_look_cells(
    args: argparse.Namespace,
    chroma_key: tuple[int, int, int],
) -> tuple[list[Image.Image], list[str]]:
    if args.look_cells_dir:
        return load_look_cells_from_dir(
            Path(args.look_cells_dir).expanduser().resolve(),
            chroma_key,
            args.chroma_threshold,
            args.background_mode,
        )

    if not args.look_row_9:
        raise SystemExit("provide either --look-cells-dir or --look-row-9")

    row_9_cells, row_9_mode = extract_row_strip_cells_with_mode(
        Path(args.look_row_9).expanduser().resolve(),
        chroma_key,
        args.chroma_threshold,
        args.background_mode,
    )
    if not args.look_row_10:
        return row_9_cells, [row_9_mode]

    row_10_cells, row_10_mode = extract_row_strip_cells_with_mode(
        Path(args.look_row_10).expanduser().resolve(),
        chroma_key,
        args.chroma_threshold,
        args.background_mode,
    )
    return [*row_9_cells, *row_10_cells], [row_9_mode, row_10_mode]


def load_registered_row(path: Path) -> list[Image.Image]:
    with Image.open(path) as opened:
        row = opened.convert("RGBA")
    if row.size != (ATLAS_WIDTH, CELL_HEIGHT):
        raise SystemExit(
            f"registered row must be {ATLAS_WIDTH}x{CELL_HEIGHT}; got {row.width}x{row.height}"
        )
    return [
        row.crop(
            (
                column * CELL_WIDTH,
                0,
                (column + 1) * CELL_WIDTH,
                CELL_HEIGHT,
            )
        )
        for column in range(COLUMNS)
    ]


def load_registration(path: Path) -> tuple[float, str]:
    data = json.loads(path.read_text(encoding="utf-8"))
    scale = data.get("scale")
    if not isinstance(scale, int | float) or scale <= 0:
        raise SystemExit(f"registration manifest has invalid scale: {scale!r}")
    background_mode = data.get("background_mode", "chroma")
    if background_mode not in {"transparent", "chroma"}:
        raise SystemExit(
            f"registration manifest has invalid background mode: {background_mode!r}"
        )
    return float(scale), background_mode


def load_neutral_cell(
    neutral_cell_path: Path | None,
    atlas: Image.Image,
    chroma_key: tuple[int, int, int],
    threshold: float,
    background_mode: str,
) -> Image.Image:
    if neutral_cell_path is None:
        return base_neutral_cell(atlas)

    with Image.open(neutral_cell_path) as opened:
        try:
            neutral, _detected_mode, _alpha = prepare_sprite_source(
                opened,
                chroma_key=chroma_key,
                threshold=threshold,
                background_mode=background_mode,
            )
        except ValueError as exc:
            raise SystemExit(f"{neutral_cell_path}: {exc}") from exc
        return fit_to_cell(neutral)


def atlas_cell(atlas: Image.Image, row: int, column: int) -> Image.Image:
    return atlas.crop(
        (
            column * CELL_WIDTH,
            row * CELL_HEIGHT,
            (column + 1) * CELL_WIDTH,
            (row + 1) * CELL_HEIGHT,
        )
    )


def base_neutral_cell(atlas: Image.Image) -> Image.Image:
    for column in [6, 0, 1, 2, 3, 4, 5, 7]:
        cell = atlas_cell(atlas, 0, column)
        if cell_geometry(cell) is not None:
            return cell

    raise SystemExit("base atlas must contain a visible idle or neutral frame")


def paste_look_cells(atlas: Image.Image, cells: list[Image.Image]) -> None:
    if len(cells) != len(LOOK_DIRECTION_LABELS):
        raise SystemExit(f"expected 16 look cells, got {len(cells)}")
    for index, cell in enumerate(cells):
        row = STANDARD_ROWS + index // COLUMNS
        column = index % COLUMNS
        atlas.alpha_composite(cell, (column * CELL_WIDTH, row * CELL_HEIGHT))


def paste_neutral_cell(
    atlas: Image.Image,
    neutral: Image.Image,
) -> None:
    atlas.alpha_composite(neutral, (6 * CELL_WIDTH, 0))


def combined_background_mode(modes: list[str]) -> str:
    normalized = set(modes)
    if normalized == {"transparent"}:
        return "transparent"
    if normalized == {"chroma"}:
        return "chroma"
    return "mixed"


def write_manifest(
    path: Path,
    atlas_path: Path,
    *,
    base_background_modes: list[str],
    look_background_modes: list[str],
) -> None:
    background_mode = combined_background_mode(
        [*base_background_modes, *look_background_modes]
    )
    manifest = {
        "spritesheetPath": atlas_path.name,
        "backgroundMode": background_mode,
        "cleanupMode": (
            "native-alpha"
            if background_mode == "transparent"
            else "chroma"
            if background_mode == "chroma"
            else "mixed"
        ),
        "sourceBackgroundModes": {
            "standardRows": dict(zip(STANDARD_ROW_STATES, base_background_modes)),
            "lookRows": {
                "look-row-9": look_background_modes[0],
                "look-row-10": look_background_modes[1],
            },
        },
        "rowBackgroundModes": [*base_background_modes, *look_background_modes],
        "spritesheetLayout": {
            "columns": COLUMNS,
            "rows": EXTENDED_ROWS,
            "cellWidth": CELL_WIDTH,
            "cellHeight": CELL_HEIGHT,
            "lookDirectionCount": len(LOOK_DIRECTION_LABELS),
            "neutralLookFrame": {"rowIndex": 0, "columnIndex": 6},
        },
        "lookDirections": [
            {
                "degrees": float(label),
                "rowIndex": STANDARD_ROWS + index // COLUMNS,
                "columnIndex": index % COLUMNS,
            }
            for index, label in enumerate(LOOK_DIRECTION_LABELS)
        ],
    }
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")


def save_registered_row(cells: list[Image.Image], path: Path) -> None:
    if len(cells) != COLUMNS:
        raise SystemExit(f"expected {COLUMNS} registered look cells, got {len(cells)}")

    row = Image.new("RGBA", (ATLAS_WIDTH, CELL_HEIGHT), (0, 0, 0, 0))
    for column, cell in enumerate(cells):
        row.alpha_composite(cell, (column * CELL_WIDTH, 0))
    path.parent.mkdir(parents=True, exist_ok=True)
    clear_transparent_rgb(row).save(path)
    print(f"wrote {path}")


def write_registration_manifest(
    path: Path,
    scale: float,
    background_mode: str,
) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(
            {
                "scale": scale,
                "background_mode": background_mode,
            },
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(f"wrote {path}")


def load_base_background_modes(
    manifest_path: Path | None,
    explicit_mode: str,
) -> list[str]:
    if manifest_path is None:
        return [explicit_mode] * STANDARD_ROWS
    data = json.loads(manifest_path.read_text(encoding="utf-8"))
    rows = data.get("rows")
    if not isinstance(rows, list):
        raise SystemExit("standard frames manifest must contain a rows array")
    modes_by_state = {
        row.get("state"): row.get("background_mode")
        for row in rows
        if isinstance(row, dict)
    }
    modes = [modes_by_state.get(state) for state in STANDARD_ROW_STATES]
    invalid = [
        f"{state}={mode!r}"
        for state, mode in zip(STANDARD_ROW_STATES, modes)
        if mode not in {"transparent", "chroma"}
    ]
    if invalid:
        raise SystemExit(
            "standard frames manifest has missing or invalid row background modes: "
            + ", ".join(invalid)
        )
    return [str(mode) for mode in modes]


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base-atlas", required=True)
    source = parser.add_mutually_exclusive_group(required=True)
    source.add_argument("--look-cells-dir")
    source.add_argument("--look-row-9")
    source.add_argument("--registered-row-9")
    parser.add_argument("--look-row-10")
    parser.add_argument("--row-9-registration")
    parser.add_argument(
        "--neutral-cell",
        help="optional external neutral/default cell; defaults to the neutral cell in the base atlas",
    )
    parser.add_argument("--output")
    parser.add_argument(
        "--registered-row-output",
        help="validate and write registered row 9 before row 10 is generated",
    )
    parser.add_argument("--registration-manifest-output")
    parser.add_argument("--webp-output")
    parser.add_argument("--manifest-output")
    parser.add_argument("--chroma-key", default="#00FF00")
    parser.add_argument("--chroma-threshold", type=float, default=96.0)
    parser.add_argument(
        "--background-mode",
        choices=BACKGROUND_MODES,
        default="auto",
        help=(
            "Prefer native transparency in auto mode and fall back to chroma removal "
            "only when a source has no usable transparent canvas."
        ),
    )
    parser.add_argument(
        "--base-background-mode",
        choices=("transparent", "chroma"),
        default="chroma",
        help="Background provenance for standard rows when no frames manifest is supplied.",
    )
    parser.add_argument(
        "--base-background-manifest",
        help="Optional frames-manifest.json emitted by extract_strip_frames.py.",
    )
    parser.add_argument("--edge-margin", type=int, default=DEFAULT_EDGE_MARGIN)
    parser.add_argument(
        "--edge-pixel-threshold",
        type=int,
        default=DEFAULT_EDGE_PIXEL_THRESHOLD,
    )
    args = parser.parse_args()

    chroma_key = parse_hex_color(args.chroma_key)
    atlas = load_base_rows(Path(args.base_atlas).expanduser().resolve())
    neutral = load_neutral_cell(
        Path(args.neutral_cell).expanduser().resolve() if args.neutral_cell else None,
        atlas,
        chroma_key,
        args.chroma_threshold,
        args.background_mode,
    )
    base_background_modes = load_base_background_modes(
        (
            Path(args.base_background_manifest).expanduser().resolve()
            if args.base_background_manifest
            else None
        ),
        args.base_background_mode,
    )
    if args.registered_row_9:
        if not args.look_row_10 or not args.row_9_registration:
            raise SystemExit("--registered-row-9 requires --look-row-10 and --row-9-registration")
        row_9_cells = load_registered_row(Path(args.registered_row_9).expanduser().resolve())
        registration_scale, row_9_mode = load_registration(
            Path(args.row_9_registration).expanduser().resolve()
        )
        row_10_cells, row_10_mode = extract_row_strip_cells_with_mode(
            Path(args.look_row_10).expanduser().resolve(),
            chroma_key,
            args.chroma_threshold,
            args.background_mode,
        )
        row_10_cells = normalize_cells_to_reference(
            row_10_cells,
            neutral,
            registration_scale,
        )
        validate_normalized_look_cells(
            row_10_cells,
            COLUMNS,
            args.edge_margin,
            args.edge_pixel_threshold,
        )
        cells = [*row_9_cells, *row_10_cells]
        look_background_modes = [row_9_mode, row_10_mode]
    else:
        cells, look_background_modes = load_look_cells(args, chroma_key)
        target = cell_geometry(neutral)
        if target is None:
            raise SystemExit("neutral reference cell must contain visible pixels")
        scale = normalization_scale(cells, target)
        cells = normalize_cells_to_reference(cells, neutral, scale)
        validate_normalized_look_cells(
            cells,
            0,
            args.edge_margin,
            args.edge_pixel_threshold,
        )

    if not args.look_cells_dir and not args.look_row_10:
        if not args.registered_row_output:
            raise SystemExit("--look-row-9 without --look-row-10 requires --registered-row-output")
        save_registered_row(
            cells,
            Path(args.registered_row_output).expanduser().resolve(),
        )
        if not args.registration_manifest_output:
            raise SystemExit("--registered-row-output requires --registration-manifest-output")
        write_registration_manifest(
            Path(args.registration_manifest_output).expanduser().resolve(),
            scale,
            look_background_modes[0],
        )
        return

    if not args.output:
        raise SystemExit("--output is required when assembling the extended atlas")

    paste_look_cells(atlas, cells)
    paste_neutral_cell(atlas, neutral)
    atlas = clear_transparent_rgb(atlas)

    output = Path(args.output).expanduser().resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    atlas.save(output)
    print(f"wrote {output}")

    if args.webp_output:
        webp_output = Path(args.webp_output).expanduser().resolve()
        webp_output.parent.mkdir(parents=True, exist_ok=True)
        atlas.save(webp_output, format="WEBP", lossless=True, quality=100, method=6, exact=True)
        print(f"wrote {webp_output}")

    if args.manifest_output:
        manifest_output = Path(args.manifest_output).expanduser().resolve()
        write_manifest(
            manifest_output,
            Path(args.webp_output or args.output).expanduser().resolve(),
            base_background_modes=base_background_modes,
            look_background_modes=look_background_modes,
        )
        print(f"wrote {manifest_output}")


if __name__ == "__main__":
    main()
