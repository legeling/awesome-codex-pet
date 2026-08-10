## Summary

- What pet are you adding or updating?
- What category does it belong to?
- Related request or submission issue (if any; use `Closes #123` for a completed request):

Submit a completed pet as **Ready for review**, not as a draft. Use a draft only for knowingly unfinished work, and list what remains.

## Visual evidence

Drag a contact sheet here. CI also uploads a downloadable preview artifact for changed pets. Preview files belong in the PR description or CI artifact, not in the pet directory.

## Checklist

- [ ] This pull request focuses on one pet only
- [ ] I checked the gallery and open issues for the same character or concept
- [ ] If this pet fulfills a request, I commented on that Issue and linked it with `Closes #<number>`
- [ ] `canonical_key` groups the character correctly; if that key already exists, `variant_note` explains this independent version
- [ ] This spritesheet is independently produced and is not a byte-identical copy of another package
- [ ] Folder name uses `pet-slug--author-slug`
- [ ] Pet folder contains only `submission.json`, `pet.json`, and `spritesheet.webp`
- [ ] `pet.json` `id` matches the folder name
- [ ] v1 uses a `1536x1872` atlas and omits `spriteVersionNumber` or sets it to `1`
- [ ] v2 uses a `1536x2288` atlas and sets `spriteVersionNumber: 2`
- [ ] v2 includes and visually reviews all 16 look directions
- [ ] `submission.json` is filled in
- [ ] Authorship is clear
- [ ] Asset usage terms are clear: either a formal license or an explicit non-commercial-only statement
- [ ] A contact sheet or equivalent frame-by-frame visual preview is available to reviewers
- [ ] Character identity, scale, baseline, and props remain consistent across every frame
- [ ] Right/left directions, running gait, action meanings, and v2 look directions are visually correct
- [ ] Transparent edges were checked on checkerboard, dark, and light backgrounds
- [ ] I understand maintainers will visually review character direction, action quality, animation continuity, and transparent-edge colors, and may optimize the spritesheet or metadata before merge
- [ ] Generated previews, README files, `pets.json`, prompts, references, QA media, and Hatch Pet run directories are not included
- [ ] `npm run validate:pr` passes
- [ ] `npm run lint` passes
- [ ] No unrelated files are included
