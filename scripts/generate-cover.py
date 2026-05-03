#!/usr/bin/env python3
"""Generate the README cover image from repository assets."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


def load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def rounded_rect(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], radius: int, fill: str) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill)


def main() -> None:
    repo = Path(__file__).resolve().parents[1]
    output = repo / "assets" / "cover" / "awesome-codex-pet-cover.png"
    output.parent.mkdir(parents=True, exist_ok=True)
    pet_count = len([path for path in (repo / "pets").iterdir() if path.is_dir() and not path.name.startswith(".")])

    width, height = 1400, 520
    image = Image.new("RGB", (width, height), "#101418")
    draw = ImageDraw.Draw(image)

    for y in range(height):
        color = (
            16 + y // 32,
            20 + y // 26,
            24 + y // 22,
        )
        draw.line((0, y, width, y), fill=color)

    title_font = load_font(70)
    subtitle_font = load_font(30)
    small_font = load_font(22)

    draw.text((70, 72), "Awesome Codex Pet", font=title_font, fill="#f6f2e8")
    draw.text(
        (74, 166),
        "Community-made Codex companions, one-command install, generated action previews.",
        font=subtitle_font,
        fill="#d6e7df",
    )

    pills = [f"{pet_count} pet" if pet_count == 1 else f"{pet_count} pets", "5 categories", "en / zh-CN", "GIF previews", "npm install"]
    x = 74
    for pill in pills:
        text_box = draw.textbbox((0, 0), pill, font=small_font)
        pill_w = text_box[2] - text_box[0] + 34
        rounded_rect(draw, (x, 236, x + pill_w, 282), 18, "#26332f")
        draw.text((x + 17, 247), pill, font=small_font, fill="#bdf5d4")
        x += pill_w + 14

    card_x, card_y = 900, 62
    rounded_rect(draw, (card_x, card_y, 1328, 458), 26, "#f4f5ef")
    rounded_rect(draw, (card_x + 18, card_y + 18, 1310, 440), 18, "#dfe5df")

    sprite_path = repo / "pets" / "mikoto--lingxiaotian" / "spritesheet.webp"
    if sprite_path.exists():
        with Image.open(sprite_path).convert("RGBA") as atlas:
            states = [(0, 0), (3, 1), (7, 2)]
            positions = [(952, 126), (1088, 126), (1020, 260)]
            for (row, col), pos in zip(states, positions):
                frame = atlas.crop((col * 192, row * 208, (col + 1) * 192, (row + 1) * 208))
                frame = frame.resize((154, 166), Image.Resampling.NEAREST)
                shadow = Image.new("RGBA", frame.size, (0, 0, 0, 0))
                shadow_draw = ImageDraw.Draw(shadow)
                shadow_draw.ellipse((34, 145, 120, 162), fill=(0, 0, 0, 48))
                image.paste(shadow, pos, shadow)
                image.paste(frame, pos, frame)

    draw.text((74, 392), "pets/<pet-slug>--<author-slug>  ->  ~/.codex/pets/<pet-id>/", font=small_font, fill="#9eb7ac")
    image.save(output)
    print(f"wrote {output}")


if __name__ == "__main__":
    main()
