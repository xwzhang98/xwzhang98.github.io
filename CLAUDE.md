# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website of Xiaowen Zhang (Physics PhD candidate at CMU, machine learning for cosmological simulations), served at https://xwzhang98.github.io. It is a Jekyll site on the [al-folio](https://github.com/alshedivat/al-folio) theme (Docker image pinned at v0.13.4) with most of the template's demo content removed, restyled with a design system built with the Hallmark skill (theme "Loom", set with a researcher's restraint); `DESIGN.md` records that system.

## Commands

- **Preview with Docker (al-folio's supported route):** `docker compose up` serves `http://localhost:8080` with live reload. `bin/entry_point.sh` restarts Jekyll whenever `_config.yml` changes, because Jekyll never reloads its config on its own. `docker-compose-slim.yml` uses a smaller image.
- **Preview natively:** `bundle install && bundle exec jekyll serve`. Needs Ruby 3.x (CI uses 3.3.5) and ImageMagick on `PATH`; the macOS system Ruby (2.6) is too old.
- **Production build, as CI runs it:** `JEKYLL_ENV=production bundle exec jekyll build`, then `purgecss -c purgecss.config.js`. PurgeCSS strips any selector not found in the built HTML/JS, so a class that only appears at runtime can disappear in production.
- **Format check (the only lint; CI fails on it):** `npx prettier . --check`, or `--write` to fix. Prettier 3.1.1 with `@shopify/prettier-plugin-liquid`, `printWidth: 150`; exclusions live in `.prettierignore`.
- There is no test suite. Verify a change by building and reading the rendered pages in `_site/`.
- **Design lint (optional, needs the Hallmark skill in `~/.claude/skills/hallmark` and `puppeteer-core`):** serve `_site/` statically, then `node ~/.claude/skills/hallmark/scripts/sloplint.mjs assets/css/hallmark/*.css --genre editorial --url http://127.0.0.1:4000/ [--url …]`. Serve the built folder rather than `jekyll serve --livereload`: a reload during the render pass aborts it.

## Deployment

A push to `main` that touches content, assets or config runs `.github/workflows/deploy.yml`: it builds with Ruby 3.3.5, runs PurgeCSS, and pushes `_site/` to the `gh-pages` branch, which GitHub Pages serves. Never edit `gh-pages` by hand. `prettier.yml` checks formatting on every push and PR; `broken-links.yml` runs lychee (ignore list in `.lycheeignore`).

## Architecture

Most changes are content edits; the Liquid templates and Sass are close to stock al-folio.

| Content      | Edit                                                                                                                            | Rendered by                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Homepage `/` | `_pages/about.md`: front matter holds the headline, lede, figures, story head and profile; the body is the story set in columns | `_layouts/about.liquid`                                                            |
| Publications | `_bibliography/papers.bib`                                                                                                      | jekyll-scholar, one entry per `_layouts/bib.liquid`                                |
| News         | `_news/*.md` (one-line items with `inline: true`)                                                                               | `_includes/news.liquid`, on the homepage and `/news/`                              |
| Blog posts   | `_posts/YYYY-MM-DD-slug.md` with `layout: post`, `title`, `date`, `description`, `tags`                                         | `_pages/blog.md` lists them at `/blog/`; `_layouts/post.liquid` renders each       |
| Projects     | `_projects/*.md` (`category`, `importance`)                                                                                     | `_pages/projects.md` and `_includes/projects.liquid`                               |
| CV page      | `_data/cv.yml`, plus the PDF named by `cv_pdf` in `_pages/cv.md` (in `assets/pdf/`)                                             | `_layouts/cv.liquid`, dispatching on each section's `type` to `_includes/cv/*`     |
| Social links | `_data/socials.yml` (file order is display order)                                                                               | `_includes/social.liquid` (icons), `_includes/social_text.liquid` (homepage close) |
| Venue badges | `_data/venues.yml`, keyed by a bib entry's `abbr`                                                                               | `_layouts/bib.liquid`                                                              |

Mechanics that span several files:

- **Navbar:** every `_pages/*` page with `nav: true` appears, ordered by `nav_order` (`_includes/header.liquid`). The homepage tab takes its label from `about.md`'s `title`.
- **BibTeX extras:** fields such as `abbr`, `arxiv`, `code`, `html`, `pdf`, `preview` and `selected` drive the badges and buttons in `bib.liquid`, and `filtered_bibtex_keywords` in `_config.yml` hides them from the displayed BibTeX. `selected = {true}` puts a paper in the homepage's selected publications. The owner's name is matched for highlighting through `scholar.last_name` / `scholar.first_name`. The Abstract, BibTeX and Award toggles are `<button>`s so a keyboard reaches them; `assets/js/common.js` opens their panels and keeps `aria-expanded` in step, so keep both in sync when updating al-folio.
- **Projects page:** with `enable_project_categories` on, only projects whose `category` appears in the page's `display_categories` are shown.
- **`exclude:` in `_config.yml`** removes paths from the build entirely, collection folders included; the profiles and repositories pages are excluded on purpose. A root-level file without front matter is published verbatim as a static file unless it is excluded, which is why `README.md`, `CLAUDE.md` and `DESIGN.md` are listed there.
- **`external_sources`** in `_config.yml` makes `_plugins/external-posts.rb` fetch feeds and URLs at build time and publish them as posts under `/blog/`; it is empty on purpose.
- **Blog:** `/blog/` (nav order 7) lists `_posts` and shows "No posts yet." while the folder holds only `.gitkeep`. A post dated later than the build time is skipped until a later build. Tags print as plain words because `jekyll-archives` is not enabled, so no tag or year pages exist; enabling it in `_config.yml` turns them into links and needs the `archive-*` layouts styled. To list recent posts on the homepage, set `latest_posts.enabled` in `about.md`.
- **Styling is two layers.** al-folio's `assets/css/main.scss` (the `_sass/` partials, Bootstrap 4 and MDB from CDNs pinned with SRI hashes under `third_party_libraries` in `_config.yml`) loads first. `assets/css/hallmark/site.css` loads after it from `_includes/head.liquid` and imports `tokens.css` (the source of truth for colour, type, space and both modes) and `base.css` from the same folder. `site.css` points al-folio's `--global-*` variables at the tokens, so al-folio's own widgets follow the theme, then restyles the letterhead, footer, homepage and al-folio's publication, CV, project and news markup. Change colours and type in `tokens.css`, never as literals. The light/dark toggle (`assets/js/theme.js`) sets `html[data-theme]`, which is where the dark tokens hang.
- **Keep the Hallmark CSS in `assets/css/hallmark/`.** `main.scss` does `@import "base"`, and Sass checks the importing file's folder first, so a `base.css` placed in `assets/css/` silently replaces `_sass/_base.scss` and drops all of al-folio's base styles. The subfolder also keeps the files out of PurgeCSS, whose glob (`_site/assets/css/*.css`) is not recursive; PurgeCSS deletes the `:focus-visible` and `:is()` rules there, so do not widen that glob. For the same reason the folder is in `jekyll-minifier`'s `exclude`: its CSS compressor rewrites `clamp(2.75rem, 5vw + 1rem, …)` without the spaces around `+`, which is invalid and drops every fluid size in production builds only.
- **Chrome:** the letterhead (`_includes/header.liquid`) and the one-line colophon footer scroll with the page (`navbar_fixed` and `footer_fixed` are false). `assets/js/progress-bar.js` still writes an inline `padding-top` sized for a fixed navbar; `site.css` overrides it.
- **Copy rule from the design system:** no em or en dashes in page copy (use a colon, a comma, parentheses, or "to" for ranges), and no tracked capitals on labels. `.hallmark/` holds Hallmark's build log and before/after records; Jekyll skips dot-folders, so it never publishes.
- **Images** in `assets/img/` get 480, 800 and 1400px WebP variants from jekyll-imagemagick; embed them through `_includes/figure.liquid` so the `srcset` is generated. Asset URLs pass through the `bust_file_cache` / `bust_css_cache` filters from `_plugins/cache-bust.rb`. The homepage avatar (`profile.image` in `about.md`) is `prof_pic_cropped.png`, the upper-left 636px of `prof_pic.png` cut to leave out a watermark. It sits beside the headline, and `.home-portrait` in `site.css` treats it as a black-and-white drawing: multiplied into the paper, and in dark mode printed on a dimmed ecru card (`--color-print`). A photograph needs the multiply blend removed.
