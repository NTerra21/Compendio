/**
 * Datos de Reonidas.
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

const Reonidas = {
  "id": "reonidas",
  "name": "Reonidas",
  "epithet": "Samurái errante",
  "image": "images/Reonidas.png",
  "tagline": "Un leonin que carga el honor de un clan caido...",
  "description": "Leonin guerrero, samurái errante. Sobrevivio a la caída de su clan y viaja para volverse mas fuerte, redimir el honor familiar y algún día volver con los suyos.",
  "background": [
    "Nacio en un pequeño clan de hombres leon. Fue aprendiz bajo la tutela de su padre, protector del territorio. Vivían en relativa paz hasta que un clan vecino expandió fronteras de noche y desató el caos en su defensa.",
    "En la batalla que marco la caída del clan, su padre duelo contra el lider de un grupo enemigo. Luchaba con honor, uno a uno, pero enemigos intervinieron con refuerzos y traicionaron el código. Al ver la derrota deshonrosa de su padre, Reonidas, lleno de ira, se lanzó y dio el golpe de gracia al lider enemigo, ganando tiempo para que su familia y algúnos de los suyos se retiraran.",
    "El sacrificio del padre y su acto impulsivo solo alcanzaron para la huida. Superados, el clan se retiro para mantener vivas a las familias. Con la wakizashi de su padre y una culpa profunda por haber sobrevivido, abandono el hogar para volverse mas fuerte y redimir el honor familiar.",
    "Antes de partir prometió a su madre y hermanos volver cuando estuviera listo. Ellos seguirían entrenando para proteger a la madre, quien le entregó un colgante con el retrato familiar. El les dejó un libro de tecnicas de espada que había memorizado por completo.",
    "Ahora viaja como samurái errante: deber hacia su padre, deseo de redimir la caída del clan, y la meta de regresar algún día para restaurar su lugar en el mundo."
  ],
  "personality": "Orgulloso de su herencia leonin. La lealtad y el respeto se ganan, no se regalan. Entrena sin descanso. La ira por la injusticia sufrida empuja cada decisión, y teme que, sin medida, pueda corromperlo.",
  "ideals": [
    "Resiliencia: \"Solo aquellos que se levantan tras cada caída merecen el respeto y el poder que buscan.\"",
    "Lealtad ganada: el respeto se ofrece solo a quienes lo merecen.",
    "Orgullo del linaje: no se avergüenza de ser hombre leon, aunque sean minoría en su tierra."
  ],
  "bonds": [
    "La wakizashi de su padre: símbolo de linaje y legado.",
    "El colgante con el retrato familiar: recuerdo y conexion con madre y hermanos.",
    "La promesa de volver cuando este listo para restaurar el honor perdido."
  ],
  "flaws": [
    "Arrogancia: subestima a quienes no comparten su código o no han demostrado ser dignos.",
    "Determinacion absoluta: solo desenvaina cuando esta dispuesto a pelear hasta la muerte; el conflicto exige desenlace absoluto.",
    "Solo armas honoríficas: no empuña armas que no sean las suyas (nodachi, katana, wakizashi)."
  ],
  "motivations": "Redimir el orgullo herido por haber sobrevivido. Restaurar su honor y el de su familia. Volverse tan fuerte que nadie vuelva a subestimarlo. Hacer pagar a quienes pisotearon la dignidad de su gente —justicia, no sangre por vanidad— aunque tema que la ira lo consuma.",
  "relationships": [
    {
      "name": "Padre",
      "description": "Protector del territorio y maestro. Cayo en un duelo traicionado. Su wakizashi es el recuerdo tangible que Reonidas lleva."
    },
    {
      "name": "Madre y hermanos",
      "description": "Les prometió volver. Ellos entrenan para proteger a la madre. Ella le dio el colgante familiar; el les dejó el libro de tecnicas."
    }
  ],
  "importantEvents": [
    {
      "title": "Invasion nocturna",
      "description": "Clan vecino ataca y desordena la defensa del territorio."
    },
    {
      "title": "Caída del padre y golpe de gracia",
      "description": "Duelo honorable traicionado; Reonidas mata al lider enemigo y permite la retirada de los suyos."
    },
    {
      "title": "Partida del samurái errante",
      "description": "Promesa a la familia, intercambio de símbolos (colgante y libro) e inicio del camino para recuperar el honor."
    }
  ],
  "other": [
    {
      "title": "Secretos / cargas internas",
      "content": "Ira y deseo de venganza justiciera que teme que lo corrompa. Pesadillas de la noche del asalto: la espada del padre, su caída, la impotencia. Hábito nacido de culpa: cada amanecer entrena repitiendose \"Se mas fuerte\"; de noche duerme con la nodachi en la mano."
    },
    {
      "title": "Alineación (narrativa)",
      "content": "Neutral bueno, con inclinación hacia neutral, según el documento."
    }
  ],
  "campaign": "El Relojero",
  "status": "Activo",
  "year": "2025-206",
  "player":"Terra",
  "sheet": { type: "link", url: "https://www.dndbeyond.com/characters/128724086", label: "Ver ficha" },

  // ============================================================
  // TEMA VISUAL / COLORES
  // ============================================================
  theme: {
    // Nombre descriptivo del tema.
    name: "Hierro y Honor",
    // Fondo general de la pagina al abrir este personaje.
    background: "linear-gradient(135deg, #171717, #3a2a18)",
    // Fondo de la hoja/panel principal.
    sheet: "linear-gradient(160deg, #2a2824 0%, #1e1c18 100%)",
    // Titulos y elementos importantes.
    primary: "#ebe6dc",
    // Texto secundario y detalles.
    secondary: "#a09080",
    // Bordes, botones, separadores, acentos.
    accent: "#c4a574",
    // Color principal del texto del cuerpo.
    text: "#ddd8d0"
  }
};

export default Object.freeze(Reonidas);
