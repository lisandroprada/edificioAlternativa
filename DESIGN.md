---
name: Edificio Alternativa, Depto 2-A
description: Landing de alquiler dibujada como una carta náutica de la costa de Puerto Rawson; el depto es la posición marcada.
colors:
  azul-marca: "#2e3092"
  azul-marca-hover: "#24267a"
  celeste-marca: "#27aae1"
  tinta: "#14163f"
  tinta-suave: "#3e4172"
  papel-carta: "#eef3f8"
  papel-agua: "#e1eaf3"
  magenta-posicion: "#c8105a"
  pie-noche: "#0f1155"
  pie-texto: "#dfe4f5"
  pie-legal: "#b9c0e3"
  blanco: "#ffffff"
typography:
  display:
    fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.55rem, 6.4vw, 3.6rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 4.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.6
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  sounding:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.12em"
rounded:
  btn: "2px"
  round: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  row: "14px"
  gap-strip: "16px"
  section-sm: "clamp(48px, 8vw, 96px)"
  section-md: "clamp(64px, 10vw, 128px)"
components:
  button-primary:
    backgroundColor: "{colors.azul-marca}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.btn}"
    height: "48px"
    padding: "0 1.4em"
  button-primary-hover:
    backgroundColor: "{colors.azul-marca-hover}"
  button-ghost:
    backgroundColor: "{colors.papel-carta}"
    textColor: "{colors.azul-marca}"
    rounded: "{rounded.btn}"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.azul-marca}"
    textColor: "{colors.blanco}"
  button-light:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.azul-marca}"
    rounded: "{rounded.btn}"
    height: "56px"
  titleblock:
    backgroundColor: "{colors.papel-carta}"
    textColor: "{colors.tinta}"
    padding: "14px 16px 12px"
  round-control:
    textColor: "{colors.azul-marca}"
    rounded: "{rounded.round}"
    size: "48px"
---

# Design System: Edificio Alternativa, Depto 2-A

## Overview

**Creative North Star: "La Carta Náutica"**

La página es una carta de la costa de Puerto Rawson y el depto es la posición marcada en ella. Cada dato es un rótulo de carta: cuadro de rotulado, leyenda de signos convencionales, sondas en cursiva, vistas de costa. El papel es frío, tintado hacia el celeste (no crema); la tinta es el azul de marca; el único color caliente es un magenta de carta reservado a la posición y al aviso.

La densidad es de plano: filetes finos, columnas de datos alineadas, mucho aire entre secciones. Sin tarjetas con sombra: la estructura la dan líneas de tinta y cambios de papel. El movimiento es de dibujo (trazar, sondar, derivar), nunca de decoración.

**Key Characteristics:**
- Papel azulado + tinta azul de marca; celeste solo como agua y foco.
- Un único magenta de posición (#c8105a) en el hero y en la línea de rumbo de la leyenda.
- Montserrat Light en cursiva para sondas y valores; Black para el titular.
- Esquinas casi rectas (2px); filetes de 1px y 1.5px en lugar de sombras.
- Marca Propietas por manual: azul #2e3092, celeste #27aae1, Montserrat como sustituto de Gotham.

## Colors

Paleta de carta: papel frío, tinta azul, aguas en celeste translúcido y un punto de magenta.

### Primary
- **Azul de Marca** (#2e3092): títulos h1/h2, botones primarios, selección, scrollbar, isóbatas, costa, fondo del cierre. Es la tinta principal de la carta.
- **Celeste de Marca** (#27aae1): solo en bandas de aguas someras (alfas .34, .22, .12, .05) y en el anillo de foco (3px). Nunca como texto sobre papel claro.

### Secondary
- **Magenta de Posición** (#c8105a): marca de posición, anillo, ping, línea de rumbo, hub de la rosa y barra de progreso de la leyenda. Es el único acento caliente.

### Neutral
- **Tinta** (#14163f): texto base, filetes del cuadro de rotulado y la neatline.
- **Tinta Suave** (#3e4172): subtítulos, términos secundarios, notas.
- **Papel de Carta** (#eef3f8): fondo de página, hero y cuadro de rotulado.
- **Papel de Agua** (#e1eaf3): banda de vistas, hover de filas de la leyenda, pista del scrollbar.
- **Noche de Pie** (#0f1155): fondo del pie; texto #dfe4f5 y legal #b9c0e3.
- **Filete** (rgba(46,48,146,.22)): divisores entre filas de datos.

### Named Rules
**The One Fix Rule.** El magenta marca una sola cosa: la posición del depto y lo que de ella sale. No aparece en botones, enlaces ni títulos.
**The Cold Paper Rule.** Los neutros se tintan hacia el azul de marca; no se usa gris puro ni crema.
**The Celeste Is Water Rule.** El celeste es agua o foco; el texto chico va en tinta o azul, porque el celeste sobre blanco no alcanza AA.

## Typography

**Display Font:** Montserrat (system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Montserrat (misma familia)

**Character:** una sola familia geométrica con contraste de peso: Black para decir, Light en cursiva para sondar valores y notas, como la rotulación de una carta.

### Hierarchy
- **Display** (900, clamp(1.55rem, 6.4vw, 3.6rem), 1.02, -0.02em): h1 del cuadro de rotulado, en azul de marca.
- **Headline** (800, clamp(1.8rem, 4.6vw, 3rem), 1.05, -0.02em): h2 de sección; el cierre sube a clamp(2.2rem, 6.5vw, 4.4rem).
- **Title** (600, 1.05rem): encabezados de columna de notas, términos de la leyenda (.98rem).
- **Body** (400, 1rem, 1.6): párrafos, medida ~46ch en introducción, 58ch en notas.
- **Sounding** (300 cursiva, 1.05rem, tabular-nums): valores de la leyenda, numeración de notas, "Vista N", sondas del mapa; en azul de marca.
- **Label** (500, .75rem, .12em, mayúsculas): solo nombres de campo (dt) dentro del cuadro de rotulado. Precio: 900 / 1.55rem.

### Named Rules
**The Sounding Rule.** Todo dato medido (m², nº de nota, valor de la leyenda) va en Light cursiva y cifras tabulares.
**The Weight Over Size Rule.** La jerarquía sale del peso (300 a 900) antes que de saltos de tamaño.

## Layout

Contenedor `.wrap` de 1180px máx. con gutter fluido (16 a 40px). Mobile-first. El hero ocupa 100svh: carta de fondo absoluta, cuadro de rotulado anclado abajo y logo arriba a la izquierda; desde 760px el cuadro mide min(560px, 46vw) y la rosa de los vientos flota abajo a la derecha. La ficha es de dos columnas 5fr/7fr (introducción sticky + leyenda) desde 760px, y una sola columna antes. Notas en tres columnas iguales en escritorio. Vistas: tira horizontal con snap, figuras de min(78vw, 340px) en móvil y min(30vw, 380px) en escritorio. Ritmo vertical entre secciones: clamp(48px a 128px); filas de datos con 14px de padding. En móvil hay un CTA fijo inferior que se desliza al hacer scroll y se oculta desde 760px.

## Elevation & Depth

Plano. No hay sombras en todo el sistema. La profundidad se logra con tonos de papel (papel de carta, papel de agua, azul de marca, noche de pie), filetes de tinta (1px y 1.5px) y la neatline doble del hero (dos marcos de 1px con graduación de rayas). La capa de carta se desplaza apenas al hacer scroll.

### Named Rules
**The Ink Line Rule.** Separar con filete o cambio de papel; nunca con sombra ni tarjeta.

## Shapes

Geometría de plano: botones con esquina de 2px, controles circulares (50%) solo para el carrusel, imágenes rectas con marco de 1px de tinta y 5px de paspartú. Trazos de 1.2 a 2.4px: isóbatas punteadas (6 5), costa continua gruesa, calles a 13% de opacidad. Iconos y signos convencionales: SVG de trazo 1.5px, extremos redondeados, color currentColor.

## Components

### Buttons
- **Shape:** casi recto (2px), 48px de alto mínimo, borde 1.5px azul, Montserrat 600 .95rem.
- **Primary:** fondo azul de marca, texto blanco; hover #24267a (solo con puntero).
- **Ghost:** papel 90% con texto azul; hover invierte a azul/blanco. Se usa en el top bar de escritorio.
- **Light:** blanco sobre el cierre azul, 56px; hover a papel.
- **Press / Focus:** `:active` escala .97; foco de 3px celeste con offset 3px.

### Cuadro de rotulado (titleblock)
Papel de carta, borde 1.5px de tinta, padding 14/16px (26/28px en escritorio). Contiene h1, subtítulo, una tabla de datos 3 columnas con filetes (el precio ocupa la fila completa) y botón a ancho completo.

### Leyenda de signos convencionales
Lista con filete superior 1.5px de tinta y filetes de 1px entre filas; símbolo de 26px, término 600 y valor en Light cursiva azul. Hover tonal a papel de agua. Una barra magenta de 2px en el borde izquierdo crece con el scroll (la línea de rumbo).

### Vistas (tira de fotos)
Banda en papel de agua con filetes; fotos 3:4 con marco de tinta, leyenda "Vista N · descripción" con el número en cursiva Light; controles circulares de 48px.

### Notas
Listas numeradas con número en cursiva Light azul, filetes entre filas, encabezado con filete de 1.5px.

### Carta del hero
Bandas de agua en celeste translúcido, costa y isóbatas en azul, sondas en cursiva, rosa de los vientos (azul y blanco, hub magenta), marca de posición magenta con ping pulsante.

### Cierre y pie
Cierre en azul de marca con cuadrícula de líneas blancas al 8%; pie en #0f1155 con logo de Propietas, dirección, enlaces y pie legal.

### Motion
Easing `cubic-bezier(.16, 1, .3, 1)`. Al cargar: costa e isóbatas se trazan, bandas y sondas aparecen, la rosa entra rotando, el cuadro sube. Contornos del mar derivan 10px en 16s. Revelado por scroll de 14px en 700ms con escalonado de 70ms. Todo queda quieto con `prefers-reduced-motion`; el estado por defecto es el final.

## Do's and Don'ts

### Do:
- **Do** separar con filetes de tinta (1px, 1.5px para cabeceras) y cambios de papel (#eef3f8 / #e1eaf3).
- **Do** reservar el magenta #c8105a para la posición y lo que sale de ella.
- **Do** componer datos en Light cursiva con cifras tabulares y títulos en 800 a 900 con tracking -0.02em.
- **Do** usar el logo de Propietas según variante: color sobre papel, blanco sobre el azul o el pie.
- **Do** declarar el movimiento solo dentro de `prefers-reduced-motion: no-preference`.

### Don't:
- **Don't** usar tarjetas con sombra ni radios grandes; esquinas de 2px como máximo en superficies, 50% solo en controles circulares.
- **Don't** poner celeste como color de texto chico sobre claro.
- **Don't** usar crema ni gris puro como papel.
- **Don't** recolorar, deformar ni agregar efectos al logo de Propietas.

*No canonizado (defectos o desvío que el build arrastra, no son regla):* los valores sueltos #24267a (hover) y #0f1155 / #dfe4f5 / #b9c0e3 (pie) están literales en el CSS fuera de :root; se registran como tokens descriptivos solo por estar en uso, y conviene llevarlos a :root. El `scroll-behavior: smooth` global no tiene guarda para reduced-motion.
