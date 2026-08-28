/**
 * ============================================================
 * PLANTILLA DE PERSONAJE
 * ============================================================
 *
 * Este archivo representa al personaje Lucian Mallory.
 * Debe registrarse en js/characters/index.js
 */

const Lucian = {
  // ============================================================
  // IDENTIDAD
  // ============================================================

  "id": "lucian",

  "name": "Lucian",

  "epithet": "Guerrero - Maestro de Batalla",

  "image": "img/lucian.png",

  "tagline": "Un superviviente atormentado por la pérdida de su familia y su mentor.",

  "description": "Lucian es un humano de 28 años, de alineamiento Neutral Bueno. Tras perder a su familia en un misterioso ataque y un incendio, cayó en el alcoholismo hasta ser rescatado por un enano llamado Petardin. Luego de que su mentor muriera sacrificándose por otros, Lucian recayó en la depresión. Actualmente se encuentra en Barovia, donde descubrió que su hermana Lily está viva pero no lo recuerda, dándole un nuevo propósito: recuperar los recuerdos de su hermana y vengarse del vampiro Strath.",

  "appearance": "Es un hombre inquieto con las manos y los pies (especialmente al estar sentado) y evita mirar a los ojos por mucho tiempo a menos que esté frustrado o enojado. Tiene un tatuaje de un búho en el brazo como recordatorio de su hermana y para no volver a 'dormirse' cuando alguien que ama está en peligro.",


  // ============================================================
  // ESTADÍSTICAS (Abre en ventana emergente)
  // ============================================================
  stats: {
    age: "28",
    class: "Guerrero",
    subclass: "Maestro de Batalla",
    multiclass: "", // Déjalo vacío si no tiene
    level: "Inicial 3 - Actual 6"
  },

  // ============================================================
  // INVENTARIO (Pestaña extra)
  // ============================================================
  inventory: [
    { title: "Espada Larga de Acero", content: "Un arma sencilla, bien cuidada, recién reparada en Tortuga." },
    { title: "Anillo familiar", content: "Un recuerdo que le duele en la mano al empuñar el arma." },
    { title: "Armadura de Adamantio", content: "Una gran armadura que consegui en Tortuga." }
  ],

  // ============================================================
  // BITÁCORA / DIARIO (Sección desplegable)
  // ============================================================
  // Cada item es un día o entrada. Si está vacío, no aparece la pestaña.
  journal: [
    { title: "Día 1", content: "Llegamos a Tortuga. Dormí en una taberna cómoda." },
    { title: "Día 2", content: "Trabajé como tripulante. Hubo una niebla densa..." }
  ],


  // ============================================================
  // HISTORIA / TRASFONDO
  // ============================================================
  "background": [
    "Creció en una granja cerca de Waterdeep junto a sus padres y su hermana menor, Lily, quien solía dibujar búhos. Una noche, tras discutir impulsivamente con sus padres, abandonó la casa. Al volver, los encontró asesinados por algo que dejó marcas de garras y colmillos, y escuchó una voz burlona que lo incitó a perseguir a una sombra humanoide hacia el bosque.",
    "Mientras estaba cegado por la ira persiguiendo a la sombra, su casa fue incendiada por completo. La guardia desestimó su testimonio culpando a un animal o un accidente, y al no quedar cuerpos más que cenizas, Lucian asumió que su hermana Lily también había muerto.",
    "Destrozado por la culpa, se hundió en el alcohol durante meses hasta que Petardin, un enano bondadoso, lo rescató enseñándole artes marciales y a controlar su respiración. Sin embargo, Petardin murió sacrificándose por alguien más, lo que empujó a Lucian nuevamente hacia sus pensamientos oscuros y la recaída.",
    "Años después, su viaje lo llevó a Barovia con una caravana. Allí descubrió que su hermana Lily está viva bajo el nombre de Ireena, pero ella no recuerda nada de su pasado. Ahora busca protegerla y encontrar a Madam Esmeralda para restaurar sus recuerdos, al mismo tiempo que guarda un profundo odio por Strath, el vampiro gobernante de Barovia."
  ],

  // ============================================================
  // PERSONALIDAD
  // ============================================================
  "personality": "Habla bajo y con frases cortas, a menudo diciendo que 'está bien' demasiado rápido. No soporta el silencio, pues usa el ruido para distraer su mente. Es un hombre marcado por el trauma que se aísla, pero que en el fondo se preocupa profundamente, especialmente cuando hay niños involucrados.",

  "ideals": [
    "Creo en la protección y en la verdad.",
    "Creo que la negligencia mata tanto como los monstruos."
  ],
  "bonds": [
    "Un anillo familiar que aún mantiene aunque le duele la mano al empuñar su espada.",
    "Un dibujo todo arrugado de un búho que Lily hizo una vez.",
    "Le prometí a Petardin no intentar terminar mi vida pronto y sin algún propósito."
  ],
  "flaws": [
    "Soy desconfiado y terco.",
    "Depresivo y con recaídas con el alcohol en momentos débiles.",
    "Me involucro demasiado cuando hay niños (aún más cuando se parecen a mi hermana Lily)."
  ],
  "motivations": "Encontrar un motivo de vida, hacer pagar a lo que asesinó a su familia (Strath y sus secuaces), y lograr que su hermana Lily recupere sus recuerdos.",

  // ============================================================
  // RELACIONES
  // ============================================================
  "relationships": [
    { "name": "Lily / Ireena", "description": "Su hermana menor a quien creía calcinada. Se reencontró con ella en Villa Barovia, pero un trauma o intervención mágica hace que ella no lo reconozca, lo que le causa ataques de pánico a Lucian." },
    { "name": "Petardin", "description": "Un enano, su maestro y salvador. Lo rescató del abismo enseñándole a canalizar su rabia en las artes marciales. Su muerte heroica dejó a Lucian resentido con la 'bondad' de su mentor por haberlo abandonado." },
    { "name": "Strath", "description": "El amo de Ravenloft. Lucian tiene fuertes sospechas y visiones de que Strath o sus lacayos son los responsables directos de la masacre de sus padres y el secuestro de Lily." },
    { "name": "Puyu", "description": "Un niño del grupo a quien Lucian accedió a entrenar para ayudarlo a sobrevivir, tomando un rol similar al que Petardin tuvo con él." }
  ],

  // ============================================================
  // EVENTOS IMPORTANTES
  // ============================================================
  "importantEvents": [
    { "title": "El Ataque y el Incendio", "description": "La noche trágica cerca de Waterdeep donde sus padres fueron masacrados, él persiguió a la sombra y su casa ardió reduciendo todo a cenizas." },
    { "title": "El rescate de Petardin", "description": "El periodo de años donde Lucian dejó el alcohol gracias al enano que le enseñó disciplina marcial y por el cual Lucian comenzó a cocinar como agradecimiento." },
    { "title": "El reencuentro en Villa Barovia", "description": "El momento impactante en el que Lucian reconoce a su hermana perdida en Ismark e Ireena, descubriendo que ella no tiene recuerdos de él." },
    { "title": "Defensa contra los Hombres Lobo", "description": "Ayudó a defender el portón de la Villa Barovia del ataque de cinco hombres lobo, poniendo a prueba su entrenamiento y guiando a Puyu." }
  ],

  // ============================================================
  // OTRAS NOTAS
  // ============================================================
  other: [
    { "title": "Hábitos", "content": "Se queda mirando el fuego recordando sus pérdidas. Evita o cambia el tema si le preguntan por su familia. Nunca tira comida porque recuerda sus épocas de hambre." },
    { "title": "Pensamiento más oscuro", "content": "A menudo se reprocha la muerte de su familia por no haberlos buscado y piensa en terminar todo su sufrimiento porque teme que cualquier persona a la que se encariñe terminará muerta." }
  ],

  // ============================================================
  // METADATOS (opcionales)
  // ============================================================
  "campaign": "Barovia",
  "status": "Activo",
  "player":"Terra",
  "year": 2026,

  // ============================================================
  // FICHA DE D&D (opcional)
  // ============================================================
  "sheet": { type: "link", url: "https://www.dndbeyond.com/characters/156429813", label: "Ver ficha" },

  // ============================================================
  // TEMA VISUAL / COLORES
  // ============================================================
  theme: {
    name: "Guerrero Atormentado",
    background: "linear-gradient(135deg, #100f0e, #29241f)",
    sheet: "linear-gradient(160deg, #d3c4b3 0%, #c4b5a3 100%)",
    primary: "#261e18",
    secondary: "#4a3c31",
    accent: "#8c2a23", // Tono rojo oscuro para representar la venganza y sangre
    text: "#261e18"
  }
};

export default Object.freeze(Lucian);