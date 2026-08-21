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

function renderGallery() {
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

  const cards = CHARACTERS.map(function (character) {
    const errorBadge = character.__loadError
      ? '<p class="char-card__epithet">Error de carga</p>'
      : "";

    return (
      '<a class="char-card" href="#/character/' +
      encodeURIComponent(character.id) +
      '" aria-label="Abrir ficha de ' +
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
      '<span class="char-card__cta">Abrir ficha <span aria-hidden="true">→</span></span>' +
      "</div>" +
      "</a>"
    );
  }).join("");

  app.innerHTML =
    '<section class="gallery-hero">' +
    '<p class="gallery-hero__kicker">Archivo personal</p>' +
    '<h1 class="gallery-hero__title">Compendio de Aventureros</h1>' +
    '<p class="gallery-hero__lead">Un registro narrativo de quienes caminaron contigo. Elige un nombre para leer su historia.</p>' +
    "</section>" +
    '<section class="gallery-grid" aria-label="Galería de personajes">' +
    cards +
    "</section>";

  bindPortraitFallbacks(app);
}

function renderCharacter(id) {
  const index = findIndexById(id);
  const character = index >= 0 ? CHARACTERS[index] : null;

  if (!character) {
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

  const nav =
    '<nav class="sheet-nav" aria-label="Navegación entre personajes">' +
    '<a class="btn btn--ghost" href="#/">← Galería</a>' +
    '<div class="sheet-nav__pager">' +
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
    "</div>" +
    "</nav>";

  app.innerHTML =
    '<article class="character-sheet">' +
    nav +
    header +
    '<div class="sheet-body">' +
    body +
    "</div>" +
    nav +
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
