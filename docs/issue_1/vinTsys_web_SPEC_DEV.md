# vinTsys Website — Implementation Specification
`vinTsys_web_SPEC_DEV.md`
*Version 1.0 · June 2026*

---

## 1. Project Overview

Build the public-facing corporate website for **vinTsys** at `vintsys.com`. The site is a single-page MVP designed to pass a 60-second credibility test for institutional decision-makers (bioinformatics training coordinators, core facility leads, PhD programme directors) arriving from a cold outreach email.

The site must load fast, look authoritative, and work without JavaScript for all content — interactivity is an enhancement, not a dependency.

---

## 2. Repository & Hosting

- **Hosting:** GitHub Pages (via the vinTsys GitHub organisation)
- **Branch:** `main` — GitHub Pages serves from root of `main`
- **Custom domain:** `vintsys.com` — configure via `CNAME` file in repo root
- **HTTPS:** Enforced via GitHub Pages custom domain SSL (automatic)
- **Repo name:** `vintsys-web` (or as decided by the organisation admin)

### Subdomain: learn.vintsys.com
- The blog (Sphinx site) lives in a separate repository
- DNS: Add a `CNAME` record pointing `learn.vintsys.com` → `pubudusaneth.github.io`
- In the Sphinx repo: add a `CNAME` file containing `learn.vintsys.com` and enable custom domain in GitHub Pages settings
- No code changes required to the Sphinx source — DNS and GitHub Pages settings only

---

## 3. Tech Stack

| Concern | Choice | Rationale |
|---|---|---|
| Structure | Semantic HTML5 | No build step, fast load, GitHub Pages native |
| Styling | CSS custom properties + Flexbox/Grid | No framework dependency, full palette control |
| Interactivity | Vanilla JS only | Minimal — smooth scroll, mobile nav toggle |
| Fonts | Google Fonts (self-hosted subset preferred) | See Typography section |
| Icons | None or inline SVG only | Avoid icon font dependencies |
| Analytics | None at MVP | Add later if needed |
| Forms | `mailto:` link for MVP | Upgrade to Typeform/Formspree post-launch |

**No CSS frameworks (Bootstrap, Tailwind, etc.)** — the palette and layout are specific enough that a framework adds overhead without benefit at this scale.

---

## 4. File Structure

```
/
├── index.html              # Single page — all content
├── CNAME                   # Contains: vintsys.com
├── assets/
│   ├── css/
│   │   └── style.css       # All styles
│   ├── js/
│   │   └── main.js         # Scroll behaviour, mobile nav toggle
│   └── img/
│       ├── logo.png         # vinTsys logo (full, with wordmark)
│       ├── logo-mark.png    # V mark only (for favicon / small contexts)
│       └── favicon.ico      # Generated from logo-mark
└── README.md               # Repo description only
```

---

## 5. Colour Palette

All colours defined as CSS custom properties on `:root`. Every colour usage in the stylesheet must reference these variables — no hardcoded hex values outside the `:root` block.

| Variable | Hex | Usage |
|---|---|---|
| `--color-brand` | `#C49A3C` | Primary brand colour — logo bronze/gold |
| `--color-brand-dark` | `#9A7A2A` | Hover states, CTA button active |
| `--color-bg` | `#FAFAF7` | Page background — warm off-white |
| `--color-surface` | `#F2F0EA` | Card/section backgrounds |
| `--color-border` | `#E0D9CC` | Dividers, card borders |
| `--color-text-primary` | `#1C1A17` | Body text, headings |
| `--color-text-secondary` | `#6B6558` | Subtext, labels, captions |
| `--color-white` | `#FFFFFF` | CTA button text, nav on scroll |

**Dark mode:** Not required for MVP. Do not implement.

---

## 6. Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Headings | `Inter` or `DM Sans` | 600–700 | Clean, geometric — complements logo letterforms |
| Body | `Inter` or `DM Sans` | 400 | Same family, consistent rhythm |
| Section labels | Same family | 500, uppercase, letter-spaced | Small caps treatment for section identifiers |
| Monospace (if needed) | `JetBrains Mono` | 400 | Only for any code references |

- Base font size: `16px`
- Line height body: `1.65`
- Line height headings: `1.2`
- Max content width: `720px` for text blocks; `1100px` for full-width sections
- Self-host font subsets if possible (Latin only) to avoid Google Fonts latency

---

## 7. Layout & Responsive Behaviour

- **Mobile-first** — base styles for mobile, media queries for tablet/desktop
- **Breakpoints:**
  - Mobile: `< 640px`
  - Tablet: `640px – 1024px`
  - Desktop: `> 1024px`
- **Nav:** Sticky top bar. On mobile: hamburger toggle reveals full-screen or dropdown nav. On desktop: horizontal inline links.
- **Sections:** Full-width background bands with centred content columns. Alternating `--color-bg` and `--color-surface` backgrounds for visual separation.
- **No horizontal scroll** at any breakpoint.

---

## 8. Page Sections — Implementation Directives

All copy lives in `vintsys_website_copy.md` (source of truth). The coding agent must use that file for all text content verbatim — do not paraphrase or rewrite copy.

### 8.1 NAV
- Sticky, `position: sticky; top: 0`
- Logo left, links right
- Links: ScholarInt · Learn · Our Work · About
- CTA button: "Request Early Access" — styled with `--color-brand` background, white text
- On scroll past hero: add subtle `box-shadow` to nav for depth
- Mobile: collapse links behind hamburger icon; toggle via JS

### 8.2 HERO
- Full viewport height (`100vh`) or near-full (`90vh`) — enough to dominate above the fold
- Logo mark centred or left-aligned above headline
- Headline: large, `--color-text-primary`, weight 700
- Subline: `--color-text-secondary`, weight 400, max-width `600px`
- Two CTAs: primary button ("Request Early Access") and a subtle text link ("See how ScholarInt works ↓") that smooth-scrolls to Section 8.3
- Background: `--color-bg` — clean, no image, no gradient

### 8.3 SCHOLARINT
- Section label: small uppercase, `--color-brand`, letter-spaced
- Heading + two body paragraphs
- Capability signals: three items rendered as a simple three-column (desktop) or stacked (mobile) block — each with a minimal inline SVG icon or bullet point in `--color-brand`
- Status note: smaller text, `--color-text-secondary`, slight indent or visual distinction
- CTA button: "Request Early Access →" — same style as nav CTA

### 8.4 LEARN
- Alternate background: `--color-surface`
- Section label: "From the Founder"
- Heading + one body paragraph
- Link to `learn.vintsys.com` — styled as a prominent text link with `--color-brand`, underline on hover
- Two article highlights: rendered as simple two-column cards (desktop) or stacked (mobile) with title and subtitle

### 8.5 BIONT RECOGNITION
- Background: `--color-bg`
- Consider a thin left border in `--color-brand` on the main quote block — signals a formal citation without using a blockquote element
- Two body paragraphs
- Clarifying note: smaller text, `--color-text-secondary`

### 8.6 OUR WORK / DEMOS
- Background: `--color-surface`
- Intro paragraph above the demo card
- Demo card: contained in a bordered card (`--color-border`), with a "Prototype · Hackathon Build" badge in `--color-text-secondary` with a border — visually distinct from the ScholarInt section
- "Prototype — not a production product" status tag: subtle, small, clearly readable

### 8.7 ABOUT
- Background: `--color-bg`
- Heading: "Built by someone who reads the papers." — this is a deliberate tone choice, preserve exactly
- Three body paragraphs as written in copy file
- No photo required for MVP

### 8.8 CONTACT / CTA
- Background: `--color-brand` — inverted section, white text
- Heading and body in `--color-white`
- Primary CTA button: white background, `--color-brand` text
- Direct contact line: `hello@vintsys.com` as a `mailto:` anchor, white text

### 8.9 FOOTER
- Minimal: logo mark, company name, city, two domain links, email, copyright
- Background: `#1C1A17` (same as `--color-text-primary`) — dark footer
- Text: `--color-text-secondary` lightened, or `#A09880`
- No social links at MVP

---

## 9. Interaction & JS Behaviour

All JS must be in `assets/js/main.js`. Keep it minimal.

- **Smooth scroll:** All in-page anchor links (`#scholarint`, `#learn`, `#our-work`, `#about`, `#contact`) scroll smoothly
- **Nav scroll shadow:** Add a CSS class to `<nav>` when `window.scrollY > 60` to apply `box-shadow`
- **Mobile nav toggle:** Hamburger button toggles a CSS class on the nav to show/hide links. Clicking a nav link closes the menu.
- **No animation libraries.** CSS transitions only (`transition: 0.2s ease`) for hover states and nav shadow.

---

## 10. Accessibility

- All images must have descriptive `alt` attributes
- Logo: `alt="vinTsys — Truth-Grounded AI"`
- Colour contrast: all text must meet WCAG AA minimum (4.5:1 for body, 3:1 for large text)
- Nav CTA button: must be keyboard focusable with visible focus ring
- Section headings: use correct `h1` → `h2` → `h3` hierarchy throughout
- Mobile nav: hamburger button must have `aria-label="Toggle navigation"` and `aria-expanded` state

---

## 11. SEO & Meta

In `<head>` of `index.html`:

- `<title>` : `vinTsys — Truth-Grounded AI`
- `<meta name="description">` : `vinTsys builds AI systems that cite their sources and verify their reasoning. ScholarInt is our pedagogical AI assistant for bioinformatics and computational life sciences training.`
- `<meta name="robots">` : `index, follow`
- Open Graph tags:
  - `og:title` : `vinTsys — Truth-Grounded AI`
  - `og:description` : same as meta description
  - `og:url` : `https://vintsys.com`
  - `og:image` : `https://vintsys.com/assets/img/logo.png`
  - `og:type` : `website`
- `<link rel="canonical" href="https://vintsys.com">`
- `<link rel="icon" href="/assets/img/favicon.ico">`

---

## 12. Performance Targets

- Page weight: under `500KB` total (excluding fonts)
- No external JS dependencies
- Google Fonts: use `display=swap` and preconnect, or self-host
- Images: logo in PNG with transparent background; optimise with `pngcrush` or equivalent before committing
- Aim for Lighthouse performance score ≥ 90 on mobile

---

## 13. Brand Rules for the Coding Agent

These apply to all text content in the HTML — verify before committing:

- Always write `vinTsys` — capital T, no space. Never `VinTsys`, `Vintsys`, or `VINTSYS`
- `Truth-Grounded AI` — always hyphenated
- ScholarInt is never a "chatbot" — it is a "pedagogical learning assistant"
- Do not use: "cutting-edge", "revolutionary", "next-generation", "game-changing"
- CTA is "Request Early Access" — not "Try it now" or "Get started"
- BioNT reference must appear with the clarifying note (see Section 8.5)

---

## 14. Launch Checklist

Before pushing to `main` and enabling GitHub Pages:

- [ ] `CNAME` file present in repo root containing `vintsys.com`
- [ ] DNS `A` records for `vintsys.com` pointing to GitHub Pages IPs (`185.199.108.153` – `185.199.111.153`)
- [ ] DNS `CNAME` record for `www.vintsys.com` → `vintsys-org.github.io` (or org equivalent)
- [ ] GitHub Pages custom domain set to `vintsys.com` in repo settings
- [ ] HTTPS enforced checkbox enabled in repo settings
- [ ] `learn.vintsys.com` DNS CNAME record configured separately (separate repo/task)
- [ ] Logo image present at `assets/img/logo.png`
- [ ] Favicon present at `assets/img/favicon.ico`
- [ ] All copy reviewed against `vintsys_website_copy.md` for accuracy
- [ ] Lighthouse mobile score ≥ 90
- [ ] All anchor links tested on mobile and desktop
- [ ] `mailto:hello@vintsys.com` CTA tested

---

## 15. Out of Scope for MVP

The following are explicitly deferred — do not implement:

- `vintsys.ai` technical portal
- Multi-page routing
- Blog/CMS integration on `vintsys.com` itself
- Authentication or user accounts
- Analytics or tracking scripts
- Dark mode
- Internationalisation (i18n)
- Contact form with backend (use `mailto:` for now)
