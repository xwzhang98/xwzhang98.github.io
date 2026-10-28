# Hallmark handoff: redesign of xwzhang98.github.io (version 2, Loom)

```
Redesign  full on / · restyle on the inner pages · 7 pages
Version   2: Loom, set with a researcher's restraint, after the owner found version 1 (Newsprint) slightly showy
Before    Floor 104 FAIL · Reflex 16 (al-folio as it stood)
After     Floor 0 FAIL in light and dark · Reflex 6 (all gate 79 on inner pages whose al-folio layouts were kept) · 78 waived on record
Kept      53/54 links (1 dropped on record: paper III's wrong arXiv link) · 1/1 fields · 13/13 figures · 26/27 headings (1 reworded on record)
Changed   the system everywhere (type, colour, rules, links, both modes); the homepage's composition, the letterhead and the footer
Dropped   nothing else (each selected paper's venue sits over its year at the right edge; on a phone the venue line under the authors carries both)
Reviews   hero: fix, 4 findings, 3 resolved, 1 partial (the paper figure, since added) · finish: fix, 7 findings, 7 resolved
Owner     after the reviews: the drawing beside the claim, a new claim and lede, the paper III figure, the toggles keyboard-reachable, a Blog page, paper V's arXiv link
Version 1 .hallmark/v1-newsprint/ (screenshots and source)
Compare   .hallmark/compare.html (al-folio before, this version after)
```

## What changed from version 1

- The Newsprint system (Zilla Slab 700 heads, double rules, a brick accent) gave way to Loom: Libre Caslon Display only for the h1 and section heads, Hanken Grotesk for everything else (dates and years as small muted labels), hairlines, one deep indigo kept to hover and focus.
- The headline went from 84px heavy slab to 48px light Caslon on one line; the section heads from 56px to 32px margin labels.
- The box score of 512×, 260× and 83× is gone; the figures stay in the owner's sentences.
- The bio is one reading column instead of three justified columns with a drop cap.
- The masthead is a letterhead (name and affiliation at the left, pages on the name's baseline at the right, one ink rule); on a phone, Menu shares the name's line. The footer is one colophon line.
- The two filled buttons are plain text links.
- Two rule weights below the letterhead: the two lists (Selected publications, News) open on a 2px ink rule over the body column, and Research and Contact keep hairlines. The space between sections varies.
- The penguin drawing sits beside the claim, 200px square, so it is seen first (on a phone it heads the opening, above the claim). In dark mode it stays black, printed on a dimmed ecru card.
- One figure from paper III (low resolution, super-resolved and high resolution at z = 0) sits in the Research row, after the super-resolution paragraph.
- The close is three columns: the address, Email and CV (PDF), then GitHub, LinkedIn and ORCID.
- The publication toggles (Abstract, BibTeX) are buttons a keyboard reaches, and "N more authors" opens with Enter or Space.
- A Blog page joins the nav (between Teaching and Email): posts as ruled rows with the date as a label, "No posts yet." until the first. A post page has one meta line (date and tags) and ends on "More posts". The nav's gap went from 40 to 32px so the seven names still fit beside the name from 1200px.

Markup, assets and config:

- `_layouts/bib.liquid`: the year moved into the venue column (the homepage shows the venue over the year at the right edge; /publications/ hides it, since it groups entries by year); the toggles became `<button aria-expanded>`; "N more authors" took `role="button"`, `tabindex` and a key handler. `assets/js/common.js` matches the buttons and keeps `aria-expanded` in step.
- `_includes/cv/time_table.liquid`: the date column is rendered even when an entry has no date, so the undated "Block Center Seed Fund" entry starts on the same line as the others.
- `_includes/social_text.liquid`: Email is left out of the profile list, because the close sets it beside the CV.
- `_config.yml`: DM Mono is no longer requested from Google Fonts. Nothing uses it.
- `assets/img/prof_pic_cropped.png`: the upper-left 636px of `prof_pic.png`, without the 小红书 watermark; `prof_pic.png` is kept as it was.
- `assets/img/sr_comparison_z0.jpg`: the z = 0 row of Fig. 1 of paper III, cropped from the paper's arXiv source (2305.12222).
- `_bibliography/papers.bib`: paper III's `arxiv` field was 2312.05295, a different group's paper on clothed avatar generation; it is now 2305.12222.
- `_bibliography/papers.bib`: paper V gained `arxiv = {2610.06710}`.
- `_config.yml`: `_posts` and `_pages/blog.md` left `exclude`; `blog_name` and `blog_description` replaced al-folio's leftovers ("Notes", "a simple whitespace theme for academics").
- `_pages/blog.md`, `_layouts/post.liquid`, `_includes/related_posts.liquid`: rewritten in the site's terms. Tags print as plain words, since `jekyll-archives` is not enabled and no tag pages exist. al-folio's related-posts block had its items outside the list.

## Copy changed (before → after)

Gate 19 bans em and en dashes in page copy; each was replaced by a colon, parentheses or "to".

Homepage (`_pages/about.md`, `_layouts/about.liquid`):

- "My research develops AI methods that break the volume–resolution trade-off in cosmological simulation:" → the headline, first "Breaking the volume and resolution trade-off.", then "Learning to invert the simulated universe.", then the owner's choice among candidates naming inverse problems: "Machine learning for inverse problems in cosmology." (the name moved to the letterhead on every page)
- "I build machine learning methods that make expensive scientific computation reachable." → moved under the headline, then rewritten so each line of work reads as an inverse problem: "From a cheap simulation to the small scales it misses, from galaxy catalogs of any code to the physics behind them, and from a paper to the simulation it describes."
- "**Super-resolution and emulation** — a time-conditioned…" → "**Super-resolution and emulation.** A time-conditioned…" (the same for "Foundation models for simulations" and "LLM agents for research")
- New figure caption: "The same volume at z = 0: the low-resolution input (left), the super-resolved output (middle) and the high-resolution simulation (right). From Zhang et al. 2024, MNRAS 528, 281."
- The avatar's alt text: "a black-and-white drawing of a bird" → "a black-and-white drawing of a penguin"
- Section heads: "news" → "News" · "selected publications" → "Selected publications" · new margin labels "Research" and "Contact"
- Links under the headline: "Email" and "CV (PDF)"; the same pair leads the close, where "Email" used to be the first of the profile links
- `announcements.scrollable: true` → `false`: the 60vw scroll box hid four of the five items on a phone.
- The address keeps "Cosmology & Astrophysics" together with a no-break space.

Other pages:

- `_news/2025-12-20-ijcnlp.md`: "…System Demonstrations — a multi-agent LLM system…" → "…System Demonstrations: a multi-agent LLM system…"
- `_projects/1_srsims.md`: "an inverse problem — one low-resolution field … realizations — I also built" → "an inverse problem (one low-resolution field … realizations), I also built"
- `_projects/2_simagents.md`: "the dangerous errors are silent — a plausible-looking value" → "the dangerous errors are silent: a plausible-looking value"
- `_projects/3_foundation.md`: "builds that language — a shared latent space" → "builds that language: a shared latent space"; "AION-1 — an omnimodal foundation model for astronomical observations — with the CMU…" → "AION-1 (an omnimodal foundation model for astronomical observations) with the CMU…"
- `_pages/news.md`: page title "news" → "News"
- `_pages/teaching.md`: "**Course** — description" → "**Course**: description" (8 lines); "(2024–present)" → "(2024 to present)", "(2023–2024)" → "(2023 to 2024)", "(2025–present)" → "(2025 to present)"
- `_data/cv.yml`: year ranges "2021–present" → "2021 to present" and the like (10 places); "Aug 31–Sep 3, 2026" → "Aug 31 to Sep 3, 2026"; two straight apostrophes → ’
- `_layouts/bib.liquid`: button labels "Abs" → "Abstract", "Bib" → "BibTeX"
- `_layouts/cv.liquid`: the PDF icon in the page title → a "Download the PDF" text link under it

## Decided by the owner

- "Robust Cosmological Inference" stays: it is the KAAI hackathon track's own name, though gate 19 reads "Robust" as a buzzword.
- The penguin drawing stays as the avatar, moved to the top.
- The headline and lede were rewritten for the owner's current work: super-resolution, the catalog foundation model and the agents, each as an inverse problem. Nothing from the research statement the owner shared is on the site.

## Left open for the owner

- The blog's line, "Notes on research, simulations and machine learning.", is a placeholder to rewrite when the first post exists; the owner's August config had named the blog "Notes", and the tab now says "Blog" as asked.
- Gate 78 is waived: the section heads are 32px margin labels, smaller than Hallmark's default, because the owner asked for restraint.
- Layout notes on the inner pages, which kept their al-folio layouts: gate 79 and gate 77 both read each page as a page head and nothing after it, because al-folio sets the whole page as one article with no sections. The screenshots show the content starting right under the head's hairline, so nothing visible is wrong. Only rebuilding those pages in sections would quiet the two gates.

## Material ask

- Slot `portrait` (beside the claim, 200px square at 1440, 120px at 375): a portrait photograph only if the owner ever prefers one to the drawing, square and at least 500 × 500. A photograph needs the multiply blend on `.home-portrait > img` removed in `site.css`; it suits a black-and-white drawing only.
