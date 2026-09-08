# NoteDraft musician-first UI refinement

## Direction

Refine the existing application incrementally rather than rebuilding it. Keep NoteDraft recognizable and preserve the current logo, favicon, pages, guest upload/transcription flow, instrument-specific processing, progress/cancel behavior, results download, metrics, guide, legal text, contact links, and backend calls.

The visual system will use the selected **Studio Blue** palette, **Sora** for headings, **Manrope** for interface and body copy, and a **full-width editorial flow**. Light mode will become the default, with the existing visible theme control retained on every page for night mode.

Per the latest direction, remove the non-functional Transcription History placeholder from the transcription page. No real history or library data flow exists in the current app, so no working capability will be removed.

## Implementation

1. **Create one shared application shell**
   - Consolidate the repeated solid header into a shared component while preserving every current destination and page-specific action.
   - Keep the NoteDraft logo prominent and the theme toggle visible everywhere.
   - Make navigation fit on mobile without horizontal overflow, using a compact menu while keeping every destination accessible.
   - Standardize the existing shared footer without adding social links.

2. **Establish the visual system**
   - Replace the blue-purple gradients, glow effects, oversized radii, excessive shadows, and generic AI styling with restrained Studio Blue semantic tokens for both light and dark themes.
   - Add consistent spacing, typography, compact radii, button hierarchy, input treatments, focus states, and readable secondary text.
   - Use Sora/Manrope throughout; reserve system monospace only for exact time values when useful.
   - Add restrained success, warning, error, and informational colors with accessible contrast.

3. **Make transcription the product centerpiece**
   - Recompose the existing upload and results areas as one clear workflow: source file and instrument → range and processing → result and download.
   - Preserve every supported format, Piano/Violin/Viola/Cello/Double Bass selection, query-parameter preselection, range slider, job polling, progress, cancel action, errors, toast messages, and download behavior.
   - Give file names safe wrapping/truncation and make all idle, selected, uploading, processing, canceled, failed, and complete states visually intentional.
   - Use waveform/timeline-inspired structure only where it communicates range or progress; do not add fake playback, notation editing, score generation, metadata, telemetry, exports, or backend stages.
   - Remove the current Transcription History placeholder section.

4. **Refine the landing page without removing its content**
   - Preserve the hero copy and actions, waveform motif, YouTube demo, all three feature areas, musician use cases, testimonials, CTA, and footer.
   - Remove the generic AI badge, gradient headline/background, Sparkles/Zap decoration, emoji bullets, hover elevation, and identical card-grid rhythm.
   - Use editorial bands, dividers, score-like spacing, and a restrained audio timeline motif to vary section composition.
   - Keep one obvious primary action and subordinate secondary actions.

5. **Bring every supporting page into the same system**
   - Refine Features, Learn More, Guide, Metrics, Contact, Support, Terms, and Not Found without deleting routes, text, links, disclaimers, instrument deep links, or live metrics polling.
   - Replace repeated card grids where cards are not necessary with lists, timelines, dividers, or subtle surface changes.
   - Use literal music/audio/file icons and remove generic decorative AI symbols.
   - Preserve Instagram’s recognizable brand treatment on Contact and its external-link behavior.
   - Keep the MuseScore non-affiliation text wherever it currently appears.

6. **Polish states and responsiveness**
   - Verify long filenames, long titles, missing duration, unsupported or failed files, network failures, loading, processing, success, and empty-result presentation.
   - Audit desktop and mobile layouts for overflow, compressed controls, heading scale, navigation access, touch targets, and readable text.
   - Respect reduced-motion preferences and retain animation only when it explains progress or interaction.

## Technical notes

- Update theme tokens and type scale in the global design system, then align shared buttons, cards, selects, sliders, and progress indicators.
- Keep API endpoints and the existing instrument mapping unchanged.
- Keep routing intact; only the dashboard’s static history placeholder is removed by request.
- Set the theme provider to light by default while preserving user-selected night mode.
- Preserve current head metadata and public assets.

## Validation

- Check the newest build diagnostics and fix any errors.
- Exercise the public routes and core transcription controls in the running app.
- Capture and inspect desktop and mobile views in both light and dark modes.
- Confirm no horizontal scrolling, every navigation destination remains reachable, and the upload/instrument/range/process/cancel/download flow remains wired to the existing behavior.
