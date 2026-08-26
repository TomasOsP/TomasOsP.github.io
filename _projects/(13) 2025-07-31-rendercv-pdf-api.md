---
name: "RenderCV PDF API"
tools: [Python, FastAPI, Typst, Docker, Caddy]
image: /assets/images/rendercv-pdf-api-architecture.png
description: "A self-hosted API that turns RenderCV YAML into a typeset PDF — no LaTeX toolchain required"
---

# RenderCV PDF API
by: <em>Tomás Ospina.</em>

## Overview
A FastAPI service that renders a CV written in [RenderCV](https://rendercv.com) YAML
syntax into a finished PDF, exposed both as an HTTP endpoint and as an interactive web
editor with live preview.

<img
  class="reveal reveal--zoom"
  src="{{ '/assets/images/rendercv-pdf-api-architecture.png' | relative_url }}"
  alt="Architecture: YAML in, FastAPI + RenderCV/Typst, PDF out"
  style="max-width: 90%; display:block; margin: 1.5rem auto;"
/>

## Problem & Solution
Keeping a CV in version control means keeping it in text — but text is not what anyone
wants to receive. This service closes that gap: the CV lives as YAML, and any client that
can POST gets back a typeset PDF.

RenderCV 2.x compiles through **Typst** rather than LaTeX, which is what makes the whole
thing containerisable in a sane image size — no TeX Live install, no font package
archaeology.

## Technical Specifications
| Item        | Detail                                                     |
| ----------- | ---------------------------------------------------------- |
| Runtime     | Python 3.10+ (built on 3.13)                                |
| Framework   | FastAPI + Uvicorn, Swagger UI at `/docs`                    |
| Renderer    | `rendercv[full]` 2.x — Typst compiler, no LaTeX dependency  |
| Interface   | Web editor at `/` with YAML input and PDF preview           |
| Deployment  | Docker + Docker Compose, Caddy as the reverse proxy         |

## My Role & Key Contributions
- Built the FastAPI service and the YAML → PDF rendering endpoint.
- Wrote the browser editor with live preview so the API is usable without a client.
- Containerised the service and put it behind Caddy for TLS and routing.

## What I Learned
Choosing the Typst-based path over LaTeX turned a multi-gigabyte image into a practical
deployment — the toolchain decision mattered more here than anything in the application code.

---

🔒 Private repository — happy to walk through the code on request.
