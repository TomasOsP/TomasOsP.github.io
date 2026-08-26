---
name: "PCB Reflow Oven Controller"
tools: [ESP32, C/C++, PlatformIO, WebSockets, SPIFFS]
image: /assets/images/pcb-reflow-oven-architecture.png
description: "Turning a cheap oven into a WiFi-controlled reflow station for surface-mount soldering"
---

# PCBOven — WiFi Reflow Controller
by: <em>Tomás Ospina.</em>

## Overview
An ESP32-based controller that automates the heating and cooling cycles needed to reflow
surface-mount components onto a PCB. It reads a J-type thermocouple through a
**MAX31856**, drives the heating element through an SSR and the cooling fan through PWM,
and exposes the whole thing as a web UI served straight off the ESP32's SPIFFS with live
telemetry over WebSockets.

<img
  class="reveal reveal--zoom"
  src="{{ '/assets/images/pcb-reflow-oven-architecture.png' | relative_url }}"
  alt="Architecture: thermocouple → MAX31856 → ESP32 → SSR/fan, with a WebSocket web UI"
  style="max-width: 95%; display:block; margin: 1.5rem auto;"
/>

## Problem & Solution
A reflow station is an expensive piece of equipment for something that is, electrically,
a temperature setpoint and a timer. The controller adds exactly that to an ordinary
oven: set a target temperature and a maximum heating time from the browser, and watch the
thermocouple curve come back live while the SSR and the fan do the work.

## Technical Specifications
| Item              | Detail                                                  |
| ----------------- | ------------------------------------------------------- |
| MCU               | ESP32 (esp32doit-devkit-v1), PlatformIO                  |
| Temperature       | Adafruit MAX31856 over SPI, J-type thermocouple          |
| Heater control    | SSR driven by PWM (pin 13)                               |
| Cooling           | PWM fan (pin 27)                                         |
| Interface         | Web UI from SPIFFS, WebSocket telemetry on `/ws`, HTTP `/toggle` |
| Power             | Separate supply for heater and fan — never off the 3.3 V rail |

## My Role & Key Contributions
- Wrote the full firmware: SPI thermocouple driver, PWM control of the SSR and fan, and
  the WiFi/web server layer.
- Built the SPIFFS-hosted UI and the WebSocket telemetry channel that streams the
  temperature curve to the browser.
- Documented the wiring, the pin map and the electrical safety constraints in the repo.

## What I Learned / Next Steps
The control loop is heuristic rather than a tuned PID, which is honest about what it is:
good enough to reach and hold a setpoint, but it needs manual tuning per oven for a
proper reflow profile. Closing that gap with a real PID and a multi-stage profile
(preheat → soak → reflow → cooldown) is the obvious next step.

---

🔗 [**View on GitHub**](https://github.com/TomasOsP/PCBOven)
