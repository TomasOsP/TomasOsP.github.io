---
name: "RTOS Gymedge"
tools: [python]
image: /assets/images/fitness_IoT.jpg
description: "Clasificador de movimientos"
areas: [hardware-embedded, ai-ml]
---

# RTOS-GymEdge: Real-Time Exercise Classification
by: <em>Tomás Ospina, Nicolás Barrera, Pedro Bello, Alejandro Donoso.</em>
## Overview
RTOS-GymEdge is a movement classifier designed to measure the intensity and duration of various cardiovascular exercises performed by athletes in a gym. This project aims to provide real-time analysis of workout data, enabling athletes to track their performance efficiently.
<div class="project-gallery">
  <img
    class="project-gallery__img"
    src="{{ '/assets/gifs/Montadura-GymEdge.gif' | relative_url }}"
    alt="Device case model for the wrist"
  />
  <img
    class="project-gallery__img"
    src="{{ '/assets/images/3dprinting-gyme-model.png' | relative_url }}"
    alt="Device case model for the wrist"
  />
  <img
    class="project-gallery__img"
    src="{{ '/assets/images/proto_rtos.png' | relative_url }}"
    alt="Device case model for the wrist"
  />
  <img
    class="project-gallery__img"
    src="{{ '/assets/gifs/testing-gymedge-proto.gif' | relative_url }}"
    alt="Device case model for the wrist"
  />
</div>

## Problem & Solution
Athletes often struggle with accurately tracking the intensity and duration of their gym exercises without relying on cumbersome equipment or complex setups. This project addresses this by offering a minimalist solution that leverages machine learning to automatically recognize and classify different exercises. By integrating FreeRTOS for efficient data acquisition and transmission, RTOS-GymEdge provides real-time insights into an athlete's performance with minimal components.

## Architecture
[![](https://mermaid.ink/img/pako:eNp1k11vokAUhv_KZC72Si2ogJJNExVsmtStwWY3KfRihANMCjPufKS1xv_ecWi1zWa5OsN5n_d8TOaAc14ADnHZ8Je8JkKhuyRjyHyzdANMcvFzK66uV1xRztAVil9B5FQCiogiT6jfv0bzdCkAkof7jZUmQJq-om0nQbP8r6aSnvCnjHXWc8stUit4EITJlkppFNZgA4KSxtT6BeqFi-cztrBYlK73qjbNzEn-DKywjHVKIIed7fMHWgueg_Fk1RmPLB6nqzu0MkM30pLngQzNK_a90dgiy3QtoKC5tU5A6kZ17KIhpkRJc2JT91rttDrDSwvfpH9gi26ZAlGSHD5WZD3Qbyo1aegb-VZU6m0lyK5GcbuFooACbfZSQdtl7dVcwnkXmj38g3_sxyxjdnsBoksYX8Ll_22WgpvmT4lP8c0XMe7hStACh0po6OEWREtOR3w4iTKsamghw6EJCyiJGTvDGTsabEfYI-ftJym4rmoclqSR5qR3BVEQUWJ6aM9_hSkJYsE1Uzh0Xd-a4PCAX3Ho-YPhxA8mY2c0CjzfG_bw3oic6cDzJtPxyPMDb-wEw2MPv9myziCYjv3A9ccT33Fdd2jszC0rLlbdk7Av4_gOegj5iQ?type=png)](https://mermaid.live/edit#pako:eNp1k11vokAUhv_KZC72Si2ogJJNExVsmtStwWY3KfRihANMCjPufKS1xv_ecWi1zWa5OsN5n_d8TOaAc14ADnHZ8Je8JkKhuyRjyHyzdANMcvFzK66uV1xRztAVil9B5FQCiogiT6jfv0bzdCkAkof7jZUmQJq-om0nQbP8r6aSnvCnjHXWc8stUit4EITJlkppFNZgA4KSxtT6BeqFi-cztrBYlK73qjbNzEn-DKywjHVKIIed7fMHWgueg_Fk1RmPLB6nqzu0MkM30pLngQzNK_a90dgiy3QtoKC5tU5A6kZ17KIhpkRJc2JT91rttDrDSwvfpH9gi26ZAlGSHD5WZD3Qbyo1aegb-VZU6m0lyK5GcbuFooACbfZSQdtl7dVcwnkXmj38g3_sxyxjdnsBoksYX8Ll_22WgpvmT4lP8c0XMe7hStACh0po6OEWREtOR3w4iTKsamghw6EJCyiJGTvDGTsabEfYI-ftJym4rmoclqSR5qR3BVEQUWJ6aM9_hSkJYsE1Uzh0Xd-a4PCAX3Ho-YPhxA8mY2c0CjzfG_bw3oic6cDzJtPxyPMDb-wEw2MPv9myziCYjv3A9ccT33Fdd2jszC0rLlbdk7Av4_gOegj5iQ)

The system's architecture is built around efficient data handling and intelligent classification. FreeRTOS is central to acquiring sensor data and transmitting it reliably, ensuring real-time performance. This data is then fed into trained machine learning models responsible for recognizing and classifying specific exercise movements. The project structure is organized into two main folders, likely separating data acquisition/processing from the machine learning model and analysis components, allowing for modular development and clear task separation.

## Technologies
*   Python
*   FreeRTOS
*   Machine Learning
*   Bluetooth Low Energy
*   Webhook
*   Flask

## Conclusion

<img
  src="{{ '/assets/gifs/gymedge_html.gif' | relative_url }}"
  alt="Online Dashboard Demo"
  style="max-width: 60%; border-radius: 8px;"
/>

RTOS-GymEdge delivers a concise and intelligent solution for real-time exercise tracking, empowering athletes with immediate performance feedback.

---

🔗 [**View on GitHub**](https://github.com/TomasOsP/RTOS-GymEdge)