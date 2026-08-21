/**
 * Datos de Noctharis.
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

const Noctharis = {
  "id": "noctharis",
  "name": "Noctharis",
  "epithet": "Eco de la Noche",
  "image": "img/Noctharis.png",
  "tagline": "Un cazador de la oscuridad forjado por la pérdida...",
  "description": "Paladín de la Venganza de Shar. No siempre se llamó así: fue hijo y hermaño hasta que una noche sin luna arrasó su aldea. Hoy es un cazador frío y metódico al servicio de la Dama Oscura.",
  "background": [
    "Noctharis no siempre fue su nombre. Algúna vez fue hijo, hermaño y parte de un hogar tranquilo en una aldea olvidada por reyes y ejércitos. Recuerda poco: la risa de su madre, el olor de la leña en invierno, la espada de su padre junto al marco de la puerta.",
    "Todo cambió una noche sin luna. El cielo se desgarró y criaturas de malicia y caos cayeron sobre la aldea. Nadie escapó. Su familia murió en el fuego y el grito. Su memoria se rompe en fragmentos: el rostro de un demonio entre las llamas, manos que lo arrastraban lejos, y después... oscuridad.",
    "Desperto acogido por un Justiciero Oscuro (Dark Justiciar). Le habló de Shar: de como el dolor podía apagarse al aceptar la pérdida y refugiarse en la oscuridad; de que olvidar no siempre era débilidad. Solo cuando el joven abrazó la fe, el Justiciero intercedió ante Shar para curar sus heridas. Las marcas demoníacas desaparecieron; un tatuaje oscuro cubrió cada cicatriz, símbolo vivo de Shar. El guerrero de las sombras pasó de salvador a maestro implacable.",
    "El culto le quitó su antiguo nombre y le dio otro: Noctharis, \"Eco de la Noche\". Juró que la corrupción demoníaca no volveria a arrasar con lo que amaba. Shar no le pidió pureza, sino eficacia: eliminar a toda criatura nacida del Abismo y a quienes pactaran con ellas.",
    "Hoy no busca reconocimiento ni gloria. Solo la certeza de que, cuando la oscuridad se mueva, sea su sombra la que la guíe... y su espada la que ponga fin a su avance. Su juramento no es justicia universal: es equilibrio, voluntad de Shar y memoria fragmentada de quienes ya no están."
  ],
  "personality": "Cazador frío y metódico. Observa antes de involucrarse cuando la misión lo permite. Puede mostrar cuidado concreto hacia los indefensos —especialmente huérfanos— sin buscar gloria por ello.",
  "ideals": [
    "Eficacia al servicio de Shar: eliminar la amenaza del Abismo y a quienes pacten con ella.",
    "Equilibrio según la voluntad de Shar, no una justicia universal abstracta.",
    "Honrar, a su manera, la memoria de quienes perdió."
  ],
  "bonds": [
    "Shar, su diosa: fuente de propósito y de las misiones que recibe.",
    "El Justiciero Oscuro que lo salvo, lo inicio y lo forjó como arma.",
    "Puck: tras descubrir su maldición de longevidad/inmortalidad y el riesgo de liberar a Liza si muere, hizo que Shar borrara del mundo el recuerdo de Puck excepto el suyo propio, y juró resguardarlo.",
    "Los huérfanos de los barrios bajos de Tortuga: les llevaba comida y busco protección para ellos."
  ],
  "flaws": [
    "Distancia emocional y frialdad que pueden aislarlo de quienes lo rodean.",
    "Prioriza la voluntad de Shar incluso cuando eso lo pone en conflicto con aliados (llegó casí a asesinar a otro seguidor de Shar por petición de la diosa)."
  ],
  "motivations": "Cumplir la voluntad de Shar, cazar lo demoníaco y proteger aquello a lo que ha jurado velar —en especial a Puck y, cuando pudo, a los huérfanos.",
  "relationships": [
    {
      "name": "Shar",
      "description": "Su señora. Le da misiones sagradas; interviene en memorias y pactos. Su fe es el eje de su identidad."
    },
    {
      "name": "Justiciero Oscuro",
      "description": "Lo rescató tras la masacre, lo inicio en Shar y se convirtió en su maestro."
    },
    {
      "name": "Puck",
      "description": "Aliado del grupo. Porta una maldición de longevidad/inmortalidad: si muere, se libera a Liza. Noctharis juró pasar su vida a su lado para que no muera; Shar borro la memoria del mundo sobre Puck, excepto la de Noctharis."
    },
    {
      "name": "Grupo de \"piratas\"",
      "description": "Druida, hada, mago pirómaño y otro recibido por Shar. Misión inicial: vigilar que encontraran la brújula. Relacion utilitaria y a menudo tensa."
    },
    {
      "name": "Druida de la isla (Tortuga)",
      "description": "Acuerdo para proteger a los huérfanos. Murió defendiendolos durante un ataque; varios niños fueron secuestrados."
    },
    {
      "name": "Otro \"chico Shar\"",
      "description": "Compañero de fe en Tortuga. Juntos usaron paso brumoso para alejarse de un aliado que asesino a un niño. Más tarde, Shar le pidió casí matarlo."
    }
  ],
  "importantEvents": [
    {
      "title": "La noche sin luna",
      "description": "Destrucción de su aldea y muerte de su familia a manos de criaturas del caos."
    },
    {
      "title": "Inicio en Shar",
      "description": "Rescate por el Justiciero Oscuro, nuevo nombre, tatuajes sobre cicatrices y juramento de caza."
    },
    {
      "title": "Misión en el mundo feérico y Tortuga",
      "description": "Vigilar a un grupo de \"piratas\", adopción de un oso, llegada a Tortuga y observación política de la isla."
    },
    {
      "title": "El asesinato del niño",
      "description": "Un integrante mató a un ratero niño. Noctharis se alejó. El asesino pactó con Shar: dio sus recuerdos a cambio de que Tortuga olvidara el crimen. Días después se suicido, complicando aún el objetivo del grupo."
    },
    {
      "title": "Huérfanos y ataque a la isla",
      "description": "Ayudó a los huérfanos; organizó defensa y retirada civil. El druida murió protegiendo niños; varios fueron secuestrados. Infiltrados de la Hermandad Escarlata actuaron durante el ataque."
    },
    {
      "title": "Scramshak y el nautiloide",
      "description": "Lucha contra los \"hijos\" de Scramshak; priorizó salvar a los niños en un barco que se alejaba; quedaron varados en otra dimensión y luego regresaron."
    },
    {
      "title": "Siete años con Puck",
      "description": "Resguardo a Puck y al orfanato cuando hacía falta; cumplía misiones de Shar y peticiones de Solmor, y volvía."
    }
  ],
  "other": [
    {
      "title": "Nota sobre la campaña",
      "content": "Parte del material documentado es un resumen en primera persona de campaña (mundo feérico, Tortuga, Scramshak, etc.). Se conserva como memoria de hechos vividos, no como ficha mecánica."
    }
  ],
  "campaign": "Piratas",
  "status": "Vivo",
  "year": "2025-2026",
  "sheet": { type: "link", url: "https://www.dndbeyond.com/characters/150031732", label: "Ver ficha" },

  // ============================================================
  // TEMA VISUAL / COLORES
  // ============================================================
  theme: {
    // Nombre descriptivo del tema.
    name: "Eco de la Noche",
    // Fondo general de la pagina al abrir este personaje.
    background: "linear-gradient(135deg, #0a0a12, #1a1028)",
    // Fondo de la hoja/panel principal.
    sheet: "linear-gradient(160deg, #16121f 0%, #0e0c14 100%)",
    // Titulos y elementos importantes.
    primary: "#ebe6f4",
    // Texto secundario y detalles.
    secondary: "#a090b8",
    // Bordes, botones, separadores, acentos.
    accent: "#7b5ea7",
    // Color principal del texto del cuerpo.
    text: "#d8d4e0"
  }
};

export default Object.freeze(Noctharis);
