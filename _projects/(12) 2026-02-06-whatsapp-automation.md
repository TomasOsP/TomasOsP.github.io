---
name: "WhatsApp Automation Platform"
tools: [Python, Flask, Node.js, SQLite, whatsapp-web.js]
image: /assets/images/whatsapp-automation-architecture.png
description: "Message ingestion, an operations dashboard and bulk sending — built around one WhatsApp channel"
---

# WhatsApp Automation Platform
by: <em>Tomás Ospina.</em>

## Overview
Two complementary systems built around WhatsApp as an operational channel: an **ingestion
service** that parses incoming messages into a database with a dashboard on top, and a
**bulk sender** that delivers messages and media to a contact list with retries.

<img
  class="reveal reveal--zoom"
  src="{{ '/assets/images/whatsapp-automation-architecture.png' | relative_url }}"
  alt="Ingestion pipeline and bulk-sending pipeline"
  style="max-width: 95%; display:block; margin: 1.5rem auto;"
/>

## Ingestion & operations — *WhatsAppServer*
A Flask service receives messages through a webhook (both the WhatsApp Business API and
an Android relay endpoint), runs them through a parser that validates the expected
format, and stores the structured record in SQLite. Malformed messages get an immediate
correction reply instead of silently disappearing.

On top of that sits a dashboard with session-based login, per-period metrics, CSV export
and PDF report generation — so the people entering data over WhatsApp and the people
reading the results never touch the database directly.

## Bulk sending — *whatsapp-sender*
A Node.js service built on `whatsapp-web.js` with `LocalAuth` session persistence: it
reads the contact list from SQLite, sends text and media (PDF, video) to each contact,
and wraps every send in a retry helper so a dropped connection does not lose a recipient.

## Technical Specifications
| Component        | Stack                                                     |
| ---------------- | --------------------------------------------------------- |
| Webhook / API    | Python, Flask — WhatsApp Business API + Android relay      |
| Parsing          | Format validation with an error reply path                |
| Storage          | SQLite (`mensajes.db`, `contactos.db`)                     |
| Dashboard        | Flask, authenticated sessions, CSV export, PDF reports     |
| Sender           | Node.js, `whatsapp-web.js`, `LocalAuth`, headless Puppeteer |
| Deployment       | Linux server, environment-based configuration              |

## My Role & Key Contributions
- Designed the message format and the parser that turns free-text WhatsApp messages into
  database records.
- Built the Flask webhook, the SQLite schema and the authenticated operations dashboard
  with metrics and exports.
- Wrote the Node.js sender with media support and a safe-send retry wrapper.

## What I Learned
Validating at the edge — replying "formato incorrecto" the moment a message arrives —
removed almost all of the data cleanup that would otherwise have happened downstream.

---

🔒 Private repository — happy to walk through the code on request.
