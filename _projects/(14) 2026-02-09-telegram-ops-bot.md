---
name: "Telegram Ops Bot"
tools: [Python, Flask, Bash, Telegram Bot API, Linux]
image: /assets/images/telegram-ops-bot-architecture.png
description: "Running server maintenance scripts from a Telegram chat, without opening an SSH session"
---

# Telegram Ops Bot
by: <em>Tomás Ospina.</em>

## Overview
A small Flask server that executes maintenance scripts on an Ubuntu box in response to
commands sent from a Telegram bot. The bot forwards the command over HTTP, the server
runs the matching `.sh` file, and the output comes back to the chat.

<img
  class="reveal reveal--zoom"
  src="{{ '/assets/images/telegram-ops-bot-architecture.png' | relative_url }}"
  alt="Flow: Telegram bot → Flask API → whitelisted bash scripts → output back to the chat"
  style="max-width: 90%; display:block; margin: 1.5rem auto;"
/>

## Problem & Solution
Routine operations — restart a service, check a disk, kick off a backup — do not justify
finding a laptop and opening an SSH session. Exposing a shell over HTTP, on the other
hand, is how servers get owned.

The compromise: the server does not accept commands, it accepts *names*. Only scripts
that already exist on disk can be invoked, extra parameters are passed through explicitly,
and everything sensitive — the bot token, the chat ID, the host and port — comes from
environment variables rather than the source.

## Technical Specifications
| Item        | Detail                                                |
| ----------- | ----------------------------------------------------- |
| Runtime     | Python 3.8+ on Ubuntu/Linux                            |
| Framework   | Flask REST API, CORS enabled for the bot               |
| Execution   | Named `.sh` scripts only, with optional parameters     |
| Config      | `.env` — `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, host/port |
| Monitoring  | `/health` endpoint                                     |

## What I Learned
The security of this design lives entirely in one decision: accepting a script name from a
fixed set instead of a command string. Everything else is plumbing.

---

🔒 Private repository — happy to walk through the code on request.
