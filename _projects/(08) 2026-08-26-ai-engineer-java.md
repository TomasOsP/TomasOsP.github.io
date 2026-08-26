---
name: "AI Engineering Services in Java"
tools: [Java 21, Spring Boot, Anthropic SDK, Maven, RAG]
image: /assets/images/ai-engineer-java-architecture.png
description: "A four-module Maven workspace: an agent loop, tool calling, hybrid RAG with citation checks, and an eval harness"
---

# AI Engineer Java — Three Services and a Harness
by: <em>Tomás Ospina.</em>

## Overview
A Maven multi-module workspace built to show AI-engineering patterns in **Java 21** rather
than the usual Python: a provider-agnostic core with its own agent loop, two Spring Boot
services on top of it, and an evaluation harness that grades their output.

<img
  class="reveal reveal--zoom"
  src="{{ '/assets/images/ai-engineer-java-architecture.png' | relative_url }}"
  alt="Module diagram: llm-core feeding tool-calling-service, rag-service and eval-harness"
  style="max-width: 85%; display:block; margin: 1.5rem auto;"
/>

## The modules

**`llm-core`** — the piece everything else depends on. An `AgentLoop`, a `ToolRegistry`,
and the request/result types, written against an interface so a `StubLlmClient` can drive
the tests without a network call or an API key.

**`tool-calling-service`** — a Spring Boot service exposing the loop over HTTP, with
three tools (`CalculatorTool`, `ClockTool`, `InventoryTool`) registered against the core.

**`rag-service`** — retrieval-augmented generation with a **hybrid retriever**: a BM25
index and a vector store combined, feeding a grounded prompt. `CitationCheck` verifies
that the answer actually points back at the passages it was given.

**`eval-harness`** — suites, graders and reports, so a change to a prompt is measured
rather than eyeballed.

## Technical Specifications
| Item          | Detail                                                     |
| ------------- | ---------------------------------------------------------- |
| Language      | Java 21 (`maven.compiler.release` 21)                       |
| Framework     | Spring Boot 4.1.1 — BOM imported, not inherited, so the plain-Java modules stay framework-free |
| LLM SDK       | `anthropic-java` 2.57.0                                     |
| Retrieval     | BM25 + hashing embeddings, hybrid ranking, chunker + tokenizer |
| Tests         | JUnit 5, with a stub LLM client so the suite runs offline    |

## Engineering notes
The repo carries a `docs/PROMPT-WORKFLOW.md` documenting how it was built with an AI
assistant, and the rule that shaped it: *the assistant is fast at writing code and
unreliable at knowing facts*. Every dependency version in the POM came from a live lookup
against Maven Central rather than from the model's memory — including the check that
filters milestone releases out, since `<latest>` pointed at a `4.2.0-M1` candidate. API
surfaces were confirmed with `javap` against the actual jar instead of being guessed.

## What I Learned
Importing the Spring Boot BOM instead of inheriting the parent POM is a small decision
with a large effect: `llm-core` and `eval-harness` stay ordinary Java libraries, testable
in milliseconds, while the two services get the full Spring treatment.

---

🔒 Private repository — happy to walk through the code on request.
