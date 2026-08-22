/**
 * Logica de la aplicacion: galeria, ficha y navegacion por hash.
 * No edites personajes aqui.
 * - Datos: js/characters/Nombre.js
 * - Registro: js/characters/index.js
 */

import { loadCharacters } from "./characters/index.js";

const app = document.getElementById("app");
const navCurrent = document.getElementById("nav-current");

/** Lista viva de personajes cargados (solo logica de app). */
let CHARACTERS = [];

/**
 * Tema por defecto (galeria y personajes sin theme completo).
 * No contiene colores de un personaje concreto.
 */
const DEFAULT_THEME = Object.freeze({
  name: "Archivo",
  background:
    "radial-gradient(ellipse at top, rgba(201, 168, 108, 0.12), transparent 55%), linear-gradient(160deg, #241c17 0%, #1a1511 45%, #12100e 100%)",
  sheet: "linear-gradient(180deg, #efe6d6 0%, #eadfcb 100%)",
  primary: "#1c1814",
  secondary: "#3a322a",
  accent: "#b08d4a",
  text: "#3a322a"
});

const THEME_CSS_VARS = {
  background: "--character-background",
  sheet: "--character-sheet",
  primary: "--character-primary",
  secondary: "--character-secondary",
  accent: "--character-accent",
  text: "--character-text"
};

/**
 * Fusiona theme del personaje con valores por defecto.
 * Acepta cualquier string CSS (hex, gradient, etc.).
 */
function resolveTheme(character) {
  const raw =
    character && character.theme && typeof character.theme === "object"
      ? character.theme
      : {};
  const resolved = {};
  Object.keys(DEFAULT_THEME).forEach(function (key) {
    if (key === "name") {
      resolved.name = hasText(raw.name) ? raw.name.trim() : DEFAULT_THEME.name;
      return;
    }
    resolved[key] = hasText(raw[key]) ? String(raw[key]).trim() : DEFAULT_THEME[key];
  });
  return resolved;
}

/** Aplica CSS custom properties al documento (sin hardcodear personajes). */
function applyTheme(theme) {
  const root = document.documentElement;
  Object.keys(THEME_CSS_VARS).forEach(function (key) {
    root.style.setProperty(THEME_CSS_VARS[key], theme[key]);
  });
  if (theme.name) {
    root.setAttribute("data-theme-name", theme.name);
  }
}

function resetTheme() {
  applyTheme(DEFAULT_THEME);
  document.documentElement.removeAttribute("data-theme-name");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMultiline(text) {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

function placeholderMarkup(name) {
  const initial = escapeHtml((name || "?").charAt(0).toUpperCase());
  return (
    '<div class="portrait-placeholder" aria-hidden="true">' +
    '<span class="portrait-placeholder__glyph">' +
    initial +
    "</span>" +
    '<span class="portrait-placeholder__label">Sin retrato</span>' +
    "</div>"
  );
}

function portraitHtml(character, className) {
  return (
    '<div class="portrait-frame">' +
    '<img class="' +
    escapeHtml(className || "") +
    '" src="' +
    escapeHtml(character.image || "") +
    '" alt="Retrato de ' +
    escapeHtml(character.name) +
    '" loading="lazy" data-fallback-name="' +
    escapeHtml(character.name) +
    '" />' +
    "</div>"
  );
}

function bindPortraitFallbacks(root) {
  root.querySelectorAll("img[data-fallback-name]").forEach(function (img) {
    function showPlaceholder() {
      const frame = img.parentElement;
      if (!frame) return;
      const name = img.getAttribute("data-fallback-name") || "?";
      img.remove();
      if (!frame.querySelector(".portrait-placeholder")) {
        frame.insertAdjacentHTML("beforeend", placeholderMarkup(name));
      }
    }

    img.addEventListener("error", showPlaceholder);
    if (img.complete && img.naturalWidth === 0) {
      showPlaceholder();
    }
  });
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasList(value) {
  return Array.isArray(value) && value.length > 0;
}

/**
 * Normaliza sheet / sheets a una lista usable.
 * Acepta: null | objeto | arreglo. Ignora entradas invalidas.
 */
function normalizeSheets(character) {
  if (!character || character.__loadError) return [];

  let raw = [];
  if (Array.isArray(character.sheets)) {
    raw = character.sheets.slice();
  }
  if (character.sheet != null) {
    raw = raw.concat(
      Array.isArray(character.sheet) ? character.sheet : [character.sheet]
    );
  }

  return raw.filter(function (entry) {
    return (
      entry &&
      typeof entry === "object" &&
      hasText(entry.url) &&
      (entry.type === "link" || entry.type === "pdf")
    );
  });
}

function sheetButtonHtml(entry) {
  const label = hasText(entry.label) ? entry.label : "Ver ficha";
  const isExternal = entry.type === "link";
  const relAttrs = isExternal
    ? ' target="_blank" rel="noopener noreferrer"'
    : ' target="_blank" rel="noopener"';

  return (
    '<a class="btn btn--sheet" href="' +
    escapeHtml(entry.url) +
    '"' +
    relAttrs +
    ">" +
    escapeHtml(label) +
    "</a>"
  );
}

function sheetsToolbarHtml(character) {
  const sheets = normalizeSheets(character);
  if (!sheets.length) return "";
  return (
    '<div class="sheet-nav__sheets" aria-label="Fichas del personaje">' +
    sheets.map(sheetButtonHtml).join("") +
    "</div>"
  );
}

function metadataHtml(character) {
  const bits = [];

  function metaText(value) {
    if (value == null || value === "") return "";
    if (typeof value === "number" && !Number.isNaN(value)) return String(value);
    if (typeof value === "string" && value.trim()) return value.trim();
    return "";
  }

  const campaign = metaText(character.campaign);
  const status = metaText(character.status);
  const year = metaText(character.year);
  const player = metaText(character.player);

  if (campaign) {
    bits.push(
      '<span class="meta-chip">Campaña: ' + escapeHtml(campaign) + "</span>"
    );
  }
  if (status) {
    bits.push(
      '<span class="meta-chip">Estado: ' + escapeHtml(status) + "</span>"
    );
  }
  if (year) {
    bits.push('<span class="meta-chip">Año: ' + escapeHtml(year) + "</span>");
  }
  if (player) {
    bits.push('<span class="meta-chip">Jugador: ' + escapeHtml(player) + "</span>");
  }
  if (!bits.length) return "";
  return '<div class="sheet-header__meta">' + bits.join("") + "</div>";
}

function paragraphsHtml(paragraphs) {
  if (!hasList(paragraphs)) return "";
  return paragraphs
    .filter(hasText)
    .map(function (p) {
      return '<p class="prose">' + formatMultiline(p) + "</p>";
    })
    .join("");
}

function listHtml(items) {
  if (!hasList(items)) return "";
  return (
    '<ul class="detail-list">' +
    items
      .filter(hasText)
      .map(function (item) {
        return "<li>" + formatMultiline(item) + "</li>";
      })
      .join("") +
    "</ul>"
  );
}

function namedListHtml(items, nameKey, bodyKey) {
  if (!hasList(items)) return "";
  return (
    '<ul class="detail-list detail-list--named">' +
    items
      .map(function (item) {
        const title = item[nameKey] || item.title || "";
        const body = item[bodyKey] || item.description || item.content || "";
        if (!hasText(title) && !hasText(body)) return "";
        return (
          "<li>" +
          (hasText(title)
            ? '<strong class="detail-list__title">' +
              escapeHtml(title) +
              "</strong>"
            : "") +
          (hasText(body)
            ? '<span class="detail-list__body">' +
              formatMultiline(body) +
              "</span>"
            : "") +
          "</li>"
        );
      })
      .join("") +
    "</ul>"
  );
}

function sectionHtml(title, innerHtml) {
  if (!innerHtml || !String(innerHtml).trim()) return "";
  return (
    '<section class="sheet-section">' +
    '<h2 class="sheet-section__title">' +
    escapeHtml(title) +
    "</h2>" +
    '<div class="sheet-section__body">' +
    innerHtml +
    "</div>" +
    "</section>"
  );
}

function findIndexById(id) {
  return CHARACTERS.findIndex(function (c) {
    return c.id === id;
  });
}

function parseRoute() {
  const raw = (location.hash || "#/").replace(/^#/, "");
  const parts = raw.split("/").filter(Boolean);
  if (parts[0] === "character" && parts[1]) {
    return { view: "character", id: decodeURIComponent(parts[1]) };
  }
  return { view: "gallery" };
}

function setNavLabel(text) {
  if (navCurrent) navCurrent.textContent = text;
}

function cardHtml(character) {
  const errorBadge = character.__loadError
    ? '<p class="char-card__epithet">Error de carga</p>'
    : "";
  const searchBlob = [character.name, character.epithet, character.tagline]
    .filter(hasText)
    .join(" ")
    .toLowerCase();
  const theme = resolveTheme(character);
  const accentStyle = hasText(theme.accent)
    ? ' style="--card-accent: ' + escapeHtml(theme.accent) + ';"'
    : "";

  // 1. Revisamos si el personaje tiene una ficha externa (como el caso de Kana)
  const sheets = normalizeSheets(character);
  const hasLink = sheets.length > 0;

  // 2. Preparamos el HTML de la zona inferior (el recuadro rojo de tu imagen)
  let ctaHtml = "";
  if (hasLink) {
    const linkUrl = escapeHtml(sheets[0].url);
    const linkLabel = escapeHtml(sheets[0].label || "Abrir hoja");
    // Usamos un span con un evento que abre el link y "frena" el clic para que no abra el perfil
    ctaHtml = '<span class="char-card__cta" style="position: relative; z-index: 2; cursor: pointer;" ' +
              'onclick="window.open(\'' + linkUrl + '\', \'_blank\'); event.preventDefault(); event.stopPropagation();">' +
              linkLabel + ' <span aria-hidden="true">↗</span></span>';
  } else {
    // Si no tiene link externo, mantenemos el texto original sin eventos extra
    ctaHtml = '<span class="char-card__cta">Ver Trasfondo <span aria-hidden="true">→</span></span>';
  }

  // 3. Devolvemos la tarjeta entera. El href principal siempre lleva a la vista detallada
  return (
    '<a class="char-card" href="#/character/' +
    encodeURIComponent(character.id) +
    '" data-search="' +
    escapeHtml(searchBlob) +
    '"' +
    accentStyle +
    ' aria-label="Abrir perfil de ' +
    escapeHtml(character.name) +
    '">' +
    '<div class="char-card__portrait">' +
    portraitHtml(character, "char-card__img") +
    "</div>" +
    '<div class="char-card__body">' +
    '<h2 class="char-card__name">' +
    escapeHtml(character.name) +
    "</h2>" +
    errorBadge +
    (hasText(character.epithet) && !character.__loadError
      ? '<p class="char-card__epithet">' +
        escapeHtml(character.epithet) +
        "</p>"
      : "") +
    (hasText(character.tagline)
      ? '<p class="char-card__tagline">' +
        escapeHtml(character.tagline) +
        "</p>"
      : "") +
    // Insertamos el botón interactivo al final de la tarjeta
    ctaHtml +
    "</div>" +
    "</a>"
  );
}

function bindGallerySearch(root) {
  const input = root.querySelector("#gallery-search");
  const grid = root.querySelector(".gallery-grid");
  const empty = root.querySelector(".gallery-empty");
  if (!input || !grid) return;

  function applyFilter() {
    const q = String(input.value || "")
      .trim()
      .toLowerCase();
    let visible = 0;
    grid.querySelectorAll(".char-card").forEach(function (card) {
      const hay = card.getAttribute("data-search") || "";
      const show = !q || hay.indexOf(q) !== -1;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible > 0;
  }

  input.addEventListener("input", applyFilter);
}

function renderGallery() {
  resetTheme();
  setNavLabel("Galería");
  document.title = "Compendio de Aventureros";

  if (!CHARACTERS.length) {
    app.innerHTML =
      '<section class="empty-state">' +
      "<h1>Sin personajes</h1>" +
      "<p>No se cargó ningún registro. Revisa <code>js/characters/index.js</code>.</p>" +
      "</section>";
    return;
  }

  const cards = CHARACTERS.map(cardHtml).join("");

  app.innerHTML =
    '<section class="gallery-hero">' +
    '<p class="gallery-hero__kicker">Archivo personal</p>' +
    '<h1 class="gallery-hero__title">Compendio de Aventureros</h1>' +
    '<p class="gallery-hero__lead">Un registro narrativo de quienes caminaron contigo. Elige un nombre para leer su historia.</p>' +
//    '<label class="gallery-search">' +
//    '<span class="gallery-search__icon" aria-hidden="true">🔍</span>' +
//    '<input id="gallery-search" type="search" placeholder="Buscar personaje..." autocomplete="off" />' +
//    "</label>" +
    "</section>" +
    '<section class="gallery-grid" aria-label="Galería de personajes">' +
    cards +
    "</section>" +
    '<p class="gallery-empty" hidden>No hay personajes que coincidan con la búsqueda.</p>';

  bindPortraitFallbacks(app);
  bindGallerySearch(app);
}

function renderCharacter(id) {
  const index = findIndexById(id);
  const character = index >= 0 ? CHARACTERS[index] : null;

  if (!character) {
    resetTheme();
    setNavLabel("No encontrado");
    document.title = "Personaje no encontrado";
    app.innerHTML =
      '<section class="empty-state">' +
      "<h1>Personaje no encontrado</h1>" +
      "<p>Ese registro no existe en el archivo.</p>" +
      '<a class="btn" href="#/">Volver a la galería</a>' +
      "</section>";
    return;
  }

  applyTheme(resolveTheme(character));

  const prev = CHARACTERS[(index - 1 + CHARACTERS.length) % CHARACTERS.length];
  const next = CHARACTERS[(index + 1) % CHARACTERS.length];

  setNavLabel(character.name);
  document.title = character.name + " — Compendio de Aventureros";

  const header =
    '<header class="sheet-header">' +
    '<div class="sheet-header__portrait">' +
    portraitHtml(character, "sheet-header__img") +
    "</div>" +
    '<div class="sheet-header__text">' +
    '<p class="sheet-header__index">Registro ' +
    (index + 1) +
    " de " +
    CHARACTERS.length +
    "</p>" +
    '<h1 class="sheet-header__name">' +
    escapeHtml(character.name) +
    "</h1>" +
    (hasText(character.epithet)
      ? '<p class="sheet-header__epithet">' +
        escapeHtml(character.epithet) +
        "</p>"
      : "") +
    metadataHtml(character) +
    (hasText(character.description)
      ? '<p class="sheet-header__description">' +
        formatMultiline(character.description) +
        "</p>"
      : "") +
    "</div>" +
    "</header>";

  const body =
    sectionHtml(
      "Apariencia",
      hasText(character.appearance)
        ? '<p class="prose">' + formatMultiline(character.appearance) + "</p>"
        : ""
    ) +
    sectionHtml("Trasfondo", paragraphsHtml(character.background)) +
    sectionHtml(
      "Personalidad",
      hasText(character.personality)
        ? '<p class="prose">' + formatMultiline(character.personality) + "</p>"
        : ""
    ) +
    sectionHtml("Ideales", listHtml(character.ideals)) +
    sectionHtml("Vínculos", listHtml(character.bonds)) +
    sectionHtml("Defectos", listHtml(character.flaws)) +
    sectionHtml(
      "Motivaciones",
      hasText(character.motivations)
        ? '<p class="prose">' + formatMultiline(character.motivations) + "</p>"
        : ""
    ) +
    sectionHtml(
      "Relaciones",
      namedListHtml(character.relationships, "name", "description")
    ) +
    sectionHtml(
      "Eventos importantes",
      namedListHtml(character.importantEvents, "title", "description")
    ) +
    sectionHtml(
      "Otras notas",
      namedListHtml(character.other, "title", "content")
    );

  const topNav =
    '<nav class="sheet-nav sheet-nav--top" aria-label="Navegación de ficha">' +
    '<a class="btn btn--ghost" href="#/">← Galería</a>' +
    sheetsToolbarHtml(character) +
    "</nav>";

  const bottomNav =
    '<nav class="sheet-nav sheet-nav--bottom" aria-label="Personajes anterior y siguiente">' +
    '<a class="btn btn--ghost" href="#/character/' +
    encodeURIComponent(prev.id) +
    '">← ' +
    escapeHtml(prev.name) +
    "</a>" +
    '<a class="btn btn--ghost" href="#/character/' +
    encodeURIComponent(next.id) +
    '">' +
    escapeHtml(next.name) +
    " →</a>" +
    "</nav>";

  app.innerHTML =
    '<article class="character-sheet">' +
    topNav +
    header +
    '<div class="sheet-body">' +
    body +
    "</div>" +
    bottomNav +
    "</article>";

  bindPortraitFallbacks(app);
}

function render() {
  const route = parseRoute();
  if (route.view === "character") {
    renderCharacter(route.id);
  } else {
    renderGallery();
  }
  window.scrollTo(0, 0);
}

function showBootError(message) {
  setNavLabel("Error");
  app.innerHTML =
    '<section class="empty-state">' +
    "<h1>No se pudo iniciar el compendio</h1>" +
    "<p>" +
    escapeHtml(message) +
    "</p>" +
    "<p>Si abriste el archivo con doble clic, prueba servir la carpeta en local (ver README).</p>" +
    "</section>";
}

async function boot() {
  resetTheme();
  try {
    CHARACTERS = await loadCharacters();
  } catch (error) {
    console.error("[Compendio] Fallo al cargar personajes", error);
    showBootError(
      error && error.message
        ? error.message
        : "Error desconocido al cargar los personajes."
    );
    return;
  }

  window.addEventListener("hashchange", render);
  render();
}

boot();
