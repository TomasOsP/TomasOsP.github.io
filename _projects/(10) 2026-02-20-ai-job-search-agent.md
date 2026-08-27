---
name: "AI Job Search Agent"
tools: [Python, Flask, SQLite, LLM, PDF parsing]
image: /assets/images/ai-job-search-agent-architecture.png
description: "Parses your CV, pulls live postings and ranks them 0–100 with the reasons behind each score"
areas: [ai-ml, automation]
---

# AI Job Search Agent
by: <em>Tomás Ospina.</em>

## Overview
An automated job-search agent that reads a CV, builds a structured professional profile
from it, pulls openings from multiple platforms, and scores each one from 0 to 100 —
together with *why* the candidate fits, where the competitive advantage is, and what the
concerns are.

<img
  class="reveal reveal--zoom"
  src="{{ '/assets/images/ai-job-search-agent-architecture.png' | relative_url }}"
  alt="Pipeline: CV parsing, job fetching, matching engine, scored results in a Flask UI"
  style="max-width: 95%; display:block; margin: 1.5rem auto;"
/>

## Problem & Solution
Job boards rank by keyword and recency, which puts the interesting 5% of postings
somewhere in the middle of page four. This agent inverts the process: the profile is
extracted once from the CV, and every posting is then scored against it, so the ranking
reflects fit rather than search relevance.

It handles two distinct profiles — **AI Automation / Backend** and **Embedded Systems /
Hardware** — and scores each posting against the relevant one, since a firmware role and
a backend role reward completely different parts of the same CV.

## Technical Specifications
| Component        | Detail                                                    |
| ---------------- | --------------------------------------------------------- |
| `cv_parser.py`   | Extracts a structured profile from the CV PDFs             |
| `job_sources.py` / `job_search_fetcher.py` | Multi-platform posting retrieval  |
| `job_search_agent.py` | Matching and scoring, 0–100 with rationale            |
| `database.py`    | SQLite (`jobs.db`) — postings, scores and history          |
| `scheduler.py`   | Periodic re-runs so new postings are scored automatically  |
| `app.py`         | Flask interface with the ranked results                    |

## My Role & Key Contributions
- Built the whole pipeline, from PDF parsing to the web interface.
- Designed the scoring model so every number comes with an explanation — strengths,
  competitive advantages and concerns — rather than an opaque percentage.
- Added the scheduler so the database stays current without manual runs.

## What I Learned
A score is only useful if it is auditable. Making the agent explain each ranking was what
turned it from a toy into something worth acting on.

---

🔒 Private repository — happy to walk through the code on request.
