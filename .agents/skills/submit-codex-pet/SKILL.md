---
name: submit-codex-pet
description: Request or submit pets to Awesome Codex Pet without a full repository clone. Use when a user wants the community to make a pet, wants AI to create or finish their own pet from references, wants to submit existing pet files, needs duplicate, attribution, and visual-quality review, or wants a focused GitHub issue or pull request created and followed through CI.
---

# Submit Codex Pet

Use GitHub APIs or an authenticated GitHub CLI by default. Do not make the user clone the full catalog unless API-based contribution is unavailable and they approve the fallback.

## Choose the route

- **Request**: the user wants the community or maintainers to make a pet. Search for duplicates and create a `[Request]` issue containing `<!-- pet-flow: request -->`; do not make or submit the pet in this route.
- **Submission**: the user owns the submission and wants AI to create or finish it from references, or already has a spritesheet, pet folder, or finished assets. Complete production as needed, validate the result, then open a focused pull request through the GitHub API.
- **Blocked submission**: use only after trying the recovery steps below and receiving the user's approval. Create a concise `[Submission]` issue containing `<!-- pet-flow: submission -->` when a duplicate needs maintainer judgment, required review files cannot be made accessible, or GitHub authorization remains unavailable.
- **Advanced PR**: the user explicitly prefers Git, GitHub, or Codespaces. Follow `CONTRIBUTING.md`; use a sparse, blob-filtered clone when a local checkout is needed.

Repository: `https://github.com/legeling/awesome-codex-pet`

## Request workflow

1. Read `pets.json`, `collections.json`, and open pet issues through GitHub. Search canonical identity, localized names, franchise, author, and tags.
2. Ask for the character or concept, original work, V1/V2 preference, references, visual direction, naming language, and any available attribution or usage terms.
3. Classify reference availability before creating the issue:
   - A real pet, original character, avatar, or other appearance-specific request requires at least one image attachment or public image URL that maintainers can open.
   - A known canonical character may use an official character or source page when that page clearly establishes the appearance.
   - An appearance-free concept may proceed without an image only when the issue explicitly says it has no fixed visual appearance.
     A local filename, filesystem path, image visible only in the current chat, or prose saying that a photo exists is not an accessible reference.
4. When creating an issue through the GitHub API, do not imply that a local or chat image was uploaded. If the available GitHub capability cannot upload it, pause issue creation and ask the user to attach the image through GitHub, then verify that the issue body or comment contains a viewable attachment URL before treating the request as complete.
5. Keep reference authorship and source notes truthful, mark the requested output as non-commercial, and never imply that a request is accepted or scheduled.
6. Follow `.github/ISSUE_TEMPLATE/pet-request.yml`. Include the duplicate result and unresolved questions.
7. Create the issue and return its URL. Repository automation manages type, status, version, and category labels.

## Submission workflow

1. Read `AGENTS.md`, `CONTRIBUTING.md`, the relevant Hatch Pet skill, schemas, validation scripts, `pets.json`, and `collections.json` through GitHub before editing.
2. Ask whether the user wants to create a pet now from a character or references, finish an in-progress pet, or submit an existing final package. Collect missing decisions in one compact question set: character, V1/V2, naming language, submitter credit, how the final pixels were made, and confirmation that repository use is non-commercial.
3. Inspect all supplied references and files. Separate final-asset provenance from reference provenance:
   - For an original or independently AI-generated pet, credit the submitter or adapter as the pet author. A public `source_url` is optional; record the source honestly and mark repository use as non-commercial.
   - For fan art generated independently from character references, treat the references as reference-only, do not upload them, and do not claim their artists as the pet author. Record the franchise or official character source when known.
   - For a direct crop, cleanup, animation, trace, or substantial pixel reuse of an existing image, record that relationship honestly. Regenerate or repair it when the borrowed pixels prevent consistent identity, clean edges, readable actions, or a coherent spritesheet.
     Do not invent missing facts or treat an absent public URL as an automatic blocker.
4. Search for the canonical character or concept by `canonical_key`, localized names, and franchise. The key groups versions; it is not unique per package. Different authors may submit independently produced versions under the same key when `variant_note` documents the author, visual, animation, or runtime distinction. Reject byte-identical spritesheets. The same author should update an existing package unless the new package is a materially distinct edition.
5. Produce exactly:

   ```text
   pets/<pet-slug>--<author-slug>/
   ├── submission.json
   ├── pet.json
   └── spritesheet.webp
   ```

6. Use Hatch Pet v1 for an 8x9, `1536x1872` atlas. Use Hatch Pet v2 for an 8x11, `1536x2288` atlas with `spriteVersionNumber: 2` and 16 look directions.
7. Inspect all frames and animations on checkerboard, dark, and light backgrounds. Repair the smallest failing scope. Do not globally remove colors that belong to the character.
8. Run `npm run validate:pr`, `npm run lint`, and an isolated install test in a temporary workspace. Contributor changes must not include generated README files, `pets.json`, previews, QA, references, prompts, or temporary output.
9. Show the user a contact sheet or the final spritesheet before publication and obtain visual approval. With upstream write access, create a focused branch directly. Otherwise create or reuse the user's fork, construct blobs/tree/commit through the GitHub API, push one submission branch, and open a pull request against upstream `main`. Once the package, visual approval, and required validation are complete, create the pull request as **ready for review, not draft**. Use a draft only when the user explicitly asks for one or the submission is knowingly unfinished, and state the remaining work. Attach the contact sheet to the pull request description; keep it out of the committed pet directory. Repository CI also uploads generated previews as a workflow artifact.
10. When fulfilling an existing request, comment on the Issue before publishing, keep its same-repository Issue URL in `submission.json.source_url`, and include `Closes #<number>` in the pull request body. Repository automation adds a durable PR link comment, marks the request in progress, and closes it as completed after merge. Do not manually close the request before the pet PR is merged.
11. Document duplicate research, final-asset authorship, reference/source notes, non-commercial terms, version, validation, and any linked request. Follow CI until it passes; fix deterministic failures and stop for human judgment on identity, visual quality, duplicate acceptance, or curation.

## Recover before opening a blocked issue

The default outcome for a submission is a reviewable pull request, not a blocker report. Before falling back to an issue:

1. If a source URL is missing, classify the final asset as original, independently generated fan art, private source, or direct reuse. Record the classification and continue; an absent public URL is not a blocker.
2. If reused pixels produce inconsistent identity, poor animation, damaged outlines, or chroma residue, regenerate or repair the smallest failing scope and repeat visual QA.
3. If only a formal license name is missing, use the repository default after confirmation: `Non-commercial use only.`
4. If GitHub authorization is missing, ask the user to connect GitHub and retry the pull-request path.
5. If a duplicate is only a different visual variant, document the material distinction and continue when repository policy allows it.

Open a blocked `[Submission]` issue only when one of these steps genuinely cannot complete and the user agrees to the fallback. Keep it actionable: state the single unresolved decision, the exact next step, and attach a contact sheet plus an accessible spritesheet or compact final package. Filenames and local paths are not attachments. Use the Issue Form headings `### Pet runtime version` and `### Primary category` so repository automation can apply version and category labels. Do not publish a long validation report for local files that maintainers cannot access.

## Safety and scope

- Never expose GitHub tokens or store credentials in repository files.
- Never upload unrelated local files or a complete Hatch Pet run directory.
- Never contact source authors or open unrelated issues without explicit user instruction.
- Keep one pet per pull request.
- Preserve existing user changes and temporary production material outside the focused submission.
