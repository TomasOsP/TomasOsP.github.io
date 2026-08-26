---
name: "Repo-to-Blog Generator"
tools: [Python, GitHub API, GPT-4, Jinja2, Jekyll]
image: /assets/images/repo-to-blog-agent-architecture.png
description: "Reads a GitHub repository and writes the technical article about it, ready to publish"
---

# GitHub Repository → Blog Post Generator
by: <em>Tomás Ospina.</em>

## Overview
An agent that turns a GitHub repository into a publishable technical article. It pulls
the repo's metadata and README through the GitHub API, analyses what the project actually
does, and has **GPT-4** write the piece — rendered through a Jinja2 template with the
Jekyll front matter already in place.

<img
  class="reveal reveal--zoom"
  src="{{ '/assets/images/repo-to-blog-agent-architecture.png' | relative_url }}"
  alt="Pipeline: GitHub API → analyzer → LLM writer → Jinja2 template → Markdown post"
  style="max-width: 95%; display:block; margin: 1.5rem auto;"
/>

## Problem & Solution
The work of writing up a project is mostly retrieval — what does it do, what is it built
with, what is interesting about it — and that information already lives in the
repository. The agent does the retrieval and the first draft; the human does the editing,
which is the part that actually needs a human.

The generated posts target recruiters specifically, so the prompt asks for the impact and
the stack up front rather than a commit-by-commit narrative.

## Pipeline
```
GitHub Repository → Analysis → LLM (OpenAI) → Blog Post (Markdown)
```

1. **`github_client.py`** — fetches name, description, primary language, stars and README.
2. **`analyzer.py`** — structures that raw data into the fields the prompt needs.
3. **`llm_writer.py`** — GPT-4 generates the article.
4. **`writer.py`** — renders the Jinja2 Jekyll template into `output/`.

## Technical Specifications
| Item        | Detail                                          |
| ----------- | ----------------------------------------------- |
| Language    | Python 3.8+                                     |
| Model       | GPT-4 family via the OpenAI API                 |
| Templating  | Jinja2, customisable per blog engine            |
| Output      | Markdown with Jekyll front matter, ready to drop into `_posts/` |

## What I Learned
Templating the output was worth more than tuning the prompt. Once the front matter and
structure were fixed by the template, the model only had to be good at prose — a much
narrower job than "produce a valid Jekyll post".

---

🔒 Private repository — happy to walk through the code on request.
