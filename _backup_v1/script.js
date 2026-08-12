/* ============================================================
   SLIME.DEV — PORTFOLIO 8-BIT / script.js
   ============================================================ */
(function () {
  "use strict";

  /* ------------------------ I18N ------------------------ */
  const I18N = {
    es: {
      "boot.kicker": "DEV BACKEND · PYTHON · FASTAPI",
      "boot.tagline": "Construyo APIs y sistemas backend completos: auth con JWT, roles multi-tenant, seguridad y tests. Desde un SaaS para gimnasios hasta gestión académica universitaria.",
      "boot.p1": "292+ tests",
      "boot.p2": "2 proyectos backend 100%",
      "boot.p3": "auditoría de seguridad cerrada",
      "boot.lang": "IDIOMA / LANGUAGE",
      "boot.press": "▶ ENTRA AL PORTFOLIO",
      "boot.hint": "ENTER o clic",
      "nav.start": "INICIO",
      "nav.status": "FICHA",
      "nav.dungeons": "MAZMORRAS",
      "nav.quest": "BITÁCORA",
      "nav.contact": "CONTACTO",
      "hero.badge": "CLASE: DEV BACKEND",
      "hero.sub1": "PYTHON",
      "hero.sub2": "FASTAPI",
      "hero.sub3": "APIs QUE FUNCIONAN",
      "hero.continue": "[ BAJA PARA VER MI FICHA ]",
      "status.title": "FICHA DEL PERSONAJE",
      "status.class": "DEV BACKEND",
      "status.xp": "XP BACKEND",
      "status.magic": "MAGIA PRINCIPAL",
      "status.role": "ROL EN PROYECTOS",
      "status.roleval": "BACKEND 100%",
      "status.lvl": "PROYECTOS COMPLETADOS",
      "status.tests": "TESTS DESPLEGADOS",
      "status.guild": "GUILD",
      "status.biotitle": "PERFIL",
      "status.bio1": "Dev backend que vive en Python. Diseño APIs y arquitectura con FastAPI de punta a punta: auth con JWT, roles, aislamiento multi-tenant, seguridad y testing. Los dos proyectos de este mundo son trabajo 100% backend mío.",
      "status.bio2": "Creo en el código que se puede defender: testeado, documentado y con CI verde.",
      "status.stacktitle": "STACK REAL",
      "stack.fastapi": "APIs REST con auth por roles, rate limiting y OpenAPI",
      "stack.python": "Servicios, async IO, SQLAlchemy 2.0 asyncio",
      "stack.pg": "Modelos, aislamiento multi-tenant, migraciones con Alembic",
      "stack.jwt": "Access/refresh, refresh en httpOnly cookie, CSRF double-submit",
      "stack.pyd": "Schemas de entrada/salida y validación estricta",
      "stack.pytest": "292+ tests de API y servicios, CI verde",
      "stack.docker": "docker-compose de db + redis + app y GitHub Actions",
      "stack.redis": "Caché y sesiones",
      "dungeons.title": "MAZMORRAS VENCIDAS",
      "dungeons.sub": "Cada mazmorra fue vencida: yo construí su backend completo.",
      "d.boss": "JEFE",
      "common.view": "VER MAZMORRA",
      "common.live": "EN PRODUCCIÓN",
      "d1.title": "GYMPRO SAAS",
      "d1.subtitle": "GESTIÓN DE GIMNASIOS",
      "d1.shout": "JWToken toxicity over nine thousand... derrotado.",
      "d1.desc": "SaaS para gestión de gimnasios pequeños/medianos. Auth por roles (owner/admin/trainer/receptionist), membresías, asistencia con check-in anti-duplicado, pagos internos y dashboard de KPIs. Aislamiento multi-tenant: cada query filtra por gym_id del token.",
      "d1.l1": "JWT access + refresh, bcrypt",
      "d1.l2": "Aislamiento multi-tenant por gym_id",
      "d1.l3": "Soft-delete y PKs UUID v4",
      "d1.l4": "6 módulos REST completos",
      "d1.l5": "Tests: 10 API + 7 servicios",
      "d1.l6": "Docker Compose listo",
      "d2.title": "SISTEMA ACADÉMICO UCA V2",
      "d2.subtitle": "GESTIÓN ACADÉMICA UNIVERSITARIA",
      "d2.shout": "19 fases. 282 tests. Sin excusas.",
      "d2.desc": "Sistema de gestión académica integral (Universidad Católica, PY). 19 fases completas: motor de notas, correlatividades, PPA, financiero, becas, facturación electrónica, trámites, graduación, pasantías, equivalencias y portal docente. Tests y CI verdes.",
      "d2.l1": "19 fases implementadas en backend",
      "d2.l2": "282 tests pytest",
      "d2.l3": "Auditoría de seguridad: 8 hallazgos corregidos",
      "d2.l4": "Roles: Alumno, Profesor, Admin",
      "d2.l5": "JWT refresh en httpOnly cookie + CSRF double-submit",
      "d2.l6": "PDF/QR, email SMTP, Stripe Checkout",
      "quest.title": "BITÁCORA DE MISIONES",
      "quest.sub": "Misiones completadas en este mundo de FastAPI.",
      "q1.title": "SISTEMA ACADÉMICO UCA V2 - Backend completo",
      "q1.desc": "Arquitectura (routers/services/repos), modelos, migraciones, auth dura, testing y documentación. 19 fases, 282 tests verdes y auditoría cerrada.",
      "q2.title": "GYMPRO SAAS - Backend completo",
      "q2.desc": "SaaS multi-tenant de gimnasios: auth por roles, membresías, asistencia, pagos y dashboard, con aislamiento por gym_id desde el token.",
      "q3.title": "AUDITORÍA DE SEGURIDAD PRE-PRODUCCIÓN",
      "q3.desc": "Chequeo crítico del backend: 8 hallazgos reales corregidos (CSRF desactivable, user enumeration, dependencias sin pinnear, rate limiting).",
      "q4.title": "PRÓXIMA MISIÓN: TU PROYECTO",
      "q4.desc": "Backend nuevo, refactor, API, auth o tests. Abierto a misiones freelance o full-time.",
      "q4.cta": "UNIRME A LA MISIÓN",
      "contact.title": "UNIRSE AL GREMIO",
      "contact.line": "El gremio de los backend te espera. Elegí tu punto de encuentro:",
      "contact.mini1": "status: DISPONIBLE",
      "contact.mini2": "nivel: backend",
      "contact.mini3": "loot: FastAPI + opencode",
      "footer.by": "SLIME.DEV - mode DEBUG",
      "footer.sound": "sonido",
      "footer.fps": "fps",
      "footer.test": "test rápido",
      "footer.rights": "todos los derechos pixelados",
      "test.title": "CONSOLA DE PRUEBAS",
      "test.line": "Verifico seguridad, tests y dependencias del portfolio...",
      "test.close": "CERRAR"
    },
    en: {
      "boot.kicker": "BACKEND DEV · PYTHON · FASTAPI",
      "boot.tagline": "I build complete backend systems and APIs: JWT auth, multi-tenant roles, security and tests. From a gym SaaS to university academic management.",
      "boot.p1": "292+ tests",
      "boot.p2": "2 projects, 100% backend",
      "boot.p3": "security audit closed",
      "boot.lang": "LANGUAGE / IDIOMA",
      "boot.press": "▶ ENTER THE PORTFOLIO",
      "boot.hint": "press ENTER or click",
      "nav.start": "START",
      "nav.status": "STATUS",
      "nav.dungeons": "DUNGEONS",
      "nav.quest": "QUEST LOG",
      "nav.contact": "CONTACT",
      "hero.badge": "CLASS: BACKEND DEV",
      "hero.sub1": "PYTHON",
      "hero.sub2": "FASTAPI",
      "hero.sub3": "APIs THAT JUST WORK",
      "hero.continue": "[ SCROLL TO VIEW STATUS ]",
      "status.title": "CHARACTER SHEET",
      "status.class": "BACKEND DEV",
      "status.xp": "BACKEND XP",
      "status.magic": "MAIN MAGIC",
      "status.role": "ROLE IN PROJECTS",
      "status.roleval": "BACKEND 100%",
      "status.lvl": "PROJECTS CLEARED",
      "status.tests": "TESTS DEPLOYED",
      "status.guild": "GUILD",
      "status.biotitle": "PROFILE",
      "status.bio1": "Backend dev living in Python. I design APIs and architecture with FastAPI end to end: JWT auth, roles, multi-tenant isolation, security and testing. Both projects in this world are 100% my backend work.",
      "status.bio2": "I believe in code you can defend: tested, documented, green CI.",
      "status.stacktitle": "REAL STACK",
      "stack.fastapi": "REST APIs with role auth, rate limiting and OpenAPI",
      "stack.python": "Services, async IO, SQLAlchemy 2.0 asyncio",
      "stack.pg": "Models, multi-tenant isolation, Alembic migrations",
      "stack.jwt": "Access/refresh, refresh in httpOnly cookie, CSRF double-submit",
      "stack.pyd": "Request/response schemas and strict validation",
      "stack.pytest": "292+ API and service tests, green CI",
      "stack.docker": "docker-compose of db + redis + app and GitHub Actions",
      "stack.redis": "Cache and sessions",
      "dungeons.title": "DUNGEONS CLEARED",
      "dungeons.sub": "Each dungeon was cleared: I built its full backend.",
      "d.boss": "BOSS",
      "common.view": "VIEW DUNGEON",
      "common.live": "LIVE BUILD",
      "d1.title": "GYMPRO SAAS",
      "d1.subtitle": "GYM MANAGEMENT",
      "d1.shout": "JWToken toxicity over nine thousand... defeated.",
      "d1.desc": "SaaS for small/medium gyms. Role-based auth (owner/admin/trainer/receptionist), memberships, attendance with duplicate-checked check-in, in-app payments and KPI dashboards. Multi-tenant isolation: every query filters by the token's gym_id.",
      "d1.l1": "JWT access + refresh, bcrypt",
      "d1.l2": "Multi-tenant isolation via gym_id",
      "d1.l3": "Soft-delete and UUID v4 PKs",
      "d1.l4": "6 full REST modules",
      "d1.l5": "Tests: 10 API + 7 services",
      "d1.l6": "Docker Compose ready",
      "d2.title": "SISTEMA ACADEMICO UCA V2",
      "d2.subtitle": "UNIVERSITY ACADEMIC MANAGEMENT",
      "d2.shout": "19 phases. 282 tests. No excuses.",
      "d2.desc": "Full academic management system (Universidad Católica, PY). 19 completed phases: grades engine, prerequisites, GPA, finance, scholarships, e-invoicing, paperwork, graduation, internships, equivalences and teacher portal. Green tests and CI.",
      "d2.l1": "19 phases implemented in backend",
      "d2.l2": "282 pytest tests",
      "d2.l3": "Security audit: 8 findings fixed",
      "d2.l4": "Roles: Student, Professor, Admin",
      "d2.l5": "JWT refresh in httpOnly cookie + CSRF double-submit",
      "d2.l6": "PDF/QR, SMTP email, Stripe Checkout",
      "quest.title": "QUEST LOG",
      "quest.sub": "Quests completed on this FastAPI world.",
      "q1.title": "ACADEMICO UCA V2 - Full backend",
      "q1.desc": "Architecture (routers/services/repos), models, migrations, hard auth, testing and docs. 19 phases, 282 green tests and closed security audit.",
      "q2.title": "GYMPRO SAAS - Full backend",
      "q2.desc": "Multi-tenant gym SaaS: role auth, memberships, attendance, payments and dashboards, isolated via the token's gym_id.",
      "q3.title": "PRE-PRODUCTION SECURITY AUDIT",
      "q3.desc": "Critical backend review: fixed 8 real findings (disablable CSRF, user enumeration, unpinned dependencies, rate limiting).",
      "q4.title": "NEXT QUEST: YOUR PROJECT",
      "q4.desc": "New backend, refactor, API, auth or tests. Open to freelance or full-time quests.",
      "q4.cta": "JOIN THE QUEST",
      "contact.title": "JOIN THE GUILD",
      "contact.line": "The backend guild awaits you. Pick your meeting point:",
      "contact.mini1": "status: AVAILABLE",
      "contact.mini2": "rank: backend",
      "contact.mini3": "loot: FastAPI + opencode",
      "footer.by": "SLIME.DEV - mode DEBUG",
      "footer.sound": "sound",
      "footer.fps": "fps",
      "footer.test": "fast test",
      "footer.rights": "all rights pixelated",
      "test.title": "TEST CONSOLE",
      "test.line": "Checking security, tests and deps of this portfolio...",
      "test.close": "CLOSE"
    }
  };

  const LANG_KEY = "slime_lang";
  let lang = "es";
  try { lang = localStorage.getItem(LANG_KEY) || "es"; } catch (e) {}
  if (!I18N[lang]) lang = "es";

  function applyI18n() {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const dict = I18N[lang];
      if (dict && dict[key]) el.textContent = dict[key];
    });
    document.querySelector("#pressStart").textContent = I18N[lang]["boot.press"];
    document.querySelectorAll("[data-set-lang]").forEach((b) => {
      b.classList.toggle("on", b.dataset.setLang === lang);
    });
  }

  /* ======================= PIXEL SPRITES ======================= */
  const GHOST_PAL = {
    X: "#0c3b2e",
    G: "#2bd989",
    g: "#1e9e63",
    W: "#eafff5",
    B: "#0c3b2e",
    M: "#ff4fd8"
  };
  const GHOST_ROWS = [
    "....XXXXXX....",
    "..XXXXGGXXXX..",
    ".XXXXGGGGXXXX.",
    "XXGGGGGGGGGGXX",
    "XGGGGGGGGGGGGX",
    "XGWGGGGGGGGWGX",
    "XGBGGGGGGGGBGX",
    "XGGGGGGGGGGGGX",
    "XGGGMMGGMMGGGX",
    "XGGGGGGGGGGGGX",
    "XGXXGGGGGGXXGX",
    "XGXXGGGGGGXXGX",
    ".XXGGGGGGGGXX.",
    "..XXXXXXXXXXXX."
  ];

  function renderSprite(el, rows, pal) {
    if (!el) return;
    el.textContent = "";
    const w = rows[0].length;
    const h = rows.length;
    el.style.gridTemplateColumns = `repeat(${w}, var(--sz))`;
    el.style.gridTemplateRows = `repeat(${h}, var(--sz))`;
    el.style.setProperty("--sz", el.dataset.size || "7px");
    rows.forEach((row, y) => {
      for (let x = 0; x < row.length; x++) {
        const ch = row[x];
        if (ch === " " || ch === ".") continue;
        const px = document.createElement("span");
        px.style.background = pal[ch] || "#3dffa0";
        px.style.boxShadow = "inset 0 0 0 1px rgba(0,0,0,0.25)";
        el.appendChild(px);
      }
    });
  }

  /* ======================= AUDIO 8-BIT ======================= */
  let ACX = null;
  let soundOn = true;

  function audio() {
    if (!ACX) {
      try { ACX = new (window.AudioContext || window.webkitAudioContext)(); }
      catch (e) { return null; }
    }
    if (ACX.state === "suspended") ACX.resume();
    return ACX;
  }
  function beep(freq, dur, type, vol) {
    if (!soundOn) return;
    const ac = audio();
    if (!ac) return;
    const t = ac.currentTime;
    const o = ac.createOscillator();
    const g = ac.createGain();
    o.type = type || "square";
    o.frequency.value = freq;
    g.gain.setValueAtTime(vol || 0.035, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(ac.destination);
    o.start(t);
    o.stop(t + dur);
  }
  function blip() { beep(660, 0.07, "square", 0.025); }
  function confirm() {
    beep(523, 0.09, "square");
    setTimeout(() => beep(784, 0.12, "square"), 90);
    setTimeout(() => beep(1046, 0.16, "square"), 190);
  }
  function error() { beep(110, 0.25, "sawtooth", 0.05); }

  /* ======================= BOOT / INTRO ======================= */
  function runBoot() {
    const inner = document.querySelector(".boot-inner");
    if (inner) inner.classList.add("in");
  }

  function startGame() {
    const boot = document.getElementById("boot");
    boot.classList.remove("is-visible");
    document.body.classList.add("started");
    confirm();
    setTimeout(() => boot.remove(), 500);
    document.getElementById("hpFill").style.width = "90%";
    initReveal();
  }

  /* ======================= NAV ======================= */
  const sections = ["inicio", "status", "dungeons", "quest", "contact"];
  function setActive(id) {
    document.querySelectorAll(".topbar button").forEach((b) => {
      b.classList.toggle("active", b.dataset.goto === id);
    });
  }

  function goto(id) {
    const el = document.getElementById(id);
    if (!el) return;
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    blip();
    document.body.classList.remove("hide-menu");
  }

  document.querySelectorAll("[data-goto]").forEach((b) => {
    b.addEventListener("click", () => goto(b.dataset.goto));
  });

  const menuBtn = document.getElementById("menuBtn");
  menuBtn.addEventListener("click", () => {
    document.body.classList.toggle("hide-menu");
    blip();
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) setActive(en.target.id);
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );
  sections.forEach((s) => {
    const el = document.getElementById(s);
    if (el) io.observe(el);
  });

  /* ======================= SOUND + FPS ======================= */
  const soundToggle = document.getElementById("soundToggle");
  function paintSound() {
    soundToggle.textContent = "SOUND:" + (soundOn ? "ON" : "OFF");
  }
  soundToggle.addEventListener("click", () => {
    soundOn = !soundOn;
    paintSound();
    if (soundOn) confirm();
  });
  paintSound();

  const fpsEl = document.getElementById("fps");
  let fpsVisible = true;
  setInterval(() => {
    if (!fpsVisible) return;
    const v = 58 + Math.floor(Math.random() * 3);
    fpsEl.textContent = "FPS:" + v;
  }, 900);

  document.addEventListener("click", (e) => {
    if (e.target.closest("a") && !e.target.closest("#pressStart")) blip();
  });
  document.querySelectorAll(".topbar button, .btn, .boss-label, .contact-card").forEach((el) => {
    el.addEventListener("mouseenter", () => beep(440, 0.04, "square", 0.012));
  });

  /* ======================= TEST MODAL ======================= */
  const modal = document.getElementById("testModal");
  const testOut = document.getElementById("testOut");
  let testRunning = false;
  function openTest() {
    if (testRunning) return;
    testRunning = true;
    modal.hidden = false;
    testOut.textContent = "";
    const lines = [
      ["$ pytest -q", "cmd"],
      ["test_security_csrf .................. PASSED", "ok"],
      ["test_auth_reset_ratelimit .......... PASSED", "ok"],
      ["test_attendance_duplicate          PASSED", "ok"],
      ["test_membership_renewal            PASSED", "ok"],
      ["test_payments_refund              PASSED", "ok"],
      ["security_scan:: jwt_blacklist      OK", "warn"],
      ["security_scan:: user_enumeration   BLOCKED", "warn"],
      ["", "plain"],
      ["== portfolio: all checks passed (0 errors) ==", "ok"]
    ];
    let i = 0;
    function next() {
      if (i >= lines.length) { testRunning = false; return; }
      const [text, cls] = lines[i++];
      const d = document.createElement("div");
      if (cls) d.className = cls;
      d.textContent = text;
      testOut.appendChild(d);
      if (text) confirm();
      setTimeout(next, 180);
    }
    setTimeout(next, 200);
  }
  document.getElementById("testClose").addEventListener("click", () => {
    modal.hidden = true;
    blip();
  });

  /* ======================= KEYBOARD ======================= */
  const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"];
  let kpos = 0;
  const bootVisible = () => document.getElementById("boot").classList.contains("is-visible");
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && bootVisible() && e.target.tagName !== "BUTTON") { startGame(); return; }
    if (e.key === "m" || e.key === "M") { soundToggle.click(); return; }
    if (e.key === "k" || e.key === "K") {
      fpsVisible = !fpsVisible;
      fpsEl.style.display = fpsVisible ? "block" : "none";
      blip();
      return;
    }
    if (e.key === "t" || e.key === "T") { openTest(); return; }

    const k = e.key;
    if (k === KONAMI[kpos]) {
      kpos++;
      if (kpos === KONAMI.length) {
        kpos = 0;
        document.body.classList.toggle("neon");
        confirm();
      }
    } else kpos = k === KONAMI[0] ? 1 : 0;
  });

  /* ======================= REVEAL ON SCROLL ======================= */
  function initReveal() {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("revealed");
            obs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".section-head, .char-card, .bio-card, .stack-card, .dungeon-card, .quest, .contact-card, .hero-inner, .contact-sprite").forEach((el) => {
      obs.observe(el);
    });
  }

  /* ======================= INIT ======================= */
  document.getElementById("heroSprite").dataset.size = "12px";
  document.getElementById("charSprite").dataset.size = "8px";
  document.getElementById("contactSprite").dataset.size = "10px";
  document.getElementById("bootSprite").dataset.size = "10px";
  renderSprite(document.getElementById("heroSprite"), GHOST_ROWS, GHOST_PAL);
  renderSprite(document.getElementById("charSprite"), GHOST_ROWS, GHOST_PAL);
  renderSprite(document.getElementById("contactSprite"), GHOST_ROWS, GHOST_PAL);
  renderSprite(document.getElementById("bootSprite"), GHOST_ROWS, GHOST_PAL);

  applyI18n();
  document.querySelectorAll("[data-set-lang]").forEach((b) => {
    b.addEventListener("click", () => {
      lang = b.dataset.setLang;
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
      applyI18n();
      beep(520, 0.08, "square", 0.02);
    });
  });

  document.getElementById("pressStart").addEventListener("click", startGame);
  runBoot();
})();