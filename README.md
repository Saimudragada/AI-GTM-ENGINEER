# Sai Mudragada — AI GTM Engineer · Portfolio

A single-page portfolio for **Sai Mudragada**, an AI GTM Engineer who builds the
systems that sit behind go-to-market: signal detection, waterfall enrichment,
CRM automation, and LLM-personalized outbound — plus the writing that runs
through those systems.

**Live site:** deployed on Vercel.

## Design concept

The site is built around one idea: *the portfolio behaves like one of the
systems it describes.*

- **Hero pipeline** — an animated `SIGNAL → ENRICH → QUALIFY → OUTBOUND → MEETING`
  flow with light pulses traveling between nodes.
- **Live system log** — a looping, typed terminal feed showing a signal getting
  detected, enriched, upserted into HubSpot, messaged, and answered.
- **The System** — a five-node flowchart of the real production architecture
  (Koala/Clay signals → Clay waterfalls → HubSpot dedupe/upsert → LLM messaging
  → MEDDIC handoff).
- **Proof** — count-up metrics from real deployments (3%→11% and 4%→13% reply
  rates, +40% organic pipeline, zero-to-workflow in 5 weeks).
- **Builds** — AgentReady (Profound hackathon), Content Ops Platform, CRM
  Context Engine, Ad Spend Sentinel.
- **The Words** — the creative side: a CSS-rebuilt spec billboard concept for
  Profound, ad scripts, LinkedIn content, and GEO/AEO writing.

Visual language: near-black canvas, a single signal-green accent (`#45e08c`),
Space Grotesk display type, JetBrains Mono system annotations, and a faint
engineering grid — modern, futuristic, deliberately uncrowded.

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
