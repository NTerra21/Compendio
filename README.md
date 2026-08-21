# Compendio de Aventureros

Archivo personal de personajes de D&D (historia y narrativa).

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
| Cambiar la historia de Harret | `js/characters/Harret.js` |
| Cambiar imagen de Kana | `images/Kana.png` |
| Agregar / quitar un personaje del listado | `js/characters/index.js` |
| Cambiar navegacion / galeria / fichas | `js/app.js` |
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
│       ├── index.js      ← registro (lista de personajes)
│       ├── Kana.js
│       ├── Harret.js
│       ├── Noctharis.js
│       ├── Eiluin.js
│       ├── Thalorin.js
│       └── Reonidas.js
└── images/
    ├── Kana.png
    ├── Harret.png
    └── ...
```

## Modificar un personaje

Ejemplo, Kana:

```text
js/characters/Kana.js
```

Guarda y recarga la pagina. No hace falta tocar HTML.

## Cambiar su imagen

1. Coloca el archivo en `images/` con el nombre que indica el campo `image`.
2. Ejemplo: `images/Kana.png`

Si la imagen no existe, se muestra un placeholder. La pagina no se rompe.

## Agregar un personaje nuevo

1. Crea `js/characters/NuevoPersonaje.js` (copia `Kana.js` como plantilla).
2. Cambia `id`, `name`, `image` y el resto de textos.
3. Asegurate de terminar con:

```js
export default Object.freeze(NuevoPersonaje);
```

4. Registra el archivo en `js/characters/index.js` dentro de `CHARACTER_MODULES`:

```js
{ file: "./NuevoPersonaje.js", label: "NuevoPersonaje" }
```

5. (Opcional) Coloca `images/NuevoPersonaje.png`.

No toques `app.js` ni `index.html` para esto.

## Eliminar un personaje

1. En `js/characters/index.js`, quita su linea de `CHARACTER_MODULES`.
2. (Opcional) Borra `js/characters/EsePersonaje.js`.
3. (Opcional) Borra `images/EsePersonaje.png`.

## Aislamiento

Cada personaje vive en su propio archivo. Si uno falla al cargar:

- Veras un aviso en consola.
- Ese personaje puede mostrar una ficha de error.
- **El resto de la galeria sigue funcionando.**

## Navegacion

- Galeria: `#/`
- Ficha: `#/character/kana` (usa el `id` del personaje)
- En cada ficha: volver a galeria, anterior y siguiente.

## Personajes actuales

- Kana
- Harret
- Noctharis
- Eiluin
- Thalorin
- Reonidas
