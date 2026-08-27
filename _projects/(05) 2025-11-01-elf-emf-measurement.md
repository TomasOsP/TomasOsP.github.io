---
name: "ELF Electromagnetic Field Meter"
tools: [ESP32, C/C++, FreeRTOS, MLX90393, KiCad, INA114]
image: /assets/images/emf-thesis-helmholtz-bench.jpg
description: "Undergraduate thesis — a low-cost instrument that measures the electric and magnetic fields we live inside"
---

# Measuring the Fields We Live In
by: <em>Tomás Ospina Martínez — undergraduate thesis, Universidad de los Andes. Advisors: Gustavo Ramos, Valentina Reyes. November 2025.</em>

## The question
The WHO classifies extremely-low-frequency (ELF) electromagnetic fields as *possibly
carcinogenic*, and ICNIRP has said plainly that the dosimetry gaps — how much people are
actually exposed to, in the rooms where they live and work — remain open. The instruments
that could close those gaps cost thousands of dollars and are built for a technician on a
site visit, not for continuous monitoring.

So: **can a device that costs about USD 55 in parts produce measurements a study could
use?** That is what this thesis set out to answer.

<img
  class="reveal reveal--zoom"
  src="{{ '/assets/images/emf-thesis-concept.png' | relative_url }}"
  alt="Concept diagram of the prototype: shielded sensor chain into an ESP32, with display, buzzer, LED and buttons"
  style="max-width: 90%; display:block; margin: 1.5rem auto;"
/>

## What was built
An ESP32 instrument that reads **both** field types at once and warns you when either one
crosses the ICNIRP public-exposure limit:

- **Magnetic field** — an **MLX90393** magnetometer, chosen over ten candidates through a
  weighted scoring matrix across range, sensitivity, supply voltage, error, bandwidth and
  output type.
- **Electric field** — no suitable sensor exists off the shelf at this price, so I designed
  one: a **parallel-plate capacitive sensor** on FR-4 (40 mm plates, 1.6 mm dielectric),
  simulated electrostatically in COMSOL, then read through an **INA114 instrumentation
  amplifier** with a 1.65 V offset so the ESP32's 12-bit ADC can see both signal polarities.
- **Firmware** — **FreeRTOS**, one task per stage: acquisition, processing, and transmission
  to the OLED and serial link. 140 Hz sampling, 118 mA, 32% flash and 55% RAM.

<div class="project-gallery">
  <img class="project-gallery__img reveal reveal--delay-1" src="{{ '/assets/images/emf-thesis-schematic.jpg' | relative_url }}" alt="Full schematic of the embedded system" />
  <img class="project-gallery__img reveal reveal--delay-2" src="{{ '/assets/images/emf-thesis-rtos-flow.png' | relative_url }}" alt="FreeRTOS parallel task flow" />
  <img class="project-gallery__img reveal reveal--delay-3" src="{{ '/assets/images/emf-pcb-top.png' | relative_url }}" alt="Top copper layer of the PCB" />
  <img class="project-gallery__img reveal reveal--delay-3" src="{{ '/assets/images/emf-pcb-bottom.png' | relative_url }}" alt="Bottom copper layer of the PCB" />
  <img class="project-gallery__img reveal reveal--delay-4" src="{{ '/assets/images/emf-thesis-plate-simulation.png' | relative_url }}" alt="COMSOL electrostatic simulation of the parallel-plate sensor" />
</div>

## How it was proven
Calibration and validation were done against instruments that cost orders of magnitude
more. The magnetometer was characterised inside **triaxial Helmholtz coils** against a
**LakeShore F71 teslameter** — roughly 20 runs per axis. The electric-field sensor was
characterised on a parallel-plate bench driven from 0–150 V at 60 Hz and read on a Rigol
oscilloscope.

<div class="project-gallery">
  <img class="project-gallery__img reveal reveal--delay-1" src="{{ '/assets/images/emf-thesis-helmholtz-bench.jpg' | relative_url }}" alt="Helmholtz coil test bench with the MLX90393 mounted at the centre" />
  <img class="project-gallery__img reveal reveal--delay-2" src="{{ '/assets/images/emf-thesis-efield-bench.jpg' | relative_url }}" alt="Electric field test bench with sensing plates between field-generating plates" />
  <img class="project-gallery__img reveal reveal--delay-3" src="{{ '/assets/images/emf-thesis-magnetic-linearity.png' | relative_url }}" alt="MLX90393 response against the LakeShore teslameter, per axis" />
  <img class="project-gallery__img reveal reveal--delay-4" src="{{ '/assets/images/emf-thesis-efield-linearity.png' | relative_url }}" alt="Electric field characterisation read through the ESP32" />
</div>

Then it left the lab: an electrical distribution room, an anechoic chamber and a microwave
room inside the university, and a measurement campaign along the **Enel Salitre substation**
transmission lines in Bogotá, sampling at 0, 10, 20, 30 and 40 m.

<img
  class="reveal"
  src="{{ '/assets/images/emf-thesis-powerline-field.jpg' | relative_url }}"
  alt="Field validation near transmission lines by the Enel substation"
  style="max-width: 60%; display:block; margin: 1.5rem auto; border-radius: 8px;"
/>

## What it showed — and what it didn't
The prototype tracks magnetic fields linearly up to **70 Hz**, which covers mains power and
household devices, and it followed the same trends as the professional instruments. On the
electric side it registered fields above **3000 V/m** near transmission lines and dropped
off with distance as theory predicts.

It is not a finished instrument, and the thesis says so. Absolute magnitudes diverge from
the calibrated references in high-exposure zones, the per-axis error grows depending on
which axis the field is generated along, and the estimates near the power lines are
probably **over**-reading — the conversion from plate voltage to field strength does not yet
account for parasitic capacitance. The single largest cause is the one thing the concept
diagram shows and the build never got: **EMI shielding**.

That honest gap is the finding. A USD 55 device with no shielding already reproduces the
*behaviour* of equipment costing thousands; adding a mu-metal enclosure and a better
filtering stage is a tractable next step, not a redesign.

## What I Learned
Choosing the sensor was a scoring exercise; trusting the numbers afterwards was the real
work. Nothing in this project was believable until it had been put next to a LakeShore
teslameter and a calibrated bench and made to disagree in ways I could explain.

---

🔗 [**View on GitHub**](https://github.com/TomasOsP/EMF_embeddedsystem)
