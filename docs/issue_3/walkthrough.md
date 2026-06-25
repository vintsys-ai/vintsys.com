# Implementation Walkthrough — vinTsys Website & Environment Setup

This document records the complete implementation details for the **vinTsys** corporate website MVP and its Python/`uv` development environment setup.

---

## 1. Project Overview

The objective was to build the single-page MVP website for **vinTsys** at [vintsys.com](https://vintsys.com) to establish a highly credible, fast-loading, and mobile-responsive portal for institutional decision-makers. In addition, we initialized the workspace as a standard `uv`-managed Python environment for testing and local serving.

---

## 2. Phase-by-Phase Implementation

### Phase 0 — Repository & Asset Setup
- Created custom branding assets in the `assets/img/` directory:
  - `logo-mark.png`: A clean, minimalist gold/bronze V mark representing Truth and AI.
  - `logo.png`: A full horizontal branding logo combining the V mark and the wordmark `vinTsys` (with a capital T).
  - `favicon.ico`: A 32x32 icon generated from `logo-mark.png` using a Python Pillow utility script.
- Configured [CNAME](file:///Users/pubuduss/Developer/com/vintsys.com/CNAME) pointing to `vintsys.com` for GitHub Pages routing.
- Scaffolded basic workspace directories and initialized empty placeholders for `assets/css/style.css` and `assets/js/main.js`.

### Phase 1 — HTML Structure
- Formulated the semantic markup in [index.html](file:///Users/pubuduss/Developer/com/vintsys.com/index.html).
- Set up canonical mapping, mobile viewport tags, descriptive SEO metadata, and Open Graph previews in the `<head>` block.
- Implemented all 9 copy sections verbatim from `vintsys_website_copy.md`:
  1. **Nav:** Sticky headers with inline text links, logo, and request access CTA.
  2. **Hero:** Main headline ("AI that shows its work."), description subline, primary and secondary action anchors.
  3. **ScholarInt:** Structured product layout detailing our primary pedagogical training assistant. Injected custom inline SVGs for value propositions (grounded materials, structured lessons, GDPR-compliant private cloud).
  4. **Learn:** Link cards referencing founder Pubudu's LLM & Agentic Systems learning journal highlights.
  5. **BioNT:** Standard citation layout detailing vinTsys' formal recognition as an EU-project spin-off, together with a disclaimer.
  6. **Our Work / Demos:** Highlight card showcasing the Norwegian conversational prototype.
  7. **About:** A two-column detailed founder background bio.
  8. **Contact:** An inverted visual callout box containing a mailto address block.
  9. **Footer:** Company copyright and navigation sitemap.

### Phase 2 — Styling
- Designed a cohesive layout system in [style.css](file:///Users/pubuduss/Developer/com/vintsys.com/assets/css/style.css) using CSS variable scopes:
  - Backgrounds: `--color-bg` (`#FAFAF7`) and `--color-surface` (`#F2F0EA`).
  - Brand highlights: Primary Gold/Bronze (`#C49A3C`) and Active Gold (`#9A7A2A`).
  - Text: Dark Charcoal (`#1C1A17`) and Medium Gray (`#6B6558`).
- Set base typography to Google's geometric `Inter` font family.
- Configured mobile-first layout breakpoints.
- Implemented visual feedback details, including hover translations and smooth shadow scaling on cards and interactive buttons.
- Ensured WCAG AA contrast compliance and visible focus indicators.

### Phase 3 — JavaScript & Interactions
- Implemented interaction logic in [main.js](file:///Users/pubuduss/Developer/com/vintsys.com/assets/js/main.js):
  - **Offset-Aware Smooth Scroll:** Click-handling that scrolls in-page anchors smoothly while subtracting the height of the sticky nav header to prevent it from blocking page section headings.
  - **Scroll Class Toggle:** Listens to window scroll position and appends `.scrolled` to the navigation header, adding a glassmorphic blur and subtle dropshadow once scrolled past 60px.
  - **Mobile Drawer Menu:** Toggles `.nav-open` layout classes and coordinates proper ARIA `aria-expanded` attributes on the hamburger menu drawer, with click-outside auto-close triggers.

### Phase 4 — Local Environment Setup & UV Integration
- Configured standard `uv` project settings in the root directory to follow modern packaging best practices:
  - Ran `uv init --no-package` to build a clean `pyproject.toml` and `.python-version` specifying `>=3.11`.
  - Removed standard boilerplate `main.py` to keep the website source clean.
  - Executed `uv sync` to build the local virtual environment `.venv` and establish `uv.lock`.
- Updated [README.md](file:///Users/pubuduss/Developer/com/vintsys.com/README.md) to document the environment configuration, standard virtual environment sync flow, and the `uv run python -m http.server 8000` execution commands.

---

## 3. Verification History

The site layout was verified locally by:
1. Spinning up a local development web server using Python.
2. Directing an autonomous browser subagent to `http://localhost:8000`.
3. Verifying responsive rendering, link integrity, hamburger menus, and layout boundary constraints.
4. Tracking asset requests in local server logs.

---

## 4. Branding Rules Checklist Verified
- [x] Case capitalization: **vinTsys** throughout.
- [x] Phrasing: **Truth-Grounded AI** hyphenated throughout.
- [x] Position: **ScholarInt** described as a pedagogical learning assistant, not a chatbot.
- [x] Verbatim content matching: Strategy copywriting matches copy sheets exactly.
