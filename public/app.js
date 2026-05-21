const storageKey = "siae-state-v1";
const credentialCanvas = { width: 591, height: 1004 };
const credentialFields = [
  { key: "group", label: "GRUPO", sample: "GRUPO: A" },
  { key: "section", label: "SECCION", sample: "Seccion: Preparatoria" },
  { key: "level", label: "GRADO", sample: "Grado: 3er semestre" },
  { key: "name", label: "NOMBRE", sample: "SOFIA HERNANDEZ LOPEZ" },
  { key: "email", label: "CORREO", sample: "sofia.h@colegio.edu.mx" },
  { key: "address", label: "DIRECCION", sample: "Av. Universidad 120, Col. Centro" },
  { key: "logo", label: "LOGOTIPO", sample: "LOGO" },
  { key: "qr", label: "QR", sample: "QR" }
];

function defaultDesignerElements(kind) {
  if (kind === "alumno") {
    return [
      { id: "el-section", field: "section", x: 20, y: 150, w: 54, h: 250, fontSize: 28, color: "#0f1d46", orientation: "vertical" },
      { id: "el-level", field: "level", x: 20, y: 410, w: 54, h: 250, fontSize: 28, color: "#0f1d46", orientation: "vertical" },
      { id: "el-group", field: "group", x: 18, y: 680, w: 60, h: 260, fontSize: 46, color: "#0f1d46", orientation: "vertical" },
      { id: "el-logo", field: "logo", x: 170, y: 45, w: 250, h: 90, fontSize: 22, color: "#ffffff", orientation: "horizontal" },
      { id: "el-name", field: "name", x: 150, y: 585, w: 380, h: 155, fontSize: 36, color: "#ffffff", orientation: "horizontal" },
      { id: "el-email", field: "email", x: 150, y: 740, w: 380, h: 50, fontSize: 24, color: "#b8cdfa", orientation: "horizontal" },
      { id: "el-address", field: "address", x: 145, y: 850, w: 250, h: 100, fontSize: 19, color: "#ffffff", orientation: "horizontal" },
      { id: "el-qr", field: "qr", x: 420, y: 815, w: 130, h: 130, fontSize: 18, color: "#111827", orientation: "horizontal" }
    ];
  }

  return [
    { id: "el-logo", field: "logo", x: 90, y: 35, w: 330, h: 110, fontSize: 22, color: "#24257b", orientation: "horizontal" },
    { id: "el-name", field: "name", x: 95, y: 500, w: 400, h: 120, fontSize: 48, color: "#050505", orientation: "horizontal" },
    { id: "el-section", field: "section", x: 170, y: 625, w: 250, h: 48, fontSize: 30, color: "#050505", orientation: "horizontal" },
    { id: "el-email", field: "email", x: 35, y: 690, w: 520, h: 60, fontSize: 31, color: "#ffffff", orientation: "horizontal" },
    { id: "el-address", field: "address", x: 70, y: 865, w: 270, h: 85, fontSize: 22, color: "#111827", orientation: "horizontal" },
    { id: "el-qr", field: "qr", x: 372, y: 790, w: 150, h: 150, fontSize: 18, color: "#111827", orientation: "horizontal" }
  ];
}

function defaultDesignerTemplates() {
  return [
    {
      id: "tpl-alumno-base",
      name: "Alumno base azul",
      appliesTo: "alumno",
      isActive: true,
      customized: false,
      background: "",
      logoSource: "square",
      elements: defaultDesignerElements("alumno")
    },
    {
      id: "tpl-personal-base",
      name: "Personal institucional claro",
      appliesTo: "docente",
      isActive: true,
      customized: false,
      background: "",
      logoSource: "square",
      elements: defaultDesignerElements("docente")
    }
  ];
}

const seedState = {
  institution: {
    officialName: "Colegio Horizonte Azul",
    website: "https://colegio-horizonte.edu.mx",
    address: "Av. Universidad 120, Col. Centro, Ciudad de Mexico",
    phones: "55 1000 2000, 55 1000 2001",
    email: "contacto@colegio-horizonte.edu.mx",
    colors: ["#2563eb", "#7c3aed", "#059669", "#f97316", "#ec4899"],
    horizontalLogo: "",
    squareLogo: "",
    credentialTemplates: {
      alumno: {
        title: "Credencial Alumno",
        style: "Colorida institucional",
        validityDays: 365,
        fields: ["Nombre completo", "Seccion", "Nivel", "Grupo", "Correo", "Fotografia", "Sitio web", "Logotipo institucional", "Codigo QR dinamico"]
      },
      docente: {
        title: "Credencial Personal Institucional",
        style: "Profesional institucional",
        validityDays: 365,
        fields: ["Nombre completo", "Seccion", "Nivel", "Grupo", "Correo", "Fotografia", "Sitio web", "Logotipo institucional", "Codigo QR dinamico"]
      }
    },
    designerTemplates: defaultDesignerTemplates(),
    activeDesignerTemplateId: "tpl-alumno-base",
    selectedDesignerElementId: "el-name"
  },
  users: [
    { id: "u-1", name: "Sofia Hernandez Lopez", role: "Alumno", email: "sofia.h@colegio.edu.mx", phone: "55 1200 3344", section: "Preparatoria", level: "3er semestre", group: "A", status: "Activo", balance: 1850, photo: "" },
    { id: "u-2", name: "Mateo Ruiz Garcia", role: "Alumno", email: "mateo.r@colegio.edu.mx", phone: "55 7745 9088", section: "Secundaria", level: "2do grado", group: "B", status: "Pendiente", balance: 2400, photo: "" },
    { id: "u-3", name: "Valeria Cortes Mena", role: "Alumno", email: "valeria.c@colegio.edu.mx", phone: "55 8871 2234", section: "Primaria", level: "6to grado", group: "A", status: "Activo", balance: 0, photo: "" },
    { id: "u-4", name: "Daniela Torres Perez", role: "Docente", email: "daniela.t@colegio.edu.mx", phone: "55 9000 1200", section: "Preparatoria", level: "Media superior", group: "3A", status: "Activo", balance: 0, photo: "" },
    { id: "u-5", name: "Ramon Silva Aguilar", role: "Docente", email: "ramon.s@colegio.edu.mx", phone: "55 3434 2201", section: "Secundaria", level: "Secundaria", group: "2B", status: "Activo", balance: 0, photo: "" },
    { id: "u-6", name: "Laura Pineda Rios", role: "Administrador Financiero", email: "laura.p@colegio.edu.mx", phone: "55 5512 9988", section: "Administracion", level: "Administracion", group: "Finanzas", status: "Activo", balance: 0, photo: "" }
  ],
  payments: [
    { id: "p-1", student: "Sofia Hernandez Lopez", concept: "Colegiatura Mayo", amount: 1850, due: "2026-05-25", status: "Pendiente" },
    { id: "p-2", student: "Mateo Ruiz Garcia", concept: "Inscripcion", amount: 2400, due: "2026-05-12", status: "Vencido" },
    { id: "p-3", student: "Valeria Cortes Mena", concept: "Colegiatura Mayo", amount: 1700, due: "2026-05-10", status: "Pagado" },
    { id: "p-4", student: "Emiliano Cano", concept: "Colegiatura Mayo", amount: 900, due: "2026-05-28", status: "Parcial" }
  ],
  schedule: [
    { day: "Lun", time: "08:00", subject: "Matematicas III", group: "Prepa 3A", teacher: "Daniela Torres", room: "Aula 12" },
    { day: "Lun", time: "10:00", subject: "Historia Universal", group: "Sec 2B", teacher: "Ramon Silva", room: "Aula 08" },
    { day: "Mar", time: "09:00", subject: "Fisica", group: "Prepa 3A", teacher: "Daniela Torres", room: "Lab 02" },
    { day: "Mie", time: "11:00", subject: "Literatura", group: "Prepa 2C", teacher: "Mara Luna", room: "Aula 16" },
    { day: "Jue", time: "07:30", subject: "Ingles", group: "Primaria 6A", teacher: "Ramon Silva", room: "Aula 04" },
    { day: "Vie", time: "12:00", subject: "Computacion", group: "Sec 1A", teacher: "Nadia Flores", room: "Lab 01" }
  ],
  grades: [
    { student: "Sofia Hernandez Lopez", subject: "Matematicas III", partial: 1, grade: 9.4, status: "Aprobado" },
    { student: "Mateo Ruiz Garcia", subject: "Historia Universal", partial: 1, grade: 7.8, status: "Aprobado" },
    { student: "Valeria Cortes Mena", subject: "Ingles", partial: 1, grade: 9.8, status: "Aprobado" },
    { student: "Emiliano Cano", subject: "Fisica", partial: 1, grade: 5.9, status: "Reprobado" }
  ],
  view: "inicio"
};

const modules = [
  { id: "inicio", label: "Inicio", icon: "⌂", kicker: "Panel general" },
  { id: "institucional", label: "Institucional", icon: "◆", kicker: "Datos, identidad y credenciales" },
  { id: "usuarios", label: "Usuarios", icon: "◉", kicker: "Alumnos, docentes y administracion" },
  { id: "academico", label: "Academico", icon: "▦", kicker: "Secciones, grupos, materias y horarios" },
  { id: "finanzas", label: "Finanzas", icon: "$", kicker: "Pagos, descuentos y morosidad" },
  { id: "calificaciones", label: "Calificaciones", icon: "✓", kicker: "Captura y seguimiento academico" },
  { id: "credenciales", label: "Credenciales", icon: "▣", kicker: "Credenciales digitales con QR" },
  { id: "reportes", label: "Reportes", icon: "◫", kicker: "Indicadores y exportaciones" },
  { id: "app", label: "App alumnos", icon: "▯", kicker: "Experiencia movil complementaria" }
];

let state = loadState();

const view = document.querySelector("#view");
const nav = document.querySelector("#mainNav");
const pageTitle = document.querySelector("#pageTitle");
const pageKicker = document.querySelector("#pageKicker");
const globalSearch = document.querySelector("#globalSearch");
const userModal = document.querySelector("#userModal");
const userForm = document.querySelector("#userForm");
const toast = document.querySelector("#toast");
const sidebar = document.querySelector(".sidebar");
const drawerBackdrop = document.querySelector("#drawerBackdrop");

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return normalizeState(structuredClone(seedState));

  try {
    return normalizeState(mergeState(structuredClone(seedState), JSON.parse(saved)));
  } catch {
    return normalizeState(structuredClone(seedState));
  }
}

function mergeState(base, saved) {
  return {
    ...base,
    ...saved,
    institution: {
      ...base.institution,
      ...(saved.institution || {}),
      credentialTemplates: {
        ...base.institution.credentialTemplates,
        ...(saved.institution?.credentialTemplates || {})
      },
      designerTemplates: saved.institution?.designerTemplates || base.institution.designerTemplates,
      activeDesignerTemplateId: saved.institution?.activeDesignerTemplateId || base.institution.activeDesignerTemplateId,
      selectedDesignerElementId: saved.institution?.selectedDesignerElementId || base.institution.selectedDesignerElementId
    }
  };
}

function normalizeState(current) {
  const defaultTemplates = defaultDesignerTemplates();
  current.institution.designerTemplates = (current.institution.designerTemplates?.length ? current.institution.designerTemplates : defaultTemplates).map((template) => {
    const fallback = defaultTemplates.find((item) => item.appliesTo === template.appliesTo) || defaultTemplates[0];
    return {
      ...fallback,
      ...template,
      elements: (!template.customized && ["tpl-alumno-base", "tpl-personal-base"].includes(template.id) ? fallback.elements : (template.elements?.length ? template.elements : fallback.elements)).map((element) => ({
        x: 40,
        y: 40,
        w: 180,
        h: 50,
        fontSize: 24,
        color: "#111827",
        orientation: "horizontal",
        ...element
      }))
    };
  });
  current.institution.activeDesignerTemplateId = current.institution.activeDesignerTemplateId || current.institution.designerTemplates[0]?.id;
  current.institution.selectedDesignerElementId = current.institution.selectedDesignerElementId || current.institution.designerTemplates[0]?.elements[0]?.id;

  current.users = current.users.map((user) => {
    const seedUser = seedState.users.find((item) => item.id === user.id) || {};
    return {
      ...seedUser,
      level: "Pendiente",
      group: "Pendiente",
      photo: "",
      ...user,
      level: user.level || seedUser.level || "Pendiente",
      group: user.group || seedUser.group || "Pendiente",
      photo: user.photo || seedUser.photo || ""
    };
  });
  return current;
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function escapeAttr(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function money(value) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(value);
}

function setView(id) {
  state.view = id;
  saveState();
  render();
  closeDrawer();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderNav() {
  nav.innerHTML = modules.map((item) => `
    <button class="nav-item ${state.view === item.id ? "active" : ""}" data-view="${item.id}">
      <span class="nav-icon">${item.icon}</span>
      <span>${item.label}</span>
    </button>
  `).join("");
}

function render() {
  const credentialId = new URLSearchParams(window.location.search).get("credential");
  if (credentialId) {
    const user = state.users.find((item) => item.id === credentialId);
    pageTitle.textContent = "Validacion publica";
    pageKicker.textContent = "Credencial digital";
    renderNav();
    view.innerHTML = renderCredentialValidation(user);
    bindViewEvents();
    return;
  }

  const active = modules.find((item) => item.id === state.view) || modules[0];
  pageTitle.textContent = active.label;
  pageKicker.textContent = active.kicker;
  renderNav();

  const renderers = {
    inicio: renderDashboard,
    institucional: renderInstitutional,
    usuarios: renderUsers,
    academico: renderAcademic,
    finanzas: renderFinance,
    calificaciones: renderGrades,
    credenciales: renderCredentials,
    reportes: renderReports,
    app: renderMobileApp
  };

  view.innerHTML = renderers[active.id]();
  bindViewEvents();
}

function metrics() {
  const activeStudents = state.users.filter((user) => user.role === "Alumno" && user.status === "Activo").length;
  const pendingAmount = state.payments.filter((payment) => payment.status !== "Pagado").reduce((sum, item) => sum + item.amount, 0);
  const overdue = state.payments.filter((payment) => payment.status === "Vencido").length;
  const teachers = state.users.filter((user) => user.role === "Docente").length;

  return [
    { label: "Alumnos activos", value: activeStudents, accent: "var(--blue)" },
    { label: "Pagos pendientes", value: money(pendingAmount), accent: "var(--green)" },
    { label: "Pagos vencidos", value: overdue, accent: "var(--orange)" },
    { label: "Docentes", value: teachers, accent: "var(--purple)" }
  ];
}

function metricCards() {
  return `<div class="metric-grid">${metrics().map((item) => `
    <article class="metric-card" style="--accent:${item.accent}">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
    </article>
  `).join("")}</div>`;
}

function renderDashboard() {
  return `
    <div class="hero-grid">
      <section class="welcome-panel">
        <p class="eyebrow" style="color:rgba(255,255,255,.72)">Base visual elegida</p>
        <h2>SIAE colorido, redondeado y listo para crecer por modulos.</h2>
        <p>Administracion escolar, pagos, calificaciones, credenciales digitales y app para alumnos en una sola experiencia responsiva.</p>
        <div class="quick-actions">
          <button class="quick-action" data-view="usuarios">+ Nuevo usuario</button>
          <button class="quick-action" data-view="finanzas">Validar pagos</button>
          <button class="quick-action" data-view="institucional">Configurar institucion</button>
          <button class="quick-action" data-view="app">Preview app</button>
        </div>
      </section>
      ${pendingStudentsPanel()}
    </div>
    ${metricCards()}
    <div class="section-grid">
      ${weeklySchedulePanel()}
      <section class="panel">
        <div class="panel-header">
          <div>
            <p class="page-kicker">Modulos principales</p>
            <h2>Operacion del sistema</h2>
          </div>
        </div>
        <div class="module-grid">
          ${moduleCard("Academico", "Grupos, materias y asignaciones", "linear-gradient(135deg,#2563eb,#7c3aed)", "A")}
          ${moduleCard("Finanzas", "Cuotas, pagos y recargos", "linear-gradient(135deg,#059669,#10b981)", "$")}
          ${moduleCard("Institucional", "Identidad visual y plantillas QR", "linear-gradient(135deg,#7c3aed,#ec4899)", "I")}
        </div>
      </section>
    </div>
  `;
}

function renderInstitutional() {
  const institution = state.institution;
  return `
    <form class="institution-layout" id="institutionForm">
      <section class="panel">
        <div class="panel-header">
          <div>
            <p class="page-kicker">Configuracion institucional</p>
            <h2>Datos generales</h2>
          </div>
          <button class="button primary" type="submit">Guardar cambios</button>
        </div>
        <div class="form-grid institutional-form">
          <label>Nombre oficial
            <input id="institutionName" required value="${escapeAttr(institution.officialName)}">
          </label>
          <label>Sitio web
            <input id="institutionWebsite" type="url" required value="${escapeAttr(institution.website)}">
          </label>
          <label class="span-2">Direccion completa
            <input id="institutionAddress" required value="${escapeAttr(institution.address)}">
          </label>
          <label>Telefonos institucionales
            <input id="institutionPhones" required value="${escapeAttr(institution.phones)}">
          </label>
          <label>Correo institucional
            <input id="institutionEmail" type="email" required value="${escapeAttr(institution.email)}">
          </label>
        </div>
      </section>

      <section class="panel">
        <p class="page-kicker">Identidad visual</p>
        <h2>Colores y logotipos</h2>
        <div class="color-grid">
          ${institution.colors.map((color, index) => `
            <label class="color-field">Color ${index + 1}
              <span class="color-control">
                <input type="color" id="institutionColor${index}" value="${color}">
                <input class="color-text" id="institutionColorText${index}" value="${color}" maxlength="7">
              </span>
            </label>
          `).join("")}
        </div>
        <div class="logo-grid">
          ${logoUploader("horizontal", "Logotipo horizontal", institution.horizontalLogo)}
          ${logoUploader("square", "Logotipo cuadrado", institution.squareLogo)}
        </div>
      </section>

      <section class="panel span-2">
        <div class="panel-header">
          <div>
            <p class="page-kicker">Credenciales digitales</p>
            <h2>Plantillas y campos incluidos</h2>
          </div>
          <button class="button ghost" type="button" data-view="credenciales">Ver credenciales</button>
        </div>
        <div class="template-grid">
          ${credentialTemplateForm("alumno", "Credencial alumno")}
          ${credentialTemplateForm("docente", "Credencial docente y administrativos")}
        </div>
      </section>

      ${credentialDesignerSection()}
    </form>
  `;
}

function credentialDesignerSection() {
  const template = activeDesignerTemplate();
  const selected = selectedDesignerElement(template);
  return `
    <section class="panel span-2">
      <div class="panel-header">
        <div>
          <p class="page-kicker">Editor visual de credenciales</p>
          <h2>Diseño 591 x 1004</h2>
        </div>
        <div class="row-actions">
          <button class="button ghost" type="button" id="newDesignerTemplate">Nueva plantilla</button>
          <button class="button primary" type="button" id="saveDesignerTemplate">Guardar plantilla</button>
        </div>
      </div>

      <div class="designer-shell">
        <aside class="designer-tools">
          <label>Plantilla
            <select id="designerTemplateSelect">
              ${state.institution.designerTemplates.map((item) => `<option value="${item.id}" ${item.id === template.id ? "selected" : ""}>${item.name}</option>`).join("")}
            </select>
          </label>
          <label>Nombre de plantilla
            <input id="designerTemplateName" value="${escapeAttr(template.name)}">
          </label>
          <label>Aplicar a
            <select id="designerTemplateApplies">
              <option value="alumno" ${template.appliesTo === "alumno" ? "selected" : ""}>Alumnos</option>
              <option value="docente" ${template.appliesTo === "docente" ? "selected" : ""}>Docentes y administrativos</option>
            </select>
          </label>
          <label>Logotipo de plantilla
            <select id="designerLogoSource">
              <option value="square" ${template.logoSource === "square" ? "selected" : ""}>Logotipo cuadrado</option>
              <option value="horizontal" ${template.logoSource === "horizontal" ? "selected" : ""}>Logotipo horizontal</option>
              <option value="none" ${template.logoSource === "none" ? "selected" : ""}>Sin logotipo</option>
            </select>
          </label>
          <label>Fondo 591 x 1004
            <input id="designerBackgroundInput" type="file" accept="image/*">
          </label>
          <button class="button ghost" type="button" id="clearDesignerBackground">Quitar fondo</button>
          <div class="field-palette">
            <strong>Agregar dato</strong>
            ${credentialFields.map((field) => `<button class="field-token" type="button" data-add-field="${field.key}">${field.label}</button>`).join("")}
          </div>
        </aside>

        <div class="designer-stage-wrap">
          <div class="designer-stage" id="credentialDesignerStage">
            ${renderDesignerCanvas(template)}
          </div>
        </div>

        <aside class="designer-tools">
          <strong>Elemento seleccionado</strong>
          ${selected ? designerElementControls(selected) : `<p class="subtle">Selecciona un dato en la credencial.</p>`}
        </aside>
      </div>
    </section>
  `;
}

function designerElementControls(element) {
  const field = credentialFields.find((item) => item.key === element.field);
  return `
    <p class="selected-field-name">${field?.label || element.field}</p>
    <label>Posicion X
      <input type="number" id="designerElementX" min="0" max="${credentialCanvas.width}" value="${Math.round(element.x)}">
    </label>
    <label>Posicion Y
      <input type="number" id="designerElementY" min="0" max="${credentialCanvas.height}" value="${Math.round(element.y)}">
    </label>
    <label>Ancho
      <input type="number" id="designerElementW" min="20" max="${credentialCanvas.width}" value="${Math.round(element.w)}">
    </label>
    <label>Alto
      <input type="number" id="designerElementH" min="20" max="${credentialCanvas.height}" value="${Math.round(element.h)}">
    </label>
    <label>Tamano de texto
      <input type="number" id="designerElementFont" min="8" max="90" value="${Math.round(element.fontSize)}">
    </label>
    <label>Color
      <input type="color" id="designerElementColor" value="${element.color}">
    </label>
    <label>Orientacion
      <select id="designerElementOrientation">
        <option value="horizontal" ${element.orientation === "horizontal" ? "selected" : ""}>Horizontal</option>
        <option value="vertical" ${element.orientation === "vertical" ? "selected" : ""}>Vertical</option>
      </select>
    </label>
    <button class="button danger" type="button" id="deleteDesignerElement">Eliminar dato</button>
  `;
}

function renderDesignerCanvas(template, user = state.users.find((item) => item.role === "Alumno") || state.users[0]) {
  const background = template.background
    ? `style="background-image:url('${template.background}')"`
    : "";

  return `
    <div class="designer-canvas ${template.appliesTo}" ${background}>
      ${template.elements.map((element) => designerElementMarkup(element, user, template)).join("")}
    </div>
  `;
}

function designerElementMarkup(element, user, template) {
  const selected = state.institution.selectedDesignerElementId === element.id ? " selected" : "";
  const value = credentialElementValue(element.field, user, template);
  const style = [
    `left:${(element.x / credentialCanvas.width) * 100}%`,
    `top:${(element.y / credentialCanvas.height) * 100}%`,
    `width:${(element.w / credentialCanvas.width) * 100}%`,
    `height:${(element.h / credentialCanvas.height) * 100}%`,
    `font-size:calc(${element.fontSize}px * var(--credential-scale, 1))`,
    `color:${element.color}`
  ].join(";");

  return `
    <div class="designer-element ${element.orientation}${selected}" data-element-id="${element.id}" style="${style}">
      ${value}
      <span class="resize-handle" data-resize-element="${element.id}"></span>
    </div>
  `;
}

function credentialElementValue(field, user, template) {
  const values = {
    group: `GRUPO: ${user.group || "Pendiente"}`,
    section: `Seccion: ${user.section || "Pendiente"}`,
    level: `Grado: ${user.level || "Pendiente"}`,
    name: user.name.toUpperCase(),
    email: user.email,
    address: institutionAddressShort(),
    logo: selectedLogoMarkup(template),
    qr: `<span class="designer-qr"></span>`
  };
  return values[field] || field;
}

function selectedLogoMarkup(template) {
  if (template.logoSource === "none") return "";
  const src = template.logoSource === "horizontal" ? state.institution.horizontalLogo : state.institution.squareLogo;
  if (src) return `<img src="${src}" alt="Logotipo">`;
  return `<span>${initials(state.institution.officialName)}</span>`;
}

function activeDesignerTemplate() {
  return state.institution.designerTemplates.find((template) => template.id === state.institution.activeDesignerTemplateId) || state.institution.designerTemplates[0];
}

function selectedDesignerElement(template = activeDesignerTemplate()) {
  return template?.elements.find((element) => element.id === state.institution.selectedDesignerElementId) || template?.elements[0];
}

function logoUploader(type, label, source) {
  return `
    <div class="logo-uploader">
      <div class="logo-preview ${source ? "has-logo" : ""}" id="${type}LogoPreview">
        ${source ? `<img src="${source}" alt="${label}">` : `<span>${type === "horizontal" ? "Logo horizontal" : "Logo cuadrado"}</span>`}
      </div>
      <label>${label}
        <input id="${type}LogoInput" type="file" accept="image/*">
      </label>
      <button class="button ghost" type="button" data-clear-logo="${type}">Quitar</button>
    </div>
  `;
}

function credentialTemplateForm(type, title) {
  const template = state.institution.credentialTemplates[type];
  const fields = seedState.institution.credentialTemplates[type].fields;
  return `
    <article class="template-card">
      <div class="credential-mini ${type}">
        <div class="mini-logo">${logoMarkup("square")}</div>
        <div>
          <p class="eyebrow" style="color:rgba(255,255,255,.72)">${title}</p>
          <h3>${type === "alumno" ? "Sofia Hernandez" : "Daniela Torres"}</h3>
          <span>${type === "alumno" ? "Preparatoria · 3er semestre · A" : "Preparatoria · Media superior · 3A"}</span>
        </div>
        <div class="mini-qr"></div>
      </div>
      <div class="form-grid">
        <label>Titulo de plantilla
          <input id="${type}TemplateTitle" value="${escapeAttr(template.title)}">
        </label>
        <label>Estilo
          <select id="${type}TemplateStyle">
            ${["Colorida institucional", "Profesional institucional", "Minimalista amigable"].map((style) => `<option ${template.style === style ? "selected" : ""}>${style}</option>`).join("")}
          </select>
        </label>
        <label>Vigencia en dias
          <input id="${type}TemplateValidity" type="number" min="1" value="${template.validityDays}">
        </label>
      </div>
      <div class="check-grid">
        ${fields.map((field) => `
          <label class="check-pill">
            <input type="checkbox" data-template-field="${type}" value="${field}" ${template.fields.includes(field) ? "checked" : ""}>
            <span>${field}</span>
          </label>
        `).join("")}
      </div>
    </article>
  `;
}

function moduleCard(title, text, gradient, icon) {
  return `
    <article class="module-card" style="background:${gradient}" data-icon="${icon}">
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `;
}

function logoMarkup(type) {
  const src = type === "horizontal" ? state.institution.horizontalLogo : state.institution.squareLogo;
  if (src) return `<img src="${src}" alt="Logotipo institucional">`;
  return initials(state.institution.officialName);
}

function credentialPublicUrl(userId) {
  return `${window.location.origin}/?credential=${encodeURIComponent(userId)}`;
}

function credentialTemplateType(user) {
  return user.role === "Alumno" ? "alumno" : "docente";
}

function canHaveCredential(user) {
  return Boolean(user?.role);
}

function userPhotoMarkup(user, size = "large") {
  if (user.photo) {
    return `<img src="${user.photo}" alt="Fotografia de ${escapeAttr(user.name)}">`;
  }
  return `<span class="photo-initials ${size}">${initials(user.name)}</span>`;
}

function qrMarkup(user) {
  return `
    <button class="qr-button" data-public-credential="${user.id}" type="button" aria-label="Validar credencial de ${escapeAttr(user.name)}">
      <span class="qr-pattern"></span>
    </button>
  `;
}

function institutionAddressShort() {
  return state.institution.address || "Direccion institucional pendiente";
}

function renderCredentialCard(user, options = {}) {
  const customTemplate = designerTemplateForUser(user);
  if (customTemplate) return renderTemplateCredential(user, customTemplate, options);

  const type = credentialTemplateType(user);
  const compactClass = options.compact ? " compact" : "";
  const roleLabel = user.role === "Alumno" ? "Alumno" : user.role.toUpperCase();

  if (type === "alumno") {
    return `
      <article class="digital-credential student-id-card${compactClass}">
        <div class="student-side">
          <span>Seccion: ${user.section}</span>
          <span>Grado: ${user.level || "Pendiente"}</span>
          <strong>GRUPO: ${user.group || "Pendiente"}</strong>
        </div>
        <div class="credential-body">
          <div class="credential-brandline">
            <div class="brand-symbol">${logoMarkup("square")}</div>
            <div>
              <strong>${state.institution.officialName}</strong>
              <span>Instituto Educativo</span>
            </div>
          </div>
          <div class="student-photo-ring">
            <div class="photo-frame circle">${userPhotoMarkup(user)}</div>
          </div>
          <h3>${user.name}</h3>
          <p class="credential-email">${user.email}</p>
          <div class="credential-bottom">
            <p>${institutionAddressShort()}</p>
            ${qrMarkup(user)}
          </div>
        </div>
      </article>
    `;
  }

  return `
    <article class="digital-credential staff-id-card${compactClass}">
      <div class="staff-pattern pattern-a"></div>
      <div class="staff-pattern pattern-b"></div>
      <div class="credential-brandline staff">
        <div class="brand-symbol">${logoMarkup("square")}</div>
        <div>
          <strong>${state.institution.officialName}</strong>
          <span>Instituto Educativo</span>
        </div>
      </div>
      <div class="staff-photo-layout">
        <div class="photo-frame rectangle">${userPhotoMarkup(user)}</div>
      </div>
      <h3>${user.name}</h3>
      <p class="staff-role">${roleLabel}</p>
      <p class="staff-email">${user.email}</p>
      <div class="credential-bottom staff">
        <p>${institutionAddressShort()}</p>
        ${qrMarkup(user)}
      </div>
    </article>
  `;
}

function designerTemplateForUser(user) {
  const appliesTo = credentialTemplateType(user);
  return state.institution.designerTemplates.find((template) => template.appliesTo === appliesTo && template.isActive)
    || state.institution.designerTemplates.find((template) => template.appliesTo === appliesTo);
}

function renderTemplateCredential(user, template, options = {}) {
  const compactClass = options.compact ? " compact" : "";
  const background = template.background
    ? `background-image:url('${template.background}')`
    : "";

  return `
    <article class="template-credential digital-credential${compactClass}">
      <div class="designer-canvas output ${template.appliesTo}" ${background ? `style="${background}"` : ""}>
        ${template.elements.map((element) => outputDesignerElementMarkup(element, user, template)).join("")}
      </div>
    </article>
  `;
}

function outputDesignerElementMarkup(element, user, template) {
  const style = [
    `left:${(element.x / credentialCanvas.width) * 100}%`,
    `top:${(element.y / credentialCanvas.height) * 100}%`,
    `width:${(element.w / credentialCanvas.width) * 100}%`,
    `height:${(element.h / credentialCanvas.height) * 100}%`,
    `font-size:calc(${element.fontSize}px * var(--credential-scale, 1))`,
    `color:${element.color}`
  ].join(";");

  return `
    <div class="designer-element output ${element.orientation}" style="${style}">
      ${credentialOutputElementValue(element.field, user, template)}
    </div>
  `;
}

function credentialOutputElementValue(field, user, template) {
  if (field === "qr") return qrMarkup(user);
  return credentialElementValue(field, user, template);
}

function pendingStudentsPanel() {
  const items = state.payments.filter((payment) => payment.status !== "Pagado").slice(0, 4);
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="page-kicker">Estilo base para listados</p>
          <h2>Alumnos con pagos pendientes</h2>
        </div>
        <span class="badge Pendiente">${items.length} casos</span>
      </div>
      <div class="student-list">
        ${items.map((payment) => `
          <article class="student-row">
            <div class="avatar">${initials(payment.student)}</div>
            <div>
              <strong>${payment.student}</strong>
              <span>${payment.concept} · vence ${payment.due}</span>
            </div>
            <div style="text-align:right">
              <strong>${money(payment.amount)}</strong>
              <span class="badge ${payment.status}">${payment.status}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function weeklySchedulePanel() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="page-kicker">Estilo base para horarios</p>
          <h2>Horario de la semana</h2>
        </div>
        <button class="button ghost" data-view="academico">Ver completo</button>
      </div>
      <div class="schedule-list">
        ${state.schedule.slice(0, 5).map(scheduleItem).join("")}
      </div>
    </section>
  `;
}

function scheduleItem(item) {
  return `
    <article class="schedule-card">
      <div>
        <strong>${item.day}</strong>
        <div class="schedule-time">${item.time}</div>
      </div>
      <div>
        <strong>${item.subject}</strong>
        <small>${item.group} · ${item.teacher} · ${item.room}</small>
      </div>
      <span class="badge Activo">Activo</span>
    </article>
  `;
}

function renderUsers() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="page-kicker">Usuarios del sistema</p>
          <h2>Listado operativo</h2>
        </div>
        <button class="button primary" id="newUser">Nuevo usuario</button>
      </div>
      <div class="toolbar">
        <input id="userSearch" placeholder="Buscar por nombre, correo o seccion">
        <select id="roleFilter">
          <option value="">Todos los roles</option>
          <option>Alumno</option>
          <option>Docente</option>
          <option>Administrador Escolar</option>
          <option>Administrador Financiero</option>
          <option>Administrador General</option>
        </select>
        <select id="statusFilter">
          <option value="">Todos los estados</option>
          <option>Activo</option>
          <option>Pendiente</option>
          <option>Inactivo</option>
        </select>
      </div>
      <div id="usersList" class="student-list"></div>
    </section>
  `;
}

function renderUsersList() {
  const userSearch = document.querySelector("#userSearch")?.value.toLowerCase() || "";
  const role = document.querySelector("#roleFilter")?.value || "";
  const status = document.querySelector("#statusFilter")?.value || "";
  const filtered = state.users.filter((user) => {
    const text = `${user.name} ${user.email} ${user.section}`.toLowerCase();
    return text.includes(userSearch) && (!role || user.role === role) && (!status || user.status === status);
  });

  document.querySelector("#usersList").innerHTML = filtered.map((user) => `
    <article class="student-row">
      <div class="avatar">${initials(user.name)}</div>
      <div>
        <strong>${user.name}</strong>
        <span>${user.email} · ${user.section} · ${user.phone || "Sin telefono"}</span>
      </div>
      <div class="row-actions">
        <span class="badge ${user.role.split(" ")[0]}">${user.role}</span>
        <span class="badge ${user.status}">${user.status}</span>
        ${canHaveCredential(user) ? `<button class="button ghost" data-public-credential="${user.id}">Ver credencial</button>` : ""}
        <button class="button ghost" data-edit-user="${user.id}">Editar</button>
        <button class="button danger" data-delete-user="${user.id}">Eliminar</button>
      </div>
    </article>
  `).join("") || `<p class="subtle">No hay usuarios con esos filtros.</p>`;
}

function syncColorInputs(index) {
  const picker = document.querySelector(`#institutionColor${index}`);
  const text = document.querySelector(`#institutionColorText${index}`);
  if (!picker || !text) return;

  picker.addEventListener("input", () => {
    text.value = picker.value;
  });

  text.addEventListener("input", () => {
    if (/^#[0-9a-fA-F]{6}$/.test(text.value)) {
      picker.value = text.value;
    }
  });
}

function saveInstitution(event) {
  event.preventDefault();
  const colors = Array.from({ length: 5 }, (_, index) => {
    const value = document.querySelector(`#institutionColorText${index}`).value;
    return /^#[0-9a-fA-F]{6}$/.test(value) ? value : seedState.institution.colors[index];
  });

  state.institution = {
    ...state.institution,
    officialName: document.querySelector("#institutionName").value.trim(),
    website: document.querySelector("#institutionWebsite").value.trim(),
    address: document.querySelector("#institutionAddress").value.trim(),
    phones: document.querySelector("#institutionPhones").value.trim(),
    email: document.querySelector("#institutionEmail").value.trim(),
    colors,
    credentialTemplates: {
      alumno: readTemplateForm("alumno"),
      docente: readTemplateForm("docente")
    }
  };

  saveState();
  render();
  showToast("Configuracion institucional guardada");
}

function readTemplateForm(type) {
  return {
    title: document.querySelector(`#${type}TemplateTitle`).value.trim(),
    style: document.querySelector(`#${type}TemplateStyle`).value,
    validityDays: Number(document.querySelector(`#${type}TemplateValidity`).value || 365),
    fields: Array.from(document.querySelectorAll(`[data-template-field="${type}"]:checked`)).map((input) => input.value)
  };
}

function handleLogoUpload(type, file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    if (type === "horizontal") {
      state.institution.horizontalLogo = reader.result;
    } else {
      state.institution.squareLogo = reader.result;
    }
    saveState();
    render();
    showToast("Logotipo cargado");
  });
  reader.readAsDataURL(file);
}

function clearLogo(type) {
  if (type === "horizontal") {
    state.institution.horizontalLogo = "";
  } else {
    state.institution.squareLogo = "";
  }
  saveState();
  render();
  showToast("Logotipo eliminado");
}

function saveActiveDesignerTemplate() {
  const template = activeDesignerTemplate();
  if (!template) return;

  template.name = document.querySelector("#designerTemplateName")?.value.trim() || template.name;
  template.appliesTo = document.querySelector("#designerTemplateApplies")?.value || template.appliesTo;
  template.logoSource = document.querySelector("#designerLogoSource")?.value || template.logoSource;
  template.customized = true;
  saveState();
  render();
  showToast("Plantilla de credencial guardada");
}

function createDesignerTemplate() {
  const appliesTo = document.querySelector("#designerTemplateApplies")?.value || "alumno";
  const id = `tpl-${Date.now()}`;
  const newTemplate = {
    id,
    name: appliesTo === "alumno" ? "Nueva plantilla alumno" : "Nueva plantilla personal",
    appliesTo,
    isActive: true,
    customized: true,
    background: "",
    logoSource: "square",
    elements: defaultDesignerElements(appliesTo).map((element) => ({ ...element, id: `${element.field}-${Date.now()}-${Math.random().toString(16).slice(2, 6)}` }))
  };

  state.institution.designerTemplates.push(newTemplate);
  state.institution.activeDesignerTemplateId = id;
  state.institution.selectedDesignerElementId = newTemplate.elements[0]?.id;
  saveState();
  render();
  showToast("Nueva plantilla creada");
}

function switchDesignerTemplate(id) {
  state.institution.activeDesignerTemplateId = id;
  const template = activeDesignerTemplate();
  state.institution.selectedDesignerElementId = template?.elements[0]?.id;
  saveState();
  render();
}

function handleDesignerBackground(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const template = activeDesignerTemplate();
    template.background = reader.result;
    template.customized = true;
    saveState();
    render();
    showToast("Fondo de plantilla cargado");
  });
  reader.readAsDataURL(file);
}

function clearDesignerBackground() {
  const template = activeDesignerTemplate();
  template.background = "";
  template.customized = true;
  saveState();
  render();
  showToast("Fondo de plantilla eliminado");
}

function addDesignerField(field) {
  const template = activeDesignerTemplate();
  const count = template.elements.filter((element) => element.field === field).length + 1;
  const newElement = {
    id: `${field}-${Date.now()}`,
    field,
    x: 80,
    y: 80 + count * 36,
    w: field === "qr" || field === "logo" ? 130 : 260,
    h: field === "qr" || field === "logo" ? 130 : 60,
    fontSize: field === "name" ? 34 : 24,
    color: template.appliesTo === "alumno" ? "#ffffff" : "#111827",
    orientation: "horizontal"
  };

  template.elements.push(newElement);
  template.customized = true;
  state.institution.selectedDesignerElementId = newElement.id;
  saveState();
  render();
}

function updateSelectedDesignerElement(patch) {
  const template = activeDesignerTemplate();
  const element = selectedDesignerElement(template);
  if (!element) return;
  Object.assign(element, patch);
  template.customized = true;
  saveState();
}

function deleteSelectedDesignerElement() {
  const template = activeDesignerTemplate();
  const selectedId = state.institution.selectedDesignerElementId;
  template.elements = template.elements.filter((element) => element.id !== selectedId);
  template.customized = true;
  state.institution.selectedDesignerElementId = template.elements[0]?.id;
  saveState();
  render();
}

function bindDesignerControls() {
  document.querySelector("#designerTemplateSelect")?.addEventListener("change", (event) => switchDesignerTemplate(event.target.value));
  document.querySelector("#newDesignerTemplate")?.addEventListener("click", createDesignerTemplate);
  document.querySelector("#saveDesignerTemplate")?.addEventListener("click", saveActiveDesignerTemplate);
  document.querySelector("#designerBackgroundInput")?.addEventListener("change", (event) => handleDesignerBackground(event.target.files[0]));
  document.querySelector("#clearDesignerBackground")?.addEventListener("click", clearDesignerBackground);

  ["#designerTemplateName", "#designerTemplateApplies", "#designerLogoSource"].forEach((selector) => {
    document.querySelector(selector)?.addEventListener("change", saveActiveDesignerTemplate);
  });

  document.querySelectorAll("[data-add-field]").forEach((button) => {
    button.addEventListener("click", () => addDesignerField(button.dataset.addField));
  });

  document.querySelectorAll(".designer-element").forEach((elementNode) => {
    elementNode.addEventListener("pointerdown", startDesignerDrag);
    elementNode.addEventListener("click", () => {
      state.institution.selectedDesignerElementId = elementNode.dataset.elementId;
      saveState();
      render();
    });
  });

  document.querySelectorAll(".resize-handle").forEach((handle) => {
    handle.addEventListener("pointerdown", startDesignerResize);
  });

  const numericControls = [
    ["#designerElementX", "x"],
    ["#designerElementY", "y"],
    ["#designerElementW", "w"],
    ["#designerElementH", "h"],
    ["#designerElementFont", "fontSize"]
  ];
  numericControls.forEach(([selector, key]) => {
    document.querySelector(selector)?.addEventListener("input", (event) => {
      updateSelectedDesignerElement({ [key]: Number(event.target.value) });
      updateDesignerCanvasOnly();
    });
  });
  document.querySelector("#designerElementColor")?.addEventListener("input", (event) => {
    updateSelectedDesignerElement({ color: event.target.value });
    updateDesignerCanvasOnly();
  });
  document.querySelector("#designerElementOrientation")?.addEventListener("change", (event) => {
    updateSelectedDesignerElement({ orientation: event.target.value });
    render();
  });
  document.querySelector("#deleteDesignerElement")?.addEventListener("click", deleteSelectedDesignerElement);
}

function updateDesignerCanvasOnly() {
  const stage = document.querySelector("#credentialDesignerStage");
  if (!stage) return;
  stage.innerHTML = renderDesignerCanvas(activeDesignerTemplate());
  bindDesignerControls();
}

function startDesignerDrag(event) {
  if (event.target.classList.contains("resize-handle")) return;
  event.preventDefault();
  const template = activeDesignerTemplate();
  const element = template.elements.find((item) => item.id === event.currentTarget.dataset.elementId);
  const canvas = document.querySelector(".designer-canvas");
  if (!element || !canvas) return;

  state.institution.selectedDesignerElementId = element.id;
  const rect = canvas.getBoundingClientRect();
  const startX = event.clientX;
  const startY = event.clientY;
  const originX = element.x;
  const originY = element.y;

  function move(pointerEvent) {
    const dx = ((pointerEvent.clientX - startX) / rect.width) * credentialCanvas.width;
    const dy = ((pointerEvent.clientY - startY) / rect.height) * credentialCanvas.height;
    element.x = Math.max(0, Math.min(credentialCanvas.width - element.w, originX + dx));
    element.y = Math.max(0, Math.min(credentialCanvas.height - element.h, originY + dy));
    template.customized = true;
    saveState();
    updateDesignerCanvasOnly();
  }

  function up() {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
    render();
  }

  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", up);
}

function startDesignerResize(event) {
  event.preventDefault();
  event.stopPropagation();
  const template = activeDesignerTemplate();
  const element = template.elements.find((item) => item.id === event.currentTarget.dataset.resizeElement);
  const canvas = document.querySelector(".designer-canvas");
  if (!element || !canvas) return;

  state.institution.selectedDesignerElementId = element.id;
  const rect = canvas.getBoundingClientRect();
  const startX = event.clientX;
  const startY = event.clientY;
  const originW = element.w;
  const originH = element.h;

  function move(pointerEvent) {
    const dw = ((pointerEvent.clientX - startX) / rect.width) * credentialCanvas.width;
    const dh = ((pointerEvent.clientY - startY) / rect.height) * credentialCanvas.height;
    element.w = Math.max(24, Math.min(credentialCanvas.width - element.x, originW + dw));
    element.h = Math.max(24, Math.min(credentialCanvas.height - element.y, originH + dh));
    template.customized = true;
    saveState();
    updateDesignerCanvasOnly();
  }

  function up() {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
    render();
  }

  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", up);
}

function renderAcademic() {
  return `
    <div class="section-grid">
      ${weeklySchedulePanel()}
      <section class="panel">
        <p class="page-kicker">Estructura academica</p>
        <h2>Seccion · Nivel · Grupo</h2>
        <div class="module-grid" style="grid-template-columns:1fr">
          ${moduleCard("Preparatoria", "3er semestre · Grupo A · 42 alumnos", "linear-gradient(135deg,#2563eb,#7c3aed)", "3A")}
          ${moduleCard("Secundaria", "2do grado · Grupo B · 36 alumnos", "linear-gradient(135deg,#f97316,#ec4899)", "2B")}
          ${moduleCard("Primaria", "6to grado · Grupo A · 28 alumnos", "linear-gradient(135deg,#059669,#2563eb)", "6A")}
        </div>
      </section>
    </div>
  `;
}

function renderFinance() {
  return `
    ${metricCards()}
    <div class="finance-grid">
      <section class="panel">
        <p class="page-kicker">Pagos de alumnos</p>
        <h2>Control financiero</h2>
        <div class="payments-list">
          ${state.payments.map((payment) => `
            <article class="payment-card">
              <div>
                <strong>${payment.student}</strong>
                <small>${payment.concept} · ${payment.due}</small>
              </div>
              <div style="text-align:right">
                <strong>${money(payment.amount)}</strong><br>
                <span class="badge ${payment.status}">${payment.status}</span>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel">
        <p class="page-kicker">Ingresos por seccion</p>
        <h2>Reporte visual</h2>
        <div class="chart">
          ${[
            ["Prim", 68, "var(--blue)"],
            ["Sec", 54, "var(--purple)"],
            ["Prep", 88, "var(--green)"],
            ["Univ", 42, "var(--orange)"]
          ].map(([label, height, color]) => `<div class="bar" style="height:${height}%;--accent:${color}"><span>${label}</span></div>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderGrades() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="page-kicker">Calificaciones</p>
          <h2>Parcial 1</h2>
        </div>
        <button class="button primary" id="closeGrades">Cerrar periodo</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Alumno</th><th>Materia</th><th>Parcial</th><th>Calificacion</th><th>Estado</th></tr>
          </thead>
          <tbody>
            ${state.grades.map((grade) => `
              <tr>
                <td>${grade.student}</td>
                <td>${grade.subject}</td>
                <td>${grade.partial}</td>
                <td><strong>${grade.grade}</strong></td>
                <td><span class="badge ${grade.status}">${grade.status}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderCredentials() {
  const credentialUsers = state.users.filter(canHaveCredential);
  return `
    <div class="credentials-layout">
      <section class="panel">
        <div class="panel-header">
          <div>
            <p class="page-kicker">Credenciales digitales</p>
            <h2>Generacion y validacion publica</h2>
          </div>
          <button class="button ghost" data-view="institucional">Configurar plantillas</button>
        </div>
        <p class="subtle">Cada credencial puede exponer vigencia, estado activo, tipo de usuario e institucion mediante una URL publica con QR.</p>
        <div class="credential-gallery">
          ${credentialUsers.slice(0, 8).map((user) => renderCredentialCard(user, { compact: true })).join("")}
        </div>
      </section>
      <section class="panel">
        <p class="page-kicker">Configuracion institucional</p>
        <h2>${state.institution.officialName}</h2>
        <div class="student-list">
          <article class="student-row"><div class="avatar">1</div><div><strong>Datos generales</strong><span>${state.institution.email} · ${state.institution.phones}</span></div><span class="badge Activo">Listo</span></article>
          <article class="student-row"><div class="avatar">2</div><div><strong>Logotipo horizontal</strong><span>Para panel web y documentos PDF</span></div><span class="badge ${state.institution.horizontalLogo ? "Activo" : "Pendiente"}">${state.institution.horizontalLogo ? "Listo" : "Pendiente"}</span></article>
          <article class="student-row"><div class="avatar">3</div><div><strong>Logotipo cuadrado</strong><span>Para app, perfil y credenciales</span></div><span class="badge ${state.institution.squareLogo ? "Activo" : "Pendiente"}">${state.institution.squareLogo ? "Listo" : "Pendiente"}</span></article>
          <article class="student-row"><div class="avatar">4</div><div><strong>Colores institucionales</strong><span>Hasta 5 colores configurables</span></div><div class="swatch-row">${state.institution.colors.map((color) => `<span class="swatch" style="background:${color}"></span>`).join("")}</div></article>
        </div>
      </section>
    </div>
  `;
}

function renderCredentialValidation(user) {
  if (!user) {
    return `
      <section class="public-validation">
        <div class="validation-card">
          <span class="badge Vencido">No encontrada</span>
          <h2>Credencial no valida</h2>
          <p class="subtle">La URL consultada no corresponde a una credencial registrada en ${state.institution.officialName}.</p>
          <button class="button primary" id="returnFromValidation">Volver al sistema</button>
        </div>
      </section>
    `;
  }

  const isActive = user.status === "Activo";
  const templateType = credentialTemplateType(user);
  const template = state.institution.credentialTemplates[templateType];
  return `
    <section class="public-validation">
      <div class="validation-card">
        <div class="validation-brand">
          <div class="credential-logo large">${logoMarkup("square")}</div>
          <div>
            <p class="page-kicker">Validacion publica de credencial</p>
            <h2>${state.institution.officialName}</h2>
          </div>
        </div>
        <div class="validation-status ${isActive ? "ok" : "bad"}">
          <strong>${isActive ? "Credencial vigente" : "Credencial inactiva"}</strong>
          <span>${isActive ? "La persona se encuentra activa en la institucion." : "La persona no cuenta con estado activo."}</span>
        </div>
        <div class="validation-preview">
          ${renderCredentialCard(user, { compact: true })}
        </div>
        <div class="validation-grid">
          <div><span>Nombre completo</span><strong>${user.name}</strong></div>
          <div><span>Tipo de usuario</span><strong>${user.role}</strong></div>
          <div><span>Seccion</span><strong>${user.section}</strong></div>
          <div><span>Nivel</span><strong>${user.level || "Pendiente"}</strong></div>
          <div><span>Grupo</span><strong>${user.group || "Pendiente"}</strong></div>
          <div><span>Correo</span><strong>${user.email}</strong></div>
          <div><span>Vigencia</span><strong>${template.validityDays} dias</strong></div>
          <div><span>Institucion</span><strong>${state.institution.officialName}</strong></div>
        </div>
        <button class="button primary" id="returnFromValidation">Volver al sistema</button>
      </div>
    </section>
  `;
}

function renderReports() {
  return `
    <section class="panel">
      <p class="page-kicker">Reportes administrativos</p>
      <h2>Indicadores clave</h2>
      <div class="report-grid reports-layout">
        ${moduleCard("Morosidad", "2 pagos vencidos detectados", "linear-gradient(135deg,#f97316,#dc2626)", "!")}
        ${moduleCard("Alumnos activos", "Crecimiento mensual estable", "linear-gradient(135deg,#2563eb,#10b981)", "+")}
        ${moduleCard("Promedios", "Promedio general 8.2", "linear-gradient(135deg,#7c3aed,#2563eb)", "8")}
        ${moduleCard("Auditoria", "24 acciones registradas", "linear-gradient(135deg,#111827,#64748b)", "A")}
      </div>
    </section>
  `;
}

function renderMobileApp() {
  const previewUser = state.users.find((user) => user.role === "Alumno") || state.users.find(canHaveCredential);
  return `
    <section class="mobile-preview">
      <div class="mobile-screen">
        <div class="mobile-header">
          <div>
            <p class="page-kicker">Panel personal</p>
            <h2>Hola, ${previewUser.name.split(" ")[0]}</h2>
          </div>
          <div class="avatar">${initials(previewUser.name)}</div>
        </div>
        <article class="app-card">
          <p class="eyebrow" style="color:rgba(255,255,255,.7)">Mi credencial digital</p>
          <h3>${previewUser.name}</h3>
          <p>${previewUser.role} · ${previewUser.section} · ${previewUser.group || "Grupo pendiente"} · ${previewUser.status}</p>
          <button class="button light-button" data-public-credential="${previewUser.id}" type="button">Ver validacion</button>
        </article>
        <div class="mobile-credential-card">
          ${renderCredentialCard(previewUser, { compact: true })}
        </div>
        <article class="app-card light">
          <h3>Proximo horario</h3>
          ${scheduleItem(state.schedule[0])}
        </article>
        <article class="app-card light">
          <h3>Pagos</h3>
          <div class="payment-card">
            <div><strong>Colegiatura Mayo</strong><small>Vence 2026-05-25</small></div>
            <div style="text-align:right"><strong>${money(1850)}</strong><br><span class="badge Pendiente">Pendiente</span></div>
          </div>
        </article>
        <article class="app-card light">
          <h3>Calificaciones</h3>
          <div class="student-row" style="padding:0;border:0">
            <div class="avatar">9</div>
            <div><strong>Matematicas III</strong><span>Parcial 1</span></div>
            <span class="badge Aprobado">9.4</span>
          </div>
        </article>
      </div>
    </section>
  `;
}

function initials(name) {
  return name.split(" ").slice(0, 2).map((word) => word[0]).join("").toUpperCase();
}

function openUserModal(userId) {
  const user = state.users.find((item) => item.id === userId);
  document.querySelector("#modalTitle").textContent = user ? "Editar usuario" : "Nuevo usuario";
  document.querySelector("#userId").value = user?.id || "";
  document.querySelector("#userName").value = user?.name || "";
  document.querySelector("#userRole").value = user?.role || "Alumno";
  document.querySelector("#userEmail").value = user?.email || "";
  document.querySelector("#userPhone").value = user?.phone || "";
  document.querySelector("#userSection").value = user?.section || "Preparatoria";
  document.querySelector("#userStatus").value = user?.status || "Activo";
  userModal.showModal();
}

function saveUser(event) {
  event.preventDefault();
  const id = document.querySelector("#userId").value || `u-${Date.now()}`;
  const payload = {
    id,
    name: document.querySelector("#userName").value.trim(),
    role: document.querySelector("#userRole").value,
    email: document.querySelector("#userEmail").value.trim(),
    phone: document.querySelector("#userPhone").value.trim(),
    section: document.querySelector("#userSection").value,
    status: document.querySelector("#userStatus").value,
    balance: state.users.find((user) => user.id === id)?.balance || 0
  };

  const index = state.users.findIndex((user) => user.id === id);
  if (index >= 0) {
    state.users[index] = payload;
  } else {
    state.users.unshift(payload);
  }

  saveState();
  userModal.close();
  render();
  showToast(index >= 0 ? "Usuario actualizado" : "Usuario creado");
}

function deleteUser(id) {
  state.users = state.users.filter((user) => user.id !== id);
  saveState();
  renderUsersList();
  showToast("Usuario eliminado");
}

function bindViewEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.querySelector("#newUser")?.addEventListener("click", () => openUserModal());
  document.querySelector("#closeGrades")?.addEventListener("click", () => showToast("Periodo cerrado en modo demostracion"));
  document.querySelector("#returnFromValidation")?.addEventListener("click", () => {
    history.pushState({}, "", "/");
    setView("credenciales");
  });

  if (state.view === "institucional") {
    document.querySelector("#institutionForm")?.addEventListener("submit", saveInstitution);
    state.institution.colors.forEach((_, index) => syncColorInputs(index));
    document.querySelector("#horizontalLogoInput")?.addEventListener("change", (event) => handleLogoUpload("horizontal", event.target.files[0]));
    document.querySelector("#squareLogoInput")?.addEventListener("change", (event) => handleLogoUpload("square", event.target.files[0]));
    bindDesignerControls();
  }

  if (state.view === "usuarios") {
    renderUsersList();
    ["#userSearch", "#roleFilter", "#statusFilter"].forEach((selector) => {
      document.querySelector(selector).addEventListener("input", renderUsersList);
    });
  }

  document.querySelectorAll("[data-edit-user]").forEach((button) => {
    button.addEventListener("click", () => openUserModal(button.dataset.editUser));
  });

  document.querySelectorAll("[data-delete-user]").forEach((button) => {
    button.addEventListener("click", () => deleteUser(button.dataset.deleteUser));
  });

  document.querySelectorAll("[data-clear-logo]").forEach((button) => {
    button.addEventListener("click", () => clearLogo(button.dataset.clearLogo));
  });

  document.querySelectorAll("[data-public-credential]").forEach((button) => {
    button.addEventListener("click", () => {
      history.pushState({}, "", `/?credential=${encodeURIComponent(button.dataset.publicCredential)}`);
      render();
    });
  });
}

function closeDrawer() {
  sidebar.classList.remove("open");
  drawerBackdrop.classList.remove("show");
}

document.querySelector("#mobileMenu").addEventListener("click", () => {
  sidebar.classList.add("open");
  drawerBackdrop.classList.add("show");
});

drawerBackdrop.addEventListener("click", closeDrawer);

globalSearch.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  if (!query) return;

  const match = state.users.find((user) => `${user.name} ${user.email}`.toLowerCase().includes(query));
  if (match) {
    setView("usuarios");
    window.setTimeout(() => {
      const input = document.querySelector("#userSearch");
      if (input) {
        input.value = query;
        renderUsersList();
      }
    }, 0);
  }
});

userForm.addEventListener("submit", saveUser);
document.querySelector("#closeUserModal").addEventListener("click", () => userModal.close());
document.querySelector("#cancelUserModal").addEventListener("click", () => userModal.close());
render();
