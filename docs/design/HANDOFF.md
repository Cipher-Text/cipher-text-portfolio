# Cipher Text Lab — Website Redesign Handoff

The `designs/` folder holds one HTML file per page, exported from the design canvas.
Treat them as the **visual spec**: match layout, spacing, colors, type and copy.
They are NOT production code (they use a canvas runtime: `<x-dc>`, `<sc-if>`, `{{accent}}` holes) — rebuild them as real Next.js components.

## Pages → routes
| Design file | Route |
|---|---|
| Main.dc.html | `/` |
| Services.dc.html | `/services` |
| ServiceHealthcare.dc.html | `/services/healthcare-systems` (template for all 4 service pages) |
| CaseStudy.dc.html | `/work/open-care` (template for all case studies) |
| About.dc.html | `/about` |
| Contact.dc.html | `/contact` |
| NotFound.dc.html | `not-found.tsx` |
| Mobile.dc.html | Mobile reference for `/` — all pages must work at 360px |
| Brand.dc.html | Brand reference (logo, palette, type, UI elements) |

Keep existing URLs (`/work/open-care`, `/work/news-platform`, `/work/alumni-portal`, `/services/*`) so nothing breaks.

## Design tokens
| Token | Value | Use |
|---|---|---|
| ink | #0B1015 | text, dark sections |
| graphite | #121A21 | cards on dark |
| line-dark | #1E2A33 | borders on dark |
| signal (accent) | #19B48A | CTAs, logo core, live states |
| signal-deep | #0E8A68 | accent text on light (AA contrast) |
| slate | #4B5A63 | secondary text on light |
| muted-dark | #B4C1C9 / #8FA0AB | secondary text on dark |
| mist | #F5F7F6 | page background |
| line | #DDE3E1 | hairline borders |
| line-strong | #C3CCCA | input borders, dividers |

- Fonts: **Geist** (headings 600, body 400) + **Geist Mono** (eyebrows, labels, stacks). Use `next/font/google`.
- Type scale: H1 64–72 / H2 44–48 / H3 22 / body 16–20 / label 13 mono uppercase, tracking 0.08em. Display tracking −0.03 to −0.04em.
- Radius: 8 controls, 14–18 cards, 20–22 large bands. Container max-width 1240px, side padding 32px (20px mobile).
- No gradients, no drop shadows. 1px hairlines only. Touch targets ≥ 44px. WCAG 2.2 AA.

## Logo — "Cipher Block"
36×36 rounded square (rx 8) with a 3×3 grid of 6×6 blocks (rx 1.2) at x/y = 8, 15, 22, the right-middle block omitted (forms a “C”), the center block in signal green. Wordmark: `ciphertext` (Geist 600) + `/lab` (Geist Mono 400, muted). SVG source is inline in every design file — extract it into `components/Logo.tsx` and generate favicon/app icons from the mark.

## Components to build first
Logo, Button (primary / secondary / ghost), Tag (solid / outline / live-dot), Eyebrow, SectionHeader, Card, StatStrip, CaseStudyCard, ServiceRow, ProcessSteps, FAQ (native details/summary), Nav (dark + light variants, mobile menu), Footer, CTABand.

## Content
- Case studies and service pages as **MDX** in `content/` with frontmatter (title, sector, status, stack, metrics, client, timeline).
- Everything in `[BRACKETS]` is a placeholder for real content — keep a visible TODO, never invent numbers.
- Contact email: hello@ciphertextlabs.com. Contact form → API route (or form service) with honeypot + rate limiting.

## Launch checklist
Per-page metadata + Open Graph images, sitemap.xml, robots.txt, analytics, Lighthouse ≥ 90 on all four categories, 301 redirects for any changed URL.
