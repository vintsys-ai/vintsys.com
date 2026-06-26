# vinTsys Website — Agent Context (`AGENT.md`)

This document serves as the primary context setter for future AI coding agents working on the **vinTsys** website repository. It outlines the project identity, strict brand rules, architecture, local environment workflows, and the current implementation state.

---

## 1. Project Overview

**vinTsys** (pronounced *"vin-TEE-sis"*) is an Oslo-based AI startup focused on building **Truth-Grounded AI**. The company develops systems that cite their sources, verify their reasoning, and earn the trust of researchers, educators, and institutions.

The repository `vintsys.com` contains the codebase for the public-facing corporate website. It is a highly polished, single-page MVP designed to load fast, look premium, and immediately establish credibility for institutional visitors (such as bioinformatics training coordinators and PhD directors) arriving from cold outreach emails.

---

## 2. Non-Negotiable Brand Rules

All edits to website copy or structure must adhere to these rules:
- **Capitalization:** Always write **vinTsys** (capital `T`, no spaces). Never write `Vintsys`, `VinTsys`, or `VINTSYS`.
- **Mission Tagline:** Always write **Truth-Grounded AI** as a hyphenated compound modifier.
- **Product Classification:** **ScholarInt** must **never** be described as a "chatbot". It is a "pedagogical learning assistant" or "AI Learning Infrastructure for Institutions".
- **Banned Hype Words:** Never use "cutting-edge", "revolutionary", "next-generation", or "game-changing".
- **Call-to-Action (CTA):** The primary CTA text is **Request Early Access** (not "Try it now", "Get started", or similar).
- **BioNT References:** Any reference to the BioNT project spin-off recognition must include the standard clarifying disclaimer note stating that vinTsys is not the official BioNT platform.
- **Health / Clinical claims:** Never claim clinical or diagnostic capabilities.

---

## 3. Technology Stack & Architecture

The website is a lightweight, static single-page application built without compilation frameworks to ensure maximum speed and compatibility.

| Concern | Choice | Implementation Details |
|---|---|---|
| **Structure** | Semantic HTML5 | Structured hierarchically in [index.html](file:///Users/pubuduss/Developer/com/vintsys.com/index.html) with clean heading structures and accessibility attributes (`aria-expanded`, focus states). |
| **Styling** | Vanilla CSS Grid/Flexbox | Fully responsive layout in [style.css](file:///Users/pubuduss/Developer/com/vintsys.com/assets/css/style.css) utilizing CSS variables for theme colors. Zero framework overhead (no Tailwind/Bootstrap). |
| **Interactivity** | Vanilla JavaScript | Basic behaviors implemented in [main.js](file:///Users/pubuduss/Developer/com/vintsys.com/assets/js/main.js) (offset-aware smooth scroll, navigation scroll shadow, ARIA mobile drawer toggle). |
| **Environment** | Python & `uv` | Local hosting environment managed with the `uv` package manager, configured via [pyproject.toml](file:///Users/pubuduss/Developer/com/vintsys.com/pyproject.toml) and [.python-version](file:///Users/pubuduss/Developer/com/vintsys.com/.python-version). |

---

## 4. Current File Structure

```
/
├── .python-version         # Specifies local python version (e.g. >=3.11)
├── .venv/                  # Virtual environment folder (local only, gitignored)
├── CNAME                   # Contains domain mapping: vintsys.com
├── index.html              # Core single-page website containing all content
├── pyproject.toml          # uv project configuration file
├── uv.lock                 # uv lock file
├── assets/
│   ├── css/
│   │   └── style.css       # Core stylesheet (color system, grids, responsiveness)
│   ├── js/
│   │   └── main.js         # Navigation logic and smooth scroll offsets
│   └── img/
│       ├── favicon.ico     # 32x32 website icon
│       ├── logo-mark.png   # Gold V brand mark icon
│       └── logo.png        # Full horizontal logo with wordmark
├── docs/
│   ├── strategy/           # Strategy, copy deck, and company contexts
│   ├── issue_1/            # Original development roadmap and specifications
│   ├── issue_3/            # Initial implementation walkthrough reports
│   └── issue_5/            # Hero section visual refactoring details
└── README.md               # User-facing README with setup and dev guidelines
```

---

## 5. Local Development Workflow

The local server environment is managed via the **`uv`** package manager. 

To start working on the project or test layout adjustments:
1. **Synchronize the environment:**
   ```bash
   uv sync
   ```
2. **Launch the local HTTP server:**
   ```bash
   uv run python -m http.server 8000
   ```
3. **View the website:**
   Navigate to [http://localhost:8000](http://localhost:8000). The server will serve static pages with proper absolute asset routes.
