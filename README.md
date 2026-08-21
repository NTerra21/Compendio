# Compendio de Aventureros

Archivo personal de personajes de D&D (historia y narrativa). Sitio 100% estático, compatible con GitHub Pages.

## Como abrir la pagina

Los personajes usan **modulos ES** (`import` / `export`). Por seguridad del navegador, **no abras `index.html` con doble clic** (protocolo `file://`): fallara la carga.

Opciones simples:

1. **Live Server** en Cursor / VS Code (recomendado).
2. Desde la carpeta del proyecto, en terminal:

```bash
py -m http.server 8080
```

Luego abre: http://localhost:8080

## Arquitectura (que tocar para cada cosa)

| Quiero... | Archivo |
|-----------|---------|
| Cambiar la historia de Kana | `js/characters/Kana.js` |
| Cambiar imagen de Kana | `images/Kana.png` |
| Agregar / quitar ficha PDF o link | `js/characters/Kana.js` |
| Guardar un PDF | carpeta `files/` |
| Agregar / quitar un personaje del listado | `js/characters/index.js` |
| Cambiar navegacion / galeria | `js/app.js` |
| Cambiar colores y tipografia | `css/style.css` |
| Cambiar titulo fijo del sitio | `index.html` |

## Estructura

```text
/
├── index.html
├── css/style.css
├── js/
│   ├── app.js
│   └── characters/
│       ├── index.js
│       ├── Kana.js
│       ├── Harret.js
│       └── ...
├── images/
│   ├── Kana.png
│   └── ...
└── files/
    ├── Kana.pdf
    └── ...
```

## Modificar un personaje

```text
js/characters/Kana.js
```

## Cambiar su imagen

Coloca el archivo en `images/` (ejemplo: `images/Kana.png`). Si falta, se muestra un placeholder.

## Ficha externa (link)

En el archivo del personaje:

```js
sheet: {
  type: "link",
  url: "https://ejemplo.com/ficha",
  label: "Ver ficha"
}
```

Se abre en una nueva pestaña (`target="_blank"` + `rel="noopener noreferrer"`).

## Ficha PDF (local)

1. Coloca el PDF en `files/` (ejemplo: `files/Kana.pdf`).
2. En el personaje:

```js
sheet: {
  type: "pdf",
  url: "files/Kana.pdf",
  label: "Ver ficha"
}
```

Los PDF se sirven como archivos estaticos (tambien en GitHub Pages). Si el archivo no existe, la pagina no se rompe; al abrir el enlace el navegador mostrara error 404.

## Sin ficha

```js
sheet: null
```

O simplemente omite el campo. **No aparece ningun boton.**

## Varias fichas

Usa `sheets` (arreglo). Tambien puedes combinar `sheet` + `sheets`; la app los une.

```js
sheets: [
  {
    type: "link",
    url: "https://ejemplo.com/ficha",
    label: "Ficha online"
  },
  {
    type: "pdf",
    url: "files/Kana.pdf",
    label: "Ficha PDF"
  }
]
```

Los botones aparecen arriba a la derecha, junto a "Galeria".

## Metadatos opcionales

Debajo del nombre (solo si tienen valor):

```js
campaign: "Elantris",
status: "Retirado",
year: "2024"
```

Si estan en `null`, vacios o no existen, no se muestra nada.

## Agregar un personaje nuevo

1. Crea `js/characters/NuevoPersonaje.js` (copia uno existente).
2. Cambia datos y termina con `export default Object.freeze(...)`.
3. Registralo en `js/characters/index.js` dentro de `CHARACTER_MODULES`.
4. (Opcional) Imagen en `images/` y PDF en `files/`.

## Eliminar un personaje

1. Quita su entrada de `CHARACTER_MODULES` en `js/characters/index.js`.
2. (Opcional) Borra su `.js`, imagen y PDF.

## Buscador

En la galeria hay un campo **Buscar personaje...** que filtra tarjetas por nombre (tambien epiteto/frase).

## Aislamiento

Si un personaje falla al cargar, el resto sigue visible. Un PDF o imagen faltante no tumba la app.

## Navegacion

- Galeria: `#/`
- Ficha: `#/character/kana`
- Anterior / siguiente dentro de cada ficha

## Personajes actuales

Kana, Harret, Noctharis, Eiluin, Thalorin, Reonidas
