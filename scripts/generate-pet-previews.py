#!/usr/bin/env python3
"""Generate contact sheets and action GIFs from Codex pet spritesheets."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

COLUMNS = 8
ROWS = 9
CELL_WIDTH = 192
CELL_HEIGHT = 208
GIF_SCALE = 2
GIF_SIZE = (CELL_WIDTH * GIF_SCALE, CELL_HEIGHT * GIF_SCALE)
LABEL_HEIGHT = 22

STATES = [
    ("idle", 0, [280, 110, 110, 140, 140, 320]),
    ("running-right", 1, [120, 120, 120, 120, 120, 120, 120, 220]),
    ("running-left", 2, [120, 120, 120, 120, 120, 120, 120, 220]),
    ("waving", 3, [140, 140, 140, 280]),
    ("jumping", 4, [140, 140, 140, 140, 280]),
    ("failed", 5, [140, 140, 140, 140, 140, 140, 140, 240]),
    ("waiting", 6, [150, 150, 150, 150, 150, 260]),
    ("running", 7, [120, 120, 120, 120, 120, 220]),
    ("review", 8, [150, 150, 150, 150, 150, 280]),
]


def checker(size: tuple[int, int], square: int = 16) -> Image.Image:
    image = Image.new("RGB", size, "#ffffff")
    draw = ImageDraw.Draw(image)
    for y in range(0, size[1], square):
        for x in range(0, size[0], square):
            if (x // square + y // square) % 2:
                draw.rectangle((x, y, x + square - 1, y + square - 1), fill="#e8e8e8")
    return image


def frame_with_background(atlas: Image.Image, row: int, column: int) -> Image.Image:
    frame = atlas.crop(
        (
            column * CELL_WIDTH,
            row * CELL_HEIGHT,
            (column + 1) * CELL_WIDTH,
            (row + 1) * CELL_HEIGHT,
        )
    ).convert("RGBA")
    background = checker((CELL_WIDTH, CELL_HEIGHT))
    background.paste(frame, (0, 0), frame)
    return background


def make_contact_sheet(atlas: Image.Image, output: Path, scale: float = 0.5) -> None:
    cell_w = max(1, round(CELL_WIDTH * scale))
    cell_h = max(1, round(CELL_HEIGHT * scale))
    width = COLUMNS * cell_w
    height = ROWS * (cell_h + LABEL_HEIGHT)
    sheet = Image.new("RGB", (width, height), "#f7f7f7")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()

    for state, row, durations in STATES:
        y = row * (cell_h + LABEL_HEIGHT)
        draw.rectangle((0, y, width, y + LABEL_HEIGHT - 1), fill="#111111")
        draw.text((6, y + 5), f"row {row}: {state}", fill="#ffffff", font=font)
        draw.text((width - 92, y + 5), f"{len(durations)} frames", fill="#ffffff", font=font)

        for column in range(COLUMNS):
            frame = frame_with_background(atlas, row, column)
            frame = frame.resize((cell_w, cell_h), Image.Resampling.LANCZOS)
            x = column * cell_w
            sheet.paste(frame, (x, y + LABEL_HEIGHT))
            outline = "#18a058" if column < len(durations) else "#cc3344"
            draw.rectangle(
                (x, y + LABEL_HEIGHT, x + cell_w - 1, y + LABEL_HEIGHT + cell_h - 1),
                outline=outline,
            )
            draw.text((x + 4, y + LABEL_HEIGHT + 4), str(column), fill="#111111", font=font)

    output.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(output)


def make_gif(atlas: Image.Image, state: str, row: int, durations: list[int], output: Path) -> None:
    frames = [frame_with_background(atlas, row, column) for column in range(len(durations))]
    frames = [frame.resize(GIF_SIZE, Image.Resampling.NEAREST) for frame in frames]
    output.parent.mkdir(parents=True, exist_ok=True)
    frames[0].save(
        output,
        save_all=True,
        append_images=frames[1:],
        duration=durations,
        loop=0,
        optimize=False,
        disposal=2,
    )
    with Image.open(output) as generated:
        if generated.size != GIF_SIZE:
            raise ValueError(f"{output} must be {GIF_SIZE[0]}x{GIF_SIZE[1]}, got {generated.size[0]}x{generated.size[1]}")


def generate_for_pet(pet_dir: Path) -> None:
    spritesheet = pet_dir / "spritesheet.webp"
    if not spritesheet.exists():
        return

    with Image.open(spritesheet) as opened:
        atlas = opened.convert("RGBA")

    expected_size = (COLUMNS * CELL_WIDTH, ROWS * CELL_HEIGHT)
    if atlas.size != expected_size:
        raise ValueError(f"{spritesheet} must be {expected_size[0]}x{expected_size[1]}, got {atlas.size[0]}x{atlas.size[1]}")

    repo_root = Path(__file__).resolve().parents[1]
    preview_dir = repo_root / "assets" / "previews" / pet_dir.name
    make_contact_sheet(atlas, preview_dir / "contact-sheet.png")
    for state, row, durations in STATES:
        make_gif(atlas, state, row, durations, preview_dir / "gifs" / f"{state}.gif")

    print(f"generated previews for {pet_dir.name}")


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    pets_dir = repo_root / "pets"
    for pet_dir in sorted(pets_dir.iterdir()):
        if pet_dir.is_dir() and not pet_dir.name.startswith("."):
            generate_for_pet(pet_dir)


if __name__ == "__main__":
    main()
