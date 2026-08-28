/**
 * ============================================================
 * PLANTILLA DE PERSONAJE
 * ============================================================
 *
 * Este archivo NO es un personaje real.
 * NO debe registrarse en js/characters/index.js
 *
 * Como usarla:
 * 1. Copia este archivo y renombralo (ejemplo: Lucian.js).
 * 2. Cambia el nombre de la constante (ejemplo: Lucian).
 * 3. Completa los datos.
 * 4. Registralo en js/characters/index.js
 * 5. (Opcional) Coloca images/Lucian.png y/o files/Lucian.pdf
 *
 * La estructura de abajo coincide con lo que usa app.js hoy.
 */

const NewCharacter = {
  // ============================================================
  // IDENTIDAD
  // ============================================================

  // ID unico. Minusculas y guiones. Se usa en la URL: #/character/nuevo-personaje
  id: "nuevo-personaje",

  // Nombre visible en galeria y ficha.
  name: "Nuevo Personaje",

  // Subtitulo opcional bajo el nombre.
  epithet: "",

  // Ruta de la imagen. Colocar el archivo en /images/
  // Si falta, se muestra un placeholder (la pagina no se rompe).
  image: "images/NuevoPersonaje.png",

  // Ruta de la imagen de la mascota/acompañante (opcional). Aparecerá como un avatar circular.
  // Ejemplo: "images/dragon.png"
  petImage: "",

  // Frase corta de la tarjeta en la galeria.
  tagline: "",

  // Parrafo introductorio bajo el nombre en la ficha.
  description: "",

  // Descripcion fisica / visual (opcional). Si esta vacia, no se muestra la seccion.
  appearance: "",

  // ============================================================
  // ESTADÍSTICAS (Abre en ventana emergente)
  // ============================================================
  // Si este objeto existe, aparecerá un botón "Ver Stats" en la barra superior.
  // Puedes dejar campos en blanco ("") si no aplican.
  stats: {
    age: "",
    class: "",
    subclass: "",
    multiclass: "",
    level: ""
  },

  // ============================================================
  // HISTORIA / TRASFONDO
  // ============================================================
  // Arreglo de parrafos. Cada string = un parrafo.
  background: [
    // "Primer parrafo del trasfondo...",
    // "Segundo parrafo..."
  ],

  // ============================================================
  // PERSONALIDAD
  // ============================================================
  personality: "",

  // Listas: cada item es un string. Si el arreglo esta vacio, la seccion no aparece.
  ideals: [
    // "Ideal 1"
  ],
  bonds: [
    // "Vinculo 1"
  ],
  flaws: [
    // "Defecto 1"
  ],
  motivations: "",

  // ============================================================
  // RELACIONES
  // ============================================================
  relationships: [
    // { name: "Nombre", description: "Quien es y que vinculo tiene." }
  ],

  // ============================================================
  // EVENTOS IMPORTANTES
  // ============================================================
  importantEvents: [
    // { title: "Titulo del evento", description: "Que ocurrio." }
  ],

  // ============================================================
  // BITÁCORA / DIARIO (Pestaña extra)
  // ============================================================
  // Cada item es un día o entrada. Si el arreglo está vacío, no aparece la pestaña.
  journal: [
    // { title: "Día 1", content: "Llegamos a la ciudad. Dormí en una taberna cómoda." }
  ],

  // ============================================================
  // INVENTARIO (Pestaña extra)
  // ============================================================
  // Lista de posesiones. Si el arreglo está vacío, no aparece la pestaña.
  inventory: [
    // { title: "Espada Larga", content: "Un arma sencilla y bien cuidada." }
  ],

  // ============================================================
  // OTRAS NOTAS
  // ============================================================
  other: [
    // { title: "Titulo", content: "Texto libre." }
  ],

  // ============================================================
  // METADATOS (opcionales)
  // ============================================================
  // Si estan vacios o null, no se muestra nada en la interfaz. Aparecen como "chips" verdes.
  campaign: null,
  // Ejemplos: "Activo", "Retirado", "Muerto"
  status: null,
  // Puede ser string ("2024") o numero (2024)
  year: null,
  // Nombre del jugador que lo interpreta
  player: null,

  // ============================================================
  // FICHA DE D&D (opcional)
  // ============================================================
  // Link externo:
  // sheet: {
  //   type: "link",
  //   url: "https://...",
  //   label: "Ver ficha"
  // }
  //
  // PDF local (colocar el archivo en /files/):
  // sheet: {
  //   type: "pdf",
  //   url: "files/NuevoPersonaje.pdf",
  //   label: "Ver ficha"
  // }
  //
  // Varias fichas:
  // sheets: [
  //   { type: "link", url: "https://...", label: "Ficha online" },
  //   { type: "pdf", url: "files/NuevoPersonaje.pdf", label: "Ficha PDF" }
  // ]
  //
  // Sin ficha (no aparece boton):
  sheet: null,

  // ============================================================
  // TEMA VISUAL / COLORES
  // ============================================================
  // Acepta cualquier valor CSS valido: hex, rgb(), linear-gradient(), etc.
  // Si omites una propiedad, app.js usa un valor por defecto seguro.
  theme: {
    // Nombre descriptivo del tema (solo referencia para ti).
    name: "Tema del personaje",

    // Fondo general de la pagina al abrir este personaje.
    background: "linear-gradient(135deg, #151515, #2a2a2a)",

    // Fondo de la hoja/panel principal.
    sheet: "linear-gradient(160deg, #efe6d6 0%, #eadfcb 100%)",

    // Titulos y elementos importantes.
    primary: "#1c1814",

    // Texto secundario y detalles.
    secondary: "#3a322a",

    // Bordes, botones, separadores, acentos.
    accent: "#b08d4a",

    // Color principal del texto del cuerpo.
    text: "#3a322a"
  }
};

export default Object.freeze(NewCharacter);