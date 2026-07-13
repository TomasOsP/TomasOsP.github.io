---
name: "Project Name"
tools: [C/C++, KiCad, STM32]          # shown as tags on the project card
image: /assets/images/your-card-thumb.jpg   # thumbnail on the /projects listing
description: "One-line hook that sells the project"
model_viewer: true       # <-- keep ONLY if this page embeds a 3D .glb model
# published: false      # <-- DELETE this line to make the page go live
---

<!--
  HOW TO USE THIS TEMPLATE
  1. Copy this file to  _projects/(N) YYYY-MM-DD-your-slug.md
     - The "(N)" prefix controls ordering on the projects page.
  2. Put images in  /assets/images/  and gifs in  /assets/gifs/, models in /assets/models/.
  3. Delete the "published: false" line above.
  4. Scroll animation: add class="reveal" to any element. Options:
       reveal reveal--left | reveal--right | reveal--zoom | reveal--rotate
       add reveal--delay-1 .. reveal--delay-4 to stagger items in a row
       add float-on-scroll for a gentle continuous bob (good for a hero render)
  5. Interactive 3D model: keep "model_viewer: true" in the front matter, then use
     the include shown in the Overview section below. Remove the flag if unused.
-->

# Project Name
by: <em>Tomás Ospina, and collaborators.</em>

## Overview
One short paragraph: what it is, who it's for, and the single most impressive
result (a number if you have one — "classifies 5 exercises at 94% accuracy").

<!-- Option A: a static hero image/render that floats and reveals on scroll -->
<img
  class="reveal reveal--zoom float-on-scroll"
  src="{{ '/assets/images/your-hero.png' | relative_url }}"
  alt="3D render of the enclosure"
  style="max-width: 70%; display:block; margin: 1.5rem auto; border-radius: 8px;"
/>

<!-- Option B: an INTERACTIVE 3D model the visitor can drag to rotate.
     Requires "model_viewer: true" in the front matter. Put the .glb in /assets/models/. -->
{% include model.html
     src="/assets/models/your-part.glb"
     alt="Interactive 3D model of the enclosure"
     poster="/assets/images/your-hero.png"
     caption="Drag to rotate — 3D-printed enclosure" %}

## Problem & Solution
1–2 sentences on the pain point, then how your design solves it.

## System Architecture
Drop a block diagram here. You can draw it in https://mermaid.live and paste
the exported image link (like your GymEdge page), or just embed a PNG:

<img
  class="reveal"
  src="{{ '/assets/images/your-architecture.png' | relative_url }}"
  alt="System block diagram"
  style="max-width: 90%; display:block; margin: 1.5rem auto;"
/>

## Gallery — staggered reveal as you scroll
<div class="project-gallery">
  <img class="project-gallery__img reveal reveal--delay-1" src="{{ '/assets/images/pcb.png'   | relative_url }}" alt="PCB layout" />
  <img class="project-gallery__img reveal reveal--delay-2" src="{{ '/assets/gifs/demo.gif'    | relative_url }}" alt="Working demo" />
  <img class="project-gallery__img reveal reveal--delay-3" src="{{ '/assets/images/enclosure.png' | relative_url }}" alt="3D-printed enclosure" />
  <img class="project-gallery__img reveal reveal--delay-4" src="{{ '/assets/images/bench.jpg' | relative_url }}" alt="Bench test setup" />
</div>

## Technical Specifications
| Item              | Detail                                   |
| ----------------- | ---------------------------------------- |
| MCU / Platform    | STM32F4 @ 168 MHz                        |
| Sensors           | MPU-6050 IMU, INA219 current sensor      |
| Power             | 3.7 V LiPo, ~40 mA avg, ~2-day runtime   |
| Firmware          | FreeRTOS, C/C++                           |
| PCB               | 2-layer, KiCad, 40 × 30 mm               |
| Interfaces        | BLE, I²C, UART                            |

## My Role & Key Contributions
- Designed the schematic and 2-layer PCB in KiCad.
- Wrote the FreeRTOS firmware (task scheduling, sensor drivers).
- Ran the ML classifier achieving X% accuracy on N classes.

## Results & Validation
What you measured and proved. Photos of the oscilloscope trace, accuracy chart,
or a gif of it running are gold here.

## What I Learned / Next Steps
Honest reflection — this reads very well to professors and hiring managers.

---

🔗 **Repository:** [View on GitHub](https://github.com/TomasOsP/your-repo)
📄 **Report / paper:** [PDF]({{ '/assets/docs/your-report.pdf' | relative_url }})
