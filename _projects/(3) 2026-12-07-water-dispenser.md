---
name: "Project Name"
tools: [C/C++, KiCad, STM32]          # shown as tags on the project card
image: /assets/images/your-card-thumb.jpg   # thumbnail on the /projects listing
description: "One-line hook that sells the project"

---

# Dispensadora de agua
El proyecto convierte una simple dispensadora de agua en una maquina inteligente capaz de medir en tiempo real la cantidad de agua disponible de la máquina para cambio preventivo. asi mismo, se diseño todo el proceso de automatizacion del agua asi como la interfaz de mantenimiento de manera inalambrica. 
Otras herramientas utilizadas para su funcionamiento fue el diseño de la interfaz grafica para el usuario por medio de QT studio.
Un sistema Raspberry Pi 4 como hub central entre el usuario, el plc y el modulo de pago en linea

## Integración de sistema IoT
Para el monitoreo continuo del sistema, se implementaron sensores en las entradas de agua y en la salida de dispensasión. Por medio del protocolo MQTT se permite transmitir a traves de internet el estado de la maquina. Mas adelante se prevee añadir alertas de emergencia para reportar daños y prevenir disfuncionamiento.

## Acceso remoto para mantenimiento
El sistema de bloqueo de la maquina permite el acceso exclusivo a personal tecnico para el mantenimiento periodico de la maquina dispensadora a traves del uso de protocolos VNC por medio de internet.

Esto permite manipular el equipo sin necesidad de equipo especializado, todo a traves del celular del tecnico por medio de credenciales unicas y conexion a la red wifi del sistema.

## Comunicación entre PLC y Raspberry Pi
Se utilizo el protocolo MODBUS TCP para su interacción. A traves de un codigo ejecutable en Python es posible guardar las variables generadas por el usuario en pantalla y enviarlas al módulo PLC. 
