/**
 * Registro de personajes.
 *
 * Para AGREGAR un personaje:
 * 1. Copia js/characters/_TEMPLATE.js y renombralo (ej: Lucian.js)
 * 2. Completa los datos y el tema visual
 * 3. Agrega una entrada en CHARACTER_MODULES (abajo)
 *
 * NO registres _TEMPLATE.js: es solo plantilla.
 *
 * Para ELIMINAR un personaje:
 * 1. Quita su entrada de CHARACTER_MODULES
 * 2. (Opcional) Borra su archivo .js, imagen y PDF
 *
 * Este archivo NO debe contener trasfondos ni textos narrativos.
 */

/** Lista ordenada de módulos. El orden define la galería y anterior/siguiente. */
const CHARACTER_MODULES = [
  { file: "./Kana.js", label: "Kana" },
  { file: "./Harret.js", label: "Harret" },
  { file: "./Noctharis.js", label: "Noctharis" },
  { file: "./Eiluin.js", label: "Eiluin" },
  { file: "./Thalorin.js", label: "Thalorin" },
  { file: "./Reonidas.js", label: "Reonidas" },
  { file: "./Lucian.js", label: "Lucian" }
];

/**
 * Valida lo mínimo para que la app pueda renderizar una tarjeta/ficha.
 * @param {unknown} data
 * @returns {{ ok: true } | { ok: false, error: string }}
 */
function validateCharacter(data) {
  if (!data || typeof data !== "object") {
    return { ok: false, error: "El modulo no exporto un objeto de personaje." };
  }
  if (typeof data.id !== "string" || !data.id.trim()) {
    return { ok: false, error: "Falta un id valido (string)." };
  }
  if (typeof data.name !== "string" || !data.name.trim()) {
    return { ok: false, error: "Falta un name valido (string)." };
  }
  return { ok: true };
}

/**
 * Personaje de respaldo si un archivo falla: la galeria sigue viva.
 * @param {string} label
 * @param {string} reason
 */
function brokenCharacter(label, reason) {
  const safeId =
    "error-" +
    String(label || "desconocido")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return Object.freeze({
    id: safeId,
    name: label || "Personaje incompleto",
    epithet: "Registro con error",
    image: "",
    tagline: "Este personaje no pudo cargarse. Revisa su archivo.",
    description:
      "Hubo un problema al cargar este registro. El resto del compendio sigue disponible.",
    background: [
      "No se pudo leer la ficha completa de este personaje.",
      "Detalle tecnico: " + String(reason || "error desconocido")
    ],
    personality: "",
    ideals: [],
    bonds: [],
    flaws: [],
    motivations: "",
    relationships: [],
    importantEvents: [],
    other: [
      {
        title: "Como corregirlo",
        content:
          "Abre js/characters/" +
          label +
          ".js, revisa la sintaxis y asegurate de exportar el objeto por defecto (export default)."
      }
    ],
    campaign: null,
    status: null,
    year: null,
    sheet: null,
    __loadError: true
  });
}

/**
 * Carga cada personaje en aislamiento.
 * Si uno falla, los demas siguen apareciendo.
 * @returns {Promise<object[]>}
 */
export async function loadCharacters() {
  const characters = [];

  for (const entry of CHARACTER_MODULES) {
    try {
      const module = await import(/* @vite-ignore */ entry.file);
      const data = module && module.default;
      const validation = validateCharacter(data);

      if (!validation.ok) {
        console.error(
          "[Compendio] Datos invalidos en",
          entry.file,
          "-",
          validation.error
        );
        characters.push(brokenCharacter(entry.label, validation.error));
        continue;
      }

      // Copia superficial + freeze: evita que un archivo mute el objeto compartido.
      characters.push(Object.freeze({ ...data }));
    } catch (error) {
      console.error("[Compendio] No se pudo cargar", entry.file, error);
      characters.push(
        brokenCharacter(
          entry.label,
          error && error.message ? error.message : String(error)
        )
      );
    }
  }

  return characters;
}
