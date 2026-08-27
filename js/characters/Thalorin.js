/**
 * Datos de Thalorin Nairel.
 * Edita SOLO este archivo para modificar a este personaje.
 *
 * Secciones principales en este archivo:
 * 1) Identidad e historia
 * 2) Personalidad / vinculos / defectos
 * 3) Relaciones y eventos
 * 4) Metadatos y ficha (sheet)
 * 5) TEMA VISUAL / COLORES (al final)
 *
 * No hace falta tocar HTML, CSS ni app.js.
 */

const Thalorin = {
  "id": "thalorin",
  "name": "Thalorin Nairel",
  "epithet": "Guardián del amanecer",
  "image": "img/Thalorin_sinFondo.png",
  "petImage": "img/Buhoso.jpg",
  "tagline": "Un paladín marcado por la guerra que aún busca esperanza...",
  "description": "Alto elfo de la Casa Nairel, primo de Harret. Guerrero y paladín que protegio civiles en la guerra contra los demonios del Olivo. Sobrevivio a la aniquilación de su peloton y carga cicatrices visibles e invisibles.",
  "appearance": "Masculino, 240 años, alto elfo, 195 cm, robusto y musculoso. Pelo morocho y lacio; piel de tono rubio clasico con calidez; cicatrices en el cuerpo. Ojos celestes que se vuelven dorados al usar magia.",
  "background": [
    "Thalorin Nairel —Nairel evoca \"guardián\"— es miembro distinguido de su casa y primo de Harret. Aunque no son hermanos de sangre, compartieron un vínculo cercaño desde la infancia, creciendo juntos en el mismo bosque.",
    "En el punto álgido de la guerra contra los demonios que amenazaban El Olivo, sirvio en una compañía dedicada a proteger civiles. En el frente, sin recursos suficientes, enfrentaron una horda incontenible. Destaco en una confrontacion feroz contra Surmina, Marilith y General N.º 4 de la horda. La escasez de suministros y refuerzos llevo al aniquilamiento de su peloton.",
    "La tragedía lo marco: la pérdida de camaradas y la impotencia de no poder salvar a todos lo persiguíeron mucho después. Regreso a casa con deber cumplido y esperanza de restaurar el Gran Árbol, pero también con melancolía, pesadillas y una sombra que no se iba.",
    "La llegada de Harret, comprometida con la misma misión, le dio un nuevo propósito. Juntos buscan una cura para El Olivo y protegen su hogar. En esa travesía busca paz, esperanza y restaurar la honorabilidad de la Casa Nairel."
  ],
  "personality": "Compasivo, protector, respetuoso, leal, valiente y determinado. Optimismo infatigable pese a las tragedias. Devoto del amanecer como símbolo de renovación. En el tiempo libre toca laúd (se defiende) y cuida plantas.",
  "ideals": [
    "Renovación y esperanza: incluso en lo mas oscuro existe la posibilidad de un nuevo comienzo.",
    "\"Buscar la paz y la esperanza en medio de la oscuridad\": anhela equilibrio entre caos y serenidad para su pueblo y su bosque.",
    "Restaurar la honorabilidad de la Casa Nairel y traer renovación al bosque."
  ],
  "bonds": [
    "Casa Nairel: compromiso con la familia y su honor.",
    "Harret: companera en la búsqueda para salvar el Gran Árbol.",
    "Lazhánder: su dios; guia acciones y decisiones.",
    "Los ciudadanos de su ciudad natal: protección y justicia forjadas en el frente."
  ],
  "flaws": [
    "Cicatrices de guerra: fisicas y emocionales que pueden afectar su equilibrio bajo estres.",
    "Desconfianza profunda hacia cualquier entidad relaciónada con demonios.",
    "Compromiso fanatico: su devoción a Lazhánder puede llevarlo a actuar de forma impulsiva o extremista en nombre de su causa."
  ],
  "motivations": "Sanar el bosque, restaurar el Olivo y el honor de su casa, encontrar paz tras la guerra y proteger a los indefensos.",
  "relationships": [
    {
      "name": "Harret",
      "description": "Prima y companera de misión. Su llegada reavivo el propósito de Thalorin tras la guerra."
    },
    {
      "name": "Lazhánder",
      "description": "Dios al que sirve. Fuente de fe, amuleto y bendicion de su arma."
    },
    {
      "name": "Compañía pérdida",
      "description": "Peloton aniquilado en el frente. Mantiene su memoria con respeto silencioso."
    },
    {
      "name": "Surmina",
      "description": "Marilith, General N.º 4 de la horda demoníaca, contra quien combatio en una confrontacion memorable."
    }
  ],
  "importantEvents": [
    {
      "title": "Guerra del Olivo",
      "description": "Servicio protegiendo civiles; enfrentamiento con Surmina; aniquilación del peloton."
    },
    {
      "title": "Regreso herido",
      "description": "Vuelve a casa con deber cumplido, pero con pesadillas y melancolía persistente."
    },
    {
      "title": "Reencuentro con Harret",
      "description": "Nueva misión compartida para curar el Gran Árbol y proteger el bosque."
    }
  ],
  "other": [
    {
      "title": "Objetos de importancia",
      "content": "La Emisaria del Alba (maza bendecida por Lazhánder); Amuleto del Amanecer (símbolos del alba y gemas rosas, rojas y amarillas; similar al de Harret); Escudo de la Compañía Perdida; Medallon conmemorativo con los nombres del peloton caido."
    },
    {
      "title": "Curiosidades",
      "content": "Pasion por el amanecer como símbolo de renovación. Recuerda en silencio a su compañía. Optimismo infatigable. Toca laúd y practica jardinería."
    },
    {
      "title": "Alineación (narrativa)",
      "content": "Neutral bueno, según el documento de personaje."
    }
  ],
  "campaign": "Gigantes",
  "status": "Muerto",
  "year": "2024",
  "player":"Terra",
  "sheet": null,

  // ============================================================
  // TEMA VISUAL / COLORES
  // ============================================================
  theme: {
    // Nombre descriptivo del tema.
    name: "Amanecer",
    // Fondo general de la pagina al abrir este personaje.
    background: "linear-gradient(135deg, #2a1810, #5a3020)",
    // Fondo de la hoja/panel principal.
    sheet: "linear-gradient(160deg, #f5ebe0 0%, #ead9c8 100%)",
    // Titulos y elementos importantes.
    primary: "#2a1c14",
    // Texto secundario y detalles.
    secondary: "#5a4030",
    // Bordes, botones, separadores, acentos.
    accent: "#d4a017",
    // Color principal del texto del cuerpo.
    text: "#3a2820"
  }
};

export default Object.freeze(Thalorin);
