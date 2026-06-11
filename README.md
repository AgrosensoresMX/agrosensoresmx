# AgrosensoresMX — Export Quotation System

Sistema de cotización de exportación agrícola para **Agrosensores y Semillas de México**.

## Archivos

| Archivo | Descripción |
|---|---|
| `login.html` | Pantalla de acceso (Supabase Auth) |
| `dashboard.html` | Panel de cotizaciones guardadas |
| `cotizador.html` | Cotizador de exportación EXW / CPT |
| `logo.png` | Logo de Agrosensores |
| `schema.sql` | Schema de base de datos para Supabase |

## Setup inicial

### 1. Base de datos Supabase
1. Abre **[supabase.com](https://supabase.com)** → proyecto `hcwelstbmcpbopjaetdd`
2. Ve a **SQL Editor → New query**
3. Pega el contenido de `schema.sql` → **Run**

### 2. Crear usuario administrador
En Supabase → **Authentication → Users → Add user**
- Email: `ariel@agrosensores.com.mx` (o el que prefieras)
- Password: elige una contraseña segura

### 3. GitHub Pages
1. Ve al repositorio en GitHub
2. **Settings → Pages → Source:** `Deploy from a branch`
3. **Branch:** `main` / `root`
4. El sitio quedará en: `https://agrosensoresmx.github.io/agrosensoresmx/login.html`

### 4. Dominio personalizado (opcional)
En GitHub Pages → **Custom domain** → agrega `cotizador.agrosensores.com.mx`

## Flujo de uso

```
login.html → dashboard.html → cotizador.html (nuevo o existente)
```

1. Inicia sesión con tu email y contraseña
2. En el dashboard verás todas las cotizaciones guardadas
3. Crea una nueva o abre una existente
4. Completa los 5 bloques y guarda con el botón **Save Quote**
5. Imprime como PDF con **Print / PDF**

## Tecnologías

- HTML / CSS / JS puro — sin frameworks
- [Supabase](https://supabase.com) — auth + base de datos PostgreSQL
- GitHub Pages — hosting estático gratuito

---
*Agrosensores y Semillas de México · agrosensoresmx@gmail.com · +52 (452) 269-3414*
