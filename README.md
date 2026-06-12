# Agrosensores y Semillas de México — Sitio web

Landing page (Hero) corporativa multilingüe para **www.agrosensores.mx**.

## Contenido
- `index.html` — Landing principal (Hero, catálogo, CRM/WhatsApp, certificaciones, mapa, blog, footer)
- `faq.html` — Preguntas frecuentes (7 idiomas)
- `blog.html` — Listado de noticias
- `blog/` — Artículos
- `images/` — Fotografías de producto, fotos del carrusel del Hero, logos y Open Graph
- `image-slot.js` — Componente para reemplazar fotos por arrastrar y soltar

## Idiomas
Español · Inglés · Francés · Árabe (RTL) · Ruso · Chino · Coreano

## Despliegue en HostGator (producción)
1. cPanel → **Administrador de archivos** → `public_html`
2. Sube **el contenido** de esta carpeta (no la carpeta en sí)
3. `www.agrosensores.mx` cargará `index.html`

## Notas técnicas
- React + Babel y Leaflet/OpenStreetMap se cargan desde CDN (requiere conexión).
- Google Analytics: `G-2QXDM25B30` ya integrado.
- WhatsApp: +52 452 269 3414 · Correo: agrosensoresmx@gmail.com
- El blog se gestionará con WordPress en `blog.agrosensores.mx`.

## Carrusel del Hero
6 diapositivas con fotografía real: Aguacate Hass · Cítricos · Nuez Pecanera · Pinos Mexicanos · Agaves · **Sensores IoT de Monitoreo Agrícola**.
