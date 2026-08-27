#!/usr/bin/env python3
"""Normalize generated sprite backgrounds while preserving native alpha."""

from __future__ import annotations

import json
import math
from pathlib import Path

from PIL import Image

BACKGROUND_MODES = ("auto", "transparent", "chroma")
ALPHA_THRESHOLD = 16
MIN_TRANSPARENT_RATIO = 0.01
MIN_TRANSPARENT_PIXELS = 64
MIN_VISIBLE_PIXELS = 64


def color_distance(
    red: int,
    green: int,
    blue: int,
    key: tuple[int, int, int],
) -> float:
    return math.sqrt(
        (red - key[0]) ** 2
        + (green - key[1]) ** 2
        + (blue - key[2]) ** 2
    )


def clear_transparent_rgb(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    data = bytearray(rgba.tobytes())
    for index in range(0, len(data), 4):
        if data[index + 3] == 0:
            data[index] = 0
            data[index + 1] = 0
            data[index + 2] = 0
    return Image.frombytes("RGBA", rgba.size, bytes(data))


def alpha_profile(image: Image.Image) -> dict[str, int | float | bool]:
    has_alpha_channel = "A" in image.getbands()
    if not has_alpha_channel:
        total = image.width * image.height
        return {
            "has_alpha_channel": False,
            "transparent_pixels": 0,
            "visible_pixels": total,
            "transparent_ratio": 0.0,
            "transparent_border_pixels": 0,
            "border_pixels": max(1, image.width * 2 + image.height * 2 - 4),
        }

    alpha = image.getchannel("A")
    histogram = alpha.histogram()
    transparent_pixels = sum(histogram[: ALPHA_THRESHOLD + 1])
    visible_pixels = sum(histogram[ALPHA_THRESHOLD + 1 :])
    total = max(1, transparent_pixels + visible_pixels)
    border_values = [
        *alpha.crop((0, 0, image.width, 1)).tobytes(),
        *alpha.crop((0, image.height - 1, image.width, image.height)).tobytes(),
        *alpha.crop((0, 1, 1, max(1, image.height - 1))).tobytes(),
        *alpha.crop(
            (image.width - 1, 1, image.width, max(1, image.height - 1))
        ).tobytes(),
    ]
    return {
        "has_alpha_channel": True,
        "transparent_pixels": transparent_pixels,
        "visible_pixels": visible_pixels,
        "transparent_ratio": transparent_pixels / total,
        "transparent_border_pixels": sum(
            value <= ALPHA_THRESHOLD for value in border_values
        ),
        "border_pixels": len(border_values),
    }


def has_usable_transparency(image: Image.Image) -> bool:
    profile = alpha_profile(image)
    return bool(
        profile["has_alpha_channel"]
        and profile["transparent_pixels"] >= MIN_TRANSPARENT_PIXELS
        and profile["visible_pixels"] >= MIN_VISIBLE_PIXELS
        and profile["transparent_ratio"] >= MIN_TRANSPARENT_RATIO
        and profile["transparent_border_pixels"] >= max(
            4,
            int(profile["border_pixels"] * 0.1),
        )
    )


def remove_chroma_background(
    image: Image.Image,
    chroma_key: tuple[int, int, int],
    threshold: float,
) -> Image.Image:
    rgba = image.convert("RGBA")
    pixels = rgba.load()
    for y in range(rgba.height):
        for x in range(rgba.width):
            red, green, blue, alpha = pixels[x, y]
            if color_distance(red, green, blue, chroma_key) <= threshold:
                pixels[x, y] = (0, 0, 0, 0)
            elif alpha == 0:
                pixels[x, y] = (0, 0, 0, 0)
    return rgba


def prepare_sprite_source(
    image: Image.Image,
    *,
    chroma_key: tuple[int, int, int],
    threshold: float,
    background_mode: str = "auto",
) -> tuple[Image.Image, str, dict[str, int | float | bool]]:
    if background_mode not in BACKGROUND_MODES:
        raise ValueError(
            f"invalid background mode: {background_mode}; "
            f"expected one of {', '.join(BACKGROUND_MODES)}"
        )

    profile = alpha_profile(image)
    detected_mode = background_mode
    if background_mode == "auto":
        detected_mode = "transparent" if has_usable_transparency(image) else "chroma"
    elif background_mode == "transparent" and not has_usable_transparency(image):
        raise ValueError(
            "transparent background mode requires a real alpha channel with "
            "both visible sprite pixels and transparent canvas pixels"
        )

    if detected_mode == "transparent":
        return clear_transparent_rgb(image), detected_mode, profile
    return (
        remove_chroma_background(image, chroma_key, threshold),
        detected_mode,
        profile,
    )


def load_row_background_modes(
    manifest_path: Path,
    *,
    expected_rows: int,
) -> list[str]:
    data = json.loads(manifest_path.read_text(encoding="utf-8"))
    modes = data.get("rowBackgroundModes")
    if (
        not isinstance(modes, list)
        or len(modes) != expected_rows
        or any(mode not in {"transparent", "chroma"} for mode in modes)
    ):
        raise ValueError(
            "background manifest must contain rowBackgroundModes with exactly "
            f"{expected_rows} transparent/chroma entries"
        )
    return [str(mode) for mode in modes]
