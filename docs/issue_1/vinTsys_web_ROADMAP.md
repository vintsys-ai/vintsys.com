# vinTsys Website — Development Roadmap
`vinTsys_web_ROADMAP.md`
*Version 1.0 · June 2026*

**Spec reference:** `vinTsys_web_SPEC_DEV.md`
**Copy reference:** `vintsys_website_copy.md`

---

## Overview

This roadmap sequences the build of `vintsys.com` into four phases. Each phase has a clear completion gate before the next begins. The entire MVP is scoped for 2–3 days of focused implementation.

All copy must be taken verbatim from `vintsys_website_copy.md`. All technical decisions are governed by `vinTsys_web_SPEC_DEV.md`. This file defines *order and completion criteria only* — it does not restate technical detail already in the spec.

---

## Phase 0 — Repository & Asset Setup
**Gate: nothing else starts until this phase is complete.**

### 0.1 Create repository
- Create repo `vintsys-web` under the vinTsys GitHub organisation
- Initialise with a `README.md` (repo description only — no content)
- Default branch: `main`

### 0.2 Scaffold file structure
Create the directory and file skeleton as defined in spec Section 4:
- `index.html` (empty shell)
- `CNAME` (containing `vintsys.com`)
- `assets/css/style.css` (empty)
- `assets/js/main.js` (empty)
- `assets/img/` (directory only)
- `README.md`

### 0.3 Prepare assets
- Add `logo.png` (full logo with wordmark, transparent background, optimised)
- Add `logo-mark.png` (V mark only, for favicon and small contexts)
- Generate `favicon.ico` from `logo-mark.png`
- Place all three in `assets/img/`
- Verify images are optimised (target: logo under 100KB)

### 0.4 Enable GitHub Pages
- In repo settings → Pages: set source to `main` branch, root directory
- Set custom domain to `vintsys.com`
- Enable "Enforce HTTPS"
- Note: DNS must be configured before HTTPS enforcement activates (see Phase 3)

**Phase 0 complete when:** repo exists, file skeleton is in place, assets are committed, GitHub Pages is configured.

---

## Phase 1 — HTML Structure
**Gate: complete Phase 0 first.**

Build the full semantic HTML skeleton of `index.html`. No styling, no JS. All sections present with correct IDs, heading hierarchy, and placeholder copy replaced with final copy from `vintsys_website_copy.md`.

### 1.1 `<head>` block
Implement all meta tags, Open Graph tags, font preconnect/preload, favicon link, and stylesheet link as specified in spec Sections 6 and 11.

### 1.2 Navigation (`<nav>`)
- Sticky nav with logo image and nav links
- Anchor IDs for all section links: `#scholarint`, `#learn`, `#our-work`, `#about`, `#contact`
- "Request Early Access" CTA button (no styling yet — structure only)
- Hamburger button element present with correct `aria-label` and `aria-expanded` attributes

### 1.3 Hero section (`id="hero"`)
- Logo mark image
- `<h1>` headline
- Subline paragraph
- Primary CTA button linking to `mailto:hello@vintsys.com`
- Secondary text link anchor scrolling to `#scholarint`

### 1.4 ScholarInt section (`id="scholarint"`)
- Section label
- `<h2>` heading
- Two body paragraphs
- Three capability signal items (list or div structure — styled later)
- Status note paragraph
- CTA button

### 1.5 Learn section (`id="learn"`)
- Section label
- `<h2>` heading
- Body paragraph
- Link to `https://learn.vintsys.com`
- Two article highlight cards (div structure)

### 1.6 BioNT Recognition section (`id="biont"`)
- Section label
- `<h2>` heading
- Two body paragraphs inside a citation block element
- Clarifying note paragraph

### 1.7 Our Work / Demos section (`id="our-work"`)
- Section label
- `<h2>` heading
- Intro paragraph
- Demo card: badge, `<h3>` heading, two body paragraphs, status tag

### 1.8 About section (`id="about"`)
- Section label
- `<h2>` heading — exact text: "Built by someone who reads the papers."
- Three body paragraphs

### 1.9 Contact / CTA section (`id="contact"`)
- `<h2>` heading
- Body paragraph
- Primary CTA button: `mailto:hello@vintsys.com`
- Direct contact anchor: `hello@vintsys.com`

### 1.10 Footer (`<footer>`)
- Logo mark image
- Company name, city
- Links to `vintsys.com` and `learn.vintsys.com`
- Email link
- Copyright line

**Phase 1 complete when:** `index.html` renders all nine sections with correct copy and no broken anchors. Validate HTML with W3C validator — zero errors.

---

## Phase 2 — Styling
**Gate: complete Phase 1 first.**

All styles in `assets/css/style.css`. Mobile-first. No hardcoded hex values — all colours via CSS custom properties as defined in spec Section 5.

### 2.1 CSS foundations
- Define all colour custom properties on `:root`
- Set base typography: font-family, font-size (`16px`), line-height (`1.65`), colour
- CSS reset / normalise (minimal — `box-sizing: border-box`, margin/padding resets)
- Import or preload font (Inter or DM Sans, weights 400/500/600/700)

### 2.2 Layout system
- Max content width containers: `720px` for text, `1100px` for wide sections
- Section padding rhythm: consistent vertical spacing between sections
- Alternating section backgrounds: `--color-bg` / `--color-surface` as specified per section in spec Section 8

### 2.3 Navigation styles
- Sticky nav bar with `z-index` above all content
- Logo sizing, link spacing, CTA button style
- Scroll shadow class (`.scrolled`) — applied via JS in Phase 3
- Mobile: hide links, show hamburger icon; active nav class shows links

### 2.4 Hero styles
- Near-full viewport height
- Headline size and weight
- Subline colour and max-width
- CTA button primary style and secondary text link style

### 2.5 ScholarInt section styles
- Section label: uppercase, letter-spaced, `--color-brand`
- Heading and body spacing
- Capability signals: three-column grid (desktop), stacked (mobile)
- Each signal item: accent in `--color-brand`
- Status note: smaller, `--color-text-secondary`, visually distinct
- CTA button

### 2.6 Learn section styles
- Surface background
- Article highlight cards: two-column grid (desktop), stacked (mobile)
- `learn.vintsys.com` link: `--color-brand`, underline on hover

### 2.7 BioNT Recognition styles
- Citation block: thin left border in `--color-brand`, padding indent
- Clarifying note: `--color-text-secondary`, smaller font size

### 2.8 Our Work / Demos styles
- Demo card: border (`--color-border`), padding, border-radius
- Badge: `--color-text-secondary`, border, small font
- Status tag: subtle, readable

### 2.9 About styles
- Body paragraph spacing
- No special treatment required beyond base typography

### 2.10 Contact / CTA section styles
- Background: `--color-brand`
- All text: `--color-white`
- CTA button: white background, `--color-brand` text, hover state inverts
- Email link: white, underline on hover

### 2.11 Footer styles
- Background: `#1C1A17`
- Text: `#A09880`
- Logo mark sizing
- Link colours and hover states

### 2.12 Responsive pass
- Test all breakpoints: `< 640px`, `640–1024px`, `> 1024px`
- Confirm no horizontal scroll at any breakpoint
- Confirm nav collapses correctly on mobile
- Confirm grid layouts (capability signals, article cards) stack correctly on mobile

### 2.13 Accessibility pass
- Verify colour contrast ratios (WCAG AA: 4.5:1 body, 3:1 large text)
- Add visible focus ring styles for all interactive elements
- Confirm heading hierarchy `h1 → h2 → h3` is intact

**Phase 2 complete when:** site is visually complete on mobile and desktop, all palette variables are in use, no hardcoded hex values in stylesheet outside `:root`, contrast ratios pass.

---

## Phase 3 — JavaScript & Interactions
**Gate: complete Phase 2 first.**

All JS in `assets/js/main.js`. Vanilla only — no libraries.

### 3.1 Smooth scroll
- Intercept all internal anchor link clicks
- Apply smooth scroll behaviour to all `#` targets
- Fallback: `scroll-behavior: smooth` in CSS (for browsers without JS)

### 3.2 Nav scroll shadow
- Listen for `window.scroll` event
- Add class `.scrolled` to `<nav>` when `window.scrollY > 60`
- Remove class when scrolled back to top
- The `.scrolled` class applies `box-shadow` (defined in CSS Phase 2.3)

### 3.3 Mobile nav toggle
- Hamburger button click toggles active class on nav links container
- Update `aria-expanded` attribute on hamburger button to match state
- Clicking any nav link closes the menu (remove active class)
- Clicking outside the nav closes the menu

**Phase 3 complete when:** smooth scroll works on all anchor links, nav shadow appears on scroll, mobile nav opens and closes correctly, `aria-expanded` updates on toggle.

---

## Phase 4 — DNS, Verification & Launch
**Gate: complete Phases 1–3 first.**

### 4.1 Configure DNS for vintsys.com
Add the following records at your DNS provider:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `vintsys-org.github.io` |

Allow up to 24 hours for DNS propagation.

### 4.2 Configure DNS for learn.vintsys.com (separate task)
| Type | Name | Value |
|---|---|---|
| `CNAME` | `learn` | `pubudusaneth.github.io` |

In the Sphinx blog repo: add `CNAME` file containing `learn.vintsys.com`, enable custom domain in GitHub Pages settings.

### 4.3 Verify HTTPS
- Confirm GitHub Pages has issued SSL certificate for `vintsys.com`
- Confirm HTTPS enforced checkbox is active
- Test `http://vintsys.com` redirects to `https://vintsys.com`
- Test `https://www.vintsys.com` redirects correctly

### 4.4 Pre-launch checklist
Run through every item in spec Section 14 and confirm each passes:

- [ ] `CNAME` file in repo root
- [ ] DNS `A` records active and resolving
- [ ] `www` CNAME resolving
- [ ] GitHub Pages custom domain set
- [ ] HTTPS enforced
- [ ] `learn.vintsys.com` DNS configured
- [ ] `assets/img/logo.png` present
- [ ] `assets/img/favicon.ico` present
- [ ] All copy matches `vintsys_website_copy.md` exactly
- [ ] Lighthouse mobile performance score ≥ 90
- [ ] All anchor links tested on mobile and desktop
- [ ] `mailto:hello@vintsys.com` link tested
- [ ] W3C HTML validation: zero errors
- [ ] No horizontal scroll on mobile
- [ ] Brand rules verified (vinTsys capitalisation, no banned words)

### 4.5 Smoke test
Open `https://vintsys.com` in:
- Chrome desktop
- Safari desktop
- Chrome mobile (or DevTools mobile emulation at 375px)
- Safari mobile (if available)

Confirm: page loads, all sections visible, nav works, CTA button opens mail client.

**Phase 4 complete when:** site is live at `https://vintsys.com`, all checklist items pass, smoke test passes on at least two browsers.

---

## Milestone Summary

| Milestone | Deliverable | Est. Time |
|---|---|---|
| Phase 0 complete | Repo scaffolded, assets committed, Pages configured | 1–2 hours |
| Phase 1 complete | Full HTML skeleton with final copy, W3C valid | 2–3 hours |
| Phase 2 complete | Fully styled, responsive, accessible | 4–6 hours |
| Phase 3 complete | Smooth scroll, nav shadow, mobile nav toggle | 1 hour |
| Phase 4 complete | Live at vintsys.com, all checks passing | 1–2 hours |
| **Total** | | **~2 days** |

---

## Deferred — Do Not Implement

Anything listed in spec Section 15 is explicitly out of scope for this roadmap. Do not add scope without updating both this file and `vinTsys_web_SPEC_DEV.md`.

- `vintsys.ai` technical portal
- Multi-page routing
- Blog/CMS on `vintsys.com`
- Authentication
- Analytics
- Dark mode
- i18n
- Contact form with backend
