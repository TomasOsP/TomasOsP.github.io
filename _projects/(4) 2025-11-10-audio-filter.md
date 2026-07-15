---
name: "Guitar Audio Front-End Filter"
tools: [Analog Design, KiCad, PCB]
image: /assets/images/audio-filter-diagram.png   # TODO: add a real thumbnail (PCB photo or render)
description: "A signal-conditioning filter that brings electric-guitar audio into any microcontroller's ADC range"
model_viewer: true
---

# Guitar Audio Front-End Filter
by: <em>Tomás Ospina.</em>

🔗 [**View on GitHub**](https://github.com/TomasOsP/guitar-audio-frontend-filter)

## Overview
This project is an analog front-end that conditions the signal from an electric
guitar so it can be sampled cleanly by the ADC of a general-purpose microcontroller
running at **3.3 V or 5 V**. The goal is a drop-in add-on that lets you build
guitar-audio projects on whatever board you already have — an **Arduino Nano**,
**ESP32**, or **Raspberry Pi Pico** — in situations where a dedicated audio
microcontroller like the **Teensy** isn't available or isn't worth the cost.

## The Problem
A raw electric-guitar signal is only a few **millivolts** — far below the range an
8-bit, or even 16-bit, ADC can resolve in any detail. Sampled directly, the useful
musical information is lost in the noise floor. The signal's frequency content sits
in the **0–1000 Hz** band, so anything above that is unwanted and, if left in, would
alias back into the audio once sampled.

## The Solution
The front-end conditions the signal on both ends of the useful band:

- **Passive low-pass filtering** at the input and the output suppresses
  high-frequency content, keeping only the 0–1000 Hz band and preventing aliasing.
- The conditioned output lands in a range the microcontroller's ADC can sample with
  real resolution — turning an unusable millivolt signal into clean digital samples.

Because it relies on passive filtering and a standard supply rail, the board stays
simple, low-cost, and portable across microcontroller platforms.

## Schematic
The full circuit schematic (exported from KiCad) is below — click **Open PDF** to
view it full-size or download it:

{% include pdf.html
     src="/assets/docs/DiagramaFiltroPedal.pdf"
     title="Schematic (PDF)" %}

## 3D Model
An interactive model of the board — drag to rotate it:

{% include model.html
     src="/assets/models/PedalDigital.glb?v=2"
     environment="/assets/hdri/pav_studio_03_1k.hdr"
     skybox="false"
     exposure="1.1"
     alt="3D model of the guitar audio front-end board"
     caption="Drag to rotate — guitar audio front-end board" %}

## Technologies
*   Analog signal conditioning (passive low-pass filtering)
*   KiCad (schematic capture & PCB layout)
*   Targets: Arduino Nano, ESP32, Raspberry Pi Pico (3.3 V / 5 V ADCs)
