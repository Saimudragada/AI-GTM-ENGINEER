# Sai Mudragada — AI GTM Engineer · Portfolio

A single-page portfolio for **Sai Mudragada**, an AI GTM Engineer who builds the
systems that sit behind go-to-market: signal detection, waterfall enrichment,
CRM automation, and LLM-personalized outbound — plus the writing that runs
through those systems.

**Live site:** deployed on Vercel.

## Design concept — "The Field Manual"

An editorial, print-inspired working document instead of the usual dark-tech
portfolio: warm paper canvas, ink-black Fraunces display serif, blue ballpoint
annotations with hand-drawn arrows, a highlighter-yellow marker sweep, and a
vermillion rubber stamp. The page reads like an engineer's field manual that a
copywriter got their hands on — which is exactly the positioning.

- **Hero** — oversized editorial headline ("I build growth systems* that book
  meetings while you sleep.") with a blue-pen margin note pointing at the
  asterisk, and a footnote that owns both halves of the craft.
- **The receipt** — the system log rendered as a zigzag-edged till receipt:
  a real morning (signal → enrich → upsert → draft → reply), typed live.
- **01 / The machine** — the production pipeline drawn as a blueprint schematic
  on grid paper: five blue-ink nodes, dashed connectors, pen annotations.
- **02 / The ledger** — metrics as an audited ledger with giant serif numerals
  (3%→11%, 4%→13%, +40%, 5 wks, 6×).
- **03 / The shipping log** — internal tools as numbered log entries that
  invert to ink-on-black on hover.
- **04 / Service record** — Belkins, Intake (Mise), GrowthSpree with oversized
  italic year numerals.
- **05 / The words** — the Profound spec billboard presented as a poster taped
  to the page (washi tape, slight rotation), plus the writing practice.
- **06 / Contact** — "Got a distribution problem? Good." with a rubber
  OPEN-TO-WORK stamp.

Type: Fraunces (900/italic display) · Archivo (body) · IBM Plex Mono
(annotations). Palette: paper `#f4f0e6`, ink `#191713`, pen blue `#1d3fc4`,
vermillion `#e8501a`, marker `#f6e25c`.

## Stack

Intentionally zero-dependency: hand-written **HTML + CSS + vanilla JS**.
No framework, no build step — the whole site is four files.

| File | Purpose |
| --- | --- |
| `index.html` | Structure and content |
| `styles.css` | Design system, layout, animations |
| `script.js` | Scroll reveals, metric count-ups, typed system log |
| `favicon.svg` | Signal-node favicon |

Accessibility: respects `prefers-reduced-motion` (animations collapse to
static content), semantic landmarks, keyboard-reachable navigation.

## Run locally

No install needed:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Static site — deploys as-is to Vercel (or any static host). No configuration
required.

## Contact

- Email: saimudragada1012@gmail.com
- LinkedIn: [linkedin.com/in/saimudragada](https://linkedin.com/in/saimudragada)
