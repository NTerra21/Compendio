/**
 * Datos de Oktarr.
 * Edita SOLO este archivo para modificar a este personaje.
 */

const Oktarr = {
  // ============================================================
  // IDENTIDAD
  // ============================================================

  id: "oktarr",

  name: "Oktarr",

  epithet: "La cazadora desorientada",

  image: "images/Oktarr.png",

  petImage: "",

  tagline: "Una cazadora implacable que puede seguir cualquier rastro, pero no sabe cómo volver a casa.",

  description: "Nacida en una tribu nómada de semi-orcos, Oktarr vivía una vida simple de caza e intercambio hasta que un peculiar incidente en un carnaval cambió su vida. Aunque no recuerda exactamente qué ocurrió tras ser capturada por colarse, desde aquel día carga con un vacío incomprensible, una fuerza desmedida que rompe lo delicado y una maldición irónica: es incapaz de encontrar el camino de regreso.",

  appearance: "Semi-orca de complexión fuerte y robusta. Lleva ropas de viaje prácticas y herramientas de aspecto tosco, principalmente de metal grueso, debido a su tendencia a romper objetos frágiles. Su mirada es afilada cuando rastrea a una presa, pero a menudo refleja una profunda confusión cuando intenta ubicarse en un camino conocido.",

  // ============================================================
  // ESTADÍSTICAS
  // ============================================================
  stats: {
    age: "Joven",
    class: "Explorador / Bárbaro",
    subclass: "",
    multiclass: "",
    level: "A definir"
  },

  // ============================================================
  // HISTORIA / TRASFONDO
  // ============================================================
  background: [
    "Oktarr nació y creció entre una tribu de semi-orcos nómadas. No eran gente de grandes riquezas ni tenían asentamientos permanentes. Vivían de la caza, del intercambio de pieles, carne y otros recursos que podían conseguir durante sus viajes, aceptando usualmente trabajos como mercenarios a cambio de recompensas útiles.",
    "Durante uno de sus viajes, la tribu llegó a las proximidades de un gran carnaval. Para Oktarr, aquello era extraordinario: música, luces, puestos de comida y espectáculos jamás vistos. El problema fue que para entrar exigían monedas, algo que la tribu no acostumbraba llevar. Tras intentar negociar un intercambio razonable con pieles y recibir un rotundo no, Oktarr decidió buscar otra entrada.",
    "Junto con algunos compañeros, consiguió colarse por un lugar con seguridad menos estricta. Disfrutaron de todo lo que pudieron, pues Oktarr no sentía que estuviera robando; solo quería ver los espectáculos y el problema era de ellos por no aceptar su trato. Sin embargo, alguien con una mirada especial los reconoció. Al intentar escapar, fue capturada.",
    "Sus recuerdos se interrumpen abruptamente en ese momento de la captura. No sabe qué hicieron con ella ni cómo logró salir. Desde que volvió a encontrarse fuera del carnaval, siente una extraña sensación de vacío, como si le faltara una parte de sí misma que no puede identificar.",
    "Con los años, descubrió secuelas de aquel vacío: desarrolló una facilidad absurda para perderse en cualquier camino conocido al intentar regresar a su campamento, a pesar de que su habilidad para rastrear presas por horas sigue intacta. Además, los objetos frágiles y utensilios de madera simplemente se quiebran en sus manos sin que ella aplique fuerza intencional, obligándola a aprender a vivir con estas rarezas."
  ],

  // ============================================================
  // PERSONALIDAD
  // ============================================================
  personality: "Práctica, directa y algo terca. Si considera que un trato es justo y el otro no lo acepta, siente que está en su derecho de tomar su propio camino. Acepta con resignación y adaptabilidad sus peculiaridades, considerándolas cosas extrañas con las que simplemente le toca vivir.",

  ideals: [
    "Pragmatismo: Las reglas estrictas y el dinero no tienen sentido si hay otras formas justas y razonables de hacer un intercambio.",
    "Supervivencia y Disfrute: Siempre hay una manera de conseguir lo que necesitas o de disfrutar de la vida, ya sea negociando, cazando o colándote si es necesario."
  ],
  bonds: [
    "Su tribu nómada, con quienes aprendió a sobrevivir, cazar y defenderse en los caminos.",
    "Esa parte abstracta de sí misma que siente que perdió en el carnaval, un misterio que late en el fondo de su mente."
  ],
  flaws: [
    "Sentido de la orientación nulo: Puede rastrear una presa de forma impecable, pero es incapaz de encontrar el camino de vuelta a casa.",
    "Manos destructivas: Rompe cosas delicadas y utensilios de madera constantemente sin siquiera aplicarle fuerza a propósito.",
    "Pérdida de memoria: Tiene un punto ciego absoluto sobre lo que ocurrió durante su captura, generándole una sensación constante de carencia."
  ],
  motivations: "Aprender a lidiar con su torpeza hacia los objetos frágiles, encontrar su camino de regreso cuando se pierde y, quizás, descubrir qué fue exactamente lo que le arrebataron aquella noche.",

  // ============================================================
  // RELACIONES
  // ============================================================
  relationships: [
    { 
      name: "La Tribu Nómada", 
      description: "Su familia y compañeros de caza. Son su ancla, aunque a menudo tengan que salir a buscarla cuando no sabe cómo regresar al asentamiento." 
    }
  ],

  // ============================================================
  // EVENTOS IMPORTANTES
  // ============================================================
  importantEvents: [
    { 
      title: "La vida nómada", 
      description: "Años de viajar, cazar, comerciar con recursos y realizar eventuales trabajos mercenarios junto a los suyos." 
    },
    { 
      title: "La noche del Carnaval", 
      description: "El rechazo en la entrada, la infiltración ilícita para disfrutar del show y su posterior e inevitable captura." 
    },
    { 
      title: "El despertar sin recuerdos", 
      description: "El momento en que se encontró fuera del carnaval, sin memoria de su cautiverio y con la extraña sensación de haber perdido algo." 
    },
    { 
      title: "Las secuelas extrañas", 
      description: "El descubrimiento paulatino de su incapacidad para orientarse al regresar y su destructividad involuntaria con objetos delicados." 
    }
  ],

  // ============================================================
  // BITÁCORA / DIARIO
  // ============================================================
  journal: [],

  // ============================================================
  // INVENTARIO
  // ============================================================
  inventory: [
    { title: "Cubiertos de metal grueso", content: "Suplen a los frágiles utensilios de madera que siempre terminaba partiendo accidentalmente." }
    ],

  // ============================================================
  // OTRAS NOTAS
  // ============================================================
  other: [
    { 
      title: "Contraste de Exploración", 
      content: "Su maldición para perderse no afecta sus instintos de caza. Es capaz de seguir huellas, ramas rotas y marcas en el suelo por horas, pero es el acto de 'regresar' el que resulta imposible." 
    }
  ],

  // ============================================================
  // METADATOS
  // ============================================================
  campaign: "Carnaval",
  status: "Activa",
  year: "2020 y 2026",
  player: "Terra",
  sheet: { type: "link", url: "https://www.dndbeyond.com/characters/169359191", label: "Ver ficha" },

  // ============================================================
  // TEMA VISUAL / COLORES
  // ============================================================
  theme: {
    name: "Bosque y Carnaval",
    background: "linear-gradient(135deg, #1c2b20, #4a2c11)",
    sheet: "linear-gradient(to bottom, #2b3b2c 0%, #3e3223 45%, #2a1619 100%)",
    primary: "#e8ddce",
    secondary: "#a39b8b",
    accent: "#c44931",
    text: "#e8ddce"
  }
};

export default Object.freeze(Oktarr);