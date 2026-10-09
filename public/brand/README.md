# Cipher Text Lab — logo pack

The **Cipher Block**: a rounded square with a "C" drawn from seven blocks (plus one live core in signal green).
Wordmark: `ciphertext` (Geist 600) + `/lab` (Geist Mono 400, muted).

| File | Use |
|---|---|
| `ciphertext-lab-on-light.svg` / `ciphertext-lab-on-light-1464w.png` | Full logo for **light** backgrounds (dark tile, dark text) |
| `ciphertext-lab-on-dark.svg` / `ciphertext-lab-on-dark-1464w.png` | Full logo for **dark** backgrounds (light tile, light text) |
| `mark-dark-tile.svg` / `mark-dark-tile-1024.png` | Mark only, dark tile — for light backgrounds, avatars, favicons |
| `mark-light-tile.svg` / `mark-light-tile-1024.png` | Mark only, light tile — for dark backgrounds |

All PNGs have transparent backgrounds.

## Colors
| Name | Hex |
|---|---|
| Ink | `#0B1015` |
| Signal (the core block) | `#19B48A` |
| Mist | `#F5F7F6` |
| Slate (`/lab` on light) | `#4B5A63` |
| Muted (`/lab` on dark) | `#8FA0AB` |

## Notes
- The full-logo SVGs **embed the Geist fonts**, so they render correctly in browsers and most viewers. Design tools such as Figma or Illustrator may ignore embedded fonts and substitute another typeface; use the PNGs there, or the mark-only SVGs, which contain no text.
- Don't recolor the core block, stretch the logo, or place it on a background that doesn't give it contrast. Leave clear space of at least one block (6/36 of the mark's height) around it.
- Source of truth for the site: `components/ui/Logo.tsx`. Brand reference: `docs/design/designs/Brand.dc.html`.
- `public/logo.svg` (in the parent folder) is the **old** pre-redesign logo and doesn't match this brand.
