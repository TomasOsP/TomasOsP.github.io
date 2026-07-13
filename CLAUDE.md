# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Tomás Ospina's personal portfolio site — a **Jekyll** site built on the **portfolYOU** theme and deployed via **GitHub Pages** (repo `TomasOsP/TomasOsP.github.io`). Content is authored in Markdown; presentation lives in Liquid templates and SCSS. There is no application code, test suite, or JS build step.

## Commands

```bash
bundle install                 # install gems (first time / after Gemfile change)
bundle exec jekyll serve       # local dev server with live reload at http://localhost:4000
bundle exec jekyll serve --drafts   # also render _drafts
bundle exec jekyll build       # one-off build into _site/
```

Ruby is pinned to **3.3.7** (`.ruby-version`). The `github-pages` gem pins Jekyll and all plugin versions to match GitHub Pages' build environment — do not add plugins that GitHub Pages doesn't whitelist, or the deployed build will silently differ from local. Deployment happens automatically when changes land on the branch GitHub Pages serves; there is no manual deploy step.

`_site/` is generated output — never edit it by hand.

## Content model

Two Jekyll collections plus standalone pages drive everything:

- **`_posts/`** — blog entries. Filenames must be `YYYY-MM-DD-title.md`. Front matter: `title`, `tags` (array), `style` (`border`/`fill`), `color` (Bootstrap contextual name, e.g. `primary`), `description`. Permalink is `/blog/:title` (set in `_config.yml`).
- **`_projects/`** — portfolio items, output as pages at `/projects/:name`. Front matter: `name`, `tools` (array of tags), `image` (card thumbnail path), `description`. These default to `layout: page` via `_config.yml`. The numeric filename prefixes like `(1) ...`, `(2) ...` control display order on the projects listing.
- **`pages/`** — top-level pages (`about.md`, `blog.html`, `projects.html`, `index.md`, `tags.html`, `search.json`, `404.html`). Add `nav_exclude` entries in `_config.yml` to keep a page out of the navbar.

**Every collection item needs YAML front matter** (the `---` block). A `.md` file without it renders as raw text and won't pick up the layout. Note: `_projects/PLC.md` currently lacks front matter and is effectively a draft.

## Data-driven sections

The About page pulls from `_data/*.yml` rather than hardcoded HTML — edit these instead of the templates:

- `programming-skills.yml`, `other-skills.yml` — skill bars (`name`, `description`, `percentage`, `color`), rendered by `_includes/about/skills.html`.
- `timeline.yml` — work/education history (`title`, `from`, `to`, `description`), rendered by `_includes/about/timeline.html`.
- `social-media.yml` — social links.

Author identity, social handles, and site-wide toggles (analytics, Disqus, buymeacoffee) live in `_config.yml` under `author:` and the corresponding sections. **Restart `jekyll serve` after editing `_config.yml`** — it is not picked up by live reload.

## Templates & styling

- `_layouts/` — `default.html` is the shell; `page.html`, `post.html`, `element.html` extend it.
- `_includes/` — reusable partials, grouped into `about/`, `blog/`, `projects/`, `elements/` plus top-level pieces (`navbar.html`, `footer.html`, `head.html`, `landing.html`).
- `_sass/` — imported through `portfolYOU.scss`. `_variables.scss` holds theme tokens; `_theme.scss` / `_theme-dark.scss` handle the light/dark modes. Component-scoped files (`_projects.scss`, `_blog.scss`, `_timeline.scss`, `_navbar.scss`, etc.) map to the includes of the same name.

Custom additions beyond the stock theme include the **`.project-gallery` / `.project-gallery__img`** flex grid in `_sass/_projects.scss` — a responsive multi-image row used inside project Markdown (see the `<div class="project-gallery">` block in `_projects/(2) 2026-02-01-rtos-gymedge.md`). It shows a single row on desktop and wraps to two-up on screens ≤768px.

Reference project images via `{{ '/assets/images/...' | relative_url }}` (or `/assets/gifs/...`) so paths survive any `baseurl` change.
