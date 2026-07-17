## Summary

- What pet are you adding or updating?
- What category does it belong to?

## Checklist

- [ ] This pull request focuses on one pet only
- [ ] Folder name uses `pet-slug--author-slug`
- [ ] Pet folder contains only `submission.json`, `pet.json`, and `spritesheet.webp`
- [ ] `pet.json` `id` matches the folder name
- [ ] v1 uses a `1536x1872` atlas and omits `spriteVersionNumber` or sets it to `1`
- [ ] v2 uses a `1536x2288` atlas and sets `spriteVersionNumber: 2`
- [ ] v2 includes and visually reviews all 16 look directions
- [ ] `submission.json` is filled in
- [ ] Authorship is clear
- [ ] Asset usage terms are clear: either a formal license or an explicit non-commercial-only statement
- [ ] Generated previews, README files, `pets.json`, prompts, references, QA media, and Hatch Pet run directories are not included
- [ ] `npm run validate:pr` passes
- [ ] `npm run lint` passes
- [ ] No unrelated files are included
