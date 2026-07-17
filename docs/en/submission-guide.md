# Craft and Submit a Selected Codex Pet

[简体中文](../zh-CN/submission-guide.md) | English

Awesome Codex Pet is a selective gallery, not a dump of downloadable assets. We look for pets with faithful character identity, readable action semantics, clean transparent edges, reliable installation, and clear creator and asset-usage information.

This guide covers version choice, action-by-action craft, edge cleanup, packaging, review, submission, and sharing. AI can accelerate the workflow, but the final quality bar still requires visual review of every action and frame.

## Fastest path: start in ChatGPT

The website's **Craft Guide** and **Submit** menus can open a complete Codex task in ChatGPT through `codex://new?prompt=...`. ChatGPT currently keeps the `codex://` URL scheme for these deep links. The task gathers the references, pet name, author credit, source notes, and asset usage terms, reads the repository-local Hatch Pet workflow, then handles creation, validation, and a focused pull request.

You can also give ChatGPT this task directly:

```text
Help me create and submit a Codex pet to https://github.com/legeling/awesome-codex-pet.

Before starting, ask for any missing character reference, pet name, author credit, source notes, and asset usage terms. A formal license is optional; when none applies, require an explicit non-commercial-only statement and confirmation that the submitter has the right to contribute the asset. A public source URL is optional for original, AI-generated, or privately sourced work. Clone or open the repository, read AGENTS.md and this submission guide, then follow .agents/skills/hatch-pet-v2/SKILL.md from the repository. Do not assume the skill is globally installed.

Design and review all nine standard actions independently instead of mechanically reusing one pose. Check identity, action meaning, scale and baseline stability, plus purple, green, cyan, or magenta fringe on dark, light, and checkerboard backgrounds. For V2, review the complete clockwise loop of 16 look directions.

Keep only submission.json, pet.json, and spritesheet.webp in the final folder. Run npm run previews, npm run readmes, npm run validate, npm run lint, and a clean installation test. Then create a focused branch and one pull request containing only this pet.
```

AI assistance never relaxes attribution or usage-term requirements. The submitter remains responsible for accurate authorship, honest source notes, the right to submit, and the stated non-commercial or licensed usage terms.

## The selection standard

A pet should meet all six expectations:

1. **Faithful identity:** face, proportions, palette, silhouette, clothing, and props remain consistent across every state.
2. **Distinct actions:** each standard row expresses its own runtime meaning rather than renaming the same motion.
3. **Stable playback:** no scale popping, baseline jumps, wrong direction, reversed cadence, or inert loops at actual pet size.
4. **Clean edges:** no chroma fringe on dark, light, or checkerboard backgrounds.
5. **Trustworthy metadata:** creator, source notes, category, collections, tags, and asset usage terms are honest and complete.
6. **Reliable packaging:** previews, validation, lint, and an isolated install test pass for the final three files.

## V1 and V2

| Version | Atlas                     | Runtime field                         | Animation content                       | Best use                             |
| ------- | ------------------------- | ------------------------------------- | --------------------------------------- | ------------------------------------ |
| V1      | `1536x1872`, 8 × 9 cells  | omit `spriteVersionNumber` or use `1` | 9 standard rows                         | preserving and repairing legacy pets |
| V2      | `1536x2288`, 8 × 11 cells | use `spriteVersionNumber: 2`          | 9 standard rows plus 16 look directions | new pets and upgrades; recommended   |

Both versions remain supported. New work should normally use V2 because Codex can respond to the target position with a natural look-direction loop.

- Use [.agents/skills/hatch-pet-v1](../../.agents/skills/hatch-pet-v1) for legacy V1 maintenance.
- Use [.agents/skills/hatch-pet-v2](../../.agents/skills/hatch-pet-v2) for new V2 pets and upgrades.
- To upgrade an installed V1 pet, open Codex **Settings → Pets** and choose **Update**. Review the full result before submitting; the upgrade does not automatically publish to this repository.

### The 16 V2 look directions

The final two rows contain 16 clockwise poses at 22.5-degree intervals. The four cardinals must be unmistakable, and intermediate poses must form a coherent transition. Do not rotate or skew the complete sprite to fake gaze. For humanoid characters, the eyes should normally lead, followed naturally by eyelids, brows, head, neck, upper body, and attached props.

## Direct every standard action

| Row | State           | Craft goal                                                                            |
| --- | --------------- | ------------------------------------------------------------------------------------- |
| 0   | `idle`          | living rest through breathing, blink, or weight shift; never a frozen still           |
| 1   | `running-right` | clear right-facing alternating gait; no speed lines, dust, or floor shadows           |
| 2   | `running-left`  | true left-facing motion; mirror only when identity and handed details remain correct  |
| 3   | `waving`        | greeting led by the hand, paw, ear, or body rather than detached wave marks           |
| 4   | `jumping`       | readable takeoff, airborne motion, and return with stable scale and anchor            |
| 5   | `failed`        | readable failure through pose and expression; attached hard-edged effects only        |
| 6   | `waiting`       | expectant request for approval or input, distinct from idle and review                |
| 7   | `running`       | non-directional busy state for ongoing work, not another travel loop                  |
| 8   | `review`        | focused inspection through gaze, head angle, posture, or hands without invented props |

Give every row its own direction, motion arc, and repair pass. Lock identity first, then describe what moves, what remains stable, and how props follow. Review a shared character height, lower-body anchor, and baseline in motion. Repair the smallest failing scope instead of regenerating the entire pet.

Never mirror `running-right` by default. Readable text, asymmetric markings, handed props, one-sided accessories, or lighting cues require a separately generated and reviewed `running-left` row.

## Purple, green, and chroma fringe

Green, cyan, magenta, purple, or pink halos commonly come from chroma spill, antialiasing, translucent shadows, glow, or resampling.

### Prevent contamination

- Choose a key color absent from the pet's real palette.
- Require a flat uniform background with no halo, shadow, blur, smear, or translucent edge.
- Express motion through pose and silhouette rather than speed lines, dust, floor effects, or detached symbols.

### Inspect every frame

Review on checkerboard, dark, and light backgrounds at normal size and 100–200% zoom. Contact sheets reveal static defects; every GIF must also be played so a one-frame flash of fringe is not missed.

### Repair the smallest scope

- Repair one frame, then one row, and only then the complete pet if the problem is broad.
- Never globally delete a color family; it may be legitimate hair, clothing, eyes, or prop color.
- Rebuild RGB under translucent edge pixels from nearby character colors while preserving alpha and outline thickness.
- Remove isolated residue without eroding hair tips, ears, fingers, weapon points, or 1–2 px outlines.
- Replay every repaired state and reject holes, clipping, color loss, scale popping, baseline jumps, or returning fringe.

Matte-fringe and chroma-despill reports are inspection aids, not permission to delete highlighted colors blindly.

## Final package

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    └── spritesheet.webp
```

- The folder is named `pet-slug--author-slug`.
- `pet.json.id` exactly matches the folder name.
- `pet.json.spritesheetPath` is `spritesheet.webp`.
- `spriteVersionNumber` matches the atlas dimensions.
- `spritesheet.webp` is the final runtime asset.
- QA, references, prompts, videos, intermediate PNGs, and Hatch Pet run directories stay outside the final pet folder.

## Category, franchise series, theme collections, and credit

Provide the primary category, pet name, description, author handle, source notes when available, asset usage terms, tags, and optional collection slugs. A formal license is optional; plain-language non-commercial-only terms are sufficient. The creator also chooses whether naming is single-language or bilingual. Keep `name` as the fallback; for bilingual naming add both `localized_names.en` and `localized_names.zh` to `submission.json`.

Series and collections are repository metadata. Root [`collections.json`](../../collections.json) gives every entry one of two kinds:

- `franchise`: characters from the same original game, animation, film, or other work. The collection slug must also appear in the pet's tags.
- `theme`: pets connected by a shared subject, style, or companion type, even when they come from different works.

Add any matching slugs to `submission.json`. A pet may belong to more than one series or collection:

```json
{
  "collections": ["genshin-impact", "animal-companions"]
}
```

The website groups pets automatically at build time; do not maintain a second frontend-only list. Add or change the definition in `collections.json` when a new repository-level series or theme is needed.

## Preview, validate, and test installation

```bash
python -m pip install -r requirements.txt
npm run previews
npm run readmes
npm run validate
npm run lint
npm run install:pet -- pet-slug--author-slug --codex-home /tmp/codex-pet-test
```

Generated previews belong under `assets/previews/<pet-id>/` and are local or deployment artifacts, not files in the final pet folder or contributor pull request.

Keep one pet per pull request so attribution, usage terms, action quality, and transparent edges can be reviewed without unrelated changes.

After the pull request is opened, maintainers review the rendered character directions, action meaning, running gait, animation continuity, and transparent-edge colors. Green, purple, cyan, magenta, or other chroma residue is checked on checkerboard, dark, and light backgrounds. A submission may be optimized before merge: maintainers can repair individual frames, action rows, look directions, the final `spritesheet.webp`, or metadata while preserving the character identity and creator credit. Substantial visual changes may be returned to the contributor for confirmation.

## Share and contribute

Every detail page keeps the creator, source notes, usage terms, full animation preview, and installation action together. Share that page rather than an isolated WebP so attribution stays attached and recipients can review before installing.

The share menu can copy the page URL, a ready-to-post message, or a Markdown link; publish to X or LinkedIn; open the native system share sheet; and open installation or creation tasks in ChatGPT.

After merge, users can install without cloning the repository:

```bash
curl -fsSL https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- pet-slug--author-slug
```
