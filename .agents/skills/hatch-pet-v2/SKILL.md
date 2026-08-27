---
name: hatch-pet-v2
description: Create, repair, validate, visually QA, and package Codex-compatible v2 animated pets from character art, generated images, company or prospect brand cues, or visual references. Use for any new Codex pet, custom mascot, non-pixel pet style, brand-inspired pet, existing-pet repair, or 8x11 spritesheet workflow requiring all 9 standard animation rows, 16 look directions, deterministic assembly, QA artifacts, and spriteVersionNumber 2 packaging.
---

# Hatch Pet v2

## Overview

Create a Codex-compatible v2 animated pet from a concept, brand cue, company/prospect name, one or more reference images, or any combination of those inputs. Every newly hatched pet is an 8x11 atlas with the 9 standard animation rows plus 16 clockwise look directions and is packaged with `spriteVersionNumber: 2`. The intermediate 8x9 atlas exists only to assemble and review rows 0-8; never package it as a new pet.

User-facing inputs are optional. If the user omits a pet name, infer one from the concept, brand, company, or reference filenames; if that is not possible, choose a short friendly name. If the user omits a description, infer one from the concept or references. If the user omits reference images, generate the base pet from text first, then use that base as the canonical reference for every animation row.

## Existing Inputs And Upgrades

Treat character art, generated images, standard or v2 atlases, contact sheets, and built-in pet art as first-class grounding inputs.

- Preserve user-provided art as a generation reference; do not assume it already has final cell geometry.
- For an existing valid 8x9 atlas, use it as the rows `0-8` intermediate after deterministic and visual validation, then generate rows `9-10` and package the result as v2.
- For an existing 8x11 atlas, preserve approved standard rows. If a look cell fails, correct the complete containing 8-frame row before deterministic reassembly. Never package a newly generated one-off repair cell beside cells from another generation.
- For a built-in pet, extract and use its atlas or neutral/idle cell as the canonical identity reference.
- Include every image that defines head shape, face, palette, markings, material, flame/ears/hair, props, or look mechanics in look-direction generation.
- When a renderer or source provides a dedicated neutral/front frame, pass it through `--neutral-cell`; otherwise use the approved idle/default frame. The 16 directional cells never treat `000` as neutral.

## Generation Delegation

Use `$imagegen` for all normal visual generation.

Before generating base art, row strips, or repair rows, load and follow the installed image generation skill:

```text
${CODEX_HOME:-$HOME/.codex}/skills/.system/imagegen/SKILL.md
```

Do not call the Image API, image CLI, or any other image-generation path directly. Let `$imagegen` choose its own built-in-first path and fallback rules. If `$imagegen` says a fallback requires confirmation, ask the user before continuing.

When invoking `$imagegen`, pass the generated pet prompt as the authoritative visual spec. Pet prompts should stay concise, state-specific, sprite-production oriented, and grounded in the listed input images. Keep longer policy and QA rules in this skill and the deterministic review scripts rather than expanding them into every image prompt. Do not wrap prompts in the generic `$imagegen` shared prompt schema.

Use this skill's scripts for deterministic image work only: preparing layout guides and prompts, mirroring approved `running-left`, extracting frames, validating rows, composing the final atlas, and creating contact-sheet plus motion-preview QA media. Parent-owned shell/`jq` steps handle manifest updates, packaging, and cleanup.

## Runtime Dependencies

Before running any bundled script, call `load_workspace_dependencies`. Set `PYTHON` to the exact Python executable path returned by that tool and use `"$PYTHON"` for every command below. The bundled runtime includes Pillow, which these scripts require. Do not use a bare system `python`; if workspace dependencies are unavailable, stop and report that the bundled runtime is required.

## Storage Controls

The built-in `$imagegen` path stores generated PNG bytes in the rollout that invokes it, even when it also writes a file under `${CODEX_HOME:-$HOME/.codex}/generated_images`. Deleting files later reduces filesystem use, but it does not shrink an already-written rollout. Keep image generation isolated and bounded:

- Use one lightweight generation worker per visual job. Do not batch multiple base/row jobs into the same worker.
- Workers must return only `selected_source=...` and `qa_note=...`; they must not include Markdown image previews, base64, or extra visual attachments in their final response.
- The parent must not open every generated PNG visually. Use worker QA for each job and inspect only the final contact sheet.
- After copying the selected generated output into `decoded/`, remove the selected original from `${CODEX_HOME:-$HOME/.codex}/generated_images` when it lives there, then remove its now-empty generation directory if possible.
- For storage-sensitive full runs, ask the user whether to use the `$imagegen` CLI fallback when available. That path requires local API credentials and explicit user confirmation, but it can avoid built-in image payloads being embedded in rollout events.

## Brand Discovery

If the user provides a brand, company, product, or prospect name rather than a concrete avatar description or reference image, run a lightweight discovery subagent before preparing the pet run. The discovery worker must use web search and prefer official sources such as the brand site, product pages, docs, about pages, press pages, or brand pages. Use reputable secondary sources only when official pages are too thin. Keep the search narrow: enough to extract visual and personality cues, not a market-research brief.

Skip discovery when the user already provides a concrete mascot/avatar description or reference images, unless the user explicitly asks for brand research.

Discovery worker responsibilities:

- search the web for 2-4 relevant sources, preferring official pages
- write an adaptive markdown brief rather than a rigid field dump
- cover identity/category, audience/use context, visual system, personality/tone, product/domain motifs, mascot translation cues, avoidances, and evidence/confidence
- mark mascot guidance that is inferred from sources as inference
- avoid copying logos, readable marks, UI screenshots, slogans, or text
- end with a compact `Generation handoff` section containing only `brand_name`, `brand_brief`, `avatar_seed`, `avoid`, and `brand_sources`
- do not generate images, prepare run folders, or edit unrelated files

Use this discovery worker prompt:

```text
Research a brand for hatch-pet mascot creation.

Brand/product/prospect: <brand name>
User context: <short user request>
Output file: <absolute path to brand-discovery.md>

Use web search. Prefer official brand, product, docs, about, press, or brand pages. Use reputable secondary sources only if official sources are too thin. Write an adaptive markdown brief to the output file. Headings may flex by brand, but the brief must cover:
- identity/category: canonical name, product type, what it does
- audience/use context: who it serves and where it appears
- visual system: palette, shapes, line quality, materials, typography feel, iconography, patterns
- personality/tone: emotional traits, energy, formality, playfulness
- product/domain motifs: objects, workflows, verbs, metaphors, environments
- mascot translation cues: candidate forms, signature traits, props, what must read at pet size
- avoidances: logos/text, trademark-sensitive elements, misleading cues, competitor confusion, poor mascot fits
- evidence/confidence: source URLs plus notes where evidence is weak or inferred

Do not copy logos, readable marks, UI screenshots, slogans, or text. Clearly label mascot guidance that is inferred rather than directly sourced.

End the brief with a `Generation handoff` section containing exactly:
- brand_name=<canonical brand/product name>
- brand_brief=<one sentence, max 45 words, covering palette/tone/domain motifs/personality>
- avatar_seed=<short mascot-safe visual idea, no logo copying>
- avoid=<short comma-separated list>
- brand_sources=<comma-separated source URLs>

Return exactly:
brand_discovery_file=<absolute output file path>
brand_name=<canonical brand/product name>
brand_brief=<same compact sentence from Generation handoff>
avatar_seed=<same short seed from Generation handoff>
avoid=<same short avoid list from Generation handoff>
brand_sources=<same comma-separated URLs from Generation handoff>
```

The parent should save the markdown brief before preparing the run, then pass it to `prepare_pet_run.py` as `--brand-discovery-file` together with `--brand-name`, `--brand-brief`, repeated `--brand-source`, and a concise `--pet-notes` value based on `avatar_seed` when the user did not provide a better avatar description. Keep the full brief for review; only the compact handoff fields should shape prompts. If web search is unavailable and the user gave only a bare brand name, ask for brand cues before generating.

## Generation Contract

### Visual Job Graph

Expect up to 13 visual jobs: 1 base pet, 9 standard row strips, 1 required four-cardinal anchor strip, and 2 required coherent look-direction row strips. The standard states are `idle`, `running-right`, `running-left`, `waving`, `jumping`, `failed`, `waiting`, `running`, and `review`. The only deterministic visual derivation is `running-left`, which may be produced by mirroring `running-right` only after `running-right` has been generated, visually inspected, and explicitly approved as safe to mirror. If mirroring is not appropriate, generate `running-left` as a normal grounded `$imagegen` row.

### Look Direction Sequence

After validating rows 0–8, write qa/look-mechanics.md, then generate and approve one four-pose cardinal strip in this fixed order: 000 up, 090 screen-right, 180 down, and 270 screen-left. Generate row 9 as one coherent eight-pose family from those approved cardinal pose families, interpolating the intermediate directions as even 22.5-degree steps. Deterministically register its eight ordered pose groups, then run final-cell edge, semantic, and continuity QA immediately. Only after row 9 passes, generate row 10 as one coherent eight-pose family, using the approved cardinals for direction meaning and completed row 9 for identity, scale, registration, and boundary continuity. Run the same QA immediately after row 10. Row 9 contains 000, 022.5, 045, 067.5, 090, 112.5, 135, and 157.5; row 10 contains 180, 202.5, 225, 247.5, 270, 292.5, 315, and 337.5. 000 means up, not neutral/front. Never ask $imagegen to generate or repair a complete 8×11 atlas.

### Visual Provenance And Grounding

After selecting a visual output, the parent agent copies that exact image into the job's `decoded/` path, runs its required incremental checks, and only then marks the job complete in `imagegen-jobs.json`. Do not write helper scripts that populate row outputs. The deterministic Python scripts may only process already-generated visual outputs.

Only the base job may be prompt-only. Every row-strip job generated through `$imagegen` must use the input images listed in `imagegen-jobs.json`, including the canonical base reference created after the selected base output is copied. Treat any row generation without attached grounding images as invalid.

## Pet-Safe Styles

Default style is `auto`: infer the pet's style from the user's prompt and references, then preserve that style across every row. If the user names a style, honor it. Supported style presets include `pixel`, `plush`, `clay`, `sticker`, `flat-vector`, `3d-toy`, `painterly`, `brand-inspired`, and `auto`.

Any style is acceptable when it remains pet-safe:

- compact whole-body silhouette readable inside a `192x208` cell
- consistent face, proportions, material, palette, and props across all rows
- real transparent alpha background, with a clean removable chroma-key fallback
- details large enough to read at pet size
- no text, labels, UI, or readable logos unless the user explicitly provides approved reference art and asks for them

Non-pixel styles are first-class. Plush, clay, sticker, vector, 3D toy, painterly mascot, ink, and brand-inspired looks should be accepted when they satisfy the atlas and readability constraints.

## Transparency And Effects

Pet rows are processed into transparent `192x208` cells. Request real RGBA transparency from `$imagegen` by default and preserve its alpha. The prepared prompts allow a flat selected chroma key only as a compatibility fallback when native alpha is unavailable. Prefer pose, expression, and silhouette changes over decorative effects.

The deterministic raster pipeline owns background detection and transparency invariants. In `auto` mode it preserves native alpha whenever the source contains both a visible sprite and a meaningfully transparent canvas; it runs color removal only for an opaque legacy/fallback source. The detected mode is recorded per row and propagated into the final atlas manifest. Native-alpha cleanup clears hidden RGB under fully transparent pixels without changing any visible color. Chroma cleanup retains the existing single edge-local spill-suppression pass. Never run chroma suppression on an all-native-alpha atlas because a legitimate pet color may match the fallback key.

Fully transparent pixels are allowed outside the sprite silhouette, in unused cells, and in intentional negative-space openings that are part of the pet's design, such as loops or holes in a ribbon body. Reject any generated or repaired cell with accidental 100%-transparent holes inside a filled body, including horizontal bands, seam rows, scanline-like gaps, sliced-tile boundaries, or "see-through" interior stripes. Inspect suspect cells on a high-contrast background or alpha mask before accepting them; ordinary atlas validation is not enough when the hole is inside the silhouette.

Allowed effects must satisfy all of these conditions:

- The effect is state-relevant and helps explain the animation.
- The effect is physically attached to, touching, or overlapping the pet silhouette, not floating nearby.
- The effect is inside the same frame slot as the pet and does not create a separate sprite component.
- The effect is opaque or cleanly antialiased, hard-edged enough for component extraction, and does not rely on a background matte.
- The effect is small enough to remain readable at `192x208` without clutter.

Avoid these by default because they usually break transparent-background cleanup or component extraction:

- wave marks, motion arcs, speed lines, action streaks, afterimages, blur, or smears
- detached stars, loose sparkles, floating punctuation, floating icons, falling tear drops, separated smoke clouds, or loose dust
- cast shadows, contact shadows, drop shadows, oval floor shadows, floor patches, landing marks, impact bursts, glow, halo, aura, or soft transparent effects
- text, labels, frame numbers, visible grids, guide marks, speech bubbles, thought bubbles, UI panels, code snippets, checkerboard transparency, white backgrounds, black backgrounds, or scenery
- chroma-key-adjacent colors in the pet, prop, effects, highlights, or shadows when a row actually uses the chroma fallback
- stray pixels, disconnected outline bits, speckle/noise, cropped body parts, overlapping poses, or any pose that crosses into a neighboring frame slot

State-specific guidance:

- `idle`: keep this calm and low-distraction. Use only subtle breathing, a tiny blink, a slight head or body bob, a very small material sway, or another quiet persona-preserving motion. The loop must still contain visible micro-variation; do not accept six effectively identical copies. Do not show waving, walking, running, jumping, talking, working, reviewing, emotional reactions, large gestures, item interactions, or new props.
- `waving`: show the wave through paw, hand, wing, or limb pose only. Do not draw wave marks, motion arcs, lines, sparkles, symbols, or floating effects around the gesture.
- `jumping`: show vertical motion through body position only. Do not draw shadows, dust, landing marks, impact bursts, bounce pads, or floor cues.
- `failed`: tears, attached smoke puffs, or attached stars are allowed if they obey the allowed-effects rules; do not use red X marks, floating symbols, detached smoke, detached stars, or separate tear droplets.
- `waiting`: show that Codex needs approval, help, or user input through an expectant asking pose. Keep it distinct from ordinary idle and review.
- `running`: show active task work, processing, thinking, scanning, typing, or focused effort. Do not show literal foot-running, jogging, sprinting, treadmill motion, raised knees, long steps, pumping arms, directional travel, speed lines, dust clouds, floor shadows, motion trails, or detached motion effects.
- `review`: show focus through lean, blink, eyes, head tilt, or paw/hand position. Do not add magnifying glasses, papers, code, UI, punctuation, symbols, or other new props unless they already exist in the base pet identity.
- `running-right` and `running-left`: show directional drag movement through body, limb, and prop movement only. `running-right` must face and travel right; `running-left` must face and travel left. Their cadence must visibly alternate across the loop rather than repeating one nearly static stride. Do not draw speed lines, dust clouds, floor shadows, motion trails, or detached motion effects.

## Visible Progress Plan

For every pet run, keep a visible checklist so the user can see where the work is up to. Create the checklist before starting, keep one step active at a time, and update it as each step finishes.

Use this checklist for every v2 pet run, replacing `<Pet>` with the pet's name or `your pet`:

1. Getting `<Pet>` ready.
2. Imagining `<Pet>`'s main look.
3. Picturing `<Pet>`'s poses.
4. Hatching `<Pet>`.

What each step means:

- `Getting <Pet> ready.` Choose or confirm the pet name, description, source images, style preset, style notes, and working folder. For bare brand/product/company requests, first run the brand discovery worker and capture the compact brand brief, source URLs, and avatar seed.
- `Imagining <Pet>'s main look.` Generate the pet's main reference image. This becomes the visual source of truth.
- `Picturing <Pet>'s poses.` Generate and approve rows `0-8`, write the pet-specific look mechanics plan, then generate rows `9-10`. Only mirror `running-left` if `running-right` clearly works when flipped.
- `Hatching <Pet>.` Assemble the 8x11 atlas, review standard motion plus all 16 look directions, fix every failed cell or row, package `spriteVersionNumber: 2`, and report the output paths.

Only mark a step complete when the real file, image, or decision exists. If this is a repair run, start from the first relevant step instead of restarting the whole checklist.

## Time Budget And Convergence

Aim to complete a normal pet run within 30 minutes while preserving every mandatory acceptance criterion. Treat this as a planning target and an incentive to maximize validated progress per minute, not as permission to weaken QA or package a failing pet.

At the start of the run, allocate an approximate budget:

- preparation: 2 minutes
- base image: 3 minutes
- standard rows: 10 minutes
- look directions: 8 minutes
- final QA and packaging: 5 minutes
- buffer: 2 minutes

Run independent generation jobs concurrently up to the worker limit, start deterministic checks as soon as each dependency is ready, and record actual stage plus repair time. Prefer character and prop constructions that naturally satisfy cell geometry, transparency, component connectivity, and direction semantics; identify likely conflicts such as open interior gaps, detached parts, thin connectors, asymmetric props, or ambiguous faces before row generation.

After every failed attempt:

1. Classify the failure as visual semantics, identity, source-edge geometry, component connectivity, extraction, chroma, continuity, or final visual QA.
2. State the concrete evidence and the root condition the next action will change.
3. Use a deterministic correction for deterministic failures before regenerating imagery.
4. Regenerate only when the source visual is genuinely wrong, and preserve every property that already passed.
5. Compare the new result with the previous one. A repair counts as progress only when it reduces the number or severity of failures without breaking a previously passing gate.

If the same root failure recurs twice, stop varying the prompt and change strategy: strengthen the cardinal pose families or row-level direction instructions, simplify the pose or prop construction, change the deterministic extraction method, or redesign the problematic visual feature. If a repair merely moves a failure to another cell or gate, treat that as a cycle and change strategy immediately.

Use elapsed-time checkpoints:

- At 15 minutes, verify the run is on pace and that the remaining dependency path is bounded.
- At 25 minutes, prioritize the shortest quality-preserving path through remaining blockers and avoid optional polish.
- At 30 minutes, continue only when the remaining work is clearly converging and bounded, such as final validation, one targeted repair, or packaging.
- Keep recording elapsed time, retries, validation failures, and QA cost throughout the run, but do not pause or stop solely because elapsed time crosses 45 or 60 minutes. Continue until the pet passes, the user cancels, or a genuine external blocker prevents further progress.

Never use the time target to skip blind direction QA, labeled semantics, continuity review, atlas validation, final background-cleanup validation, final visual QA, or any other acceptance criterion.

## Default Workflow

1. Prepare a pet run folder and imagegen job manifest:

```bash
SKILL_DIR="${CODEX_HOME:-$HOME/.codex}/skills/hatch-pet"
"$PYTHON" "$SKILL_DIR/scripts/prepare_pet_run.py" \
  --pet-name "<Name>" \
  --description "<one sentence>" \
  --reference /absolute/path/to/reference.png \
  --output-dir /absolute/path/to/run \
  --pet-notes "<stable pet description>" \
  --brand-discovery-file /absolute/path/to/brand-discovery.md \
  --brand-name "<optional researched brand name>" \
  --brand-brief "<optional compact researched brand cue sentence>" \
  --brand-source "https://example.com/source" \
  --style-preset auto \
  --style-notes "<optional freeform style notes>" \
  --background-mode auto \
  --force
```

All arguments above are optional except any flags needed to express user constraints. `--background-mode auto` is the default: prompts request true transparent RGBA output and name the selected chroma key only as a fallback. Use `--background-mode transparent` to reject any opaque result, or `--background-mode chroma` only for legacy/tooling compatibility. For text-only requests, pass the concept through `--pet-notes` and omit `--reference`; `prepare_pet_run.py` will infer a name, description, fallback chroma key, and output directory as needed.
For brand-only requests, run the discovery worker first, save the markdown brief, then pass the brief path through `--brand-discovery-file`, `avatar_seed` through `--pet-notes`, `brand_name` through `--brand-name`, `brand_brief` through `--brand-brief`, and each source URL through repeated `--brand-source`.

2. Inspect `imagegen-jobs.json` for the next ready `$imagegen` jobs. A job is ready when its `status` is not `complete` and every id in `depends_on` is already complete. Prefer reading the manifest directly with `jq` or the editor instead of adding helper scripts for status display:

```bash
jq '.jobs[] | {id, kind, status, depends_on, prompt_file, retry_prompt_file, input_images, output_path, derivation_policy}' /absolute/path/to/run/imagegen-jobs.json
```

3. Generate visual jobs with lightweight workers by default:

- Generate and copy `base` first, using a lightweight base worker.
- Generate and copy `idle` and `running-right` next as the identity and gait check, using one lightweight worker per row.
- Inspect `running-right`; mirror `running-left` only when visual identity, prop placement, markings, lighting, and direction semantics remain correct.
- Generate `running-left` normally with a lightweight worker when mirroring would change meaning or identity.
- Generate the remaining rows with lightweight workers, using every input image listed for each job.
- After standard-row QA, generate `look-cardinals` as one four-pose strip, extract it into `decoded/look-anchors/000.png`, `090.png`, `180.png`, and `270.png`, and approve all four. The `090` and `270` anchors must be unmistakable in viewer/screen coordinates and visibly oppose each other.
- Generate look row 9 as one coherent eight-pose synthesis from the approved cardinal strip, interpolating each intermediate direction as an even step between the adjacent cardinal pose families. Deterministically recover the eight ordered pose groups, crop them, normalize them with one shared scale and baseline, and then run final-cell edge diagnostics plus labeled per-direction QA immediately, before row 10 or final atlas assembly.
- Only after row 9 passes, generate row 10 as one coherent synthesis using the approved cardinal strip and completed row 9.

Keep up to three generation workers active whenever three independent jobs are ready and worker capacity permits. Backfill an available slot immediately instead of waiting for a fixed wave to finish. Use two or one worker when the dependency graph exposes fewer ready jobs. Do not exceed three generation workers without explicit user direction.

For each ready visual job, invoke `$imagegen` with the prompt file listed in `imagegen-jobs.json`, every listed input image with its role label, and the default built-in `image_gen` path unless `$imagegen` itself routes otherwise. The parent agent must keep its own image handling minimal: do not open every generated base or row in the parent rollout. Workers return only the selected source path and a one-sentence QA note; the parent records the selected source path in the manifest.

`prepare_pet_run.py` creates matching layout guides under `references/layout-guides/` for the nine standard rows, two look rows, and four-cardinal strip, and both look rows. Visual jobs attach the matching guide as a layout-only input so the model can follow the correct frame count, spacing, centering, and safe padding. Treat these guides as invisible construction references: generated strips must not include visible boxes, borders, center marks, labels, guide colors, or the guide background.

When generating row strips, keep the identity lock in the row prompt authoritative. Preserve the same style, face, markings, palette, materials, prop design, body proportions, and silhouette from the canonical base. Row jobs attach the layout guide and canonical base by default; the decoded base is kept in the run folder for deterministic processing rather than sent as a redundant generation input.

If `$imagegen` returns a transport-level `Bad Request` for a row, retry that same row once with its generated `retry_prompt_file`. The retry prompt preserves the row id, frame count, transparent-background preference, chroma fallback, canonical-base identity, and state action. Keep the canonical base attached. If the retry still fails, stop and report the failing row and prompt paths instead of switching to any other generation path.

4. After selecting a generated output for a job, copy it into the decoded output path. For `base`, also create the canonical identity reference:

```bash
RUN_DIR=/absolute/path/to/run
JOB_ID=<job-id>
SOURCE=/absolute/path/to/generated-output.png
OUTPUT_REL=$(jq -r --arg id "$JOB_ID" '.jobs[] | select(.id == $id) | .output_path' "$RUN_DIR/imagegen-jobs.json")
mkdir -p "$(dirname "$RUN_DIR/$OUTPUT_REL")"
cp "$SOURCE" "$RUN_DIR/$OUTPUT_REL"
```

```bash
if [ "$JOB_ID" = "base" ]; then mkdir -p "$RUN_DIR/references"; cp "$RUN_DIR/$OUTPUT_REL" "$RUN_DIR/references/canonical-base.png"; fi
```

For every standard `row-strip` job, immediately extract and inspect only that row before marking the job complete. This overlaps deterministic QA and any repair with generation of other ready rows instead of waiting for all nine rows:

```bash
ROW_QA_DIR="$RUN_DIR/qa/rows/$JOB_ID"
"$PYTHON" "$SKILL_DIR/scripts/extract_strip_frames.py" \
  --decoded-dir "$RUN_DIR/decoded" \
  --output-dir "$ROW_QA_DIR/frames" \
  --states "$JOB_ID" \
  --background-mode auto \
  --method auto
"$PYTHON" "$SKILL_DIR/scripts/inspect_frames.py" \
  --frames-root "$ROW_QA_DIR/frames" \
  --json-out "$ROW_QA_DIR/review.json" \
  --states "$JOB_ID" \
  --require-components
```

Treat errors as an immediate repair request. Inspect warnings before accepting the row; do not defer a known clipping, component, or extraction problem to final atlas QA. Confirm each row's detected `background_mode` in `frames-manifest.json`. Native alpha must remain untouched; chroma cleanup belongs to the deterministic post-assembly fallback pass and must not trigger row regeneration. If the only failure is component extraction and the source strip itself has stable scale and placement, use the existing `stable-slots` correction with `--allow-stable-slots` instead of regenerating imagery.

For `look-cardinals`, extract and validate all four anchors before marking the job complete:

```bash
CHROMA_KEY=$(jq -r '.chroma_key.hex' "$RUN_DIR/pet_request.json")
"$PYTHON" "$SKILL_DIR/scripts/extract_cardinal_anchors.py" \
  --strip "$RUN_DIR/decoded/look-cardinals.png" \
  --output-dir "$RUN_DIR/decoded/look-anchors" \
  --background-mode auto \
  --chroma-key "$CHROMA_KEY" \
  --json-out "$RUN_DIR/qa/cardinal-anchors.json"
"$PYTHON" "$SKILL_DIR/scripts/compose_cardinal_anchor_strip.py" \
  --anchors-dir "$RUN_DIR/decoded/look-anchors" \
  --output "$RUN_DIR/decoded/look-anchors-approved.png"
```

Approve the four extracted anchors semantically at final pet size. If one cardinal fails, regenerate that individual anchor with `prompts/look-anchor-repairs/<degree>.md`, replace only its extracted file, and rerun `compose_cardinal_anchor_strip.py`. Both final look rows use the approved cardinal strip, and row 10 additionally uses completed row 9. Mark the job complete only after its required deterministic and visual checks pass:

```bash
UPDATED_AT=$(date -u +%Y-%m-%dT%H:%M:%SZ)
TMP_MANIFEST=$(mktemp)
jq --arg id "$JOB_ID" --arg source "$SOURCE" --arg at "$UPDATED_AT" '(.jobs[] | select(.id == $id)) += {status: "complete", source_path: $source, completed_at: $at}' "$RUN_DIR/imagegen-jobs.json" > "$TMP_MANIFEST"
mv "$TMP_MANIFEST" "$RUN_DIR/imagegen-jobs.json"
```

After `decoded/look-anchors-approved.png` exists and all four cardinals have passed semantic review, mark `look-cardinals` complete. Row 9 then becomes ready immediately.

If the copied source is under `${CODEX_HOME:-$HOME/.codex}/generated_images`, delete the original generated file after the decoded copy exists:

```bash
GENERATED_ROOT="${CODEX_HOME:-$HOME/.codex}/generated_images"
case "$SOURCE" in
  "$GENERATED_ROOT"/*)
    rm -f "$SOURCE"
    rmdir "$(dirname "$SOURCE")" 2>/dev/null || true
    ;;
esac
```

5. Derive `running-left` only when it is visually safe:

```bash
"$PYTHON" "$SKILL_DIR/scripts/derive_running_left_from_running_right.py" \
  --run-dir /absolute/path/to/run \
  --confirm-appropriate-mirror \
  --decision-note "<why mirroring preserves this pet's identity>"
```

That script mirrors each generated frame slot in place so the leftward row preserves the rightward row's temporal order. Do not replace it with a whole-strip mirror that reverses animation timing.

6. When all nine incrementally validated standard row jobs are complete, build and review the intermediate rows `0-8`:

```bash
RUN_DIR=/absolute/path/to/run
mkdir -p "$RUN_DIR/final" "$RUN_DIR/qa"
```

```bash
"$PYTHON" "$SKILL_DIR/scripts/extract_strip_frames.py" \
  --decoded-dir "$RUN_DIR/decoded" \
  --output-dir "$RUN_DIR/frames" \
  --states all \
  --method auto
```

```bash
"$PYTHON" "$SKILL_DIR/scripts/inspect_frames.py" \
  --frames-root "$RUN_DIR/frames" \
  --json-out "$RUN_DIR/qa/review.json" \
  --require-components
```

```bash
"$PYTHON" "$SKILL_DIR/scripts/compose_atlas.py" \
  --frames-root "$RUN_DIR/frames" \
  --output "$RUN_DIR/final/spritesheet.png" \
  --webp-output "$RUN_DIR/final/spritesheet.webp"
```

```bash
"$PYTHON" "$SKILL_DIR/scripts/make_contact_sheet.py" \
  "$RUN_DIR/final/spritesheet.webp" \
  --output "$RUN_DIR/qa/contact-sheet.png"
```

```bash
"$PYTHON" "$SKILL_DIR/scripts/render_animation_previews.py" \
  --frames-root "$RUN_DIR/frames" \
  --output-dir "$RUN_DIR/qa/previews"
```

If the preview GIFs show size popping or baseline jumps caused by per-frame fit-to-cell extraction, and the original row strip itself had stable scale and placement, rerun frame extraction with the explicit row-stability mode and then re-run inspection, atlas composition, contact sheet generation, and previews:

```bash
"$PYTHON" "$SKILL_DIR/scripts/extract_strip_frames.py" \
  --decoded-dir "$RUN_DIR/decoded" \
  --output-dir "$RUN_DIR/frames" \
  --states all \
  --method stable-slots
```

```bash
"$PYTHON" "$SKILL_DIR/scripts/inspect_frames.py" \
  --frames-root "$RUN_DIR/frames" \
  --json-out "$RUN_DIR/qa/review.json" \
  --require-components \
  --allow-stable-slots
```

Use `stable-slots` as a deliberate QA-driven correction, not the default. It should reduce extraction-induced motion pops without hiding clipped wide poses or bad source strips.

Expected intermediate output before the required v2 look stage:

```text
run/
  pet_request.json
  imagegen-jobs.json
  prompts/
  decoded/
  frames/frames-manifest.json
  final/spritesheet.webp
  qa/contact-sheet.png
  qa/previews/*.gif
  qa/review.json
```

Inspect `qa/contact-sheet.png` and `qa/previews/*.gif` before generating look rows. `qa/review.json` plus visual motion review are the intermediate gates. An all-native-alpha standard contact sheet is already color-final. A row detected as chroma may still show key-color fringe before the one final fallback cleanup pass; that fringe alone is not a regeneration reason. Block progress if any standard row changes identity, style, prop handedness, or silhouette, or if playback pops, reverses cadence, faces the wrong direction, or is visually inert. Do not package or clean up yet.

## Required V2 Look-Direction Stage

Every new pet must complete this stage. After standard-row QA passes, write `qa/look-mechanics.md`, approve the four cardinals, synthesize and validate the complete `look-row-9`, then synthesize `look-row-10`. Row 10 becomes ready only after row 9 is deterministically registered, clears post-registration edge checks, and has no semantic or continuity hard failure; reviewed warnings may remain. It uses row 9 plus the approved cardinal strip as continuity evidence.

Before either look row, run the prepared `look-cardinals` strip job, extract its four cells with `extract_cardinal_anchors.py`, and approve them. Do not let a two-row sweep invent its own left/right basis. `090` must point toward the viewer's screen-right edge and `270` toward the viewer's screen-left edge; for faces, the nose tip and pupils must cross to the corresponding side of the head center. If one cardinal is ambiguous, regenerate only that anchor before continuing.

After copying row 9 into `decoded/look-row-9.png`, register and edge-check it with the same transform used by final assembly:

```bash
"$PYTHON" "$SKILL_DIR/scripts/assemble_extended_atlas.py" \
  --base-atlas "$RUN_DIR/final/spritesheet.webp" \
  --look-row-9 "$RUN_DIR/decoded/look-row-9.png" \
  --neutral-cell "$RUN_DIR/frames/idle/00.png" \
  --background-mode auto \
  --chroma-key "$CHROMA_KEY" \
  --chroma-threshold 96 \
  --registered-row-output "$RUN_DIR/qa/look-row-9-registered.png" \
  --registration-manifest-output "$RUN_DIR/qa/look-row-9-registration.json"
```

Inspect the eight registered cells at normal pet size in `000` through `157.5` order. Record the row-9 semantic and adjacent-continuity review, resynthesize the complete row for any hard failure, and mark `look-row-9` complete only after this check passes. That completion makes row 10 ready in `imagegen-jobs.json`.

Generate only the additional look-direction visuals with `$imagegen`:

- Required for new pets: two coherently synthesized 8-frame row strips, one for row 9 and one for row 10.
- Always include the canonical base reference and approved 8x9 contact sheet.
- Keep the body scale, baseline, head size, face, materials, palette, markings, and props consistent with the standard atlas.
- Before prompting, write a short look mechanics decision for this specific pet. First ask: **what is the best natural motion for this character when looking around?** Describe what stays anchored, what leads the gaze, what follows, and what bends, shifts, turns, squashes, stretches, or deforms. Include eyes and props: decide whether eyes rotate as physical eyeballs, irises move on a fixed surface, eyelids reshape, pupils slide, props stay stable, props lag slightly, or props move with the body. Use the character's physical construction as the guide: flexible wire should bend, soft bodies should deform, separate heads should turn, ears/fur/antennae may follow through, physical eyeballs should rotate as whole eye globes in their sockets, flat screen or sticker eyes may change their drawn features on a fixed surface, and rigid or screen-like characters may stay body-locked while facial features move.
- Define a motion budget before generation: each 22.5-degree step should move the same parts by roughly the same visual amount, with no single adjacent pair doing a larger bend, scale change, prop shift, or silhouette change unless the mechanics decision explicitly calls out that asymmetry. Generate row 9 first along `000 -> 090 -> 180`, then give completed row 9 to row 10 so `180` begins exactly one step after `157.5`. Row 10 follows `180 -> 270 -> 000`, and `337.5` in row 10 must land one step before the approved `000` in row 9.
- Do not use whole-sprite rotation, whole-cell rotation, skewing, or affine tilting to fake gaze direction. A direction row built by rotating the entire pet is failed unless the pet is literally a rotating rigid object and the look mechanics decision explicitly says the whole object should rotate. Whole-body tilt that makes the item/background appear to rock left or right is not natural look behavior for ordinary pets.
- Generate a coherent 16-pose gaze set, not 16 unrelated variants. Each direction should feel like a point on one continuous arc around the clock.
- The look mechanics decision must name the natural pose family for each cardinal direction before generation, including which body side becomes more visible, which features become occluded, and how any held prop follows or lags. Do not let the generator infer all directions from one front-facing pose. For characters with a face or head, leftward directions must visibly turn or bend the face/head left, rightward directions must visibly turn or bend right, up/down directions must use the eyes, eyelids, head angle, neck, and upper body as physically appropriate, and diagonals must interpolate between those pose families. A set where every cell remains essentially front-facing, or where all leftward cells still read as front/right-facing, is failed.
- Adjacent direction cells must have continuous body movement. Compare every neighboring pair in direction order, including `157.5 -> 180`, `337.5 -> 000`, and any row-strip boundary. Anchored parts must not jump, flip sides, or teleport between adjacent states; if a body part moves laterally, bends, stretches, or rotates, its position should progress gradually across the intervening directions.
- Do not mirror, re-center, or independently regenerate adjacent direction cells in a way that changes the pet's body registration. Keep a stable anchor, usually the feet/base/torso/lower body or the natural grounded part of the character, and let only the intended look mechanics change around it.
- Every look cell must be visually distinguishable from the neutral/resting frame at final pet size. A direction cell that reads as front-facing, idle, or neutral is failed even when it is non-empty, transparent, and in the correct row/column.
- Cardinal directions must be semantically unmistakable at final pet size, not only numerically or geometrically different. `000` must clearly read as looking up, `090` as looking right, `180` as looking down, and `270` as looking left using the pet's natural mechanism. If the pet has no pupils or physical eyeballs, the head, face surface, eyelids, antennae, ears, or body bend must carry the direction clearly enough that a viewer can identify the cardinal without labels.
- Diagonal and intermediate directions should broadly occupy the intended quadrant and advance naturally through the ordered loop. Minor pupil, nose, eyelid, or feature-placement deviations are not failures by themselves. Reject only gross wrong-quadrant poses, visible reversals, or intermediate cells that break the coherent motion family.
- For eyeless object pets, do not default to literal whole-object rotation just because the object is rigid. First identify whether the object has a natural front, display face, playable surface, readable silhouette, or iconic viewing angle. Preserve that primary readable face unless the user explicitly asks for turntable rotation. Express look direction through subtle object-specific body language: small lean, neck/tip aim, hinge, yaw, pitch, bend, vibration, squash, follow-through, or attached-part motion. The direction should read as attention or orientation, not as the object spinning through all clock angles.
- Preserve the pet's original eye design in look-direction cells. Do not paint new round "googly" eyes, replacement eye whites, floating pupils, detached eye dots, or a second eye layer on top of the source eyes. Eye motion must follow the look mechanics decision. If the pet has physical eyeballs, rotate or redraw the whole eyeball surface so the sclera/eye white, iris, pupil, eyelids, rim, and highlights change together as one physical eye; do not slide only the iris or pupil across a fixed eye white. If the pet has flat printed, sticker, or screen eyes, keep the surface fixed and move/redraw only the features that would physically change on that surface. Do not use procedural pupil/iris compositing unless it is clipped to the original eye aperture and visibly remains inside the head silhouette in every direction. If the original eye design cannot be preserved cleanly, regenerate the whole look cell with the original eye construction instead of compositing new eyes over it.
- Eyes may lead the gaze, but pupil-only motion is an exception, not the default. Use it only when the look mechanics decision explains why whole-eye rotation, eyelid reshaping, body, head, or feature movement would be unnatural for that specific design. Large-eye pets, cyclops pets, and round rigid-body pets with physical eyeballs usually should rotate the whole eye globes, not use pupil-only or googly-eye sliding. Screen-face pets and printed-eye pets may be body-locked with feature motion only. Separate head/body pets should usually combine eye movement with head turn, head tilt, ear/fur/upper-body follow-through, and a stable torso. Rigid object mascots may hinge, flex, slide, or shift attached features without rotating the whole sprite. Flexible wire or paperclip-like mascots should usually keep the feet/base anchored while the upper loop or face area bends toward the target and held props remain stable or lag subtly. Blob or organic pets should usually keep a base anchored while the face/head area stretches subtly toward the target. Other pet types should get their own similarly grounded mechanics.
- Human or humanoid pets need persona-preserving look mechanics. Do not use broad non-rigid raster warps that stretch the skull, brows, mouth, hoodie, hands, or held props just to make a direction read. The eyes should usually lead the gaze with visible eye, eyelid, and eyebrow participation, then the head/neck and upper body should follow subtly; a humanoid row where the head moves but the eyes stay locked in one expression is failed unless the mechanics decision gives a specific physical reason. Use small eye rotation, eyelid/eyebrow changes, head/neck turn, and restrained upper-body follow-through while preserving facial proportions and expression. Programmatic repairs must move anatomical parts with rigid or near-rigid part motion, not displacement fields that change facial feature spacing. For pets with held, worn, or attached props, infer each prop's physical constraints before generating look directions: where it is anchored, whether it is rigid or flexible, whether it leads or lags the body, and how it should occlude or be occluded as the character turns. Props near the face may become more side-on, partly hidden by the head, or reveal different contact points; hand-held tools may swing or lag subtly while staying attached; worn props should follow the body; flexible cords or straps should arc continuously. Do not keep the prop and character in the same front-facing relationship across all look directions. Before packaging a humanoid pet, inspect the normal-size neutral and cardinal cells together and reject identity or facial-proportion drift, or a `270` cardinal that does not unmistakably read as left.
- For every pet, use cardinal anchors instead of trusting a two-row sweep to preserve left/right semantics. Generate `000`, `090`, `180`, and `270` together as one strip, then extract and approve them. The final look rows use those four pose families for direction meaning and interpolate the intermediate directions as a coherent arc. Define directions in viewer/screen coordinates, never character-relative coordinates. Do not require exact pupil or nose placement on intermediate poses; use the ordered loop and overall quadrant motion as the primary evidence.
- Keep motion subtle and pet-safe: preserve volume, baseline, silhouette readability, identity, and material believability. The look pose may involve head, eyes, face, upper body, appendages, or body deformation only when those parts would naturally participate.
- Do not add labels, degree text, arrows, clocks, guide marks, shadows, glows, scenery, or detached effects.

Direction order is fixed:

```text
row 9:  000, 022.5, 045, 067.5, 090, 112.5, 135, 157.5
row 10: 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5
```

`000` means looking up / 12 o'clock. Neutral/front is the pointer deadzone and should fall back to idle unless the target renderer explicitly uses a neutral cell.

### Direction Acceptance Policy

Judge the completed 16-pose loop as an animation family. Cardinals must match their single axis exactly. Intermediate directions should preserve the intended axes, but isolated blind-review uncertainty is evidence for labeled loop review rather than an automatic regeneration trigger.

Hard failures require row regeneration:

- a cardinal anchor is wrong or ambiguous: `000` up, `090` screen-right, `180` down, or `270` screen-left
- a blind cardinal classification contradicts or cannot confirm `000` up, `090` screen-right, `180` down, or `270` screen-left
- labeled normal-size review confirms that an intermediate pose points into the wrong principal quadrant, reverses the loop, or loses a required axis badly enough to read as a different direction
- the ordered loop visibly reverses, backtracks, crosses into the wrong principal quadrant, or contains a conspicuous snap, identity change, scale pop, registration jump, or broken prop attachment
- the source or atlas has a deterministic structural failure, or visual review confirms clipping, an accidental transparent interior hole, a seam band, replacement eyes, or a materially broken sprite
- whole-sprite rotation, deformation, or eye mechanics visibly break the pet's identity or make the motion feel incoherent

Review warnings do not require regeneration by themselves:

- an intermediate pose is similar to a neighbor, a diagonal cue is subtle, or the pet uses less body movement than the ideal mechanics plan
- blind reviewers disagree, return `ambiguous`, or produce an opposite-sign majority for an intermediate direction, provided labeled normal-size review confirms the intended direction and the ordered loop remains coherent
- continuity metrics report a diff, center, area, or alpha-hole candidate without a visible snap, pop, seam, or broken silhouette in the QA sheet or animation loop

Before accepting the v2 atlas, create a focused direction QA sheet showing the neutral/rest frame next to all 16 look cells, labeled by degree and expected direction, at approximately the in-app display size. Run the adjacent continuity measurement separately and treat its findings as motion-review evidence, not automatic direction failures.

Perform an explicit semantic review for every direction and record `pass`, `warning`, or `fail`, plus separate visible evidence for its horizontal and vertical axes. A warning may accept blind-review uncertainty for an intermediate pose when labeled normal-size review confirms the intended axes and the ordered loop remains coherent. It may not waive a wrong or ambiguous cardinal, a labeled wrong-quadrant pose, or a visible reversal. If a direction receives `fail`, strengthen the containing row's instructions and resynthesize that complete coherent row. Never replace the final normalized cell directly.

Look rows must have transparent backgrounds after assembly. Do not accept or install the pet if `qa/look-directions.png` or `qa/contact-sheet-extended.png` shows opaque panels behind any look cell. Native-alpha rows must preserve their visible colors exactly. If a fallback chroma row contains slight key-color lighting variation, rerun assembly with a wider `--chroma-threshold` instead of packaging the opaque key color. Validation must pass without opaque-background errors.

Extended look cells must also keep the same practical scale and body registration as the neutral/default pet. Do not accept a direction set where neutral/default is noticeably larger than the look cells, where the look cells appear to float above the baseline, or where the pet slides left/right within its 192x208 cell while only changing gaze. Extended assembly recovers each pose group from the complete original-resolution row and computes one shared scale from height plus every pose's left and right extents around the shared lower-body anchor, so asymmetric poses remain inside the final cell after alignment. It resizes each original crop exactly once and never enlarges an already-resampled cell. The neutral frame supplies the target body height, lower-body anchor, and baseline. Pass `--neutral-cell` when an external neutral frame is available; otherwise the assembler falls back to the populated neutral/default slot or first visible idle frame in the base atlas. If the focused QA sheet still shows scale or placement drift, repair before packaging.

Assemble the extended atlas from two generated row strips:

Use `--background-mode auto` for every generated source. It preserves real alpha and only uses the run's selected chroma key when a source is opaque. Pass the standard `frames-manifest.json` into final assembly so the atlas records whether cleanup must be native-alpha-only, chroma, or mixed.

```bash
CHROMA_KEY=$(jq -r '.chroma_key.hex' "$RUN_DIR/pet_request.json")
```

Extended assembly reuses the approved registered row-9 cells and persisted scale exactly. It preserves native alpha or removes fallback chroma from row 10, detects its eight separated pose groups, preserves their left-to-right order, crops each complete pose without fixed-slot slicing, and fits them against the same neutral-frame scale, lower-body anchor, and baseline. Only then does it apply the near-edge clipping check to row 10's normalized `192x208` cells. If pose-group recovery is ambiguous, or if row 10 cannot fit the approved row-9 transform without failing the post-registration edge check, resynthesize row 10; do not rescale row 9, patch an individual final cell, or relax the threshold for acceptance.

```bash
"$PYTHON" "$SKILL_DIR/scripts/assemble_extended_atlas.py" \
  --base-atlas "$RUN_DIR/final/spritesheet.webp" \
  --registered-row-9 "$RUN_DIR/qa/look-row-9-registered.png" \
  --row-9-registration "$RUN_DIR/qa/look-row-9-registration.json" \
  --look-row-10 "$RUN_DIR/decoded/look-row-10.png" \
  --neutral-cell "$RUN_DIR/frames/idle/00.png" \
  --background-mode auto \
  --base-background-manifest "$RUN_DIR/frames/frames-manifest.json" \
  --chroma-key "$CHROMA_KEY" \
  --chroma-threshold 96 \
  --output "$RUN_DIR/final/spritesheet-extended.png" \
  --webp-output "$RUN_DIR/final/spritesheet-extended.webp" \
  --manifest-output "$RUN_DIR/final/spritesheet-extended.json"
```

For repair or upgrade of a user-provided 16-cell source that was already approved as one coherent set, individual-cell assembly remains available. Do not use this path for newly generated repair cells:

```bash
"$PYTHON" "$SKILL_DIR/scripts/assemble_extended_atlas.py" \
  --base-atlas "$RUN_DIR/final/spritesheet.webp" \
  --look-cells-dir /absolute/path/to/look-cells \
  --neutral-cell "$RUN_DIR/frames/idle/00.png" \
  --background-mode auto \
  --base-background-manifest "$RUN_DIR/frames/frames-manifest.json" \
  --chroma-key "$CHROMA_KEY" \
  --chroma-threshold 96 \
  --output "$RUN_DIR/final/spritesheet-extended.png" \
  --webp-output "$RUN_DIR/final/spritesheet-extended.webp" \
  --manifest-output "$RUN_DIR/final/spritesheet-extended.json"
```

Run exactly one deterministic final cleanup invocation. The final manifest selects `native-alpha` when every source preserved real transparency; that path only clears hidden RGB and never changes visible colors. Chroma or mixed input selects the legacy spill-suppression path:

```bash
CLEANUP_MODE=$(jq -r '.cleanupMode' "$RUN_DIR/final/spritesheet-extended.json")
CLEANUP_ARGS=(--background-mode "$CLEANUP_MODE" --source-manifest "$RUN_DIR/final/spritesheet-extended.json")
if [ "$CLEANUP_MODE" != "native-alpha" ]; then CLEANUP_ARGS+=(--chroma-key "$CHROMA_KEY"); fi
"$PYTHON" "$SKILL_DIR/scripts/despill_chroma_edges.py" \
  "$RUN_DIR/final/spritesheet-extended.png" \
  --output "$RUN_DIR/final/spritesheet-extended.png" \
  --webp-output "$RUN_DIR/final/spritesheet-extended.webp" \
  "${CLEANUP_ARGS[@]}" \
  --json-out "$RUN_DIR/qa/chroma-despill-extended.json"
```

Treat `qa/chroma-despill-extended.json` as the authoritative final background-cleanup report. Native alpha must report `algorithm: native-alpha-pass-through`, `alpha_preserved: true`, and zero spill suppression. Chroma/mixed input must report the edge-local spill algorithm. When the matching cleanup and `validate_atlas.py --require-v2` pass, do not add another cleanup pass. If either deterministic check fails, stop with a pipeline failure instead of retrying image generation.

This is the only final-cleanup invocation in the workflow. The intermediate 8×9 atlas is never despilled; rows `0-8` and look rows `9-10` are processed together exactly once in the completed 8×11 atlas.

```bash
VALIDATE_CHROMA_ARGS=()
if [ "$CLEANUP_MODE" != "native-alpha" ]; then VALIDATE_CHROMA_ARGS=(--chroma-key "$CHROMA_KEY"); fi
"$PYTHON" "$SKILL_DIR/scripts/validate_atlas.py" \
  "$RUN_DIR/final/spritesheet-extended.webp" \
  --json-out "$RUN_DIR/final/validation-extended.json" \
  --background-manifest "$RUN_DIR/final/spritesheet-extended.json" \
  "${VALIDATE_CHROMA_ARGS[@]}" \
  --require-v2
```

```bash
"$PYTHON" "$SKILL_DIR/scripts/make_contact_sheet.py" \
  "$RUN_DIR/final/spritesheet-extended.webp" \
  --output "$RUN_DIR/qa/contact-sheet-extended.png"
```

Create the focused direction QA sheet:

```bash
"$PYTHON" "$SKILL_DIR/scripts/make_direction_qa_sheet.py" \
  "$RUN_DIR/final/spritesheet-extended.webp" \
  --output "$RUN_DIR/qa/look-directions.png"
```

Create the blind horizontal-and-vertical axis challenge and keep its answer key away from the visual QA worker:

```bash
"$PYTHON" "$SKILL_DIR/scripts/make_direction_blind_qa_sheet.py" \
  "$RUN_DIR/final/spritesheet-extended.webp" \
  --output "$RUN_DIR/qa/direction-blind-pairs.png" \
  --answer-key "$RUN_DIR/qa/direction-blind-answer-key.json"
```

Give three fresh isolated workers only `qa/direction-blind-pairs.png`. Each row states whether to classify the horizontal or vertical axis. Every worker must classify A and B as `screen-left`, `screen-right`, `up`, `down`, or `ambiguous` as appropriate, without seeing degree labels, expected directions, the labeled direction sheet, the answer key, or another worker's verdicts. Write their classifications separately, then combine them by strict per-cell majority:

```bash
"$PYTHON" "$SKILL_DIR/scripts/combine_direction_blind_verdicts.py" \
  --verdicts "$RUN_DIR/qa/direction-blind-verdicts-1.json" \
  --verdicts "$RUN_DIR/qa/direction-blind-verdicts-2.json" \
  --verdicts "$RUN_DIR/qa/direction-blind-verdicts-3.json" \
  --json-out "$RUN_DIR/qa/direction-blind-verdicts.json"
```

Apply the hidden answer key only to the consensus verdict:

```bash
"$PYTHON" "$SKILL_DIR/scripts/validate_direction_blind_verdicts.py" \
  --answer-key "$RUN_DIR/qa/direction-blind-answer-key.json" \
  --verdicts "$RUN_DIR/qa/direction-blind-verdicts.json" \
  --json-out "$RUN_DIR/qa/direction-blind-validation.json"
```

The hidden answer key contains seven horizontal pairs and seven vertical pairs. The cardinal pairs (`000` vs `180` and `090` vs `270`) are hard gates: a mismatch or ambiguous majority keeps validation at `ok: false`. All intermediate pairs are review gates: mismatches, same-direction votes, and ambiguous majorities are preserved as warnings while validation remains `ok: true`. The blind pass is mandatory, but intermediate warnings are resolved by labeled normal-size loop review instead of repeated regeneration by default.

### Blind Review Severity Resolution

After receiving a blind or final visual QA `pass`/`fail` result:

1. If it passes, continue immediately.
2. If it fails, inspect the worker's semantic reasons, repair note, labeled direction sheet, `qa/direction-semantics.json`, and `qa/look-continuity.json` before regenerating anything.
3. Classify the failure as `major` or `minor`:
   - `major`: wrong or ambiguous cardinal; labeled normal-size review confirms a wrong principal quadrant or visible reversal; conspicuous snap, scale pop, identity change, broken attachment, clipping, interior seam/hole, or deterministic validation failure.
   - `minor`: exact pupil or nose placement differs from the numerical ideal; a near-vertical horizontal cue is subtle; isolated reviewers disagree or return `ambiguous`; an intermediate blind majority conflicts but the labeled ordered loop still reads correctly; continuity metrics warn without a visible defect.
4. Major failures require repair. Minor failures may be overridden and the installation pipeline continues.
5. Record every override in `qa/blind-review-resolution.json` with `decision: "accept"`, `severity: "minor"`, the failed checks, the labeled/continuity evidence that makes them acceptable, and `reviewed_by: "parent"` or `"user"`. Never override a major failure.

An override is a deliberate visual judgment, not a way to silence missing evidence. The blind sheet, consensus verdicts, validation output, labeled semantics, continuity report, and resolution file all remain in the final QA artifacts.

Measure adjacent direction continuity:

```bash
"$PYTHON" "$SKILL_DIR/scripts/measure_direction_continuity.py" \
  "$RUN_DIR/final/spritesheet-extended.webp" \
  --json-out "$RUN_DIR/qa/look-continuity.json"
```

Visually QA `qa/contact-sheet-extended.png`, `qa/look-directions.png`, and `qa/look-continuity.json` before accepting. Inspect the 16 normal-size look cells as an ordered loop, not only as isolated stills. For every direction label, compare the expected direction to the visible gaze/body direction and record `pass`, `warning`, or `fail` in `qa/direction-semantics.json`. Reject only the hard failures in the Direction Acceptance Policy. Record subtler semantic or metric concerns as warnings and accept them when the loop remains cohesive, readable, identity-preserving, and visually pleasing at normal pet size.

If a blind or final visual QA worker returns `fail`, apply Blind Review Severity Resolution before queuing a repair. Continue packaging when the failure is minor and `qa/blind-review-resolution.json` records the accepted override.

Only after all deterministic and visual QA passes, package the approved extended spritesheet as a v2 pet. `spriteVersionNumber: 2` is mandatory; without it the app defaults to the 9-row v1 contract and rejects the 2288-pixel-tall asset.

```bash
PET_ID=$(jq -r '.pet_id' "$RUN_DIR/pet_request.json")
DISPLAY_NAME=$(jq -r '.display_name' "$RUN_DIR/pet_request.json")
DESCRIPTION=$(jq -r '.description' "$RUN_DIR/pet_request.json")
PET_DIR="${CODEX_HOME:-$HOME/.codex}/pets/$PET_ID"
mkdir -p "$PET_DIR"
cp "$RUN_DIR/final/spritesheet-extended.webp" "$PET_DIR/spritesheet.webp"
jq -n --arg id "$PET_ID" --arg displayName "$DISPLAY_NAME" --arg description "$DESCRIPTION" \
  '{id: $id, displayName: $displayName, description: $description, spriteVersionNumber: 2, spritesheetPath: "spritesheet.webp"}' \
  > "$PET_DIR/pet.json"
```

Write `qa/run-summary.json` after packaging:

```bash
jq -n --arg run_dir "$RUN_DIR" --arg spritesheet "$RUN_DIR/final/spritesheet-extended.webp" --arg validation "$RUN_DIR/final/validation-extended.json" --arg chroma_despill "$RUN_DIR/qa/chroma-despill-extended.json" --arg contact_sheet "$RUN_DIR/qa/contact-sheet-extended.png" --arg direction_sheet "$RUN_DIR/qa/look-directions.png" --arg direction_semantics "$RUN_DIR/qa/direction-semantics.json" --arg blind_direction_validation "$RUN_DIR/qa/direction-blind-validation.json" --arg blind_review_resolution "$RUN_DIR/qa/blind-review-resolution.json" --arg continuity "$RUN_DIR/qa/look-continuity.json" --arg review "$RUN_DIR/qa/review.json" --arg package "$PET_DIR" '{ok: true, spriteVersionNumber: 2, run_dir: $run_dir, spritesheet: $spritesheet, validation: $validation, chroma_despill: $chroma_despill, contact_sheet: $contact_sheet, direction_sheet: $direction_sheet, direction_semantics: $direction_semantics, blind_direction_validation: $blind_direction_validation, blind_review_resolution: $blind_review_resolution, continuity: $continuity, review: $review, package: $package}' > "$RUN_DIR/qa/run-summary.json"
```

After all QA and packaging succeed, keep `pet_request.json`, `final/spritesheet-extended.webp`, `final/validation-extended.json`, `qa/chroma-despill-extended.json`, `qa/contact-sheet-extended.png`, `qa/look-directions.png`, `qa/direction-semantics.json`, `qa/direction-blind-pairs.png`, `qa/direction-blind-answer-key.json`, `qa/direction-blind-verdicts.json`, `qa/direction-blind-validation.json`, `qa/blind-review-resolution.json` when an override was used, `qa/look-continuity.json`, `qa/previews/`, `qa/review.json`, and `qa/run-summary.json`. Remove prompts, layout guides, generated row strips, extracted frames, PNG intermediates, the 8x9 intermediate atlas, and the imagegen job manifest unless the user wants debug artifacts.

## Lightweight Visual Workers

Use lightweight subagents for image-heavy work by default. This bounds each `$imagegen` rollout to one selected image, keeps contact-sheet vision payloads out of the parent thread, and reduces cost while preserving the full v2 contract.

## Subagent Delegation

Use lightweight workers unless the user specifically prohibits delegation.

Parent responsibilities:

- run the brand discovery worker before preparation when the user provides a bare brand/product/company/prospect name
- prepare the run and inspect `imagegen-jobs.json`
- assign the base job, all standard rows, the four-cardinal strip, coherent look rows, blind direction QA, and final contact-sheet QA to lightweight workers
- copy selected worker outputs into their decoded paths and mark jobs complete in `imagegen-jobs.json`
- create `references/canonical-base.png` from the selected base output
- run the approved `running-left` mirror derivation when appropriate
- write the pet-specific look mechanics plan after standard-row QA
- approve the cardinal semantics and compose `decoded/look-anchors-approved.png`
- require immediate deterministic registration, post-registration edge QA, and labeled semantic QA after each coherent look-row generation
- run deterministic v2 assembly, packaging, repair regeneration, and cleanup

Base worker responsibilities:

- handle only the `base` job
- read `prompts/base-pet.md` and use any listed reference images
- use `$imagegen` only
- honor any compact brand inspiration line in the prompt as broad visual/personality guidance, without copying logos, readable marks, UI screenshots, slogans, or text
- return only `selected_source=/absolute/path/to/selected-output.png` and `qa_note=<one sentence>`

Row worker responsibilities:

- handle exactly one row job
- read the row prompt and use all listed input images
- use `$imagegen` only; do not draw, edit, tile, or synthesize sprites locally
- perform a quick visual sanity check for frame count, identity, transparent or flat fallback background, spacing, clipping, and detached effects
- enforce the row prompt's transparency and effects rules, including no detached effects, no wave marks for `waving`, no speed lines or dust for directional running rows, no literal foot-running for the non-directional `running` row, and only attached opaque sprite-like tears/smoke/stars when allowed by the state prompt
- for a `look-row-strip`, synthesize the complete row as one coherent family from the approved cardinals and never independently restyle individual cells
- for a `look-row-strip`, verify the output contains eight separated pose groups in the required order with no overlap or outer-canvas clipping; deterministic assembly owns exact cell cropping, one shared scale and baseline, recentering, and final-cell edge validation
- return only `selected_source=/absolute/path/to/selected-output.png` and `qa_note=<one sentence>`

Blind direction QA worker responsibilities:

- inspect only `qa/direction-blind-pairs.png`; do not provide the labeled direction sheet, atlas, prompt, degree order, prior verdicts, or hidden answer key
- classify A and B for every pair independently on the axis named in the sheet: `screen-left`, `screen-right`, `up`, `down`, or `ambiguous`, using visible pupils, nose, face surface, head turn, or the pet's natural aiming feature
- never infer from pair order; use `ambiguous` honestly when the requested axis is unreadable. Cardinal ambiguity blocks packaging; intermediate ambiguity becomes labeled-review evidence.
- never inspect or receive another blind worker's classifications; the parent combines exactly three isolated verdict files with `combine_direction_blind_verdicts.py`
- return JSON-ready pair classifications only; do not edit files or inspect unrelated artifacts

Final visual QA worker responsibilities:

- inspect the standard and extended contact sheets, direction QA sheet, row GIFs, semantic verdicts, continuity results, and v2 validation
- verify all 11 rows match the Codex app contract and the same pet identity
- return a compact result: `visual_qa=pass` or `visual_qa=fail`, plus row-specific repair notes when failing
- do not edit files, queue repairs, package, or clean up

Model choice for workers:

- Prefer a smaller capable model for brand discovery, since it returns a compact research brief rather than doing orchestration.
- Prefer a smaller capable model for visual workers, such as `gpt-5.4-mini` with medium reasoning, when model override is available.
- Use the parent/default model only for orchestration or when a smaller worker model is unavailable.
- Dynamically keep up to three generation workers active while at least three independent jobs are ready and capacity permits; backfill slots as workers finish. Use fewer workers when dependencies expose fewer jobs. Run final visual QA as a single worker after deterministic image processing. Close workers after their result has been consumed.
- Once `look-cardinals` passes, start row 9 immediately. Start row 10 only after row 9 has passed deterministic registration, post-registration edge, semantic, and continuity QA; give row 10 the completed row 9 strip as continuity evidence.

Use this base worker prompt:

```text
Generate the hatch-pet base image.

Run dir: <absolute run dir>
Job id: base
Prompt file: <absolute base prompt file>
Input images:
- <absolute path> — <role>

Use $imagegen only. Read the base prompt and attach every listed input image. If the prompt contains brand inspiration, use it only as broad mascot-safe guidance; do not copy logos, readable marks, UI screenshots, slogans, or text. Before returning, visually check that the result is one centered full-body pet on true transparent RGBA as requested, or on the exact flat fallback chroma only when native alpha was unavailable, with no text, scenery, shadows, or detached effects.

Do not edit manifests, copy into decoded, mark jobs complete, generate rows, run image-processing scripts, repair, package, or open unrelated files.
Do not include Markdown image previews, base64, or extra attachments in the final response.

Return exactly:
selected_source=/absolute/path/to/selected-output.png
qa_note=<one sentence>
```

Use this cardinal-strip worker prompt:

```text
Generate one hatch-pet four-cardinal anchor strip.

Run dir: <absolute run dir>
Job id: look-cardinals
Prompt file: <absolute prompt file>
Input images:
- <absolute path> — <role>

Use $imagegen only. Read the cardinal-strip prompt and attach every listed input image. Read `qa/look-mechanics.md`. Screen-left and screen-right are viewer/image coordinates, never character-relative coordinates. Before returning, verify all four slots in order without relying on their labels: for a face, cite the nose-tip and pupil positions relative to the head center; for other pets, cite the natural aiming feature. Any ambiguous cardinal fails the strip.

Do not edit manifests, copy files, generate rows, assemble, package, or inspect unrelated files. Do not include image previews or attachments in the final response.

Return exactly:
selected_source=/absolute/path/to/selected-output.png
qa_note=<one sentence with concrete landmark evidence for all four cardinals>
```

Use this row worker prompt:

```text
Generate one hatch-pet row.

Run dir: <absolute run dir>
Row id: <row-id>
Prompt file: <absolute prompt file>
Retry prompt file: <absolute retry prompt file>
Input images:
- <absolute path> — <role>
- <absolute path> — <role>

Use $imagegen only. Read the row prompt and attach every listed input image. For a `look-row-strip` job, also read and obey `qa/look-mechanics.md`; use the approved cardinal strip for direction meaning and draw all eight cells together as one coherent family with even intermediate steps. Never paste, reuse, or independently restyle individual cells. If imagegen returns Bad Request, retry once with the retry prompt and the same input images.

Before returning, visually check: exact frame count, same pet identity as canonical base, true transparent RGBA or the exact flat fallback chroma, complete separated unclipped poses, and no detached effects or guide marks. For a `look-row-strip`, verify there are eight separated pose groups in the required left-to-right order, neighboring poses do not overlap, no foreground is cropped at the outer canvas edge, and the generated family keeps a consistent scale and baseline. Exact cell cropping, shared-scale normalization, recentering, and final-cell edge validation happen deterministically after generation. The prompt's transparency and effects rules are mandatory: no detached effects, no wave marks for `waving`, no speed lines or dust for directional running rows, no literal foot-running for the non-directional `running` row, and only attached opaque sprite-like tears/smoke/stars when allowed by the state prompt.

Do not edit manifests, copy into decoded, mark jobs complete, mirror rows, run image-processing scripts, repair, package, or open unrelated files.
Do not include Markdown image previews, base64, or extra attachments in the final response.

Return exactly:
selected_source=/absolute/path/to/selected-output.png
qa_note=<one sentence>
```

Use this blind direction QA worker prompt in a fresh worker that has not seen the labeled direction sheet. Spawn it without prior conversation context when the worker system supports context isolation (for example, `fork_turns="none"`):

```text
Classify one required gaze axis in an unlabeled hatch-pet A/B challenge.

Blind sheet: <absolute run dir>/qa/direction-blind-pairs.png

Inspect only this sheet. Do not open the atlas, labeled direction sheet, prompts, prior QA, degree order, answer key, or any other file.

Each row contains two normal-size pet cells labeled A and B and identifies the axis to judge. For a horizontal row, classify each cell as exactly `screen-left`, `screen-right`, or `ambiguous`. For a vertical row, classify each cell as exactly `up`, `down`, or `ambiguous`.

Judge only what is readable at the displayed pet size. Use visible landmarks such as pupils, nose tip relative to head center, face surface, head turn, eyelids, or the pet’s natural aiming feature. If the requested axis is not definite without enlarging or guessing, classify it as `ambiguous`; do not invent confidence.

Do not infer from A/B order. If A and B point the same way, report the same classification; do not force one left and one right.

Return exactly one JSON object and nothing else:
{"pairs":[{"pair":"horizontal-1|vertical-1","A":"screen-left|screen-right|up|down|ambiguous","B":"screen-left|screen-right|up|down|ambiguous","reason":"short landmark evidence"}]}

Include every pair shown in the sheet.
```

Use this final visual QA worker prompt:

```text
Visually QA one finalized hatch-pet contact sheet.

Run dir: <absolute run dir>
Contact sheet: <absolute run dir>/qa/contact-sheet.png
V2 contact sheet: <absolute run dir>/qa/contact-sheet-extended.png
Focused direction QA sheet: <absolute run dir>/qa/look-directions.png
Direction semantics JSON: <absolute run dir>/qa/direction-semantics.json
Blind direction validation JSON: <absolute run dir>/qa/direction-blind-validation.json
Look continuity JSON: <absolute run dir>/qa/look-continuity.json
Preview dir: <absolute run dir>/qa/previews
Review JSON: <absolute run dir>/qa/review.json
V2 validation JSON: <absolute run dir>/final/validation-extended.json

Inspect the contact sheet and the preview GIFs visually. Confirm the same pet identity, style, palette, silhouette, face, proportions, and props across all rows:
0 idle, 1 running-right, 2 running-left, 3 waving, 4 jumping, 5 failed, 6 waiting, 7 running, 8 review.

Require `qa/direction-blind-validation.json` to have `ok: true`, or require an explicit accepted minor override in `qa/blind-review-resolution.json`. Cardinal mismatches or ambiguity are major and block packaging. For intermediate warnings or a worker-level fail, inspect the labeled normal-size pose and ordered loop; accept when the issue is minor and there is no wrong-quadrant pose or reversal.

Inspect the 16 direction cells as a labeled ordered loop against the neutral frame and review `qa/look-continuity.json`. Produce a `pass`, `warning`, or `fail` semantic verdict for every expected direction: `000 up`, `022.5 up-right`, `045 up-right`, `067.5 up-right`, `090 right`, `112.5 down-right`, `135 down-right`, `157.5 down-right`, `180 down`, `202.5 down-left`, `225 down-left`, `247.5 down-left`, `270 left`, `292.5 up-left`, `315 up-left`, and `337.5 up-left`. Record separate horizontal and vertical landmark evidence for every diagonal. Fail wrong or ambiguous cardinals, labeled wrong-quadrant poses, and visible reversals. Record blind uncertainty on intermediate poses as warnings when labeled review and loop context confirm the intended direction.

Fail rows with identity drift, missing/blank frames, copied guide marks, white/nontransparent backgrounds, cropped bodies, slot overlap, detached effects, shadows/glows/smears/dust, motion that does not match the row state, unintended size popping, wrong facing direction, reversed or non-alternating gait, or idle loops that are effectively static. Native-alpha rows are color-final and must not show a baked matte. Judge fallback chroma only on the cleaned extended contact sheet, not the pre-cleanup standard contact sheet. Do not fail or retry a fallback row for key fringe after the matching final cleanup report and v2 atlas validation pass; those deterministic results are authoritative.

Do not edit files, queue repairs, package, clean up, or inspect unrelated files.

Return exactly:
visual_qa=pass|fail
qa_note=<one sentence summary>
direction_semantics=<semicolon-separated labels with pass/warning/fail and short visual reason>
review_warnings=<semicolon-separated accepted warnings, or none>
repair_rows=<comma-separated row ids, or none>
repair_notes=<short row-specific notes, or none>
```

## Repair Workflow

If frame inspection or final visual QA fails, read `qa/review.json`, regenerate the smallest failing row, copy the replacement row into the same decoded output path, and keep that job marked complete with the new `source_path` and `completed_at`. Repair the failed row, not the whole sheet.

## Rules

- Keep `$imagegen` as the primary generation layer.
- For brand/product/company/prospect requests without a concrete avatar description or reference image, run brand discovery before base generation and pass only the compact brief into the run.
- Use `$imagegen` as the only visual generation layer. Do not invoke image APIs, image CLIs, local raster generators, or one-off generation scripts from this skill.
- Keep reference images attached/visible for `$imagegen` whenever the chosen path supports references.
- Attach the row's `references/layout-guides/<state>.png` image to every row-strip job as a layout-only guide, and do not accept outputs that copy guide pixels.
- Use lightweight visual workers for base generation, row-strip visual generation, and final contact-sheet QA by default; the parent owns manifest updates, deterministic image scripts, packaging, and cleanup.
- Generate every normal visual job with `$imagegen`: base plus all row strips that are not explicitly approved `running-left` mirror derivations.
- Treat only the base job as eligible for prompt-only generation; every row job must attach its listed grounding images.
- Generate `running-right` before deciding whether `running-left` can be mirrored.
- When `running-left` is mirrored, preserve frame order and timing semantics; derive it through the deterministic script instead of mirroring an entire strip wholesale.
- Do not derive or reuse `waiting`, `running`, `failed`, `review`, `jumping`, or `waving` from another state; each has distinct app semantics and must be generated as its own row.
- Generate look row 9 directly from the approved cardinal strip, then generate row 10 only after row 9 clears deterministic registration and post-registration edge QA and has no semantic or continuity hard failure. Reviewed warnings do not block row 10. Both rows attach the cardinal strip, and row 10 must also attach completed row 9.
- Final look rows must each originate from one coherent 8-frame row generation. Individually generated repair cells may never be copied into the final atlas.
- If one look direction fails, strengthen the containing row's direction instructions and resynthesize the complete row. Do not patch the final cell directly, even when deterministic assembly supports individual-cell input.
- Deterministically register each coherent look row, then run final-cell edge diagnostics and explicit labeled semantics immediately after generation, before expensive final atlas assembly. Run blind horizontal-and-vertical axis QA as soon as both coherent rows exist.
- Never substitute locally drawn, tiled, transformed, or code-generated row strips for missing `$imagegen` outputs.
- Only mark a visual job complete after its selected output has been copied into the decoded output path.
- Never mark a failed coherent row, diagnostic iteration, or one-off repair cell as packaging eligible.
- Do not rely on generated images for exact atlas geometry; use this skill's deterministic image scripts.
- Prefer native alpha and keep `--background-mode auto` unless the user or source contract explicitly requires transparent-only or legacy chroma. Use the fallback chroma key stored in `pet_request.json`; never force a fixed green screen.
- Keep the pet's silhouette, face, materials, palette, style, and props consistent across all rows.
- Treat visual identity or style drift as a blocker even when deterministic validation has no errors.
- Treat a contact sheet that shows cropped references, repeated tiles, white cell backgrounds, or non-sprite fragments as failed.
- Treat preview GIFs that show extraction-induced size popping, reversed directional timing, wrong facing direction, or inert idle loops as failed.
- Apply the Direction Acceptance Policy to look cells. Cardinals are hard gates. Intermediate blind uncertainty is a warning unless labeled normal-size review confirms a wrong quadrant, missing axis, or loop reversal.
- Treat a missing explicit per-direction semantic gaze review as failed even when the focused QA sheet and continuity JSON exist.
- Treat missing `qa/direction-semantics.json` as failed. The file must include every expected direction with `verdict`, `expected`, `observed`, and `reason` fields. Packaging requires no `fail` verdicts; reviewed `warning` verdicts are allowed.
- Treat missing or failed `qa/direction-blind-validation.json` as failed. Each of the three isolated blind reviewers must see only the randomized A/B sheet, never degree labels, the answer key, or another verdict. Cardinal mismatches or ambiguity fail validation; intermediate mismatches or ambiguity remain review warnings.
- Never use the same worker for blind A/B classification after it has seen the labeled direction sheet or direction prompts. Label-conditioned classification is not independent evidence.
- Do not let the parent agent self-approve a repaired look direction. Run an independent final visual QA worker on `qa/look-directions.png` or ask the user to inspect it before packaging.
- After an independent blind or final QA fail, the parent may override only a minor issue under Blind Review Severity Resolution. Record the evidence in `qa/blind-review-resolution.json`; never override a major failure.
- For humanoid cardinal verdicts, record concrete screen-coordinate landmark evidence in `qa/direction-semantics.json`. Intermediate verdicts may use holistic head, face, posture, and ordered-loop evidence; exact pupil or nose placement is advisory rather than mandatory.
- Treat look rows that rotate, skew, or tilt the whole sprite to fake gaze as failed unless the pet is literally a rotating object and the look mechanics decision explicitly justifies whole-object rotation.
- Treat pupil-only motion or underused natural mechanics as a warning unless it visibly breaks identity, direction meaning, or loop cohesion.
- Treat adjacent continuity metrics as review evidence. Fail only when visual QA confirms a conspicuous snap, pop, registration jump, identity change, broken silhouette, or semantic discontinuity.
- Treat forbidden detached effects, shadows, glows, smears, dust, landing marks, wave marks, speed lines, or motion trails as failed rows. Native-alpha visible colors are never chroma-cleaned. Chroma-key-adjacent artifacts from fallback rows are handled only by the single deterministic final cleanup and never trigger image retries after that pass reports success.
- Treat `qa/review.json` errors as blockers. Warnings require visual review.

## Acceptance Criteria

- Final atlas is PNG or WebP, exactly `1536x2288`, and based on `192x208` cells. The `1536x1872` standard atlas is intermediate-only.
- `pet.json` contains `spriteVersionNumber: 2`, the final cleanup report has `ok: true`, and the packaged spritesheet passes `validate_atlas.py --require-v2`. An all-native-alpha atlas uses no chroma-key validator argument and preserves visible key-like pet colors; chroma/mixed input validates against the run's fallback key.
- Used cells are non-empty and unused cells are fully transparent.
- Atlas follows the row/frame counts in `references/animation-rows.md`.
- The four-cardinal strip has been deterministically extracted, its clipping report passes, and all four anchors are semantically approved before look-row generation.
- Both coherent look rows use `decoded/look-anchors-approved.png` as the direction basis, interpolate all intermediate directions as even 22.5-degree steps, and preserve the fixed clockwise order.
- Deterministic pose-group registration, post-registration final-cell edge diagnostics, and labeled per-direction semantic QA pass immediately on each coherent source row before final atlas assembly; blind horizontal-and-vertical axis QA runs after both rows exist.
- Contact sheet and per-row motion previews have been produced and inspected by a lightweight visual QA worker.
- A focused neutral-plus-16-directions QA sheet has been produced and inspected before packaging.
- A randomized unlabeled horizontal-and-vertical axis pair sheet has been classified by three isolated blind workers and combined by strict majority. Both cardinal pairs pass. `qa/direction-blind-validation.json` has `ok: true`, or a worker-level/intermediate failure has an accepted minor resolution in `qa/blind-review-resolution.json` backed by labeled and continuity evidence.
- Every expected direction has an explicit `pass`, `warning`, or `fail` semantic verdict with horizontal and vertical axis evidence where applicable; no wrong cardinal, labeled wrong-quadrant pose, or visible reversal remains.
- `qa/direction-semantics.json` records verdicts for all 16 directions from an independent visual QA worker or explicit user inspection, including review notes for accepted warnings.
- `qa/look-continuity.json` has been reviewed; metric warnings are acceptable when the normal-size ordered loop has no visible snap, pop, identity change, or semantic discontinuity.
- `qa/review.json` has no errors.
- Row-by-row review confirms the animation cycles are complete enough for the Codex app.
- Motion previews do not show unintended size popping, reversed directional cadence, or wrong row semantics.
- Look directions follow the fixed clockwise order and form a cohesive, readable loop at normal pet size. Cardinals must be unmistakable. Intermediate blind uncertainty is acceptable as a reviewed warning when labeled normal-size review confirms the intended direction and the loop does not reverse.
- Non-pixel styles are accepted when readable at pet size and consistent across rows.
- `${CODEX_HOME:-$HOME/.codex}/pets/<pet-name>/pet.json` and `${CODEX_HOME:-$HOME/.codex}/pets/<pet-name>/spritesheet.webp` are staged together for custom pets.
