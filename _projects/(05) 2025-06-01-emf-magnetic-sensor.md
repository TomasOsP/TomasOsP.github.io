---
name: "Magnetic Field Monitoring System"
tools: [ESP32, C/C++, MLX90393, KiCad, Python]
image: /assets/images/emf-magnetic-sensor-architecture.png
description: "Custom-PCB magnetometer that reads, calibrates and visualises a 3-axis magnetic field in real time"
---

# Magnetic Field Monitoring System (MLX90393 + ESP32)
by: <em>Tomás Ospina — Proyecto de Grado, 2025.</em>

## Overview
An end-to-end instrument for measuring and visualising magnetic fields: a custom
two-layer PCB carrying an **MLX90393** 3-axis magnetometer, ESP32 firmware written in
PlatformIO, and a Python toolchain that turns the raw stream into calibrated vectors,
3D plots and frequency-domain analysis.

<img
  class="reveal reveal--zoom"
  src="{{ '/assets/images/emf-magnetic-sensor-architecture.png' | relative_url }}"
  alt="System block diagram: sensor, ESP32, Python analysis"
  style="max-width: 95%; display:block; margin: 1.5rem auto;"
/>

## Problem & Solution
Off-the-shelf gaussmeters give you a single number and nothing else — no raw stream, no
axis decomposition, no way to look at how the field behaves over time. This project
splits the job in two: the embedded side owns acquisition and timing, while the host
side owns calibration and interpretation. That separation is what makes the same
hardware usable for a static field map and for a frequency analysis of a time-varying
one.

## Hardware
The board was designed from scratch in KiCad — two layers, with a dedicated test board
(`PlacaPrueba`) used to validate the footprint and the I²C wiring before committing to
the sensor carrier.

<div class="project-gallery">
  <img class="project-gallery__img reveal reveal--delay-1" src="{{ '/assets/images/emf-pcb-top.png' | relative_url }}" alt="Top copper layer of the sensor PCB" />
  <img class="project-gallery__img reveal reveal--delay-2" src="{{ '/assets/images/emf-pcb-bottom.png' | relative_url }}" alt="Bottom copper layer of the sensor PCB" />
</div>

## Technical Specifications
| Item            | Detail                                            |
| --------------- | ------------------------------------------------- |
| Sensor          | MLX90393, 3-axis magnetometer, I²C                 |
| MCU             | ESP32                                             |
| Firmware        | C/C++ on PlatformIO                                |
| PCB             | 2-layer, KiCad (sensor board + test board)         |
| Host tooling    | Python — acquisition, 3D vector plots, FFT         |
| Data path       | Serial stream → CSV → analysis scripts             |

## My Role & Key Contributions
- Designed the schematic and the two-layer PCB in KiCad, including a separate test board.
- Wrote the ESP32 firmware for sampling and streaming the MLX90393 over I²C.
- Built the Python layer: `data_reading.py` (capture), `magnetic_visualizer.py` and
  `vector_point.py` (3D vector rendering), `fft_analysis.py` (spectral analysis).
- Produced the calibration routine that corrects the per-axis offsets of the sensor.

## What I Learned
Sensor work is mostly calibration work. The firmware was the short part; the long part
was proving that the numbers meant something — which is why the calibration set and the
FFT analysis ended up as first-class pieces of the repository rather than notebooks on
the side.

---

🔗 [**View on GitHub**](https://github.com/TomasOsP/EMF_embeddedsystem)
