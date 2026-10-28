# Design: xwzhang98.github.io

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System

- Genre: editorial, set with a researcher's restraint: one large line per page, everything else at reading size
- Shape of the first page: Long Document as a ruled document (labels in the margin, one reading column), with a Banner hero, an edge-aligned letterhead and a colophon footer
- Theme: Loom, colourway ecru, used without its bands and photographs
- Axes: light/roman-serif/cool · posture: committed (the ecru paper) · modes: light and dark

## Tokens

`assets/css/hallmark/tokens.css` is the source of truth. The roles:

```css
:root {
  --color-paper: oklch(95.5% 0.014 85);
  --color-paper-2: oklch(92% 0.022 84);
  --color-paper-3: oklch(85% 0.032 80);
  --color-ink: oklch(21% 0.012 60);
  --color-ink-2: oklch(31% 0.012 60);
  --color-muted: oklch(46% 0.014 62);
  --color-rule: oklch(83% 0.022 84);
  --color-rule-ink: oklch(21% 0.012 60);
  --color-print: oklch(95.5% 0.014 85); /* the drawing's backing; oklch(84% 0.016 84) in dark mode */
  --color-accent: oklch(34% 0.115 267);
  --color-accent-ink: oklch(95.5% 0.014 85);
  --color-focus: oklch(43% 0.15 267);
  --font-display: "Libre Caslon Display", "Libre Caslon Text", ui-serif, Georgia, serif;
  --font-body: "Hanken Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-outlier: "DM Mono", ui-monospace, monospace;
  --radius-card: 0;
  --radius-pill: 0;
  --rule-hair: 1px;
  --rule-ink: 2px;
  --shadow-card: none;
}
```

Dark mode re-derives the same roles in the same file under `html[data-theme="dark"]`, the attribute al-folio's theme toggle sets. The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`. `assets/css/hallmark/site.css` points al-folio's `--global-*` variables at these roles, so al-folio's own widgets follow both modes.

## Type

- Libre Caslon Display 400 only for the h1 (48px at 1440; the homepage's claim breaks into two balanced lines beside the drawing) and section heads (32px); never under 32px.
- Hanken Grotesk 400 and 500 for everything else: body at 17px, item titles at 20px, labels a step smaller in the muted ink.
- Dates, years and venues are labels: Hanken Grotesk 500 at `--text-sm`, tabular figures, in the muted ink. The theme keeps DM Mono for figures compared in a row; this site has none, so the font is not loaded (`--font-outlier` stays in the tokens for when it does).

## Pages

- The letterhead holds seven page names (About, Publications, Projects, CV, Teaching, Blog, Email) 32px apart and the two tools; from 1200px they stand on the name's baseline, narrower they take their own line under the name, and on a phone they fold into Menu.
- Inner pages share one head: the title in Caslon, one muted line, a hairline. Lists under it are ruled rows with a label column: news and blog posts by date, publications by venue, the CV by years.

## Controls

- Links: in the ink with a quiet underline that turns indigo on hover.
- The text link (`.link`): Hanken 500 over a 2px rule in the text colour that turns indigo on hover. No filled buttons.

## Surfaces

- Two rule weights, as in a pattern book: a 2px ink rule under the letterhead and over a list's first row (on the homepage, over Selected publications and News, across the body column only); 1px hairlines in `--color-rule` between rows, over the Research and Contact rows and over the colophon. All sit on the text column's width.
- The joins vary: the most room before the publications, the least before the close; the colophon's rule sits at the same distance under the close as every other rule under its section.
- No bands, cards, shadows, radii or photographs. Two images:
  - the owner's penguin drawing, 200px square beside the claim (120px above it on a phone), printed into the paper: multiplied into the page in light mode, and onto a dimmed ecru card (`--color-print`) in dark mode, so the penguin stays black in both;
  - one figure from the owner's paper III (low resolution, super-resolved and high resolution at z = 0) in the Research row, at the body column's width, captioned beneath in the label style.

## Motion

- Character: still. State only (an underline turns indigo); under reduced motion everything ends at once.

## Exports

`assets/css/hallmark/tokens.css` in this project. Tailwind, DTCG or shadcn blocks are added here on request, per `export-formats.md`.
