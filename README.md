# Website vinTsys - Implementation Specification

## Project Overview

Build the public-facing corporate website for vinTsys at vintsys.com. The site is a single-page MVP designed to pass a 60-second credibility test for institutional decision-makers (bioinformatics training coordinators, core facility leads, PhD programme directors) arriving from a cold outreach email.

## Local Development

Because the site uses absolute paths (e.g., `/assets/img/logo.png`), opening the `index.html` file directly in your browser (`file:///...`) will prevent assets from loading correctly. You must run a local HTTP server to view the site.

Here are the simplest ways to run and check the site locally:

### Option 1: Using Python via `uv` (Recommended)
`uv` is a blazing-fast Python package manager. The project contains a `pyproject.toml` and `.python-version` file to manage the local environment consistently.

1. **Synchronize the project environment:**
   ```bash
   uv sync
   ```
2. **Start the local server:**
   ```bash
   uv run python -m http.server 8000
   ```
   *(This automatically executes the built-in HTTP server using the exact Python version specified in `.python-version` within the synchronized `.venv` context).*

Then, open your web browser and navigate to:
[http://localhost:8000](http://localhost:8000)

### Option 2: Using Standard Python (Alternative)
If you don't have `uv` installed, run standard Python directly from the project directory:
```bash
python3 -m http.server 8000
```

### Option 3: Using Node.js / npm
If you have Node.js installed, you can start a server with zero setup:
```bash
npx serve
```
or for automatic browser opening and live reloading:
```bash
npx live-server
```

### Option 4: VS Code "Live Server" Extension
If you are using Visual Studio Code:
1. Install the **Live Server** extension by Ritwick Dey.
2. Click the **Go Live** button in the bottom status bar of VS Code, or right-click `index.html` and choose **Open with Live Server**.


