# NoteDraft redesign roadmap

## Done
- Light-first design tokens, smaller radii, semantic success/destructive colors, dark-mode contrast (`src/index.css`)
- Sora/Manrope typography wired into Tailwind and `index.html`
- Shared `SiteHeader` (active nav, accessible theme toggle, mobile nav row) and rewritten `Footer` (How it works link repaired)
- Default theme set to light with a visible night-mode button
- Solid buttons only (gradient variant now renders as primary); standardized sizes
- Landing, Dashboard, Features, Learn more, Guide, Metrics, Contact, Support, Terms, NotFound rebuilt on the shared system
- Transcription History removed from the workspace
- Metrics formatted with separators/one decimal, plus retry and stale-data states
- Upload/result states: empty, uploading, processing, cancel, error, success, long filenames wrap
- Removed dead `src/pages/Index.tsx` and `src/App.css`
- Verified all 10 routes on desktop and phone: no overflow, no runtime errors

## Notes
- The section slider in the workspace is presentational only; the backend still transcribes the whole file. Kept as-is to avoid removing an existing control.
