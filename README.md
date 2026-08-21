# Compendio de Aventureros

Archivo personal de personajes de D&D (historia y narrativa).  
Sitio 100% estatico, compatible con GitHub Pages.

---

## Regla de oro

| Quiero... | Archivo |
|-----------|---------|
| Cambiar el **contenido** de un personaje | `js/characters/Nombre.js` |
| Cambiar su **imagen** | `images/Nombre.png` |
| Cambiar sus **colores** | `theme` dentro de `js/characters/Nombre.js` |
| Cambiar el **diseño general** | `css/style.css` |
| Cambiar el **funcionamiento** | `js/app.js` |
| **Agregar** un personaje | copiar `js/characters/_TEMPLATE.js` + registrarlo en `index.js` |
| Consultar fuentes Word originales | `docs/` (no los usa la app) |

---

## Como abrir la pagina

Usa modulos ES (`import` / `export`). **No abras con doble clic** (`file://`).

1. Live Server en Cursor / VS Code, o
2. Terminal:

```bash
py -m http.server 8080
```

Luego: http://localhost:8080

---

## Estructura del proyecto

```text
/
├── index.html              Pagina principal (casi no se toca)
├── css/style.css           Diseño general (estructura, no colores de un PJ)
├── js/
│   ├── app.js              Logica: galeria, fichas, temas, navegacion
│   └── characters/
│       ├── index.js        Registro (lista de personajes activos)
│       ├── _TEMPLATE.js    Plantilla (NO es un personaje)
│       ├── Kana.js
│       ├── Harret.js
│       └── ...
├── images/                 Retratos (Kana.png, ...)
├── files/                  PDF de fichas (Kana.pdf, ...)
└── docs/                   DOCX originales (solo referencia)
```

### Que hace cada carpeta

- **`js/characters/`**: datos de cada personaje (historia, fichas, tema visual).
- **`images/`**: imagenes de retrato.
- **`files/`**: PDF locales de fichas de D&D.
- **`docs/`**: Word originales. La web no depende de ellos.
- **`css/`**: aspecto compartido. Los colores por personaje vienen de `theme` en cada `.js`.

---

## Crear un personaje nuevo

1. Copia `js/characters/_TEMPLATE.js`
2. Renombralo, por ejemplo `Lucian.js`
3. Dentro del archivo:
   - Cambia `NewCharacter` por `Lucian` (const y `export default`)
   - Completa `id`, `name`, textos, etc.
4. (Opcional) Coloca `images/Lucian.png`
5. (Opcional) Coloca `files/Lucian.pdf` y configura `sheet`
6. Registra en `js/characters/index.js`:

```js
{ file: "./Lucian.js", label: "Lucian" }
```

7. Recarga y comprueba la galeria.

**Importante:** `_TEMPLATE.js` no debe aparecer en `CHARACTER_MODULES`.

---

## Modificar un personaje

Ejemplo Kana:

```text
js/characters/Kana.js
```

No hace falta tocar HTML ni CSS para cambiar textos.

---

## Cambiar una imagen

```text
images/Kana.png
```

El campo `image` del personaje debe apuntar a esa ruta. Si el archivo no existe, se muestra un placeholder.

---

## Agregar una ficha online

```js
sheet: {
  type: "link",   // tipo: enlace externo
  url: "https://...",  // direccion completa
  label: "Ver ficha"   // texto del boton
}
```

Se abre en una nueva pestaña con `rel="noopener noreferrer"`.

---

## Agregar una ficha PDF

1. Guarda el PDF en `files/` (ejemplo: `files/Kana.pdf`)
2. En el personaje:

```js
sheet: {
  type: "pdf",
  url: "files/Kana.pdf",
  label: "Ver ficha"
}
```

Funciona en local (con servidor) y en GitHub Pages como archivo estatico.

---

## Personaje sin ficha

```js
sheet: null
```

No aparece ningun boton de ficha.

### Varias fichas

```js
sheets: [
  { type: "link", url: "https://...", label: "Ficha online" },
  { type: "pdf", url: "files/Kana.pdf", label: "Ficha PDF" }
]
```

---

## Cambiar los colores (tema)

En el archivo del personaje, seccion **TEMA VISUAL / COLORES**:

```js
theme: {
  // Nombre del tema (referencia para ti).
  name: "Hierro y Oxido",

  // Fondo general de la pagina del personaje.
  background: "linear-gradient(135deg, #121212, #3a1812)",

  // Fondo de la hoja/panel principal.
  sheet: "#292725",

  // Titulos y elementos importantes.
  primary: "#777777",

  // Texto secundario / detalles.
  secondary: "#8b3f2f",

  // Bordes, botones, separadores.
  accent: "#b85c3a",

  // Texto del cuerpo.
  text: "#e0ddd8"
}
```

No edites `style.css` para colores de un personaje concreto.  
`app.js` aplica estas propiedades como CSS variables (`--character-*`).

### Valores por defecto

Si falta `theme` o alguna propiedad, la app usa un tema base seguro. El personaje sigue funcionando.

### Usar degradados

Cualquier valor CSS valido sirve:

```js
background: "linear-gradient(135deg, #160d20, #6b1638)"
```

Ejemplos:

- Kana: violeta → rojo (`#160d20` → `#6b1638`)
- Reonidas: hierro → bronce (`#171717` → `#3a2a18`)

---

## Metadatos opcionales

```js
campaign: "Elantris",
status: "Retirado",
year: "2024"   // o 2024 (numero)
```

Si estan vacios o `null`, no se muestra nada.

---

## Eliminar un personaje

1. Quita su linea de `CHARACTER_MODULES` en `js/characters/index.js`
2. (Opcional) Borra su `.js`, imagen y PDF

---

## DOCX originales

```text
docs/
```

Material de origen. La app **no** los procesa.  
Usa `js/characters/` para el dia a dia. Consulta `docs/` solo para recuperar o verificar informacion.

---

## Navegacion

- Galeria: `#/`
- Ficha: `#/character/kana` (usa el `id`)
- Buscador en galeria por nombre
- Anterior / siguiente en cada ficha

---

## Personajes actuales

Kana, Harret, Noctharis, Eiluin, Thalorin, Reonidas
