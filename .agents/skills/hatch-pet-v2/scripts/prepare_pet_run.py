#!/usr/bin/env python3
"""Create a Codex pet run folder, prompts, and imagegen job manifest."""

from __future__ import annotations

import argparse
import json
import math
import re
import shutil
from datetime import datetime, timezone
from pathlib import Path

from PIL import Image, ImageDraw

ATLAS = {"columns": 8, "rows": 11, "cell_width": 192, "cell_height": 208}
ATLAS["width"] = ATLAS["columns"] * ATLAS["cell_width"]
ATLAS["height"] = ATLAS["rows"] * ATLAS["cell_height"]

ROWS = [
    ("idle", 0, 6, "calm resting, breathing, and blinking loop"),
    ("running-right", 1, 8, "rightward drag movement loop"),
    ("running-left", 2, 8, "leftward drag movement loop"),
    ("waving", 3, 4, "greeting or attention gesture"),
    ("jumping", 4, 5, "hover or playful jump"),
    ("failed", 5, 8, "blocked, failed, or cancelled reaction"),
    ("waiting", 6, 6, "waiting for approval, help, or user input"),
    ("running", 7, 6, "active task work or processing"),
    ("review", 8, 6, "ready or completed output review"),
]

LOOK_ROWS = [
    (
        "look-row-9",
        9,
        ["000", "022.5", "045", "067.5", "090", "112.5", "135", "157.5"],
        "clockwise look directions from up through down-right",
    ),
    (
        "look-row-10",
        10,
        ["180", "202.5", "225", "247.5", "270", "292.5", "315", "337.5"],
        "clockwise look directions from down through up-left",
    ),
]

LOOK_CARDINALS = [
    ("000", "up"),
    ("090", "right"),
    ("180", "down"),
    ("270", "left"),
]

STATE_PROMPTS = {
    "idle": "Calm low-distraction resting loop: subtle breathing, tiny blink, slight head/body bob, and only quiet persona-preserving motion.",
    "running-right": "Dragging-right loop: show directional movement to the right through body and limb poses only.",
    "running-left": "Dragging-left loop: show directional movement to the left through body and limb poses only.",
    "waving": "Greeting loop: paw or limb down, raised, tilted, and returning in a friendly attention gesture.",
    "jumping": "Hover jump loop: anticipation, lift, airborne peak, descent, and settle through body height.",
    "failed": "Blocked/failed loop: slumped or deflated reaction with sad or closed eyes.",
    "waiting": "Needs-input loop: expectant asking pose for approval, help, or user input.",
    "running": "Working loop: focused active-task processing, thinking, typing, scanning, or effortful concentration; not literal foot-running, jogging, sprinting, treadmill motion, raised knees, long steps, pumping arms, or directional travel.",
    "review": "Ready-review loop: focused inspection of completed output with lean, blink, narrowed eyes, head tilt, or paw pose.",
}

STATE_REQUIREMENTS = {
    "idle": [
        "CRITICAL: idle is the low-distraction baseline state and the first frame is also used as the reduced-motion static pet.",
        "Use only subtle idle motion: gentle breathing, a tiny blink, a slight head or body bob, a very small material sway, or another quiet motion that fits the pet persona.",
        "Keep the pet essentially in the same pose, facing direction, silhouette, markings, palette, and prop state across all 6 frames.",
        "Idle variation must stay calm but still read as animation; do not repeat effectively identical copies across the loop.",
        "Do not show waving, walking, running, jumping, talking, working, reviewing, emotional reactions, large gestures, item interactions, or new props.",
        "Feet, base, body, or object anchor should remain planted or nearly planted.",
        "The first and last frames should be very close visually so the loop feels calm and does not pop.",
    ],
    "waving": [
        "Show the greeting through paw, hand, wing, or limb pose only.",
        "Do not draw wave marks, motion arcs, lines, sparkles, symbols, or floating effects around the gesture.",
    ],
    "jumping": [
        "Show the jump through pose and vertical body position only: anticipation, lift, airborne peak, descent, settle.",
        "Do not draw ground shadows, contact shadows, drop shadows, oval shadows, landing marks, dust, smears, bounce pads, or motion marks under the pet.",
        "Keep the canvas outside the pet fully transparent, or perfectly flat fallback chroma when native alpha is unavailable.",
    ],
    "failed": [
        "Show failure through slumped pose, drooping ears/limbs, closed or sad eyes, and lower body position.",
        "Tears, small smoke puffs, or tiny stars are allowed only if attached to or overlapping the pet silhouette and kept inside the same frame slot.",
        "Do not draw red X marks, floating symbols, detached stars, separated smoke clouds, falling tear drops, dust, or other loose effects.",
    ],
    "waiting": [
        "Show that Codex needs approval, help, or user input through an expectant asking pose.",
        "Keep the motion patient and readable, without turning it into ordinary idle or review.",
    ],
    "running": [
        "Show the pet actively working or processing, as if running a task: focused posture, busy hands or paws, purposeful bobbing, thinking motion, tool or prop motion only if already part of the pet identity, or other non-locomotion activity.",
        "Do not show literal foot-running, jogging, sprinting, treadmill motion, raised knees, long steps, pumping arms, directional travel, speed lines, dust clouds, floor shadows, motion trails, or detached motion effects.",
    ],
    "review": [
        "Show review through lean, blink, narrowed eyes, head tilt, or paw/hand position.",
        "Do not add magnifying glasses, papers, code, UI, punctuation, symbols, or other new props unless they already exist in the base pet identity.",
    ],
    "running-right": [
        "Show directional drag movement to the right through body, limb, and prop movement only.",
        "The row must unmistakably face and travel right.",
        "The movement cadence must alternate visibly across the 8 frames instead of repeating one nearly static stride.",
        "Do not draw speed lines, dust clouds, floor shadows, motion trails, or detached motion effects.",
    ],
    "running-left": [
        "Show directional drag movement to the left through body, limb, and prop movement only.",
        "The row must unmistakably face and travel left.",
        "The movement cadence must alternate visibly across the 8 frames instead of repeating one nearly static stride.",
        "Do not draw speed lines, dust clouds, floor shadows, motion trails, or detached motion effects.",
    ],
}

NON_DERIVABLE_STATES = {
    "waving",
    "jumping",
    "failed",
    "waiting",
    "running",
    "review",
}

PET_SAFE_STYLE = (
    "Pet-safe sprite: compact full-body mascot, readable in a 192x208 cell, "
    "clear silhouette, simple face, stable palette/materials, and crisp edges "
    "for clean alpha extraction."
)

STYLE_PRESETS = {
    "auto": (
        "Infer the most appropriate pet-safe style from the user request and "
        "reference images, then keep that exact style consistent across every row."
    ),
    "pixel": (
        "Pixel-art-adjacent digital mascot with a chunky silhouette, simple dark "
        "outline, limited palette, flat cel shading, and visible stepped edges."
    ),
    "plush": (
        "Soft plush toy mascot with rounded stitched forms, fuzzy fabric feel, "
        "simple sewn details, and readable toy-like proportions."
    ),
    "clay": (
        "Handmade clay or polymer-clay mascot with rounded sculpted forms, soft "
        "material texture, simple features, and clean readable edges."
    ),
    "sticker": (
        "Polished sticker mascot with bold clean shapes, crisp outline, flat "
        "colors, and minimal highlight detail."
    ),
    "flat-vector": (
        "Flat vector-style mascot with simple geometric forms, crisp color areas, "
        "clean outline, and minimal shading."
    ),
    "3d-toy": (
        "Stylized 3D toy mascot with smooth rounded forms, simple materials, "
        "clear silhouette, and no photoreal complexity."
    ),
    "painterly": (
        "Painterly mascot with simplified brush texture, readable forms, stable "
        "palette, and enough edge clarity for clean extraction."
    ),
    "brand-inspired": (
        "Brand-inspired mascot using approved public or user-provided brand cues "
        "such as colors, mascot themes, and vibe while avoiding readable text or "
        "logo copying unless explicitly approved."
    ),
}

CHROMA_KEY_CANDIDATES = [
    ("magenta", "#FF00FF"),
    ("cyan", "#00FFFF"),
    ("yellow", "#FFFF00"),
    ("blue", "#0000FF"),
    ("orange", "#FF7F00"),
    ("green", "#00FF00"),
]

DEFAULT_PET_NAME = "Sprout"
CANONICAL_BASE_PATH = "references/canonical-base.png"
BRAND_DISCOVERY_PATH = "references/brand-discovery.md"
LAYOUT_GUIDE_DIR = "references/layout-guides"
LAYOUT_GUIDE_SAFE_MARGIN_X = 18
LAYOUT_GUIDE_SAFE_MARGIN_Y = 16


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = re.sub(r"-{2,}", "-", value)
    return value.strip("-")


def display_from_slug(value: str) -> str:
    words = [word for word in re.split(r"[^a-zA-Z0-9]+", value.strip()) if word]
    return " ".join(word.capitalize() for word in words)


def concept_words(value: str) -> list[str]:
    stop_words = {
        "a",
        "an",
        "and",
        "app",
        "based",
        "codex",
        "compact",
        "digital",
        "for",
        "from",
        "in",
        "of",
        "on",
        "pet",
        "ready",
        "small",
        "the",
        "to",
        "with",
    }
    words = [
        word.lower()
        for word in re.findall(r"[a-zA-Z0-9]+", value)
        if word.lower() not in stop_words
    ]
    return words


def infer_name(args: argparse.Namespace, reference_paths: list[Path]) -> str:
    for raw_value in [args.display_name, args.pet_name]:
        value = raw_value.strip()
        if value:
            return value

    if args.pet_id.strip():
        display = display_from_slug(args.pet_id)
        if display:
            return display

    for raw_value in [args.pet_notes, args.description, args.brand_name]:
        words = concept_words(raw_value)
        if words:
            return words[0].capitalize()

    for path in reference_paths:
        display = display_from_slug(path.stem)
        if display:
            return display

    return DEFAULT_PET_NAME


def sentence(value: str) -> str:
    value = " ".join(value.strip().split())
    if not value:
        return value
    if value[-1] not in ".!?":
        value += "."
    return value


def infer_description(args: argparse.Namespace, reference_paths: list[Path]) -> str:
    if args.description.strip():
        return sentence(args.description)
    if args.pet_notes.strip():
        return sentence(f"A compact Codex pet: {args.pet_notes}")
    if args.brand_name.strip():
        return sentence(f"A compact Codex pet inspired by {args.brand_name}")
    if reference_paths:
        return "A compact Codex pet based on the provided reference image."
    return "A compact original Codex pet ready for animation."


def infer_pet_notes(args: argparse.Namespace, reference_paths: list[Path]) -> str:
    if args.pet_notes.strip():
        return args.pet_notes.strip()
    if args.description.strip():
        return args.description.strip().rstrip(".")
    if args.brand_name.strip():
        return f"a compact mascot inspired by {args.brand_name.strip()}"
    if reference_paths:
        return "the pet shown in the reference image(s)"
    return "a compact original Codex pet"


def default_output_dir(pet_id: str) -> Path:
    timestamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    return Path.cwd() / "output" / "hatch-pet" / f"{pet_id}-{timestamp}"


def rel(path: Path, root: Path) -> str:
    return str(path.resolve().relative_to(root.resolve()))


def image_metadata(path: Path) -> dict[str, object]:
    with Image.open(path) as image:
        return {
            "path": str(path),
            "width": image.width,
            "height": image.height,
            "mode": image.mode,
            "format": image.format,
        }


def draw_dashed_line(
    draw: ImageDraw.ImageDraw,
    start: tuple[int, int],
    end: tuple[int, int],
    *,
    fill: str,
    dash: int = 8,
    gap: int = 6,
) -> None:
    x1, y1 = start
    x2, y2 = end
    if x1 == x2:
        step = dash + gap
        for y in range(min(y1, y2), max(y1, y2), step):
            draw.line((x1, y, x2, min(y + dash, max(y1, y2))), fill=fill)
        return
    if y1 == y2:
        step = dash + gap
        for x in range(min(x1, x2), max(x1, x2), step):
            draw.line((x, y1, min(x + dash, max(x1, x2)), y2), fill=fill)
        return
    raise ValueError("draw_dashed_line only supports horizontal or vertical lines")


def create_layout_guide(path: Path, state: str, frames: int) -> dict[str, object]:
    width = frames * ATLAS["cell_width"]
    height = ATLAS["cell_height"]
    cell_width = ATLAS["cell_width"]
    image = Image.new("RGB", (width, height), "#f7f7f7")
    draw = ImageDraw.Draw(image)

    for index in range(frames):
        left = index * cell_width
        right = left + cell_width - 1
        draw.rectangle((left, 0, right, height - 1), outline="#111111", width=2)

        safe_left = left + LAYOUT_GUIDE_SAFE_MARGIN_X
        safe_top = LAYOUT_GUIDE_SAFE_MARGIN_Y
        safe_right = right - LAYOUT_GUIDE_SAFE_MARGIN_X
        safe_bottom = height - 1 - LAYOUT_GUIDE_SAFE_MARGIN_Y
        draw.rectangle(
            (safe_left, safe_top, safe_right, safe_bottom),
            outline="#2f80ed",
            width=2,
        )

        center_x = left + cell_width // 2
        center_y = height // 2
        draw_dashed_line(
            draw,
            (center_x, safe_top),
            (center_x, safe_bottom),
            fill="#b8b8b8",
        )
        draw_dashed_line(
            draw,
            (safe_left, center_y),
            (safe_right, center_y),
            fill="#b8b8b8",
        )

    path.parent.mkdir(parents=True, exist_ok=True)
    image.save(path)
    return {
        "state": state,
        "path": str(path),
        "width": width,
        "height": height,
        "frames": frames,
        "cell_width": ATLAS["cell_width"],
        "cell_height": ATLAS["cell_height"],
        "safe_margin_x": LAYOUT_GUIDE_SAFE_MARGIN_X,
        "safe_margin_y": LAYOUT_GUIDE_SAFE_MARGIN_Y,
        "usage": "layout guide input only; do not copy visible guide lines into generated sprite strips",
    }


def create_layout_guides(run_dir: Path) -> list[dict[str, object]]:
    guide_dir = run_dir / LAYOUT_GUIDE_DIR
    standard_guides = [
        create_layout_guide(guide_dir / f"{state}.png", state, frames)
        for state, _row, frames, _purpose in ROWS
    ]
    look_guides = [
        create_layout_guide(guide_dir / f"{state}.png", state, len(directions))
        for state, _row, directions, _purpose in LOOK_ROWS
    ]
    cardinal_guide = create_layout_guide(
        guide_dir / "look-cardinals.png", "look-cardinals", len(LOOK_CARDINALS)
    )
    return [*standard_guides, *look_guides, cardinal_guide]


def parse_hex_color(value: str) -> tuple[int, int, int]:
    if not re.fullmatch(r"#[0-9a-fA-F]{6}", value):
        raise SystemExit(f"invalid chroma key color: {value}; expected #RRGGBB")
    return tuple(int(value[index : index + 2], 16) for index in (1, 3, 5))


def rgb_to_hex(rgb: tuple[int, int, int]) -> str:
    return f"#{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}"


def color_distance(left: tuple[int, int, int], right: tuple[int, int, int]) -> float:
    return math.sqrt(sum((left[index] - right[index]) ** 2 for index in range(3)))


def sampled_reference_pixels(paths: list[Path]) -> list[tuple[int, int, int]]:
    pixels: list[tuple[int, int, int]] = []
    for path in paths:
        with Image.open(path) as opened:
            image = opened.convert("RGBA")
            image.thumbnail((128, 128), Image.Resampling.LANCZOS)
            data = image.tobytes()
            for index in range(0, len(data), 4):
                red, green, blue, alpha = data[index : index + 4]
                if alpha <= 16:
                    continue
                pixels.append((red, green, blue))

    non_background = [
        pixel for pixel in pixels if not (pixel[0] > 244 and pixel[1] > 244 and pixel[2] > 244)
    ]
    return non_background or pixels


def choose_chroma_key(reference_paths: list[Path], requested: str) -> dict[str, object]:
    if requested.lower() != "auto":
        rgb = parse_hex_color(requested)
        return {
            "hex": rgb_to_hex(rgb),
            "rgb": list(rgb),
            "name": "user-selected",
            "selection": "manual",
        }

    pixels = sampled_reference_pixels(reference_paths)
    if not pixels:
        rgb = parse_hex_color("#FF00FF")
        return {
            "hex": "#FF00FF",
            "rgb": list(rgb),
            "name": "magenta",
            "selection": "fallback",
        }

    scored: list[tuple[float, int, str, tuple[int, int, int]]] = []
    for preference_index, (name, hex_color) in enumerate(CHROMA_KEY_CANDIDATES):
        rgb = parse_hex_color(hex_color)
        distances = sorted(color_distance(rgb, pixel) for pixel in pixels)
        percentile_index = max(0, min(len(distances) - 1, int(len(distances) * 0.01)))
        scored.append((distances[percentile_index], -preference_index, name, rgb))

    score, _preference, name, rgb = max(scored)
    return {
        "hex": rgb_to_hex(rgb),
        "rgb": list(rgb),
        "name": name,
        "selection": "auto",
        "score": round(score, 2),
    }


def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text.rstrip() + "\n", encoding="utf-8")


def resolved_style_contract(style_preset: str, raw_style_notes: str) -> str:
    style_preset = style_preset.strip().lower()
    if style_preset not in STYLE_PRESETS:
        allowed = ", ".join(sorted(STYLE_PRESETS))
        raise SystemExit(f"invalid style preset: {style_preset}; expected one of: {allowed}")
    raw_style_notes = raw_style_notes.strip()
    preset_contract = STYLE_PRESETS[style_preset]
    if not raw_style_notes:
        return f"{PET_SAFE_STYLE} Style `{style_preset}`: {preset_contract}"
    return (
        f"{PET_SAFE_STYLE} Style `{style_preset}`: {preset_contract} "
        f"User style notes: {raw_style_notes}."
    )


def compact(value: str) -> str:
    return " ".join(value.strip().split())


def brand_inspiration_line(args: argparse.Namespace) -> str:
    brand_name = compact(args.brand_name)
    brand_brief = compact(args.brand_brief)
    if not brand_name and not brand_brief:
        return ""

    prefix = f"{brand_name}: " if brand_name else ""
    if brand_brief:
        return (
            f"{prefix}{brand_brief} Use only broad mascot-safe cues; do not copy "
            "readable logos, marks, UI screenshots, or text."
        )
    return (
        f"{prefix}Use only broad mascot-safe brand cues. Do not copy readable "
        "logos, marks, UI screenshots, or text."
    )


def background_contract(args: argparse.Namespace) -> str:
    chroma_key = args.chroma_key["hex"]
    chroma_name = args.chroma_key["name"]
    if args.background_mode == "chroma":
        return (
            f"Use a perfectly flat pure {chroma_name} {chroma_key} chroma-key "
            "background across the entire canvas."
        )
    if args.background_mode == "transparent":
        return (
            "Return a real RGBA image with a fully transparent background outside "
            "the sprite. Preserve clean antialiased alpha at the silhouette edge; "
            "do not draw a checkerboard or bake any matte color into transparent pixels."
        )
    return (
        "Prefer a real RGBA image with a fully transparent background outside the "
        "sprite and clean antialiased alpha at the silhouette edge. If native alpha "
        f"is unavailable, use a perfectly flat pure {chroma_name} {chroma_key} "
        "chroma-key background as the only fallback; never use white, black, scenery, "
        "or a checkerboard."
    )


def background_color_restriction(args: argparse.Namespace) -> str:
    if args.background_mode == "transparent":
        return (
            "Do not add a matte, halo, outline, shadow, or background-colored fringe "
            "around the sprite."
        )
    chroma_key = args.chroma_key["hex"]
    return (
        f"When using the chroma fallback, keep {chroma_key} and close colors out of "
        "the pet, props, highlights, and effects."
    )


def base_pet_prompt(args: argparse.Namespace) -> str:
    pet_notes = args.pet_notes or "the pet shown in the reference image(s)"
    style_contract = resolved_style_contract(args.style_preset, args.style_notes)
    brand_line = brand_inspiration_line(args)
    brand_block = f"\nBrand inspiration: {brand_line}\n" if brand_line else "\n"
    background = background_contract(args)
    color_restriction = background_color_restriction(args)
    return f"""Create one clean full-body reference sprite for Codex pet {args.display_name}.

Pet identity: {pet_notes}.
Style: {style_contract}
{brand_block}
{background} Place a single centered pose with the full pet visible, compact, readable at 192x208, and easy to animate. Preserve approved reference identity cues. No scenery, text, borders, checkerboard patterns, shadows, glows, detached effects, or extra props. {color_restriction}"""


def row_prompt(args: argparse.Namespace, state: str, row: int, frames: int, purpose: str) -> str:
    pet_notes = args.pet_notes or "the same pet from the approved base reference"
    style_contract = resolved_style_contract(args.style_preset, args.style_notes)
    background = background_contract(args)
    color_restriction = background_color_restriction(args)
    state_prompt = STATE_PROMPTS[state]
    state_requirements = "\n".join(f"- {line}" for line in STATE_REQUIREMENTS[state])
    return f"""Create one horizontal animation strip for Codex pet `{args.pet_id}`, state `{state}`.

Use the attached canonical base for identity. Use the attached layout guide only for slot count, spacing, centering, and padding; do not draw the guide.

Output exactly {frames} full-body frames in one left-to-right row. {background} Treat the row as {frames} invisible equal-width slots: one centered complete pose per slot, evenly spaced, with no overlap, clipping, empty slots, labels, or borders.

Identity: same pet in every frame: {pet_notes}. Preserve silhouette, face, proportions, markings, palette, material, style, and props.
Style: {style_contract}
Animation continuity: keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`. Move the pose within the slot instead of redrawing the pet larger or smaller frame to frame.

State action: {state_prompt}

State requirements:
{state_requirements}

Clean extraction: crisp antialiased alpha edges, safe padding, no scenery, text, guide marks, checkerboard patterns, shadows, glows, motion blur, speed lines, dust, detached effects, or stray pixels. {color_restriction}"""


def retry_row_prompt(
    args: argparse.Namespace, state: str, row: int, frames: int, purpose: str
) -> str:
    pet_notes = args.pet_notes or "the canonical base pet"
    background = background_contract(args)
    color_restriction = background_color_restriction(args)
    state_prompt = STATE_PROMPTS[state]
    state_requirements = "\n".join(f"- {line}" for line in STATE_REQUIREMENTS[state])
    return f"""Create Codex pet row `{state}` for `{args.pet_id}`: exactly {frames} full-body frames in one horizontal strip. {background}

Use the attached canonical base for identity and the layout guide only for spacing. Same pet in every frame: {pet_notes}. Preserve silhouette, face, palette, material, proportions, markings, and props.

Keep apparent pet scale and baseline stable within the row unless the state itself intentionally changes vertical position, such as `jumping`.

Action: {state_prompt}

State requirements:
{state_requirements}

One centered complete pose per invisible slot. No text, boxes, guide marks, scenery, shadows, glows, motion blur, speed lines, dust, detached effects, or stray pixels. {color_restriction}"""


def look_row_boundary_contract(row: int) -> str:
    if row == 9:
        return (
            "ROW-BOUNDARY LOCK: 157.5 must be one even 22.5-degree step before 180. "
            "Match the approved 180 pose's body size, baseline, planted anchor, "
            "expression, and construction. Preserve the overall right-hand arc, but "
            "do not distort pupils, nose, or body geometry merely to exaggerate the subtle horizontal component."
        )
    return (
        "ROW-BOUNDARY LOCK: 180 must continue directly from row 9's 157.5, matching "
        "its body size, baseline, planted anchor, expression, and construction. "
        "337.5 must be one even 22.5-degree step before 000: nearly up-facing while "
        "remaining on the overall left-hand arc. Do not distort pupils, nose, or body "
        "geometry merely to exaggerate the subtle horizontal component."
    )


def look_row_layout_contract() -> str:
    return """HARD LAYOUT AND CONTINUITY CONTRACT — DETERMINISTIC REGISTRATION: draw exactly eight separated pose groups in left-to-right direction order. Keep enough fully transparent or flat fallback-background space between neighboring poses that each complete pose can be detected without cutting through foreground. Approximate the guide's equal spacing, but do not distort a pose merely to hit an exact source-canvas coordinate; deterministic assembly will crop the eight ordered groups, then apply one shared scale and baseline.

Use the same body height, head size, baseline, and planted-body position across the generated family. Never overlap neighboring poses, merge two poses into one connected group, crop foreground at the outer canvas edge, or resize one pose independently.

Keep the feet, base, or lower torso planted at the same coordinates across all eight frames. Express direction through the eyes, face, head, upper body, and physically appropriate prop movement, not by moving, rotating, or rescaling the entire sprite."""


def look_row_screen_coordinate_contract(row: int) -> str:
    if row == 9:
        return (
            "SCREEN-COORDINATE LOCK: screen-right means the viewer's right image edge, "
            "never the character's own right. The row should travel naturally through "
            "the right half of the loop. Near-vertical 022.5 and 157.5 may have subtle "
            "horizontal cues; prioritize a coherent arc over exact pupil or nose placement."
        )
    return (
        "SCREEN-COORDINATE LOCK: screen-left means the viewer's left image edge, never "
        "the character's own left. The row should travel naturally through the left half "
        "of the loop. Near-vertical 202.5 and 337.5 may have subtle horizontal cues; "
        "prioritize a coherent arc over exact pupil or nose placement."
    )


def look_row_axis_contract(row: int) -> str:
    if row == 9:
        slots = [
            "1. `000`: vertical UP; no horizontal requirement.",
            "2. `022.5`: horizontal SCREEN-RIGHT and vertical UP.",
            "3. `045`: horizontal SCREEN-RIGHT and vertical UP.",
            "4. `067.5`: horizontal SCREEN-RIGHT and vertical UP.",
            "5. `090`: horizontal SCREEN-RIGHT; no vertical requirement.",
            "6. `112.5`: horizontal SCREEN-RIGHT and vertical DOWN.",
            "7. `135`: horizontal SCREEN-RIGHT and vertical DOWN.",
            "8. `157.5`: horizontal SCREEN-RIGHT and vertical DOWN.",
        ]
    else:
        slots = [
            "1. `180`: vertical DOWN; no horizontal requirement.",
            "2. `202.5`: horizontal SCREEN-LEFT and vertical DOWN.",
            "3. `225`: horizontal SCREEN-LEFT and vertical DOWN.",
            "4. `247.5`: horizontal SCREEN-LEFT and vertical DOWN.",
            "5. `270`: horizontal SCREEN-LEFT; no vertical requirement.",
            "6. `292.5`: horizontal SCREEN-LEFT and vertical UP.",
            "7. `315`: horizontal SCREEN-LEFT and vertical UP.",
            "8. `337.5`: horizontal SCREEN-LEFT and vertical UP.",
        ]
    return """DIRECTION TARGETS — use these to shape the coherent row, not as pixel-level landmark gates:

{slots}

Cardinals must be unmistakable. Intermediate poses should broadly occupy the intended quadrant and advance naturally through the ordered loop. Minor pupil, nose, eyelid, or aiming-feature deviations are acceptable when the overall direction, continuity, identity, and motion remain coherent. Do not deform the character merely to make every intermediate axis independently obvious.""".format(
        slots="\n".join(slots)
    )


def look_row_pre_return_check(row: int) -> str:
    boundary_check = (
        "157.5 does not flow evenly into 180"
        if row == 9
        else "180 does not continue from 157.5 or 337.5 does not flow evenly into 000"
    )
    return f"""PRE-RETURN CHECK: reject this result if it does not contain eight separated pose groups in the required order; neighboring poses overlap; foreground is cropped at the outer canvas edge; any frame changes sprite scale, body or head size, baseline, or planted-body position; the row visibly reverses into the wrong half of the loop; or {boundary_check}. Minor intermediate pupil or nose deviations are not rejection reasons. Exact cell cropping, resizing, and recentering happen deterministically after generation."""


def look_row_prompt(
    args: argparse.Namespace,
    row: int,
    directions: list[str],
) -> str:
    direction_list = ", ".join(directions)
    background = background_contract(args)
    color_restriction = background_color_restriction(args)
    reference_instruction = (
        "The approved cardinal strip is authoritative for the up, screen-right, down, "
        "and screen-left pose families. Interpolate the intermediate directions as "
        "even 22.5-degree steps between those anchors."
        if row == 9
        else "The approved cardinal strip and completed coherent row 9 are authoritative. "
        "Use the cardinals for direction meaning and row 9 for cross-row identity, scale, "
        "registration, and continuity."
    )
    return f"""Create one horizontal look-direction strip for Codex pet `{args.pet_id}`, atlas row {row}.

Use the attached canonical base, completed standard contact sheet, layout guide, and approved four-cardinal strip for identity, scale, registration, spacing, direction semantics, and cross-row continuity. Read `qa/look-mechanics.md` and follow its pet-specific movement and eye/prop mechanics. {reference_instruction}

COHERENT SYNTHESIS LOCK: produce one unified eight-pose row. Do not paste, tile, or independently restyle individual cells. Every final cell must be drawn together with the same face construction, body proportions, line/render quality, lighting, materials, scale, baseline, and registration.

Output exactly 8 complete full-body frames in this exact left-to-right order: {direction_list}. Degrees are clockwise: 000 is up, 090 right, 180 down, and 270 left. Neutral/front is not part of this row.

{look_row_axis_contract(row)}

{look_row_screen_coordinate_contract(row)}

{look_row_layout_contract()}

{background} Place one centered pose in each invisible equal-width slot. Change only the natural parts needed to express gaze: eyes, eyelids, head, face, neck, upper body, appendages, and constrained prop follow-through. Keep identity, silhouette, materials, palette, markings, and props consistent.

{look_row_boundary_contract(row)}

{look_row_pre_return_check(row)}

Do not rotate, skew, or tilt the whole sprite to fake gaze. Do not add replacement/googly eyes, labels, degree text, arrows, clocks, grids, shadows, glows, scenery, or detached effects. {color_restriction}"""


def retry_look_row_prompt(
    args: argparse.Namespace,
    row: int,
    directions: list[str],
) -> str:
    direction_list = ", ".join(directions)
    background = background_contract(args)
    color_restriction = background_color_restriction(args)
    return f"""Create Codex v2 pet look row {row} for `{args.pet_id}` as exactly 8 full-body frames in this order: {direction_list}.

Use the canonical base, standard contact sheet, layout guide, approved four-cardinal strip, and `qa/look-mechanics.md`. Draw the complete eight-pose row as one coherent animation family, interpolating even 22.5-degree steps between the cardinal pose families. Keep the same pet identity, face construction, materials, palette, markings, and props. Each direction must read correctly at pet size and join continuously at the 000 and 180 boundaries.

{look_row_axis_contract(row)}

{look_row_layout_contract()}

{look_row_boundary_contract(row)}

{look_row_pre_return_check(row)}

{background} One complete unclipped pose per invisible slot. No whole-sprite rotation, replacement eyes, labels, guide marks, shadows, glows, scenery, or detached effects. {color_restriction}"""


def look_cardinal_prompt(args: argparse.Namespace) -> str:
    background = background_contract(args)
    color_restriction = background_color_restriction(args)
    return f"""Create one horizontal four-cardinal anchor strip for Codex pet `{args.pet_id}`.

Use the attached canonical base, completed standard contact sheet, and layout guide for exact identity, style, scale, baseline, face construction, materials, palette, markings, props, and spacing. Read `qa/look-mechanics.md` and use the pet's natural gaze mechanism.

Output exactly four centered complete full-body poses in this exact left-to-right order: `000 up`, `090 screen-right`, `180 down`, `270 screen-left`. Screen-left and screen-right always mean the viewer's image edges, never the character's own left or right.

For `000`, keep the face broadly frontal and point the eyes and natural head mechanism toward the TOP edge. For `090`, put the nose tip, pupils, face surface, or natural aiming feature on the screen-right side of the head center. For `180`, keep the face broadly frontal and point toward the BOTTOM edge. For `270`, apply the inverse screen-left landmark rule. Every cardinal must be unmistakable without labels.

{background} Place one pose in each invisible equal-width slot with generous padding. Keep scale, feet/base, lower body, and registration consistent across all four slots.

Do not rotate, skew, or tilt the whole sprite to fake gaze. Do not add replacement eyes, labels, degree text, arrows, boxes, guide marks, shadows, scenery, or detached effects. {color_restriction}"""


def look_cardinal_repair_prompt(
    args: argparse.Namespace,
    label: str,
    expected_direction: str,
) -> str:
    background = background_contract(args)
    color_restriction = background_color_restriction(args)
    screen_rule = {
        "000": "Keep the face broadly frontal and point the eyes and natural head mechanism toward the TOP edge.",
        "090": "Put the nose tip, pupils, face surface, or natural aiming feature on the screen-right side of the head center.",
        "180": "Keep the face broadly frontal and point the eyes and natural head mechanism toward the BOTTOM edge.",
        "270": "Put the nose tip, pupils, face surface, or natural aiming feature on the screen-left side of the head center.",
    }[label]
    return f"""Repair one cardinal anchor for Codex pet `{args.pet_id}`: `{label}` means looking {expected_direction}.

Use the canonical base, completed standard contact sheet, approved cardinal-strip cells, and `qa/look-mechanics.md` for identity, scale, registration, and pet-specific gaze mechanics. {screen_rule} Screen coordinates are viewer-relative.

{background} Output one centered complete full-body pose with generous padding. Keep the feet/base and lower body registered to the approved anchors. The requested cardinal must be unmistakable at final 192x208 display size.

Do not rotate, skew, or tilt the whole sprite to fake gaze. Do not add replacement eyes, labels, arrows, guide marks, shadows, scenery, or detached effects. {color_restriction}"""


def make_jobs(
    run_dir: Path,
    copied_refs: list[dict[str, object]],
) -> list[dict[str, object]]:
    reference_inputs = [
        {"path": rel(Path(str(ref["copied_path"])), run_dir), "role": "pet reference"}
        for ref in copied_refs
    ]
    identity_reference_paths = [CANONICAL_BASE_PATH]
    jobs: list[dict[str, object]] = [
        {
            "id": "base",
            "kind": "base-pet",
            "status": "pending",
            "prompt_file": "prompts/base-pet.md",
            "input_images": reference_inputs,
            "output_path": "decoded/base.png",
            "depends_on": [],
            "generation_skill": "$imagegen",
            "requires_grounded_generation": bool(reference_inputs),
            "allow_prompt_only_generation": not reference_inputs,
        }
    ]
    for state, _row, frames, _purpose in ROWS:
        depends_on = ["base"]
        extra_inputs: list[dict[str, str]] = []
        derivation_policy: dict[str, object] = {
            "may_derive": False,
            "reason": "state requires its own generated animation semantics",
        }
        if state == "running-left":
            depends_on.append("running-right")
            extra_inputs.append(
                {
                    "path": "decoded/running-right.png",
                    "role": "rightward gait reference for leftward row decision",
                }
            )
            derivation_policy = {
                "may_derive": True,
                "may_derive_from": "running-right",
                "derivation": "framewise-horizontal-mirror-preserving-order",
                "requires_explicit_approval": True,
                "fallback_generation_skill": "$imagegen",
            }
        elif state not in NON_DERIVABLE_STATES:
            derivation_policy["reason"] = "no deterministic derivation is configured for this state"
        jobs.append(
            {
                "id": state,
                "kind": "row-strip",
                "status": "pending",
                "prompt_file": f"prompts/rows/{state}.md",
                "retry_prompt_file": f"prompts/row-retries/{state}.md",
                "input_images": [
                    *reference_inputs,
                    {
                        "path": f"{LAYOUT_GUIDE_DIR}/{state}.png",
                        "role": f"layout guide for {frames} frame slots; use for spacing only, do not copy guide lines",
                    },
                    {
                        "path": CANONICAL_BASE_PATH,
                        "role": "canonical identity reference",
                    },
                    *extra_inputs,
                ],
                "output_path": f"decoded/{state}.png",
                "depends_on": depends_on,
                "generation_skill": "$imagegen",
                "requires_grounded_generation": True,
                "allow_prompt_only_generation": False,
                "identity_reference_paths": identity_reference_paths,
                "parallelizable_after": depends_on,
                "derivation_policy": derivation_policy,
                "mirror_policy": derivation_policy if state == "running-left" else {},
            }
        )
    standard_job_ids = [state for state, _row, _frames, _purpose in ROWS]
    jobs.append(
        {
            "id": "look-cardinals",
            "kind": "look-cardinal-strip",
            "status": "pending",
            "prompt_file": "prompts/look-cardinals.md",
            "repair_prompt_files": {
                label: f"prompts/look-anchor-repairs/{label}.md"
                for label, _direction in LOOK_CARDINALS
            },
            "input_images": [
                *reference_inputs,
                {
                    "path": f"{LAYOUT_GUIDE_DIR}/look-cardinals.png",
                    "role": "layout guide for four cardinal slots; use for spacing only, do not copy guide lines",
                },
                {
                    "path": CANONICAL_BASE_PATH,
                    "role": "canonical identity reference",
                },
                {
                    "path": "qa/contact-sheet.png",
                    "role": "approved standard-row identity, scale, and baseline reference",
                },
            ],
            "output_path": "decoded/look-cardinals.png",
            "extracted_output_paths": [
                f"decoded/look-anchors/{label}.png" for label, _direction in LOOK_CARDINALS
            ],
            "approved_strip_path": "decoded/look-anchors-approved.png",
            "depends_on": standard_job_ids,
            "generation_skill": "$imagegen",
            "requires_grounded_generation": True,
            "allow_prompt_only_generation": False,
            "identity_reference_paths": identity_reference_paths,
            "look_mechanics_file": "qa/look-mechanics.md",
            "directions": [label for label, _direction in LOOK_CARDINALS],
            "packaging_eligible": False,
            "parallelizable_after": standard_job_ids,
            "derivation_policy": {
                "may_derive": False,
                "reason": "cardinal directions require grounded pet-specific generation",
            },
        }
    )
    for state, row, directions, _purpose in LOOK_ROWS:
        depends_on = ["look-cardinals"] if row == 9 else ["look-cardinals", "look-row-9"]
        continuity_inputs = (
            []
            if row == 9
            else [
                {
                    "path": "decoded/look-row-9.png",
                    "role": "completed first half of the clockwise look loop for row 10 continuity",
                }
            ]
        )
        jobs.append(
            {
                "id": state,
                "kind": "look-row-strip",
                "status": "pending",
                "prompt_file": f"prompts/rows/{state}.md",
                "retry_prompt_file": f"prompts/row-retries/{state}.md",
                "input_images": [
                    *reference_inputs,
                    {
                        "path": f"{LAYOUT_GUIDE_DIR}/{state}.png",
                        "role": "layout guide for 8 direction slots; use for spacing only, do not copy guide lines",
                    },
                    {
                        "path": CANONICAL_BASE_PATH,
                        "role": "canonical identity reference",
                    },
                    {
                        "path": "qa/contact-sheet.png",
                        "role": "approved standard-row identity, scale, and baseline reference",
                    },
                    {
                        "path": "decoded/look-anchors-approved.png",
                        "role": "approved cardinal reference strip in order 000 up, 090 screen-right, 180 down, 270 screen-left; interpolate intermediate directions evenly",
                    },
                    *continuity_inputs,
                ],
                "output_path": f"decoded/{state}.png",
                "depends_on": depends_on,
                "generation_skill": "$imagegen",
                "requires_grounded_generation": True,
                "allow_prompt_only_generation": False,
                "identity_reference_paths": identity_reference_paths,
                "look_mechanics_file": "qa/look-mechanics.md",
                "directions": directions,
                "parallelizable_after": depends_on,
                "derivation_policy": {
                    "may_derive": False,
                    "reason": "look directions require grounded pet-specific generation",
                },
                "coherent_synthesis_required": True,
                "individual_cell_packaging_allowed": False,
                "packaging_eligible": True,
            }
        )
    return jobs


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--pet-name",
        default="",
        help="User-facing pet name. Ask the user for this when practical; otherwise choose a short appropriate name.",
    )
    parser.add_argument(
        "--pet-id",
        default="",
        help="Stable pet folder/id slug. Defaults to the slugified pet name.",
    )
    parser.add_argument(
        "--display-name",
        default="",
        help="Display label. Defaults to the pet name.",
    )
    parser.add_argument("--description", default="")
    parser.add_argument("--reference", action="append", default=[])
    parser.add_argument("--output-dir", default="")
    parser.add_argument("--pet-notes", default="")
    parser.add_argument(
        "--brand-name",
        default="",
        help="Brand, company, or product name used for broad mascot inspiration.",
    )
    parser.add_argument(
        "--brand-brief",
        default="",
        help="Compact researched brand cue sentence for the base pet only.",
    )
    parser.add_argument(
        "--brand-source",
        action="append",
        default=[],
        help="Source URL used to produce the brand brief. May be passed multiple times.",
    )
    parser.add_argument(
        "--brand-discovery-file",
        default="",
        help="Optional markdown discovery brief to copy into the run for review.",
    )
    parser.add_argument(
        "--style-preset",
        default="auto",
        choices=sorted(STYLE_PRESETS),
        help="Pet-safe style preset to use across the base and all animation rows.",
    )
    parser.add_argument("--style-notes", default="")
    parser.add_argument(
        "--chroma-key",
        default="auto",
        help="Fallback chroma key as #RRGGBB, or auto to choose a safe key from reference colors.",
    )
    parser.add_argument(
        "--background-mode",
        choices=("auto", "transparent", "chroma"),
        default="auto",
        help=(
            "Prefer native transparent image output in auto mode, require it in "
            "transparent mode, or force the legacy chroma-key workflow."
        ),
    )
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()

    raw_reference_paths = [Path(raw_path).expanduser().resolve() for raw_path in args.reference]
    raw_brand_discovery_path = (
        Path(args.brand_discovery_file).expanduser().resolve()
        if args.brand_discovery_file.strip()
        else None
    )

    args.display_name = infer_name(args, raw_reference_paths)
    args.pet_name = (args.pet_name or args.display_name).strip()
    args.description = infer_description(args, raw_reference_paths)
    args.pet_notes = infer_pet_notes(args, raw_reference_paths)
    args.pet_id = slugify(args.pet_id or args.pet_name or args.display_name)
    args.style_preset = args.style_preset.strip().lower()
    args.style_contract = resolved_style_contract(args.style_preset, args.style_notes)
    args.brand_name = compact(args.brand_name)
    args.brand_brief = compact(args.brand_brief)
    args.brand_source = [compact(source) for source in args.brand_source if compact(source)]
    if not args.pet_id:
        raise SystemExit("pet id must contain at least one letter or digit")

    run_dir = (
        Path(args.output_dir).expanduser().resolve()
        if args.output_dir
        else default_output_dir(args.pet_id).resolve()
    )
    if run_dir.exists() and any(run_dir.iterdir()) and not args.force:
        raise SystemExit(f"{run_dir} already exists and is not empty; pass --force to reuse it")
    run_dir.mkdir(parents=True, exist_ok=True)

    ref_dir = run_dir / "references"
    prompt_dir = run_dir / "prompts"
    row_prompt_dir = prompt_dir / "rows"
    row_retry_prompt_dir = prompt_dir / "row-retries"
    look_anchor_repair_prompt_dir = prompt_dir / "look-anchor-repairs"
    for directory in [
        ref_dir,
        prompt_dir,
        row_prompt_dir,
        row_retry_prompt_dir,
        look_anchor_repair_prompt_dir,
        run_dir / "decoded",
        run_dir / "qa",
    ]:
        directory.mkdir(parents=True, exist_ok=True)

    copied_refs: list[dict[str, object]] = []
    copied_ref_paths: list[Path] = []
    for index, source in enumerate(raw_reference_paths, start=1):
        if not source.is_file():
            raise SystemExit(f"reference not found: {source}")
        suffix = source.suffix.lower() or ".png"
        copied = ref_dir / f"reference-{index:02d}{suffix}"
        shutil.copy2(source, copied)
        meta = image_metadata(copied)
        meta["source_path"] = str(source)
        meta["copied_path"] = str(copied)
        copied_refs.append(meta)
        copied_ref_paths.append(copied)

    brand_discovery_path = ""
    if raw_brand_discovery_path is not None:
        if not raw_brand_discovery_path.is_file():
            raise SystemExit(f"brand discovery file not found: {raw_brand_discovery_path}")
        copied_discovery = run_dir / BRAND_DISCOVERY_PATH
        shutil.copy2(raw_brand_discovery_path, copied_discovery)
        brand_discovery_path = rel(copied_discovery, run_dir)

    args.chroma_key = choose_chroma_key(copied_ref_paths, args.chroma_key)
    layout_guides = create_layout_guides(run_dir)

    request = {
        "pet_id": args.pet_id,
        "display_name": args.display_name,
        "description": args.description,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "sprite_version_number": 2,
        "atlas": ATLAS,
        "rows": [
            {"state": state, "row": row, "frames": frames, "purpose": purpose}
            for state, row, frames, purpose in ROWS
        ]
        + [
            {
                "state": state,
                "row": row,
                "frames": len(directions),
                "directions": directions,
                "purpose": purpose,
            }
            for state, row, directions, purpose in LOOK_ROWS
        ],
        "layout_guides": [
            {**guide, "path": rel(Path(str(guide["path"])), run_dir)} for guide in layout_guides
        ],
        "references": copied_refs,
        "background_mode": {
            "requested": args.background_mode,
            "preferred": (
                "chroma" if args.background_mode == "chroma" else "transparent"
            ),
            "fallback": "chroma" if args.background_mode == "auto" else None,
        },
        "chroma_key": args.chroma_key,
        "pet_notes": args.pet_notes,
        "style_preset": args.style_preset,
        "style_notes": args.style_notes,
        "style_contract": args.style_contract,
        "brand_name": args.brand_name,
        "brand_brief": args.brand_brief,
        "brand_sources": args.brand_source,
        "pet_safe_style": PET_SAFE_STYLE,
        "primary_generation_skill": "$imagegen",
    }
    if brand_discovery_path:
        request["brand_discovery_path"] = brand_discovery_path
    (run_dir / "pet_request.json").write_text(
        json.dumps(request, indent=2) + "\n", encoding="utf-8"
    )

    write_text(prompt_dir / "base-pet.md", base_pet_prompt(args))
    for state, row, frames, purpose in ROWS:
        write_text(
            row_prompt_dir / f"{state}.md",
            row_prompt(args, state, row, frames, purpose),
        )
        write_text(
            row_retry_prompt_dir / f"{state}.md",
            retry_row_prompt(args, state, row, frames, purpose),
        )
    for state, row, directions, _purpose in LOOK_ROWS:
        write_text(
            row_prompt_dir / f"{state}.md",
            look_row_prompt(args, row, directions),
        )
        write_text(
            row_retry_prompt_dir / f"{state}.md",
            retry_look_row_prompt(args, row, directions),
        )
    write_text(prompt_dir / "look-cardinals.md", look_cardinal_prompt(args))
    for label, expected_direction in LOOK_CARDINALS:
        write_text(
            look_anchor_repair_prompt_dir / f"{label}.md",
            look_cardinal_repair_prompt(args, label, expected_direction),
        )
    jobs = {
        "schema_version": 1,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "run_dir": str(run_dir),
        "primary_generation_skill": "$imagegen",
        "background_mode_requested": args.background_mode,
        "jobs": make_jobs(run_dir, copied_refs),
    }
    (run_dir / "imagegen-jobs.json").write_text(json.dumps(jobs, indent=2) + "\n", encoding="utf-8")

    print(
        json.dumps(
            {
                "ok": True,
                "run_dir": str(run_dir),
                "request": str(run_dir / "pet_request.json"),
                "jobs": str(run_dir / "imagegen-jobs.json"),
                "ready_jobs": ["base"],
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
