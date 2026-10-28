# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website of Xiaowen Zhang (Physics PhD candidate at CMU, machine learning for cosmological simulations), served at https://xwzhang98.github.io. It is a Jekyll site on the [al-folio](https://github.com/alshedivat/al-folio) theme (Docker image pinned at v0.13.4) with most of the template's demo content removed.

## Commands

- **Preview with Docker (al-folio's supported route):** `docker compose up` serves http://localhost:8080 with live reload. `bin/entry_point.sh` restarts Jekyll whenever `_config.yml` changes, because Jekyll never reloads its config on its own. `docker-compose-slim.yml` uses a smaller image.
- **Preview natively:** `bundle install && bundle exec jekyll serve`. Needs Ruby 3.x (CI uses 3.3.5) and ImageMagick on `PATH`; the macOS system Ruby (2.6) is too old.
- **Production build, as CI runs it:** `JEKYLL_ENV=production bundle exec jekyll build`, then `purgecss -c purgecss.config.js`. PurgeCSS strips any selector not found in the built HTML/JS, so a class that only appears at runtime can disappear in production.
- **Format check (the only lint; CI fails on it):** `npx prettier . --check`, or `--write` to fix. Prettier 3.1.1 with `@shopify/prettier-plugin-liquid`, `printWidth: 150`; exclusions live in `.prettierignore`.
- There is no test suite. Verify a change by building and reading the rendered pages in `_site/`.

## Deployment

A push to `main` that touches content, assets or config runs `.github/workflows/deploy.yml`: it builds with Ruby 3.3.5, runs PurgeCSS, and pushes `_site/` to the `gh-pages` branch, which GitHub Pages serves. Never edit `gh-pages` by hand. `prettier.yml` checks formatting on every push and PR; `broken-links.yml` runs lychee (ignore list in `.lycheeignore`).

## Architecture

Most changes are content edits; the Liquid templates and Sass are close to stock al-folio.

| Content      | Edit                                                                                | Rendered by                                                                    |
| ------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Homepage `/` | `_pages/about.md` (front matter toggles profile, news, selected papers, socials)    | `_layouts/about.liquid`                                                        |
| Publications | `_bibliography/papers.bib`                                                          | jekyll-scholar, one entry per `_layouts/bib.liquid`                            |
| News         | `_news/*.md` (one-line items with `inline: true`)                                   | `_includes/news.liquid`, on the homepage and `/news/`                          |
| Projects     | `_projects/*.md` (`category`, `importance`)                                         | `_pages/projects.md` and `_includes/projects.liquid`                           |
| CV page      | `_data/cv.yml`, plus the PDF named by `cv_pdf` in `_pages/cv.md` (in `assets/pdf/`) | `_layouts/cv.liquid`, dispatching on each section's `type` to `_includes/cv/*` |
| Social icons | `_data/socials.yml` (file order is display order)                                   | `_includes/social.liquid`                                                      |
| Venue badges | `_data/venues.yml`, keyed by a bib entry's `abbr`                                   | `_layouts/bib.liquid`                                                          |

Mechanics that span several files:

- **Navbar:** every `_pages/*` page with `nav: true` appears, ordered by `nav_order` (`_includes/header.liquid`). The homepage tab takes its label from `about.md`'s `title`.
- **BibTeX extras:** fields such as `abbr`, `arxiv`, `code`, `html`, `pdf`, `preview` and `selected` drive the badges and buttons in `bib.liquid`, and `filtered_bibtex_keywords` in `_config.yml` hides them from the displayed BibTeX. `selected = {true}` puts a paper in the homepage's selected publications. The owner's name is matched for highlighting through `scholar.last_name` / `scholar.first_name`.
- **Projects page:** with `enable_project_categories` on, only projects whose `category` appears in the page's `display_categories` are shown.
- **`exclude:` in `_config.yml`** removes paths from the build entirely, collection folders included; `_posts` and the blog, profiles and repositories pages are excluded on purpose. A root-level file without front matter is published verbatim as a static file unless it is excluded, which is why `README.md` and `CLAUDE.md` are listed there.
- **`external_sources`** in `_config.yml` makes `_plugins/external-posts.rb` fetch feeds and URLs at build time and publish them as posts under `/blog/`, even though the blog page itself is excluded.
- **Styling:** `assets/css/main.scss` imports the `_sass/` partials. Colours are CSS custom properties in `_sass/_themes.scss` (`:root` for light, `html[data-theme="dark"]` for dark), built from `_sass/_variables.scss`; the content width is `max_width` in `_config.yml`. Bootstrap 4, MDB and the other JS/CSS libraries load from CDNs, pinned with SRI hashes under `third_party_libraries` in `_config.yml`. The light/dark toggle lives in `assets/js/theme.js`.
- **Images** in `assets/img/` get 480, 800 and 1400px WebP variants from jekyll-imagemagick; embed them through `_includes/figure.liquid` so the `srcset` is generated. Asset URLs pass through the `bust_file_cache` / `bust_css_cache` filters from `_plugins/cache-bust.rb`.
