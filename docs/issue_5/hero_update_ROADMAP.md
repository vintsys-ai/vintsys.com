# Hero Layout Update — Side-by-Side Logo & Text

## Objective

Refactor the Hero section from a **stacked / centred** layout (logo above headline) to a **two-column side-by-side** layout: logo mark on the left, headline + subline + CTAs on the right. All other sections, copy, and branding must remain unchanged.

---

## Visual Target

```
┌──────────────────────────────────────────────────────────────┐
│  [logo-mark.png]   │  AI that shows its work.               │
│                    │                                         │
│   vinTsys          │  vinTsys builds AI systems that cite   │
│   TRUTH-GROUNDED   │  their sources, verify their reasoning,│
│   AI               │  and earn the trust of researchers and │
│                    │  institutions.                          │
│                    │                                         │
│                    │  [Request Early Access]                 │
│                    │  See how ScholarInt works ↓             │
└──────────────────────────────────────────────────────────────┘
```

Left column: logo-mark image + wordmark below it (the full `logo.png` or just `logo-mark.png` — see note below).  
Right column: `h1.hero-headline`, `p.hero-subline`, `.hero-actions`.  
Both columns vertically centred relative to each other.

---

## Files to Edit

| File | What changes |
|---|---|
| `index.html` | Restructure `.hero-container` into a two-column flex wrapper |
| `assets/css/style.css` | Replace centred `.hero-container` styles with side-by-side flex layout; add responsive stacking |

`assets/js/main.js` — **no changes needed**.

---

## 1 — `index.html` Changes

### Current structure (lines 61–72)

```html
<section id="hero" class="section-hero">
  <div class="hero-container">
    <div class="hero-logo-mark">
      <img src="/assets/img/logo-mark.png" alt="vinTsys — Truth-Grounded AI" class="hero-logo-mark-img">
    </div>
    <h1 class="hero-headline">AI that shows its work.</h1>
    <p class="hero-subline">vinTsys builds AI systems …</p>
    <div class="hero-actions">
      <a href="#contact" class="hero-btn-primary">Request Early Access</a>
      <a href="#scholarint" class="hero-link-secondary">See how ScholarInt works ↓</a>
    </div>
  </div>
</section>
```

### Required structure

Wrap the logo in `.hero-logo-col` and wrap headline + subline + actions in `.hero-text-col`. Both sit inside `.hero-container`, which becomes the flex row.

```html
<section id="hero" class="section-hero">
  <div class="hero-container">

    <!-- Left: logo column -->
    <div class="hero-logo-col">
      <img src="/assets/img/logo.png" alt="vinTsys — Truth-Grounded AI" class="hero-logo-mark-img">
    </div>

    <!-- Right: text column -->
    <div class="hero-text-col">
      <h1 class="hero-headline">AI that shows its work.</h1>
      <p class="hero-subline">vinTsys builds AI systems that cite their sources, verify their reasoning, and earn the trust of researchers and institutions.</p>
      <div class="hero-actions">
        <a href="#contact" class="hero-btn-primary">Request Early Access</a>
        <a href="#scholarint" class="hero-link-secondary">See how ScholarInt works ↓</a>
      </div>
    </div>

  </div>
</section>
```

**Logo image note:** Use `logo.png` (the full logo with mark + wordmark beneath it) so the wordmark "vinTsys / TRUTH-GROUNDED AI" appears under the V mark in the left column, matching the change-request screenshot exactly. If `logo.png` doesn't exist or looks wrong, fall back to `logo-mark.png`.

The old wrapper `<div class="hero-logo-mark">` is removed entirely. The class `hero-logo-mark` is no longer used in HTML (CSS for it can be left or removed).

---

## 2 — `assets/css/style.css` Changes

### 2a — Replace `.hero-container`

**Find** (lines 278–284):
```css
.hero-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
  z-index: 2;
}
```

**Replace with:**
```css
.hero-container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-xl);
  z-index: 2;
}
```

### 2b — Add new column rules

Insert immediately after the updated `.hero-container` block:

```css
.hero-logo-col {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text-col {
  flex: 1 1 auto;
  text-align: left;
}
```

### 2c — Update `.hero-logo-mark-img` size

**Find:**
```css
.hero-logo-mark-img {
  height: 200px;
  width: auto;
}
```

**Replace with:**
```css
.hero-logo-mark-img {
  height: 260px;
  width: auto;
}
```

(Increase height slightly so the logo reads well at desktop width when placed beside the large headline. Adjust if needed during visual QA.)

### 2d — Update `.hero-subline` — remove centring margin

**Find:**
```css
.hero-subline {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto var(--spacing-lg);
}
```

**Replace with:**
```css
.hero-subline {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 0 var(--spacing-lg);
}
```

(`margin: 0 auto` centred the subline when `.hero-container` was `text-align: center`. With left-aligned text column it must be `0 0`.)

### 2e — Update `.hero-actions` — left-align

**Find:**
```css
.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}
```

**Replace with:**
```css
.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-md);
}
```

### 2f — Mobile responsive: stack columns below 768px

Locate the existing `@media (max-width: 768px)` block in the stylesheet. Inside that block, add:

```css
  /* Hero: revert to stacked layout on mobile */
  .hero-container {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-lg);
  }

  .hero-text-col {
    text-align: center;
  }

  .hero-actions {
    align-items: center;
  }

  .hero-subline {
    margin: 0 auto var(--spacing-lg);
  }

  .hero-logo-mark-img {
    height: 160px;
  }
```

---

## Branding & Behaviour Constraints

- Copy inside `h1.hero-headline`, `p.hero-subline`, and `.hero-actions` must remain **verbatim** — no wording changes.
- The section background, radial gradient pseudo-element (`section-hero::before`), and all other section styles are **untouched**.
- `main.js` smooth-scroll targeting `#hero` remains unaffected.
- Branding rules: **vinTsys** (capital T), **Truth-Grounded AI** (hyphenated), **ScholarInt** (not "chatbot").

---

## Verification Checklist

After implementation, confirm:

- [ ] Desktop (≥1024px): logo and text are side-by-side, vertically centred.
- [ ] Tablet (768–1023px): layout still side-by-side; no overflow or clipping.
- [ ] Mobile (<768px): logo stacks above text; actions re-centre.
- [ ] Logo image loads without 404 (check network tab).
- [ ] "Request Early Access" and "See how ScholarInt works ↓" links still scroll correctly.
- [ ] No regressions in any other section (ScholarInt, Learn, BioNT, Our Work, About, Contact, Footer).
