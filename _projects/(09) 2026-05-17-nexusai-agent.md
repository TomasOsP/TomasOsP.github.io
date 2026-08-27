---
name: "NexusAI — Political Intelligence Agent"
tools: [Node.js, Express, SQLite, Claude API, Perplexity, JWT]
image: /assets/images/nexusai-agent-architecture.png
description: "An AI agent that tracks Colombian political media, surfaces narratives and flags disinformation"
areas: [ai-ml]
---

# NexusAI — Agente de Inteligencia Política
by: <em>Tomás Ospina.</em>

## Overview
An AI-powered intelligence dashboard for Colombian politics. It ingests RSS feeds from
national media, enriches them through **Perplexity** and **Claude**, and presents the
result as niche analysis, narrative reports and disinformation flags — all behind an
authenticated backend that keeps the provider API keys server-side.

<img
  class="reveal reveal--zoom"
  src="{{ '/assets/images/nexusai-agent-architecture.png' | relative_url }}"
  alt="Architecture: RSS feeds and LLM providers behind an Express proxy, feeding the dashboard"
  style="max-width: 95%; display:block; margin: 1.5rem auto;"
/>

## Problem & Solution
The obvious way to build this — call the model straight from the browser — leaks your
API keys to every visitor. NexusAI puts an **Express proxy** in front of every provider:
the frontend talks only to `/api/*`, the backend holds the credentials, and each route is
wrapped in JWT auth, rate limiting and Helmet headers. A credit system in SQLite bounds
what any single account can spend.

## Technical Specifications
| Item          | Detail                                                   |
| ------------- | -------------------------------------------------------- |
| Runtime       | Node.js 18+, Express                                      |
| Providers     | Claude API, Perplexity API, RSS feed ingestion            |
| Storage       | SQLite via `better-sqlite3` — users, credits, cached data |
| Security      | JWT (`jsonwebtoken`), `bcryptjs`, Helmet, `express-rate-limit`, CORS locked to the production origin |
| Frontend      | Vanilla JS modules — feeds, charts, reports, notifications, assistant |

## My Role & Key Contributions
- Designed the proxy architecture that keeps every provider key off the client.
- Built the auth layer (JWT + bcrypt) and the per-user credit accounting.
- Wrote the feed ingestion and the analysis modules: niche detection, disinformation
  checks, chart generation and report export.

## What I Learned
Rate limiting and credits are not an afterthought when the backend pays per token — they
are part of the architecture. Putting them in from the first route was cheaper than
retrofitting them later.

---

🔒 Private repository — happy to walk through the code on request.
