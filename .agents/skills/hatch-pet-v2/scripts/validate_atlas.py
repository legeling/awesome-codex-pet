#!/usr/bin/env python3
"""Validate a Codex pet spritesheet atlas."""

from __future__ import annotations

import argparse
import json
import math
import re
from collections import defaultdict
from pathlib import Path

from PIL import Image, ImageFilter

from background_utils import load_row_background_modes

COLUMNS = 8
ROWS = 9
EXTENDED_ROWS = 11
CELL_WIDTH = 192
CELL_HEIGHT = 208
ATLAS_WIDTH = COLUMNS * CELL_WIDTH
ATLAS_HEIGHT = ROWS * CELL_HEIGHT
EXTENDED_ATLAS_HEIGHT = EXTENDED_ROWS * CELL_HEIGHT
ROW_BY_INDEX = {
    0: ("idle", 6),
    1: ("running-right", 8),
    2: ("running-left", 8),
    3: ("waving", 4),
    4: ("jumping", 5),
    5: ("failed", 8),
    6: ("waiting", 6),
    7: ("running", 6),
    8: ("review", 6),
    9: ("look-000-to-157.5", 8),
    10: ("look-180-to-337.5", 8),
}
EXTENDED_NEUTRAL_LOOK_FRAME = (0, 6)


def parse_hex_color(value: str) -> tuple[int, int, int]:
    if not re.fullmatch(r"#[0-9a-fA-F]{6}", value):
        raise SystemExit(f"invalid chroma key color: {value}; expected #RRGGBB")
    return tuple(int(value[index : index + 2], 16) for index in (1, 3, 5))


def alpha_nonzero_count(image: Image.Image) -> int:
    alpha = image.getchannel("A")
    return sum(alpha.histogram()[1:])


def transparent_rgb_residue_count(image: Image.Image) -> int:
    rgba = image.convert("RGBA")
    data = rgba.tobytes()
    count = 0
    for index in range(0, len(data), 4):
        red, green, blue, alpha = data[index : index + 4]
        if alpha == 0 and (red or green or blue):
            count += 1
    return count


def color_distance(
    red: int,
    green: int,
    blue: int,
    key: tuple[int, int, int],
) -> float:
    return math.sqrt((red - key[0]) ** 2 + (green - key[1]) ** 2 + (blue - key[2]) ** 2)


def opaque_chroma_key_count(
    image: Image.Image,
    chroma_key: tuple[int, int, int],
    threshold: float,
) -> int:
    rgba = image.convert("RGBA")
    data = rgba.tobytes()
    count = 0
    for index in range(0, len(data), 4):
        red, green, blue, alpha = data[index : index + 4]
        if alpha > 16 and color_distance(red, green, blue, chroma_key) <= threshold:
            count += 1
    return count


def is_chroma_contaminated(
    color: tuple[int, int, int],
    chroma_key: tuple[int, int, int],
    distance_threshold: float,
) -> bool:
    return color_distance(*color, chroma_key) <= distance_threshold


def chroma_fringe_count(
    image: Image.Image,
    *,
    chroma_key: tuple[int, int, int],
    distance_threshold: float,
    edge_radius: int,
    alpha_minimum: int,
) -> int:
    rgba = image.convert("RGBA")
    alpha = rgba.getchannel("A")
    visible = [value > 0 for value in alpha.getdata()]
    transparent = Image.new("L", alpha.size)
    transparent.putdata([255 if not value else 0 for value in visible])
    expanded = transparent.filter(ImageFilter.MaxFilter(edge_radius * 2 + 1))
    return sum(
        alpha_value >= alpha_minimum
        and nearby_transparency > 0
        and is_chroma_contaminated(
            color[:3],
            chroma_key,
            distance_threshold,
        )
        for color, alpha_value, nearby_transparency in zip(
            rgba.getdata(), alpha.getdata(), expanded.getdata()
        )
    )


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("atlas")
    parser.add_argument("--json-out")
    parser.add_argument("--min-used-pixels", type=int, default=50)
    parser.add_argument("--near-opaque-threshold", type=float, default=0.95)
    parser.add_argument(
        "--chroma-key",
        help=(
            "Enable legacy chroma leak/fringe checks for the supplied fallback key. "
            "Omit for an all-native-alpha atlas."
        ),
    )
    parser.add_argument(
        "--background-manifest",
        help=(
            "Optional final atlas manifest with rowBackgroundModes. Chroma checks "
            "then apply only to rows that used the fallback."
        ),
    )
    parser.add_argument("--chroma-leak-threshold", type=float, default=36.0)
    parser.add_argument("--max-chroma-leak-pixels", type=int, default=400)
    parser.add_argument("--chroma-fringe-threshold", type=float, default=96.0)
    parser.add_argument("--chroma-fringe-edge-radius", type=int, default=2)
    parser.add_argument("--chroma-fringe-alpha-minimum", type=int, default=16)
    parser.add_argument("--max-chroma-fringe-pixels", type=int, default=0)
    parser.add_argument("--allow-opaque", action="store_true")
    parser.add_argument("--allow-near-opaque-used-cells", action="store_true")
    parser.add_argument("--allow-chroma-leak", action="store_true")
    parser.add_argument("--allow-chroma-fringe", action="store_true")
    parser.add_argument("--require-v2", action="store_true")
    args = parser.parse_args()

    atlas_path = Path(args.atlas).expanduser().resolve()
    chroma_key = parse_hex_color(args.chroma_key) if args.chroma_key else None
    errors: list[str] = []
    warnings: list[str] = []
    near_opaque_used_cells: dict[str, list[int]] = defaultdict(list)
    cells: list[dict[str, object]] = []

    try:
        with Image.open(atlas_path) as opened:
            source_mode = opened.mode
            source_format = opened.format
            image = opened.convert("RGBA")
    except Exception as exc:  # noqa: BLE001
        result = {"ok": False, "errors": [f"could not open atlas: {exc}"], "warnings": []}
        print(json.dumps(result, indent=2))
        raise SystemExit(1) from exc

    expected_heights = (
        {EXTENDED_ATLAS_HEIGHT}
        if args.require_v2
        else {
            ATLAS_HEIGHT,
            EXTENDED_ATLAS_HEIGHT,
        }
    )
    if image.width != ATLAS_WIDTH or image.height not in expected_heights:
        expected = (
            f"{ATLAS_WIDTH}x{EXTENDED_ATLAS_HEIGHT} for a v2 pet"
            if args.require_v2
            else f"{ATLAS_WIDTH}x{ATLAS_HEIGHT} or {ATLAS_WIDTH}x{EXTENDED_ATLAS_HEIGHT}"
        )
        errors.append(f"expected {expected}, got {image.width}x{image.height}")

    if source_format not in {"PNG", "WEBP"}:
        errors.append(f"expected PNG or WebP, got {source_format}")

    if "A" not in source_mode and not args.allow_opaque:
        errors.append("atlas does not have an alpha channel")

    row_count = image.height // CELL_HEIGHT
    is_extended_atlas = image.height == EXTENDED_ATLAS_HEIGHT
    if args.background_manifest:
        try:
            row_background_modes = load_row_background_modes(
                Path(args.background_manifest).expanduser().resolve(),
                expected_rows=row_count,
            )
        except ValueError as exc:
            errors.append(str(exc))
            row_background_modes = [
                "chroma" if chroma_key is not None else "transparent"
            ] * row_count
    else:
        row_background_modes = [
            "chroma" if chroma_key is not None else "transparent"
        ] * row_count
    if chroma_key is None and "chroma" in row_background_modes:
        errors.append(
            "background manifest contains chroma rows but no --chroma-key was supplied"
        )

    for row_index in range(row_count):
        state, frame_count = ROW_BY_INDEX[row_index]
        row_uses_chroma = row_background_modes[row_index] == "chroma"
        for column_index in range(COLUMNS):
            left = column_index * CELL_WIDTH
            top = row_index * CELL_HEIGHT
            cell = image.crop((left, top, left + CELL_WIDTH, top + CELL_HEIGHT))
            nontransparent = alpha_nonzero_count(cell)
            used = column_index < frame_count or (
                is_extended_atlas and (row_index, column_index) == EXTENDED_NEUTRAL_LOOK_FRAME
            )
            cell_info = {
                "state": state,
                "row": row_index,
                "column": column_index,
                "used": used,
                "nontransparent_pixels": nontransparent,
            }
            chroma_leak_pixels = (
                opaque_chroma_key_count(
                    cell,
                    chroma_key,
                    args.chroma_leak_threshold,
                )
                if chroma_key is not None and row_uses_chroma
                else 0
            )
            cell_info["opaque_chroma_key_pixels"] = chroma_leak_pixels
            chroma_fringe_pixels = (
                chroma_fringe_count(
                    cell,
                    chroma_key=chroma_key,
                    distance_threshold=args.chroma_fringe_threshold,
                    edge_radius=args.chroma_fringe_edge_radius,
                    alpha_minimum=args.chroma_fringe_alpha_minimum,
                )
                if chroma_key is not None and row_uses_chroma
                else 0
            )
            cell_info["chroma_fringe_pixels"] = chroma_fringe_pixels
            cells.append(cell_info)
            if used and nontransparent < args.min_used_pixels:
                errors.append(
                    f"{state} row {row_index} column {column_index} is empty or too sparse ({nontransparent} pixels)"
                )
            if (
                used
                and chroma_key is not None
                and row_uses_chroma
                and chroma_leak_pixels > args.max_chroma_leak_pixels
            ):
                message = (
                    f"{state} row {row_index} column {column_index} has {chroma_leak_pixels} "
                    f"opaque pixels near chroma key {args.chroma_key}; this usually means "
                    "the sprite background was not removed"
                )
                if args.allow_chroma_leak:
                    warnings.append(message)
                else:
                    errors.append(message)
            if (
                used
                and chroma_key is not None
                and row_uses_chroma
                and chroma_fringe_pixels > args.max_chroma_fringe_pixels
            ):
                message = (
                    f"{state} row {row_index} column {column_index} has {chroma_fringe_pixels} "
                    f"visible edge pixels contaminated by chroma key {args.chroma_key}"
                )
                if args.allow_chroma_fringe:
                    warnings.append(message)
                else:
                    errors.append(message)
            if used and nontransparent > CELL_WIDTH * CELL_HEIGHT * args.near_opaque_threshold:
                near_opaque_used_cells[f"{state} row {row_index}"].append(column_index)
            if not used and nontransparent != 0:
                errors.append(
                    f"{state} row {row_index} unused column {column_index} is not transparent ({nontransparent} pixels)"
                )

    for row_label, columns in near_opaque_used_cells.items():
        message = (
            f"{row_label} has {len(columns)} nearly opaque used cells; "
            "this usually means the sprite has a non-transparent background"
        )
        if args.allow_near_opaque_used_cells:
            warnings.append(message)
        else:
            errors.append(message)

    alpha_count = alpha_nonzero_count(image)
    if alpha_count == ATLAS_WIDTH * ATLAS_HEIGHT:
        message = "atlas is fully opaque; custom pets require a transparent sprite background"
        if args.allow_opaque:
            warnings.append(message)
        else:
            errors.append(message)

    transparent_rgb_residue = transparent_rgb_residue_count(image)
    if transparent_rgb_residue:
        errors.append(
            f"atlas has {transparent_rgb_residue} fully transparent pixels with non-zero RGB residue"
        )

    result = {
        "ok": not errors,
        "file": str(atlas_path),
        "format": source_format,
        "mode": source_mode,
        "columns": COLUMNS,
        "rows": row_count,
        "sprite_version_number": 2 if is_extended_atlas else 1,
        "width": image.width,
        "height": image.height,
        "chroma_key": args.chroma_key.upper() if args.chroma_key else None,
        "row_background_modes": row_background_modes,
        "transparent_rgb_residue_pixels": transparent_rgb_residue,
        "errors": errors,
        "warnings": warnings,
        "cells": cells,
    }

    if args.json_out:
        Path(args.json_out).expanduser().resolve().write_text(
            json.dumps(result, indent=2) + "\n", encoding="utf-8"
        )

    print(json.dumps({k: v for k, v in result.items() if k != "cells"}, indent=2))
    raise SystemExit(0 if result["ok"] else 1)


if __name__ == "__main__":
    main()
