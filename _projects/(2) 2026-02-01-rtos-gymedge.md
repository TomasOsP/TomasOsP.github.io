---
name: "Rtos Gymedge"
tools: [python]
image: /assets/images/fitness_IoT.jpg
description: "Clasificador de movimientos"
---

# RTOS-GymEdge: Real-Time Exercise Classification

## Overview
RTOS-GymEdge is a movement classifier designed to measure the intensity and duration of various cardiovascular exercises performed by athletes in a gym. This project aims to provide real-time analysis of workout data, enabling athletes to track their performance efficiently.

## Problem & Solution
Athletes often struggle with accurately tracking the intensity and duration of their gym exercises without relying on cumbersome equipment or complex setups. This project addresses this by offering a minimalist solution that leverages machine learning to automatically recognize and classify different exercises. By integrating FreeRTOS for efficient data acquisition and transmission, RTOS-GymEdge provides real-time insights into an athlete's performance with minimal components.

## Architecture
The system's architecture is built around efficient data handling and intelligent classification. FreeRTOS is central to acquiring sensor data and transmitting it reliably, ensuring real-time performance. This data is then fed into trained machine learning models responsible for recognizing and classifying specific exercise movements. The project structure is organized into two main folders, likely separating data acquisition/processing from the machine learning model and analysis components, allowing for modular development and clear task separation.

## Technologies
*   Python
*   FreeRTOS
*   Machine Learning

## Conclusion
RTOS-GymEdge delivers a concise and intelligent solution for real-time exercise tracking, empowering athletes with immediate performance feedback.

---

🔗 **Repositorio:** [Ver en GitHub](https://github.com/TomasOsP/RTOS-GymEdge)