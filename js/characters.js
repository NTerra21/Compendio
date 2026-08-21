/**
 * Archivo de datos de personajes.
 * Para agregar, editar o eliminar un personaje, modifica solo este archivo.
 * No hace falta tocar HTML ni CSS.
 *
 * Campos opcionales: si los dejas vacíos o los omites, esa sección no se muestra.
 */
const CHARACTERS = [
  {
    id: "kana",
    name: "Kana",
    epithet: "La que buscaba una llama",
    image: "images/Kana.png",
    tagline: "Una joven que buscaba una llama que nunca pudo recordar...",
    description:
      "Hay personas que nacen con un destino claro, y otras que pasan la vida entera buscándolo. Kana pertenece a estas últimas. Sin recuerdos de sus padres ni un hogar permanente, aprendió a avanzar en soledad hasta descubrir que la pequeña chispa que llevaba dentro solo necesitaba ser comprendida.",
    appearance:
      "Humana de unos 1,62 m, complexión delgada y ligeramente atlética, piel clara y facciones suaves. Su cabello blanco o gris plateado llega hasta la cintura; suele llevarlo en una coleta desordenada. Viste cuero oscuro, botas de viaje y equipo práctico de exploradora. Sus ojos violetas se tiñen de rojo carmesí al canalizar magia: en reposo son violetas; con hechizos fuertes el iris se enrojece; a máxima potencia se vuelven completamente rojos y ardientes. El cabello no brilla ni flota: el cambio de ojos es la señal más clara de su poder.",
    background: [
      "No recuerda a sus padres. Solo sensaciones vagas: el calor de una mano, una voz que quizas dijo su nombre, la sensación de estar protegida. Tenía unos cinco años cuando terminó en un orfanato. Con el tiempo, incluso esos fragmentos se fueron diluyendo. Nunca supo por qué la dejaron allí.",
      "El orfanato no era cruel: había comida, techo y cuidado. Allí hizo amigos y compartió promesas infantiles. Con los años descubrió que las personas no permanecen: una amiga encontraba familia y se marchaba, luego otra, y otra más. Siempre se alegraba por ellas —de verdad—, pero tras cada despedida el lugar parecía más grande y más frío. Aprendió a sonreír al despedirse, a esconder el vacío y a decidir que, si un día volvía a quedarse sola, tendría que seguir caminando de todos modos.",
      "La magia apareció siendo joven: una vela que se encendía al enfadarse, una taza demasiado caliente en las manos, el fuego de la chimenea respondiendo a su cercanía, y una vez en que se quemó y el dolor tardó en llegar. Cuando las coincidencias ya no bastaron, buscó a un mago. Este halló magia en ella... poca, débil, irregular, \"como una pequeña brasa bajo demasiadas cenizas\". Le habló de aprender, y del precio. Sin dinero para maestro ni academia, aprendió sola.",
      "Durante años recogió conocimiento donde pudo: libros prestados, páginas copiadas, conversaciones en bibliotecas y tabernas. Entendía la teoría, pero al intentar reproducir hechizos ajenos no sucedía nada. Empezó a creer que aquella pequeña magia era todo lo que había en ella. Dejó de buscar solo en libros y trabajo en lo que pudo: cargas, caravanas, exploraciones menores y ruinas con objetos olvidados. Las ruinas le gustaban: cada objeto abandonado parecía guardar una historia. Empezó a prestar atención a rumores sobre reliquias capaces de despertar poderes dormidos.",
      "En una ruina ya saqueada encontró una pared que no encajaba. Tras escombros, una habitación intacta: polvo, madera podrida y una vieja lámpara. Al tomarla sintió un calor vivo. Escuchó una voz: \"Quién eres?\". Luego una risa. Así apareció Efreeti.",
      "Durante mucho tiempo pensó que él había despertado su poder. Ahora sabe que no: Efreeti no le dio magia nueva. Le mostró que había pasado años copiando magia ajena, buscando fuera lo que ya llevaba dentro. La primera llama que controló fue pequeña e inestable, apenas un destello en la palma... pero era suya.",
      "Desde entonces aprendieron juntos: el conocía lo que ella no habría descubierto sola; ella podía hacer en este mundo lo que él no. Empezaron como intercambio de conocimientos y ayuda; con el tiempo discutieron, se corrigieron y se acostumbraron el uno al otro. No siempre se llevan bien, pero su presencia se volvió algo que ella espera encontrar cada día.",
      "Ya no camina solo para asegurarse de que puede seguir si vuelve a quedarse sola. Camina para descubrir hasta dónde puede llevar esa llama que durante tantos años pensó que no tenía."
    ],
    personality:
      "Equilibrio entre un optimismo profundamente elegido y una barrera defensiva forjada en el abandono y las despedidas. Puede ser terca cuando cree tener razón. Usa la sonrisa como coraza para no convertirse en una carga.",
    ideals: [
      "Esperanza (principal): \"Siempre hay algo bueno por encontrar, incluso en los peores momentos.\" No nace de ingenuidad, sino de la decisión de conservar la luz tras haber perdido a muchas personas.",
      "Independencia: \"Prefiero aprender a hacerlo sola antes que depender de alguien que podría no estar mañana.\" Forjada en el orfanato.",
      "Descubrimiento: \"Durante mucho tiempo quise saber qué era. Ahora quiero descubrir qué puedo llegar a ser.\" Evolución tras conocer a Efreeti."
    ],
    bonds: [
      "Efreeti, vinculado a la lámpara antigua hallada en ruinas: de socio a compañero cotidiano; discuten, se corrigen y siguen el uno al lado del otro.",
      "Las amistades del orfanato y el recuerdo de las despedidas que marcaron su forma de querer y de quedarse."
    ],
    flaws: [
      "No sabe pedir ayuda (principal): oculta cuando algo realmente la esta afectando y carga sola.",
      "Oculta demasiado: cuando algo le duele, sonrie. No siempre sabe cuando deberia dejar de hacerlo.",
      "Teme perder a los demas: cuando alguien se aleja, parte de ella espera que sea cuestion de tiempo antes de que se vaya para siempre.",
      "Se exige demasiado: si puede hacerlo sola, no ve por qué deberia pedirle a otro que cargue con ello."
    ],
    motivations:
      "Descubrir hasta dónde puede llevar su llama. Ya no busca una única respuesta sobre quien es antes de caminar: primero camina, y después descubre en que termina convirtiendose.",
    relationships: [
      {
        name: "Efreeti",
        description:
          "Compañero vinculado a la lámpara. Al principio, intercambio de conocimientos por ayuda. Puede ser arrogante e insoportable; ella, igual de terca. No siempre se llevan bien, pero su presencia se volvió cotidiana y esperada."
      }
    ],
    importantEvents: [
      {
        title: "El orfanato",
        description:
          "Llego hacía los cinco años. Aprendido a sonreír en las despedidas y a no pedir que nadie se quedara."
      },
      {
        title: "Primeras chispas y rechazo",
        description:
          "Un mago confirmo su magia, pero la juzgo débil e irregular. Sin recursos para estudiar, se formo sola."
      },
      {
        title: "Estudio en soledad y ruinas",
        description:
          "Años de teoría sin resultados al copiar magia ajena. Trabajo explorando y buscando objetos olvidados."
      },
      {
        title: "Encuentro con Efreeti",
        description:
          "Hallazgo de la lámpara en una habitación intacta. El la obligo a escuchar la llama que ya llevaba dentro."
      },
      {
        title: "El camino presente",
        description:
          "Aprende de verdad, viaja, entra en ruinas y sostiene su propia magia sin buscar una única respuesta final."
      }
    ],
    other: [
      {
        title: "Notas de apariencia mágica",
        content:
          "Estado de reposo / magia menor: ojos violetas; hechizos ofensivos fuertes: iris hacia rojo carmesí y calor ambiental; maximo esfuerzo: ojos completamente rojos y ardientes."
      }
    ]
  },

  {
    id: "harret",
    name: "Harret",
    epithet: "Alto Elfo del Olivo",
    image: "images/Harret.png",
    tagline: "Un elfo que salio a buscar la cura de un árbol maldito...",
    description:
      "Alto elfo marcado por la guerra contra los demonios que asolaron el Gran Árbol de la Vida. Parte de una expedición de voluntarios, perdió compañeros a lo largo de décadas y sigue buscando cómo restaurar El Olivo.",
    background: [
      "A los 90 años —aún joven para un elfo— los demonios atacaron el gran árbol de la vida, El Olivo. Elfos de todos los lugares y otras razas acudieron a defenderlo. La batalla duro diez años. El bosque sagrado quedo reducido a unos pocos árboles; la tierra fértil, putrefacta; la fauna, casí extinta; los grandes clanes, diezmados. El Olivo quedo débilitado y marchito.",
      "Con el tiempo, los ancianos descubrieron que los demonios lo habían maldecido. Intentaron remover la tierra podrida, pedir ayuda a las dríadas —también débilitadas— y a sacerdotes del Gran Imperio, mas interesados en su recompensa que en el bosque. Sin mejoras, voluntarios de los clanes supervivientes salieron a buscar una cura.",
      "Harret partió con nueve elfos de élite a los 109 años. Al decimoquinto año de camino perdieron a dos compañeros ante una avanzada demoníaca. Mientras seguía la búsqueda, aprendía magia de ruinas antiguas.",
      "Al trigésimo quinto año perdieron a otros tres en una mazmorra de no-muertos. Obtuvieron pergaminos antiguos que mejoraron mínimamente el Gran Árbol, pero no bastaron.",
      "A los 180 años, los cuatro integrantes que lo acompañaban murieron salvándole la vida contra un archidemonio, uno de los grandes generales de la horda que había atacado noventa años antes. En ese sacrificio obtuvo una pista importante sobre cómo restaurar el árbol.",
      "A los 188 años se cruzo con un dracónico blanco atacado por demonios y otros dracónico. Al ver a su enemigo jurado, acudio en su auxilio. Ante la superioridad enemiga escaparon juntos, se resguardaron en una posada y compartieron sus historias. Al descubrir objetivos similares, decidieron viajar juntos.",
      "Así comienza la historia compartida de Harret, alto elfo, y su compañero Juan Black, el dracónico."
    ],
    personality:
      "Determinado en la misión de restaurar El Olivo. Ha atravesado décadas de pérdidas y sigue adelante con los pocos vínculos que le quedan.",
    ideals: [
      "Restaurar el Gran Árbol de la Vida y sanar el bosque sagrado maldecido por los demonios.",
      "Honrar el sacrificio de los compañeros caídos en la búsqueda de la cura."
    ],
    bonds: [
      "El Olivo y el bosque sagrado: causa central de su travesía.",
      "Los nueve elfos de élite con los que partió; casí todos cayeron en el camino.",
      "Juan Black, dracónico blanco: compañero de viaje tras salvarlo de un ataque demoníaco.",
      "Thalorin Nairel, primo y vínculo cercaño desde la infancia (según el trasfondo de Thalorin)."
    ],
    flaws: [],
    motivations:
      "Encontrar la cura del Olivo, débilitado por la maldición demoníaca, y no dejar que el sacrificio de sus compañeros haya sido en vano.",
    relationships: [
      {
        name: "Juan Black",
        description:
          "Dracónico blanco rescatado de un ataque de demonios y otros dracónico. Comparten objetivos similares y viajan juntos."
      },
      {
        name: "Compañeros de la expedición",
        description:
          "Nueve elfos de élite al partir. Perdidas sucesivas ante demonios, no-muertos y un archidemonio. Los ultimos cuatro murieron salvándole la vida."
      },
      {
        name: "Thalorin Nairel",
        description:
          "Primo de la Casa Nairel. Crecieron juntos en el mismo bosque y más tarde se reencuentran en la misión de salvar el Gran Árbol."
      }
    ],
    importantEvents: [
      {
        title: "La hecatombe del Olivo",
        description:
          "Diez años de guerra. Bosque devastado; el árbol sobrevive débilitado y maldito."
      },
      {
        title: "Partida de los voluntarios",
        description:
          "A los 109 años sale con nueve elfos de élite a buscar una cura."
      },
      {
        title: "Perdidas en el camino",
        description:
          "Año 15: dos caídos. Año 35: tres mas en una mazmorra; pergaminos que ayudan solo un poco. A los 180: los ultimos cuatro mueren contra un archidemonio."
      },
      {
        title: "Encuentro con Juan Black",
        description:
          "A los 188 años salva a un dracónico blanco y comienzan a viajar juntos."
      }
    ],
    other: []
  },

  {
    id: "noctharis",
    name: "Noctharis",
    epithet: "Eco de la Noche",
    image: "images/Noctharis.png",
    tagline: "Un cazador de la oscuridad forjado por la pérdida...",
    description:
      "Paladín de la Venganza de Shar. No siempre se llamó así: fue hijo y hermaño hasta que una noche sin luna arrasó su aldea. Hoy es un cazador frío y metódico al servicio de la Dama Oscura.",
    background: [
      "Noctharis no siempre fue su nombre. Algúna vez fue hijo, hermaño y parte de un hogar tranquilo en una aldea olvidada por reyes y ejércitos. Recuerda poco: la risa de su madre, el olor de la leña en invierno, la espada de su padre junto al marco de la puerta.",
      "Todo cambió una noche sin luna. El cielo se desgarró y criaturas de malicia y caos cayeron sobre la aldea. Nadie escapó. Su familia murió en el fuego y el grito. Su memoria se rompe en fragmentos: el rostro de un demonio entre las llamas, manos que lo arrastraban lejos, y después... oscuridad.",
      "Desperto acogido por un Justiciero Oscuro (Dark Justiciar). Le habló de Shar: de como el dolor podía apagarse al aceptar la pérdida y refugiarse en la oscuridad; de que olvidar no siempre era débilidad. Solo cuando el joven abrazó la fe, el Justiciero intercedió ante Shar para curar sus heridas. Las marcas demoníacas desaparecieron; un tatuaje oscuro cubrió cada cicatriz, símbolo vivo de Shar. El guerrero de las sombras pasó de salvador a maestro implacable.",
      "El culto le quitó su antiguo nombre y le dio otro: Noctharis, \"Eco de la Noche\". Juró que la corrupción demoníaca no volveria a arrasar con lo que amaba. Shar no le pidió pureza, sino eficacia: eliminar a toda criatura nacida del Abismo y a quienes pactaran con ellas.",
      "Hoy no busca reconocimiento ni gloria. Solo la certeza de que, cuando la oscuridad se mueva, sea su sombra la que la guíe... y su espada la que ponga fin a su avance. Su juramento no es justicia universal: es equilibrio, voluntad de Shar y memoria fragmentada de quienes ya no están."
    ],
    personality:
      "Cazador frío y metódico. Observa antes de involucrarse cuando la misión lo permite. Puede mostrar cuidado concreto hacia los indefensos —especialmente huérfanos— sin buscar gloria por ello.",
    ideals: [
      "Eficacia al servicio de Shar: eliminar la amenaza del Abismo y a quienes pacten con ella.",
      "Equilibrio según la voluntad de Shar, no una justicia universal abstracta.",
      "Honrar, a su manera, la memoria de quienes perdió."
    ],
    bonds: [
      "Shar, su diosa: fuente de propósito y de las misiones que recibe.",
      "El Justiciero Oscuro que lo salvo, lo inicio y lo forjó como arma.",
      "Puck: tras descubrir su maldición de longevidad/inmortalidad y el riesgo de liberar a Liza si muere, hizo que Shar borrara del mundo el recuerdo de Puck excepto el suyo propio, y juró resguardarlo.",
      "Los huérfanos de los barrios bajos de Tortuga: les llevaba comida y busco protección para ellos."
    ],
    flaws: [
      "Distancia emocional y frialdad que pueden aislarlo de quienes lo rodean.",
      "Prioriza la voluntad de Shar incluso cuando eso lo pone en conflicto con aliados (llegó casí a asesinar a otro seguidor de Shar por petición de la diosa)."
    ],
    motivations:
      "Cumplir la voluntad de Shar, cazar lo demoníaco y proteger aquello a lo que ha jurado velar —en especial a Puck y, cuando pudo, a los huérfanos.",
    relationships: [
      {
        name: "Shar",
        description:
          "Su señora. Le da misiones sagradas; interviene en memorias y pactos. Su fe es el eje de su identidad."
      },
      {
        name: "Justiciero Oscuro",
        description:
          "Lo rescató tras la masacre, lo inicio en Shar y se convirtió en su maestro."
      },
      {
        name: "Puck",
        description:
          "Aliado del grupo. Porta una maldición de longevidad/inmortalidad: si muere, se libera a Liza. Noctharis juró pasar su vida a su lado para que no muera; Shar borro la memoria del mundo sobre Puck, excepto la de Noctharis."
      },
      {
        name: "Grupo de \"piratas\"",
        description:
          "Druida, hada, mago pirómaño y otro recibido por Shar. Misión inicial: vigilar que encontraran la brújula. Relacion utilitaria y a menudo tensa."
      },
      {
        name: "Druida de la isla (Tortuga)",
        description:
          "Acuerdo para proteger a los huérfanos. Murió defendiendolos durante un ataque; varios niños fueron secuestrados."
      },
      {
        name: "Otro \"chico Shar\"",
        description:
          "Compañero de fe en Tortuga. Juntos usaron paso brumoso para alejarse de un aliado que asesino a un niño. Más tarde, Shar le pidió casí matarlo."
      }
    ],
    importantEvents: [
      {
        title: "La noche sin luna",
        description:
          "Destrucción de su aldea y muerte de su familia a manos de criaturas del caos."
      },
      {
        title: "Inicio en Shar",
        description:
          "Rescate por el Justiciero Oscuro, nuevo nombre, tatuajes sobre cicatrices y juramento de caza."
      },
      {
        title: "Misión en el mundo feérico y Tortuga",
        description:
          "Vigilar a un grupo de \"piratas\", adopción de un oso, llegada a Tortuga y observación política de la isla."
      },
      {
        title: "El asesinato del niño",
        description:
          "Un integrante mató a un ratero niño. Noctharis se alejó. El asesino pactó con Shar: dio sus recuerdos a cambio de que Tortuga olvidara el crimen. Días después se suicido, complicando aún el objetivo del grupo."
      },
      {
        title: "Huérfanos y ataque a la isla",
        description:
          "Ayudó a los huérfanos; organizó defensa y retirada civil. El druida murió protegiendo niños; varios fueron secuestrados. Infiltrados de la Hermandad Escarlata actuaron durante el ataque."
      },
      {
        title: "Scramshak y el nautiloide",
        description:
          "Lucha contra los \"hijos\" de Scramshak; priorizó salvar a los niños en un barco que se alejaba; quedaron varados en otra dimensión y luego regresaron."
      },
      {
        title: "Siete años con Puck",
        description:
          "Resguardo a Puck y al orfanato cuando hacía falta; cumplía misiones de Shar y peticiones de Solmor, y volvía."
      }
    ],
    other: [
      {
        title: "Nota sobre la campaña",
        content:
          "Parte del material documentado es un resumen en primera persona de campaña (mundo feérico, Tortuga, Scramshak, etc.). Se conserva como memoria de hechos vividos, no como ficha mecánica."
      }
    ]
  },

  {
    id: "eiluin",
    name: "Eiluin",
    epithet: "Explorador del linaje antiguo",
    image: "images/Eiluin.png",
    tagline: "Un joven owlin y el eco de un dragon que camina a su lado...",
    description:
      "Owlin de diecisiete años, explorador e hijo de gente sencilla. Lleva en la sangre un eco mas fuerte del linaje de los mellizos de los primeros dragones, y un compañero espiritual que crecio con el.",
    background: [
      "Dicen que al principio no había nada: ni tierra, ni cielo, ni sombra. Solo el Silencio. Los primeros dioses —sin nombre ya— soñaron el mundo y dejaron caer seis huevos sobre la tierra naciente. De cada uno nacio un dragon. Con cada dragon vino su mellizo: un ser de carne, hueso y alma, caminante del mundo. Con los siglos, esos mellizos fundaron linajes. Hoy todos llevan una parte de esa sangre; en Eiluin, algo quedo mas fuerte.",
      "Nacio en la ciudad de A: tranquila, templada, sin grandes hazañas. Su madre es sanadora; su padre trabaja madera y metales; sus hermanos aún crecen. Familia sencilla, con los pies en la tierra. Creció escuchando historias del origen del mundo que no sonaban a cuento, sino a recuerdo.",
      "Entreno con Kaelric, un explorador viejo y sabio. Aprendió a moverse en silencio, a leer el viento, a cazar sin desperdicio. Kaelric vio en el intuicion y ganas de aprender, y le mostró que el mundo no se conquista: se escucha.",
      "El vínculo comenzo en sueños: alas delgadas, brisa nocturna, ojos pequeños y curiosos. Luego, en un bosque una noche sin luna, sintió el cambio del aire, un calor suave tras el pecho, y apareció: una cria espiritual de niebla y luz de luna, no un dragon colosal. Desde entonces su espiritu camina con el. Hoy ya no es cria: al invocarlo tiene sustancia y fuerza, tan grande como un potro joven, escamas cuyo color aún no termina de definirse. No sabe cual de los seis dragones es —si es uno de ellos—; solo sabe que nunca se ha ido.",
      "No busca gloria ni títulos. Quiere entender, aprender sobre si mismo y ser digno de la sangre que lleva. Cuando tense el arco de sus ancestros, que no sea por orgullo, sino porque el mundo lo necesite."
    ],
    personality:
      "Escucha antes de actuar. Cauteloso, intuitivo, con ganas de aprender. Acepta el poder como carga, no como corona. Prefiere comprender a imponer.",
    ideals: [
      "Descubrimiento: el mundo es un mapa incompleto, y el es parte de su trazo.",
      "Crecimiento personal: ser mejor es mas importante que ser fuerte.",
      "Responsabilidad: tiene un lazo que nadie mas tiene, y eso no se ignora."
    ],
    bonds: [
      "El dragon espiritual: vínculo mas profundo; crecio con el desde cria.",
      "El arco ancestral: objeto simbolico del linaje; no se ha usado en generaciones; solo cuando el mundo lo reclame.",
      "Kaelric, su mentor: le enseñó a escuchar al mundo y confiar en sus sentidos.",
      "Su familia: viva, cercana, sencilla; raiz y ancla emocional."
    ],
    flaws: [
      "Temor a no estar a la altura del vínculo que heredó; carga esa presión en silencio.",
      "Dificultad para actuar con decisión en momentos extremos: su cautela lo frena cuando la acción inmediata es clave."
    ],
    motivations:
      "Comprender su lugar en el mundo, crecer con propósito y estar a la altura del vínculo heredado. No busca poder por ambición, sino por responsabilidad. Su viaje es para descubrir quien es, no para demostrarlo.",
    relationships: [
      {
        name: "Dragon espiritual",
        description:
          "Compañero nacido del vínculo despertado. Reflejos del mismo eco: no es dueno ni propiedad. Puede protegerlo; Eiluin haria lo mismo por el."
      },
      {
        name: "Kaelric",
        description:
          "Viejo explorador retirado. Mentor que le enseñó silencio, rastreo y a escuchar el mundo."
      },
      {
        name: "Familia",
        description:
          "Madre sanadora, padre artesaño de madera y metales, hermanos menores. Ancla emocional en la ciudad de A."
      }
    ],
    importantEvents: [
      {
        title: "Entrenamiento con Kaelric",
        description:
          "Formacion como explorador: silencio, viento, rastros y escucha del mundo."
      },
      {
        title: "Sueños del vínculo",
        description:
          "Presencia de una cria espiritual en sueños antes del primer encuentro despierto."
      },
      {
        title: "Noche sin luna en el bosque",
        description:
          "Primera aparicion consciente del dragon espiritual; inicio del caminar juntos."
      },
      {
        title: "Crecimiento del vínculo",
        description:
          "De cria a forma con peso y fuerza; invocacion voluntaria y companía constante."
      }
    ],
    other: [
      {
        title: "Frase guia",
        content:
          "\"No fui elegido para liderar ejércitos ni levantar imperios. Pero si un dragon me escuchó... entonces tengo que aprender a escucharme a mi mismo.\""
      },
      {
        title: "Código personal",
        content:
          "Escuchar antes de actuar. No desenvainar el arco salvo que lo crea necesario. Aceptar el poder como carga. Aprender vale mas que vencer."
      },
      {
        title: "Datos básicos",
        content:
          "Owlin, 17 años. Arco hecho a maño por su padre. Ciudad natal referida como \"A\" en el documento original."
      }
    ]
  },

  {
    id: "thalorin",
    name: "Thalorin Nairel",
    epithet: "Guardián del amanecer",
    image: "images/Thalorin.png",
    tagline: "Un paladín marcado por la guerra que aún busca esperanza...",
    description:
      "Alto elfo de la Casa Nairel, primo de Harret. Guerrero y paladín que protegio civiles en la guerra contra los demonios del Olivo. Sobrevivio a la aniquilación de su peloton y carga cicatrices visibles e invisibles.",
    appearance:
      "Masculino, 240 años, alto elfo, 195 cm, robusto y musculoso. Pelo morocho y lacio; piel de tono rubio clasico con calidez; cicatrices en el cuerpo. Ojos celestes que se vuelven dorados al usar magia.",
    background: [
      "Thalorin Nairel —Nairel evoca \"guardián\"— es miembro distinguido de su casa y primo de Harret. Aunque no son hermanos de sangre, compartieron un vínculo cercaño desde la infancia, creciendo juntos en el mismo bosque.",
      "En el punto álgido de la guerra contra los demonios que amenazaban El Olivo, sirvio en una compañía dedicada a proteger civiles. En el frente, sin recursos suficientes, enfrentaron una horda incontenible. Destaco en una confrontacion feroz contra Surmina, Marilith y General N.º 4 de la horda. La escasez de suministros y refuerzos llevo al aniquilamiento de su peloton.",
      "La tragedía lo marco: la pérdida de camaradas y la impotencia de no poder salvar a todos lo persiguíeron mucho después. Regreso a casa con deber cumplido y esperanza de restaurar el Gran Árbol, pero también con melancolía, pesadillas y una sombra que no se iba.",
      "La llegada de Harret, comprometida con la misma misión, le dio un nuevo propósito. Juntos buscan una cura para El Olivo y protegen su hogar. En esa travesía busca paz, esperanza y restaurar la honorabilidad de la Casa Nairel."
    ],
    personality:
      "Compasivo, protector, respetuoso, leal, valiente y determinado. Optimismo infatigable pese a las tragedias. Devoto del amanecer como símbolo de renovación. En el tiempo libre toca laúd (se defiende) y cuida plantas.",
    ideals: [
      "Renovación y esperanza: incluso en lo mas oscuro existe la posibilidad de un nuevo comienzo.",
      "\"Buscar la paz y la esperanza en medio de la oscuridad\": anhela equilibrio entre caos y serenidad para su pueblo y su bosque.",
      "Restaurar la honorabilidad de la Casa Nairel y traer renovación al bosque."
    ],
    bonds: [
      "Casa Nairel: compromiso con la familia y su honor.",
      "Harret: companera en la búsqueda para salvar el Gran Árbol.",
      "Lazhánder: su dios; guia acciones y decisiones.",
      "Los ciudadanos de su ciudad natal: protección y justicia forjadas en el frente."
    ],
    flaws: [
      "Cicatrices de guerra: fisicas y emocionales que pueden afectar su equilibrio bajo estres.",
      "Desconfianza profunda hacia cualquier entidad relaciónada con demonios.",
      "Compromiso fanatico: su devoción a Lazhánder puede llevarlo a actuar de forma impulsiva o extremista en nombre de su causa."
    ],
    motivations:
      "Sanar el bosque, restaurar el Olivo y el honor de su casa, encontrar paz tras la guerra y proteger a los indefensos.",
    relationships: [
      {
        name: "Harret",
        description:
          "Prima y companera de misión. Su llegada reavivo el propósito de Thalorin tras la guerra."
      },
      {
        name: "Lazhánder",
        description:
          "Dios al que sirve. Fuente de fe, amuleto y bendicion de su arma."
      },
      {
        name: "Compañía pérdida",
        description:
          "Peloton aniquilado en el frente. Mantiene su memoria con respeto silencioso."
      },
      {
        name: "Surmina",
        description:
          "Marilith, General N.º 4 de la horda demoníaca, contra quien combatio en una confrontacion memorable."
      }
    ],
    importantEvents: [
      {
        title: "Guerra del Olivo",
        description:
          "Servicio protegiendo civiles; enfrentamiento con Surmina; aniquilación del peloton."
      },
      {
        title: "Regreso herido",
        description:
          "Vuelve a casa con deber cumplido, pero con pesadillas y melancolía persistente."
      },
      {
        title: "Reencuentro con Harret",
        description:
          "Nueva misión compartida para curar el Gran Árbol y proteger el bosque."
      }
    ],
    other: [
      {
        title: "Objetos de importancia",
        content:
          "La Emisaria del Alba (maza bendecida por Lazhánder); Amuleto del Amanecer (símbolos del alba y gemas rosas, rojas y amarillas; similar al de Harret); Escudo de la Compañía Perdida; Medallon conmemorativo con los nombres del peloton caido."
      },
      {
        title: "Curiosidades",
        content:
          "Pasion por el amanecer como símbolo de renovación. Recuerda en silencio a su compañía. Optimismo infatigable. Toca laúd y practica jardinería."
      },
      {
        title: "Alineación (narrativa)",
        content: "Neutral bueno, según el documento de personaje."
      }
    ]
  },

  {
    id: "reonidas",
    name: "Reonidas",
    epithet: "Samurái errante",
    image: "images/Reonidas.png",
    tagline: "Un leonin que carga el honor de un clan caido...",
    description:
      "Leonin guerrero, samurái errante. Sobrevivio a la caída de su clan y viaja para volverse mas fuerte, redimir el honor familiar y algún día volver con los suyos.",
    background: [
      "Nacio en un pequeño clan de hombres leon. Fue aprendiz bajo la tutela de su padre, protector del territorio. Vivían en relativa paz hasta que un clan vecino expandió fronteras de noche y desató el caos en su defensa.",
      "En la batalla que marco la caída del clan, su padre duelo contra el lider de un grupo enemigo. Luchaba con honor, uno a uno, pero enemigos intervinieron con refuerzos y traicionaron el código. Al ver la derrota deshonrosa de su padre, Reonidas, lleno de ira, se lanzó y dio el golpe de gracia al lider enemigo, ganando tiempo para que su familia y algúnos de los suyos se retiraran.",
      "El sacrificio del padre y su acto impulsivo solo alcanzaron para la huida. Superados, el clan se retiro para mantener vivas a las familias. Con la wakizashi de su padre y una culpa profunda por haber sobrevivido, abandono el hogar para volverse mas fuerte y redimir el honor familiar.",
      "Antes de partir prometió a su madre y hermanos volver cuando estuviera listo. Ellos seguirían entrenando para proteger a la madre, quien le entregó un colgante con el retrato familiar. El les dejó un libro de tecnicas de espada que había memorizado por completo.",
      "Ahora viaja como samurái errante: deber hacia su padre, deseo de redimir la caída del clan, y la meta de regresar algún día para restaurar su lugar en el mundo."
    ],
    personality:
      "Orgulloso de su herencia leonin. La lealtad y el respeto se ganan, no se regalan. Entrena sin descanso. La ira por la injusticia sufrida empuja cada decisión, y teme que, sin medida, pueda corromperlo.",
    ideals: [
      "Resiliencia: \"Solo aquellos que se levantan tras cada caída merecen el respeto y el poder que buscan.\"",
      "Lealtad ganada: el respeto se ofrece solo a quienes lo merecen.",
      "Orgullo del linaje: no se avergüenza de ser hombre leon, aunque sean minoría en su tierra."
    ],
    bonds: [
      "La wakizashi de su padre: símbolo de linaje y legado.",
      "El colgante con el retrato familiar: recuerdo y conexion con madre y hermanos.",
      "La promesa de volver cuando este listo para restaurar el honor perdido."
    ],
    flaws: [
      "Arrogancia: subestima a quienes no comparten su código o no han demostrado ser dignos.",
      "Determinacion absoluta: solo desenvaina cuando esta dispuesto a pelear hasta la muerte; el conflicto exige desenlace absoluto.",
      "Solo armas honoríficas: no empuña armas que no sean las suyas (nodachi, katana, wakizashi)."
    ],
    motivations:
      "Redimir el orgullo herido por haber sobrevivido. Restaurar su honor y el de su familia. Volverse tan fuerte que nadie vuelva a subestimarlo. Hacer pagar a quienes pisotearon la dignidad de su gente —justicia, no sangre por vanidad— aunque tema que la ira lo consuma.",
    relationships: [
      {
        name: "Padre",
        description:
          "Protector del territorio y maestro. Cayo en un duelo traicionado. Su wakizashi es el recuerdo tangible que Reonidas lleva."
      },
      {
        name: "Madre y hermanos",
        description:
          "Les prometió volver. Ellos entrenan para proteger a la madre. Ella le dio el colgante familiar; el les dejó el libro de tecnicas."
      }
    ],
    importantEvents: [
      {
        title: "Invasion nocturna",
        description:
          "Clan vecino ataca y desordena la defensa del territorio."
      },
      {
        title: "Caída del padre y golpe de gracia",
        description:
          "Duelo honorable traicionado; Reonidas mata al lider enemigo y permite la retirada de los suyos."
      },
      {
        title: "Partida del samurái errante",
        description:
          "Promesa a la familia, intercambio de símbolos (colgante y libro) e inicio del camino para recuperar el honor."
      }
    ],
    other: [
      {
        title: "Secretos / cargas internas",
        content:
          "Ira y deseo de venganza justiciera que teme que lo corrompa. Pesadillas de la noche del asalto: la espada del padre, su caída, la impotencia. Hábito nacido de culpa: cada amanecer entrena repitiendose \"Se mas fuerte\"; de noche duerme con la nodachi en la mano."
      },
      {
        title: "Alineación (narrativa)",
        content: "Neutral bueno, con inclinación hacia neutral, según el documento."
      }
    ]
  }
];
