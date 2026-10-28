# Edificio Alternativa — Landing de captación (Depto 2-A en alquiler)

Proyecto de Propietas Inmobiliaria. Hereda de `../CLAUDE.md`: datos de la firma, manual de marca y reglas generales. Acá solo lo específico.

## El proyecto
- **Qué es:** landing de captación para el alquiler del Depto 2-A del "Edificio Alternativa" (el nombre del edificio lo dio el usuario; no figura en la ficha de origen). Fuente: https://www.ipropietas.com.ar/listing_details_05/92bfcdb5-d9c7-4a35-9705-ecb48af912b2
- **Ubicación:** Av. Guillermo Rawson 2519, Puerto Rawson, Chubut. Frente al mar.
- **Oferta:** 1 unidad, Depto 2-A, en **alquiler a ARS 850.000/mes** (valor de la ficha al 2026-10-27; puede cambiar). 65 m² totales, 2 dormitorios con placard, 2 baños (confirmado por el usuario; la ficha dice 1 en el encabezado), cocina, living-comedor, balcón amplio con vista al mar, cochera, piscina y SUM en espacios comunes. Antigüedad 15 años.
- **Condiciones de alquiler (de la ficha):** contrato mínimo 2 años; actualización por ICL, IPC o índice CAC, trimestral/cuatrimestral/semestral según contrato. Requisitos: DNI y recibo de sueldo de locatario y garante, 1 año de antigüedad laboral; el garante no puede ser jubilado, ni cónyuge/pareja/conviviente; el alquiler no debe superar el 30% de los ingresos netos del garante.
- **Estado:** disponible. Sitio construido (HTML/CSS estático, dirección Carta Náutica), pulido y checklist de cierre pendientes. Ver `PRODUCT.md`, `DESIGN.md`.
- **Contacto específico:** usa el WhatsApp de la firma (`https://wa.me/5492804503151`).

## Identidad
- **Marca propia del desarrollo:** no. Solo Propietas.
- **Rol de Propietas:** comercializadora (logo en header/footer + pie legal)
- **Paleta / tipografía:** manual de marca (azul `#2e3092`, celeste `#27aae1`, Montserrat). Dirección visual por impeccable `shape`; ver DESIGN.md cuando exista.

## Técnico
- **Stack:** HTML/CSS estático
- **Assets:** `assets/logos/` (color, blanco, símbolo) y `assets/img/foto-01..09.jpg`, descargadas de la ficha. Mayormente verticales y de baja resolución (hasta 960×1280); `foto-08` es horizontal 840×532. Sin `alt` definitivo todavía. No referenciar `../_shared`.
- **Deploy:** Vercel, solo con confirmación del usuario

## Contexto de diseño
- `PRODUCT.md` (impeccable init) y `DESIGN.md` (cuando exista) son la fuente de verdad visual y de producto.

## Pendientes
- PENDIENTE: nombre oficial del edificio y si hay más unidades disponibles
- PENDIENTE: expensas
- PENDIENTE: confirmar y corregir en la ficha de origen la cantidad de baños (1 vs. 2)
- PENDIENTE: confirmar si la ficha tiene "Ambientes: 1" por error (con 2 dormitorios, living y cocina)
- PENDIENTE: validar pie legal con el corredor
- PENDIENTE: fotos de mejor resolución y `alt` por foto (identificar qué muestra cada una)
- PENDIENTE: si se quiere cochera/piscina/SUM con más detalle, confirmar con el propietario
- PENDIENTE: nombre oficial del edificio en la ficha; foto-08 (Street View con marca de agua) descartada
- PENDIENTE: og:image y favicon con dominio definitivo; fotos propias del frente del edificio
- PENDIENTE (revisión): riel de rumbo desde la marca del hero con marcas por sección; graticule y barra de escala de la carta
- NOTA: `assets/img/frente.jpg` es una captura de Google Street View que el usuario pidió usar igual (2026-10-27). Riesgo de derechos; reemplazar por foto propia cuando haya.
