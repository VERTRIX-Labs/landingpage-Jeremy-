/* =========================================================
   NEXUS — lógica del catálogo
   ========================================================= */

const CHARACTERS = [
  {
    id: "shadow",
    name: "Shadow",
    realName: "Cid Kagenou",
    series: "The Eminence in Shadow",
    rarity: "s+",
    level: 99,
    role: "DPS",
    price: 12400,
    img: "assets/characters/shadow.webp",
    alt: "Ilustración de Shadow, espadachín de negro con ojos violetas",
    short: "El líder de Shadow Garden. Un espadachín que finge ser un don nadie mientras mueve los hilos del mundo desde las sombras.",
    desc: "Cid Kagenou parecía un estudiante mediocre más. En realidad entrenó en secreto hasta convertirse en el espadachín definitivo y fundó Shadow Garden, una organización que combate la Orden Diabolos desde la oscuridad. Su magia distorsiona la materia, su presencia es prácticamente indetectable y su técnica de esgrima roza lo imposible. Una ficha S+ para quienes buscan un DPS que también sepa desaparecer.",
    quote: "«Soy la sombra que acecha entre las sombras.»",
    stats: { Poder: 98, Velocidad: 96, Técnica: 100, Magia: 99, Resistencia: 92 },
    powers: [
      { n: "I Am Atomic", d: "Condensa su energía en la hoja y libera una detonación de escala continental." },
      { n: "Control de sombras", d: "Manipula la oscuridad como extensión de su cuerpo: cadenas, filos y refugios." },
      { n: "Presencia nula", d: "Borra su rastro mágico y físico. Ni los sensores más avanzados lo detectan." },
      { n: "Regeneración acelerada", d: "Sana heridas graves en segundos canalizando magia." },
      { n: "Esgrima absoluta", d: "Precisión quirúrgica a velocidades que el ojo humano no puede seguir." }
    ]
  },
  {
    id: "gojo",
    name: "Satoru Gojo",
    realName: "Satoru Gojo",
    series: "Jujutsu Kaisen",
    rarity: "s+",
    level: 100,
    role: "Control",
    price: 15900,
    img: "assets/characters/gojo.webp",
    alt: "Ilustración de Satoru Gojo con venda negra y energía azul",
    short: "El hechicero más fuerte de su generación. Infinito, Seis Ojos y un dominio que sobrecarga la mente de cualquiera que se atreva a mirarlo.",
    desc: "Nacido con los Seis Ojos y la técnica del Infinito, Gojo puede mantener una distancia conceptual entre él y cualquier ataque. Su dominio, Vacío Infinito, inunda el cerebro de todo lo que quede dentro con información imposible de procesar. Un controlador S+ que también pega como un camión y que convierte cualquier duelo en una demostración de superioridad.",
    quote: "«No te preocupes. Soy el más fuerte.»",
    stats: { Poder: 100, Velocidad: 97, Técnica: 99, Magia: 100, Resistencia: 95 },
    powers: [
      { n: "Infinito", d: "Nada puede tocarlo: cada ataque recorre una distancia infinita antes de llegar." },
      { n: "Seis Ojos", d: "Percepción perfecta de la energía maldita con un consumo mínimo." },
      { n: "Vacío Púrpura", d: "Fusión de azul y rojo que borra la materia en línea recta." },
      { n: "Dominio: Vacío Infinito", d: "Inunda el cerebro del objetivo con información infinita y lo paraliza." },
      { n: "Técnica Inversa", d: "Convierte energía negativa en positiva para curarse al instante." }
    ]
  },
  {
    id: "jinwoo",
    name: "Sung Jin-Woo",
    realName: "Sung Jin-Woo",
    series: "Solo Leveling",
    rarity: "s+",
    level: 100,
    role: "Invocador",
    price: 16500,
    img: "assets/characters/jinwoo.webp",
    alt: "Ilustración de Sung Jin-Woo con corona de sombras y llamas violetas",
    short: "El cazador más débil se convirtió en el Monarca de las Sombras. Extrae ejércitos de sus enemigos caídos y pelea en primera línea.",
    desc: "Tras despertar el Sistema, Sung Jin-Woo pasó de ser el cazador de rango E más débil a un monarca capaz de comandar un ejército de sombras. Su crecimiento no tiene techo conocido: absorbe habilidades, se teletransporta entre sus soldados y combina magia con fuerza física brutal. Si buscas un invocador que también pueda sostener el frente, esta es tu ficha.",
    quote: "«Levántate.»",
    stats: { Poder: 100, Velocidad: 94, Técnica: 96, Magia: 97, Resistencia: 98 },
    powers: [
      { n: "Monarca de las Sombras", d: "Extrae y comanda las sombras de los enemigos caídos." },
      { n: "Ejército de sombras", d: "Invoca cientos de soldados con lealtad absoluta." },
      { n: "Intercambio de sombras", d: "Se teletransporta entre sus sombras a cualquier distancia." },
      { n: "Fuerza sobrehumana", d: "Golpea con el poder de un monarca, sin necesidad de armas." },
      { n: "Aliento del Monarca", d: "Aura de terror que debilita a todo enemigo cercano." }
    ]
  },
  {
    id: "makima",
    name: "Makima",
    realName: "Makima",
    series: "Chainsaw Man",
    rarity: "s+",
    level: 97,
    role: "Control",
    price: 14300,
    img: "assets/characters/makima.webp",
    alt: "Ilustración de Makima con cabello rojizo, ojos dorados y cadenas",
    short: "La mujer que sonríe mientras sostiene la correa. Domina a quien considera inferior y acumula contratos demoníacos imposibles de rastrear.",
    desc: "Makima no necesita ganar una pelea para ganarla. Controla a cualquiera que se sienta inferior, comparte sentidos con sus subordinados y acumula pactos que le permiten volver de la muerte una y otra vez. Cada derrota es solo una molestia que otro cuerpo pagará. Una ficha de control S+ con la que ningún equipo quiere cruzarse.",
    quote: "«Sé un buen chico y ven conmigo.»",
    stats: { Poder: 92, Velocidad: 84, Técnica: 98, Magia: 96, Resistencia: 90 },
    powers: [
      { n: "Dominio", d: "Quien se sienta inferior a ella queda bajo su control absoluto." },
      { n: "Pactos demoníacos", d: "Contratos que le otorgan sentidos, ataques y resurrecciones." },
      { n: "Cadenas de control", d: "Manifiesta cadenas capaces de someter objetivos de alto nivel." },
      { n: "Sentidos compartidos", d: "Ve y oye a través de cualquier ser bajo su dominio." },
      { n: "Retorno condicionado", d: "La muerte no la detiene mientras existan contratos activos." }
    ]
  },
  {
    id: "rimuru",
    name: "Rimuru Tempest",
    realName: "Rimuru Tempest",
    series: "Tensei Shitara Slime Datta Ken",
    rarity: "s",
    level: 95,
    role: "Soporte",
    price: 11700,
    img: "assets/characters/rimuru.webp",
    alt: "Ilustración de Rimuru Tempest con cabello azul claro y aura mágica",
    short: "Un slime que terminó siendo el ser más versátil del mundo. Depredador, Gran Sabio y un cuerpo amorfo casi imposible de matar.",
    desc: "Rimuru empezó siendo el monstruo más débil del bosque y terminó como uno de los seres más peligrosos del continente. Depredador le permite absorber y replicar habilidades, Gran Sabio analiza cualquier situación y su cuerpo amorfo lo hace casi inmortal. No es el que más brilla en la portada: es el que gana la guerra desde la retaguardia.",
    quote: "«Vamos a llevarnos bien.»",
    stats: { Poder: 90, Velocidad: 88, Técnica: 95, Magia: 100, Resistencia: 97 },
    powers: [
      { n: "Gran Sabio", d: "Procesa información y calcula la mejor respuesta en milisegundos." },
      { n: "Depredador", d: "Absorbe enemigos, objetos y habilidades para replicarlas." },
      { n: "Transformación universal", d: "Adopta cualquier forma y adapta su cuerpo al entorno." },
      { n: "Regeneración total", d: "Reconstruye su núcleo mientras quede una gota de magia." },
      { n: "Magia de agua", d: "Controla el agua a escala de paisaje con precisión quirúrgica." }
    ]
  },
  {
    id: "erza",
    name: "Erza Scarlet",
    realName: "Erza Scarlet",
    series: "Fairy Tail",
    rarity: "s",
    level: 90,
    role: "Tanque",
    price: 9400,
    img: "assets/characters/erza.webp",
    alt: "Ilustración de Erza Scarlet con armadura plateada, espada y cabello rojo",
    short: "La Reina de las Hadas. Su magia de Requip le permite cambiar armaduras y armas al instante. Aguanta lo que le echen y devuelve el doble.",
    desc: "Erza es la carta más fiable de Fairy Tail: una delantera que combina defensa absoluta con un arsenal interminable. Su Requip intercambia armaduras y armas a velocidad de vértigo, desde una lanza capaz de atravesar montañas hasta una armadura que anula la magia enemiga. Su voluntad de hierro es, quizá, su habilidad más peligrosa.",
    quote: "«No lloro por dolor. Lloro por la fuerza de mis amigos.»",
    stats: { Poder: 94, Velocidad: 86, Técnica: 97, Magia: 88, Resistencia: 93 },
    powers: [
      { n: "Requip", d: "Intercambia armaduras y armas al instante, sin tiempo de recarga." },
      { n: "Espada del Empíreo", d: "Corte de energía a distancia con poder de demolición." },
      { n: "Armadura de la Reina", d: "Defensa absoluta con resistencia a magia y fuego." },
      { n: "Arsenal infinito", d: "Cientos de armas y armaduras almacenadas y listas." },
      { n: "Voluntad de hierro", d: "Sigue luchando más allá del límite físico." }
    ]
  },
  {
    id: "levi",
    name: "Levi Ackerman",
    realName: "Levi Ackerman",
    series: "Shingeki no Kyojin",
    rarity: "a",
    level: 85,
    role: "DPS",
    price: 8200,
    img: "assets/characters/levi.webp",
    alt: "Ilustración de Levi Ackerman con capa verde y cuchillas",
    short: "El soldado más letal de la humanidad. Reflejos sobrehumanos y maniobras tridimensionales que convierten cada pared en una ventaja.",
    desc: "Capitán de la Legión de Reconocimiento y el soldado más eficiente de su mundo. El despertar Ackerman le otorgó fuerza y reflejos sobrehumanos, y su equipo de maniobras tridimensionales lo convierte en una sombra que corta titanes en el aire. No es el más fuerte en términos brutos: es el que termina el trabajo con menos movimientos.",
    quote: "«No hay tiempo para arrepentimientos.»",
    stats: { Poder: 88, Velocidad: 95, Técnica: 99, Magia: 40, Resistencia: 86 },
    powers: [
      { n: "Despertar Ackerman", d: "Fuerza, reflejos e instinto de combate muy por encima del límite humano." },
      { n: "Maniobras 3D", d: "Movilidad vertical total; ataca desde ángulos imposibles." },
      { n: "Corte giratorio", d: "Técnica de rotación que multiplica la fuerza del filo." },
      { n: "Ojo táctico", d: "Lee el terreno y las debilidades del enemigo en segundos." },
      { n: "Disciplina de escuadrón", d: "Lidera y coordina unidades bajo presión extrema." }
    ]
  }
];

const RARITY = {
  "s+": { label: "S+", badge: "rarity-splus", chip: "chip-gold", accent: "#f2c879" },
  "s":  { label: "S",  badge: "rarity-s",     chip: "chip-violet", accent: "#a78bfa" },
  "a":  { label: "A",  badge: "rarity-a",     chip: "chip-cyan", accent: "#38e8ff" }
};

const state = { filter: "all", sort: "featured" };
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const grid = $("#characterGrid");
const emptyState = $("#emptyState");
const modal = $("#modal");
const modalDialog = $(".modal-dialog");
const modalClose = $("#modalClose");
const toast = $("#toast");
const toastText = $("#toastText");
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

let lastFocused = null;
let toastTimer = null;

/* ---------- Helpers ---------- */
function topStats(stats, count = 3) {
  return Object.entries(stats).sort((a, b) => b[1] - a[1]).slice(0, count);
}

function formatPrice(value) {
  return money.format(value);
}

function showToast(message) {
  toastText.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

/* ---------- Render de tarjetas ---------- */
function cardTemplate(char, index) {
  const rarity = RARITY[char.rarity];
  const stats = topStats(char.stats)
    .map(([label, value]) => `
      <div class="mini-stat">
        <span>${label}</span>
        <div class="mini-bar"><i style="width:${value}%"></i></div>
        <b>${value}</b>
      </div>`)
    .join("");

  return `
    <article class="char-card" style="--accent:${rarity.accent};--i:${index}" data-open="${char.id}">
      <div class="char-media">
        <img src="${char.img}" alt="${char.alt}" loading="lazy" width="800" height="1000">
        <span class="rarity-badge ${rarity.badge}">✦ ${rarity.label}</span>
        <span class="level-badge">LV. <strong>${char.level}</strong></span>
        <div class="char-media-bottom">
          <span class="char-series">${char.series}</span>
          <span class="char-role-tag">${char.role}</span>
        </div>
      </div>
      <div class="char-body">
        <div class="char-name-row">
          <h3 class="char-name">${char.name}</h3>
          <span class="char-role">${rarity.label}</span>
        </div>
        <p class="char-desc">${char.short}</p>
        <div class="mini-stats">${stats}</div>
        <div class="char-foot">
          <div class="char-price">
            <span>Desde</span>
            <strong>${formatPrice(char.price)}</strong>
          </div>
          <button class="btn btn-ghost btn-sm view-btn" type="button" data-open="${char.id}" aria-label="Ver ficha completa de ${char.name}">
            Ver ficha
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </article>`;
}

function renderGrid() {
  let list = CHARACTERS.filter(c => state.filter === "all" || c.rarity === state.filter);

  if (state.sort === "level") {
    list = [...list].sort((a, b) => b.level - a.level);
  } else if (state.sort === "price-asc") {
    list = [...list].sort((a, b) => a.price - b.price);
  } else if (state.sort === "price-desc") {
    list = [...list].sort((a, b) => b.price - a.price);
  }

  grid.innerHTML = list.map(cardTemplate).join("");
  grid.hidden = list.length === 0;
  emptyState.hidden = list.length !== 0;
}

/* ---------- Modal ---------- */
function openModal(id) {
  const char = CHARACTERS.find(c => c.id === id);
  if (!char) return;

  const rarity = RARITY[char.rarity];
  lastFocused = document.activeElement;

  $("#modalImg").src = char.img;
  $("#modalImg").alt = char.alt;
  $("#modalName").textContent = char.name;
  $("#modalSeries").textContent = char.series;
  $("#modalDesc").textContent = char.desc;
  $("#modalQuote").textContent = char.quote;
  $("#modalPrice").textContent = formatPrice(char.price);

  $("#modalTags").innerHTML = `
    <span class="chip ${rarity.chip}">✦ Rango ${rarity.label}</span>
    <span class="chip">Nivel ${char.level}</span>
    <span class="chip">${char.role}</span>
    <span class="chip">${char.realName !== char.name ? char.realName : "Identidad clasificada"}</span>`;

  $("#modalStats").innerHTML = Object.entries(char.stats)
    .map(([label, value]) => `
      <div class="mstat">
        <div class="mstat-top"><span>${label}</span><b>${value}</b></div>
        <div class="mstat-bar"><i style="width:${value}%"></i></div>
      </div>`)
    .join("");

  $("#modalPowers").innerHTML = char.powers
    .map(p => `
      <li>
        <span class="power-ico" aria-hidden="true">✦</span>
        <div><strong>${p.n}</strong><p>${p.d}</p></div>
      </li>`)
    .join("");

  const cta = $("#modalCta");
  cta.dataset.id = char.id;
  cta.dataset.name = char.name;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  $(".modal-content").scrollTop = 0;

  setTimeout(() => modalClose.focus(), 60);
}

function closeModal() {
  if (!modal.classList.contains("is-open")) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
}

/* ---------- Eventos del catálogo ---------- */
grid.addEventListener("click", event => {
  const trigger = event.target.closest("[data-open]");
  if (trigger) openModal(trigger.dataset.open);
});

$$(".filter").forEach(button => {
  button.addEventListener("click", () => {
    $$(".filter").forEach(b => b.classList.remove("is-active"));
    button.classList.add("is-active");
    state.filter = button.dataset.filter;
    renderGrid();
  });
});

$("#sort").addEventListener("change", event => {
  state.sort = event.target.value;
  renderGrid();
});

$("#resetFilters").addEventListener("click", () => {
  state.filter = "all";
  $$(".filter").forEach(b => b.classList.toggle("is-active", b.dataset.filter === "all"));
  renderGrid();
});

modalClose.addEventListener("click", closeModal);
$(".modal-backdrop").addEventListener("click", closeModal);

$("#modalCta").addEventListener("click", event => {
  const name = event.currentTarget.dataset.name || "el personaje";
  showToast(`Reserva simulada de ${name}. Esto es una demo: no se ha cobrado nada.`);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
    closeMenu();
  }

  if (event.key === "Tab" && modal.classList.contains("is-open")) {
    const focusable = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', modalDialog)
      .filter(el => !el.disabled && el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

/* ---------- Navegación ---------- */
const nav = $("#nav");
const burger = $("#burger");
const mobileMenu = $("#mobileMenu");

function closeMenu() {
  nav.classList.remove("menu-open");
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", "Abrir menú");
}

burger.addEventListener("click", () => {
  const open = nav.classList.toggle("menu-open");
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

$$("a", mobileMenu).forEach(link => link.addEventListener("click", closeMenu));

window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 24);
}, { passive: true });

/* ---------- Formulario demo ---------- */
const requestForm = $("#requestForm");

requestForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#requestName");
  const email = $("#requestEmail");
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  const nameOk = name.value.trim().length >= 2;

  name.classList.toggle("is-invalid", !nameOk);
  email.classList.toggle("is-invalid", !emailOk);

  if (!nameOk || !emailOk) {
    showToast("Revisa tu nombre y tu correo para continuar.");
    (!nameOk ? name : email).focus();
    return;
  }

  showToast(`Solicitud registrada, ${name.value.trim()}. Búsqueda simulada: no se envió ningún dato.`);
  requestForm.reset();
});

/* ---------- FAQ acordeón ---------- */
const faqItems = $$(".faq-item");
faqItems.forEach(item => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    faqItems.forEach(other => {
      if (other !== item && other.open) other.open = false;
    });
  });
});

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

$$(".reveal").forEach(el => revealObserver.observe(el));

/* ---------- Contadores ---------- */
function animateCounters() {
  $$(".count").forEach(el => {
    const target = Number(el.dataset.count) || 0;
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-US");
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}

const statsEl = $(".hero-stats");
if (statsEl) {
  const counterObserver = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) {
      animateCounters();
      counterObserver.disconnect();
    }
  }, { threshold: 0.4 });
  counterObserver.observe(statsEl);
}

/* ---------- Tilt de la tarjeta destacada ---------- */
const tiltCard = $("[data-tilt]");
const heroVisual = $(".hero-visual");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

if (tiltCard && heroVisual && !reduceMotion && !coarsePointer) {
  heroVisual.addEventListener("mousemove", event => {
    const rect = tiltCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tiltCard.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-2px)`;
  });

  heroVisual.addEventListener("mouseleave", () => {
    tiltCard.style.transform = "";
  });
}

/* ---------- Init ---------- */
renderGrid();
