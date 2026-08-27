---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi, I am **{{ site.author.name }}** :wave:,<br>
an **Electrical Engineer** working at the intersection of circuit design, PCB validation
and intelligent automation. My hands-on work covers circuit analysis, schematic
interpretation and PCB design/validation with EDA tools — **KiCad, Eagle and Altium
Designer** — and I have taken circuits from schematic to working hardware on my own
projects, catching design errors and validating behaviour before deployment.

That hardware base sits alongside firmware and systems work: real-time embedded
development in C/C++ on ESP32 and STM32, and Python automation that turns manual
operational bottlenecks into traceable, reproducible workflows. Having diagnosed hardware
faults on an autonomous robot fleet in the United States and communicated findings
directly to clients in English, I am comfortable working from technical documentation and
explaining what I find to people who need to act on it.

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html title="Professional Experience" source=site.data.experience %}
</div>

<div class="row">
{% include about/timeline.html title="Education" source=site.data.education %}
</div>

<div class="row">
{% include about/languages.html title="Languages" source=site.data.languages %}
</div>
