---
name: "IoT Machine Fleet Dashboard"
tools: [ESP32, MQTT, NestJS, React, PostgreSQL, Docker]
image: /assets/images/iot-machine-dashboard-architecture.png
description: "Real-time storage-level monitoring for a fleet of vending machines spread across multiple sites"
---

# IoT Machine Fleet Dashboard
by: <em>Tomás Ospina.</em>

## Overview
A production monitoring platform for game machines installed across different locations.
Each machine carries an **ESP32 with a distance sensor** that reports how full its coin
chest is; the readings travel over MQTT to a **NestJS** backend and land in a **React**
dashboard where the operator sees every site at once, with history and trends.

<img
  class="reveal reveal--zoom"
  src="{{ '/assets/images/iot-machine-dashboard-architecture.png' | relative_url }}"
  alt="Architecture: ESP32 → MQTT broker → NestJS + PostgreSQL → React dashboard"
  style="max-width: 95%; display:block; margin: 1.5rem auto;"
/>

## Problem & Solution
Checking a machine meant physically driving to it. The fix was to make the chest report
its own state: an ultrasonic (HC-SR04) or IR sensor measures the fill level, the ESP32
publishes it over MQTT/TLS, and the backend subscribes with a wildcard topic so adding a
machine requires no code change — it simply starts publishing and appears in the
dashboard.

## Technical Specifications
| Layer      | Detail                                                        |
| ---------- | ------------------------------------------------------------- |
| Firmware   | ESP32 DevKit v1 + HC-SR04 / FC-51 / TCRT5000, PlatformIO       |
| Transport  | MQTT over TLS — HiveMQ Cloud in production, Mosquitto locally  |
| Backend    | NestJS, REST + WebSocket, Swagger at `/api/docs`               |
| Storage    | PostgreSQL, historical series per machine                      |
| Frontend   | React dashboard with role-based users                          |
| Infra      | Docker Compose (PostgreSQL + Mosquitto)                        |

## My Role & Key Contributions
- Designed the full stack, from the sensor wiring to the dashboard.
- Wrote the ESP32 firmware and made the publish interval configurable so the same
  device can serve short-term debugging and long-term trend collection.
- Built the NestJS ingestion service, the PostgreSQL schema for historical series, and
  the REST/WebSocket API.
- Implemented the React dashboard with historical charts and per-role access.
- Packaged infrastructure with Docker Compose so the whole stack comes up in one command.

## What I Learned
The wildcard MQTT subscription was the design decision that paid off most: it turned
"deploy a new machine" from a backend task into a purely physical one.

---

🔒 Private repository — happy to walk through the code on request.
