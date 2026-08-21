# Compendio de Aventureros

Archivo personal de personajes de D&D (historia y narrativa). No necesita servidor ni instalacion.

## Como abrir la pagina

1. Abre la carpeta del proyecto.
2. Haz doble clic en `index.html`, **o**
3. Arrastra `index.html` a tu navegador.

Tambien puedes abrirla desde Cursor / VS Code con "Open with Live Server" si lo tienes.

## Estructura

```text
/
├── index.html          ← pagina principal (casi no se toca)
├── css/style.css       ← estilos
├── js/characters.js    ← DATOS de los personajes (edita aqui)
├── js/app.js           ← logica (galeria, fichas, navegacion)
├── images/             ← retratos (Kana.png, Harret.png, ...)
├── img/                ← copia original de arte (referencia)
└── PJs dnd/            ← documentos Word fuente
```

## Donde colocar las imagenes

1. Coloca el archivo en la carpeta `images/`.
2. Usa el mismo nombre que indica el campo `image` del personaje.

Ejemplos:

- `images/Kana.png`
- `images/Harret.png`
- `images/Noctharis.png`

Si la imagen no existe, la pagina muestra un placeholder elegante. **No se rompe el diseno.**

Para cambiar el archivo usado por un personaje, edita solo la linea `image` en `js/characters.js`.

## Como agregar un personaje

1. Abre `js/characters.js`.
2. Copia un bloque `{ ... }` existente.
3. Pegalo al final del arreglo `CHARACTERS` (antes del `];`).
4. Cambia `id`, `name`, `image` y el resto de textos.
5. Guarda y recarga la pagina.

El `id` debe ser unico y en minusculas sin espacios (ejemplo: `"nuevo-pj"`).

La tarjeta y la ficha aparecen solas. No hace falta tocar HTML.

## Como modificar el trasfondo

1. Abre `js/characters.js`.
2. Busca el personaje por `name` o `id`.
3. Edita los campos que quieras (`background`, `personality`, `ideals`, etc.).
4. Guarda y recarga.

No edites `index.html` para cambiar textos de personajes.

## Como eliminar un personaje

1. Abre `js/characters.js`.
2. Borra todo el objeto `{ ... }` de ese personaje (incluye la coma sobrante si queda).
3. Guarda y recarga.

Opcional: borra tambien su imagen en `images/`.

## Que archivo modificar para cada cosa

| Quiero... | Archivo |
|-----------|---------|
| Agregar / editar / borrar un personaje | `js/characters.js` |
| Cambiar o poner una imagen | carpeta `images/` (+ campo `image` si cambia el nombre) |
| Cambiar colores o tipografia | `css/style.css` |
| Cambiar como funciona la navegacion | `js/app.js` |
| Cambiar el titulo fijo de la pestana/header | `index.html` |

## Navegacion

- Inicio / galeria: `#/`
- Ficha de un personaje: `#/character/kana` (usa el `id`)
- En cada ficha puedes volver a la galeria o ir al anterior / siguiente.

Funciona abriendo el archivo en local, sin backend.

## Personajes incluidos (desde los documentos)

- Kana
- Harret
- Noctharis
- Eiluin
- Thalorin Nairel
- Reonidas

Fuente: archivos en `PJs dnd/`. El contenido mecanico de reglas (hechizos, dados, etc.) se dejo fuera a proposito; el foco es narrativo.
