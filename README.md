# SLIME.DEV — Portfolio 8-bit

[![Estado](https://img.shields.io/badge/demo-pr%C3%B3ximamente-fbbf24?style=flat-square)](#)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)

Portfolio personal con estética de videojuego retro (arcade / terminal / RPG).
Hecho 100% con **HTML + CSS + JavaScript** puro, sin frameworks ni dependencias.

> 🚧 **Demo pública:** próximamente.

> Desarrollado por **Adolfo Sanabria** · Backend Developer (Python / FastAPI)

> Los proyectos del portfolio se desarrollaron en **colaboración**: Adolfo se encargó del
> **backend completo** y su compañero **@dual-devs0** del **frontend**.

## Características

- **Intro estilo boot**: pantalla de presentación clara con nombre, perfil y datos duros.
- **Bilingüe ES/EN**: selector de idioma en la intro, preferencia guardada en el navegador.
- **Look retro** pero legible: scanlines CRT suaves, sprite pixel art generado en CSS, bordes pixelados, paleta phosphor.
- **Secciones**:
  - `Sobre mí` — perfil, datos concretos y "qué puedo hacer" (stack real, sin barras de XP).
  - `Mazmorras` — proyectos como fichas de boss (GymPro SaaS y Sistema Académico UCA V2) con loot y datos reales.
  - `Bitácora` — quest log de misiones completadas.
  - `Contacto` — enlaces a GitHub [@starnicosvv](https://github.com/starnicosvv) y [LinkedIn](https://www.linkedin.com/in/nicol%C3%A1s-sanabria-141746309/).
- **Sonido 8-bit** generado con Web Audio (tecla `M` para silenciar).
- **Easter eggs**: código Konami (↑↑↓↓←→←→) activa modo neón; tecla `K` oculta el FPS falso; tecla `T` abre una consola de pruebas animada.

## Stack

| Capa | Tecnología |
|------|------------|
| HTML | semántico + accesible (data-i18n) |
| CSS | variables, grid, animaciones, responsive |
| JS | vanilla, sin dependencias |
| Fuentes | Press Start 2P + VT323 (Google Fonts) |

## Estructura

```
├── index.html      # Estructura y contenido
├── style.css       # Estilos (CRT, arcade, tarjetas, responsive)
├── script.js       # i18n, boot, sprites, audio, atajos
├── docs/
│   └── RESTORE.md  # Cómo volver a la versión anterior (backup en _backup_v1/)
└── _backup_v1/     # Copia de seguridad de una versión previa
```

## Correrlo local

Opciones:

- Doble clic sobre `index.html`, o
- Servir con un server estático:

```bash
# con Python (ya estás en ese mundo)
python -m http.server 8000
# luego abrí http://localhost:8000
```

## Cómo editar

- **Identidad / contacto**: buscá `ADOLFO SANABRIA` y `starnicosvv` en `index.html`.
- **Proyectos**: la sección `MAZMORRAS` en `index.html` (ficha de boss + loot). Los textos bilingües viven en el diccionario `I18N` al inicio de `script.js`.
- **Colores / paleta**: variables `:root` en `style.css` (`--green`, `--amber`, `--magenta`, etc.).
- **Mascota pixel art**: matriz `GHOST_ROWS` en `script.js` (cada letra mapea a un color en `GHOST_PAL`).

## Deploy

Es 100% estático, así que funciona en cualquier hosting estático sin build:

- **Vercel**: importá el repo / arrastrá la carpeta. La `vercel.json` no hace falta (no hay build).
- **GitHub Pages**: activá Pages desde el repo apuntando a `main` / root.
- **Netlify**: drop de la carpeta o conectá el repo.

## Notas

- La versión actual (que usa el cuadro "Sobre mí" + mazmorras) tiene su punto de restauración en `docs/RESTORE.md`.
- Sonido desactivado por defecto hasta que el usuario hace clic (requisito de autoplay de los navegadores).

## Atajos de teclado

| Tecla | Acción |
|-------|--------|
| `Enter` | Entrar al portfolio (en la intro) |
| `M` | Silenciar / activar sonido |
| `K` | Mostrar / ocultar contador FPS |
| `T` | Abrir consola de pruebas |
| `↑↑↓↓←→←→` | Modo neón |