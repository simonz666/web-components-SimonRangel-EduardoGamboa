
# EventGlass

## Integrantes
- Eduardo Gamboa
- Simon Rangel

## Descripción del proyecto

EventGlass es una página web creada para mostrar diferentes eventos culturales mediante tarjetas visuales. Su objetivo es presentar información como el nombre del evento, la fecha, el lugar y los cupos disponibles de una manera organizada y atractiva.

## Caso elegido

Para este proyecto elegimos desarrollar tarjetas de eventos para una agenda cultural. Cada tarjeta muestra información de un evento diferente.

Los eventos que incluimos son:
- Festival de Música.
- Exposición de Arte.
- Conferencia Tech.

## Tecnologías utilizadas

- **HTML:**
- **CSS:**
- **JavaScript:**

## Estructura del proyecto

```text
EventGlass/
│
├── index.html
│
├── js/
│   └── main.js
│
└── README.md
```

## Requisitos del componente

### R1. Template propio

Creamos un template en HTML que funciona como modelo para las tarjetas de eventos. Dentro incluimos los estilos y los espacios donde posteriormente se muestra la información.

### R2. Componente personalizado

Creamos un componente llamado `event-card` utilizando JavaScript. Esto nos permite reutilizar el mismo diseño sin tener que escribir toda la estructura nuevamente.

### R3. Atributos

Cada tarjeta recibe información mediante atributos HTML, como el título, la fecha, el lugar, los cupos disponibles y la imagen del evento.

### R4. Slot

Utilizamos un slot para agregar una descripción diferente a cada evento. De esta manera podemos personalizar el contenido de las tarjetas.

### R5. Reutilización

Utilizamos nuestro componente para crear tres tarjetas diferentes, cada una con su propia información e imagen.

## Uso de inteligencia artificial (IA)

Se utilizó ChatGPT como herramienta de apoyo durante el desarrollo del proyecto, principalmente para organizar el código, comprender el funcionamiento de los HTML Templates y los Web Components, y resolver algunas dudas.

El código fue revisado y probado durante el desarrollo para comprender cómo funciona cada una de sus partes.
