---
name: "Smart Water Dispenser"
tools: [Python, PLC, Raspberry Pi, MODBUS, MQTT, Qt]
image: /assets/images/maquina_aguateros.png
description: "Turning a basic water dispenser into a connected, self-monitoring machine"
areas: [hardware-embedded]
model_viewer: true
---

# Smart Water Dispenser
by: <em>Tomás Ospina.</em>

🔗 [**View on GitHub**](https://github.com/TomasOsP/water-flow-sensor-module) — sensor-interface PCB

## Overview
This project transforms a basic water dispenser into an intelligent machine that
measures its available water in real time, enabling predictive refills before the
tank ever runs dry. Beyond monitoring, I designed the full water-automation process
and a wireless maintenance interface, so technicians can service the unit remotely.

A **Raspberry Pi 4** acts as the central hub linking the user, the PLC, and the
online payment module, while a custom **Qt** interface handles all on-screen
interaction. I also redesigned and modeled the system's power panel — adding fuses
and control relays to guard against overloads — and cut the machine's manufacturing
cost by replacing the original controller with a commercial PLC better matched to
the system's requirements.

<figure class="reveal" style="max-width: 90%; margin: 1.5rem auto; text-align: center;">
  <img
    class="zoomable"
    src="{{ '/assets/images/diagrama_hidr_aguateros.jpg' | relative_url }}"
    alt="Hydraulic and control diagram of the water machine"
    style="max-width: 100%; border-radius: 8px;"
  />
  <figcaption style="font-size: 0.85rem; opacity: 0.7; margin-top: 0.5rem;">
    Hydraulic and control diagram of the water machine
  </figcaption>
</figure>

## IoT Integration
For continuous monitoring, I installed sensors on both the water inlet and the
dispensing outlet. The machine's status is published over the internet using the
**MQTT** protocol, giving a live view of its state. A planned next step is to add
emergency alerts that report faults and help prevent malfunctions before they occur.

## Remote Maintenance Access
A machine-locking system restricts access to authorized technicians for periodic
servicing. Using **VNC**, a technician connects to the PLC's visual interface over
the internet — releasing the locks directly from the PLC without any specialized
equipment. The entire process runs from the technician's phone, secured by unique
credentials over the system's Wi-Fi network.

<div class="diagram-thumbs">
  <figure class="reveal">
    <video autoplay loop muted playsinline src="{{ '/assets/videos/hmi_interface.mp4' | relative_url }}"></video>
    <figcaption>PLC maintenance HMI</figcaption>
  </figure>
  <figure class="reveal">
    <video autoplay loop muted playsinline src="{{ '/assets/videos/gui_aguateros.mp4' | relative_url }}"></video>
    <figcaption>User-facing GUI</figcaption>
  </figure>
</div>

## PLC ↔ Raspberry Pi Communication
The PLC and Raspberry Pi communicate over **MODBUS TCP**. A Python program captures
the variables a user generates on screen and forwards them to the PLC module,
keeping the two controllers in sync.

The two flow charts below map the system's logic — the control-side state machine
and the user-facing interaction flow:

<div class="diagram-thumbs">
  <figure class="reveal">
    <img class="zoomable" src="https://mermaid.ink/img/pako:eNqtVm1T4zYQ_isa39DhpgqNX5KAZ3odSIAkQOAOuE6L-0Gx5URztuVKMpBC_ntXsuM4gfClzYeMJT3Po93V7kovVsgjavlWkO3tvbCMKR-9BBlCgaXmNKWB5cPnlEj4wo3570QwMk2o1ABD0Esxz9QZSVmyKHmjTFGB0S2dcYruRxhJksmWpILFlZxm5YKlRCz6POGi5H2ih7Edv4M54SKioon04l74HvKOPqsmziY2cWgDl7CMfigkacizaMuwOI492m2gwEHFtq3vAswJLI1ZBtlyubcXZHHCn8I5EQrdDUry8f5DYH2jIWWPFJE8F_yRRsh46KMnAspILXKKfkaC_l1QqWD1kSeFPpW_PqNW6ws6eQms32tkYC1L5RO9-BpYto--cZ4iRdM8sF5R34Ydb2lCQ4VSosI5y2aIZQlVSPKEZpzBDiQBc_anXKmEwnQhQvoZNtxUdnwEHkdG1Pm_RF0f3eZE_ICjmRll978q920TpirgfWdj5DZHA9jqOqcZkmY_CPV7G4GwIZ0C-jhU7BFijyJG8rkgsxTlhY5ztfepQZ49rE5IJ4BEai54MZujkIgpz1DMElirOWeGcw6cGyIlXcPvv29Dzw10CNBTXWUShZzrwP1SKhPFQL6AgjaMkiOL6UyAseh-MroDZr-koJ9Qv0G6BxLaJ8kTWcgWjJnWz0iCIENDKuU6vPo3tI1Q9giFIFGuE5zHYDdFAlKvpVOvSmbQ4WBlEpXjTRWdRANWipCMA1-gnAtjkCFqxaZrlTG1Cs2ilZtDExrtYznWX2ZqtFEu66OeLlAhtUVV_YyqhNwonrG9ShFeKJ0aZeq11iW25ddKZVUoY2eHQP9tTFbcjXoYuzsEatSWyrhM_4tq5GyM3OboApTPIEEhJpnkAqWUyEJAApIwLNIiITpMsGteqHUPMgKXENOrEr1qT-jLr29a1m91cC8r1yZc-3SxOfmHvlFe0ZXOqYRLuqsKS9aVsWCiu4Ti-a5CnBjUdS1ZBW-H5rVB3-ybwop8EJUQcamDG_I0B6ZpvyX4xoC_PmhvFIsXcMn5ZQeHcs2YnNOoUX5hAkU9oDGSSpcJFHTiV5cFlkrwH9T_ZMfTuNephq0nFqm57-TPONT3i_-pPXUjZ4rFs2-3sVjA_5Z0REMmWdlZQL28r2r1OD6K3Gineoe4TntbsSq0lbnmZq4Fy1tzU9A-6Kwly3tXG9zV9na3xKFqJ_AAqa2lXUoa1npxl35gbbttdz6Ihe5-K2UXDF-bTbxO_KHZDm1PPbJxcOi4PLfm1M3KgebkCR7hy_ogmit9G_cd3HfxAJ_iM3yOh3hs47GDxy6-wFd4gq_x17qzNYi6g-GhjYdO2dIzC1szwSLLV6Kg2EqpSIkeWm8fbxGNSZEo_RxZAi0n2Z_QsFZMc71YfkwSCaMij6DSB4zANZHWswKc1K-uIlOW73o9I2L5L9az5Tuud9B1ne5hp2e34eMIWwuY9Q6OPM9uH3WOnHbHc5bY-sdsah-0O67XaTtOt3fo9jqOhy0aMcXFVfkONc_R5b-mLGEv?type=png" alt="Flow chart — system control logic" />
    <figcaption>Flow chart — system control logic</figcaption>
  </figure>
  <figure class="reveal">
    <img class="zoomable" src="https://mermaid.ink/img/pako:eNp9VttS4zgQ_ZUuU-xArWAd5wK4anYLwv0akgC1S-ZBsduJB1tyyTIhC_n31cVxTGZ2XlJu6Zyj0y2plXcn4CE6vrO5-R6zWPrwPmIAI0dOMcWR46vPMc3VF6mNP1IR03GCuQYYgp6KOJOnNI2TueVdMImCwAAnHOHhgkBOWb6To4ijUk6zMhGnVMy7POHC8jZwP2pEP8EccRGiqCNb0V7wM-QQ32Qd16AN6mENl8QMfymUY8BZuGYsiqIWdmoolaCM1913FMwbORqzGLHFYnNzxKKEz4IpFRKGx5Z8uPWsShQmCHkgENnI-bYNOzt_foycB1UjkDTLq6kPOFLow0DGr1QiZIVQYrn6EDzAXG3DNyt6pBWgq7CDKZ_p6bAIJOSYoOJytlrL4rsGf_w-crpFBgwxxPCvkbOws8eln7_1Rn_AybOFfQUz8O0z6JZrzGmF0XEJOTGrnC1dzVQKKr95hsAz7WoldmqRNjgzwbky97RiVKlULs9LA33OU5CYZtrHhVpsqPFfwYxvNbarRZYEtWmhxl6usHoItrwfsYOMihd1aCaacLUiVOOw1VyxLozz62XCrzwp0qV1LsBz3Z2G67qQJhXl0lJscFUPrk1w81yeC6uSA015wWTFvzGoW4W6jl8RiixUNfNBckkTdQ7iAAkERUZq1SfrGrdG406fBs6iWKQwi-UUenQO40JKzlZH467adQIviBnQ8HuRy7JAN59B5fnpKXN9DGOh_CtjkNF5ikzCRDma0Xllo2ds3D8bG6wEP_E0iyvIvYH0FeQMGQp9J-77oFuZtWwTg7DAitI3lEFVxkA1I02iLNROcoiEPj9TjAWMKXupiANDHKqq9ErDga0OhmaxmIGMU-SFXJVnWJUH_oChndUleNRJURZgAr9Bbq5oqYlC6A5Srvlo1jz8LFaW8UEfK1Suv9BMXfBXDL_A72BaI6hNp7pavetupfVgtJ50uzlhoa_dS8GTZe-AXKq2pK_g9ohZRpDQPD_GyE5BFCeJX7Y1kivuC_objWgc7bXLcGcWh3Lqe9kbCXQn9DfccTP0xkS8-Q2XiLn6XZMOMYhz3ZGsuu2slXoUHYTN8H_V27Sp7tCa4jKf0q55QypB298_CzZ22ytJ-0Jowx3tt7Mmrup9q0_X0i12kNbctqIO_sKt6zban2tRk4dDW-f60NNywfrgMTknd2RYla4-d0S65ISckjNyQS7JFbkmN-SW9Mg96ZMBeSCP1VOhaA5xJiIOHV-KAomTokipDp0f3_4QI1okUr9mC0XLKPtHtdMlU_BiMnX8iCa5imzPOY7pRNC0GhUqE_1oq_vo-M12x4g4_rvz5vhes7XbaXqd_fZew1UfB8SZq9HW7kGr1XAP2gee2255C-L8axZt7LrtZqvtel5nb7-51_ZaxFH9RLXUG_snxvyXWfwHgi299g?type=png" alt="Flow chart — user interaction flow" />
    <figcaption>Flow chart — user interaction flow</figcaption>
  </figure>
</div>

## Current Work
I am currently designing a PCB that interfaces the flow sensors — which operate at
**5 V** — with the PLC's digital inputs, which operate at **24 V**. The 3D model
below shows the sensor-interface module; drag to rotate it:

{% include model.html
     src="/assets/models/mod_sensor_agua.glb?v=2"
     environment="/assets/hdri/pav_studio_03_1k.hdr"
     skybox="false"
     exposure="1.1" 
     alt="3D model of the water-sensor interface module"
     caption="Drag to rotate — water-sensor interface module" %}

## Technologies
*   Python (MODBUS TCP client, data handling)
*   Commercial PLC
*   Raspberry Pi 4
*   MQTT (IoT telemetry)
*   VNC (remote maintenance)
*   Qt (user interface)
*   KiCad (power panel & sensor-interface PCB)
