import "./styles/main.css";
import { renderAhorroCalculator, setupAhorroCalculator } from "./components/calculator-ahorro.js";
import { renderInversionCalculator, setupInversionCalculator } from "./components/calculator-inversion.js";
import { renderPresupuestoCalculator, setupPresupuestoCalculator } from "./components/calculator-presupuesto.js";

let currentTab = "ahorro";

function initApp() {
  const app = document.getElementById("app");

  const htmlContent = `
    <header class="header">
      <div class="header-content">
        <a href="#" class="logo">
          <span>📱</span>
          <span>Calculadora Financiera</span>
        </a>
        <div class="controls">
          <button class="theme-toggle" id="theme-toggle">🌙 Oscuro</button>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="content">
        <h1 class="title">Calculadora Financiera</h1>
        <p class="subtitle">Herramientas para presupuestos e inversión</p>

        <div class="tabs-container">
          <button class="tab-button active" data-tab="ahorro">💰 Ahorro</button>
          <button class="tab-button" data-tab="inversion">📈 Inversión</button>
          <button class="tab-button" data-tab="presupuesto">📊 Presupuesto</button>
        </div>

        <div id="calculator-container"></div>
      </div>
    </div>

    <footer class="footer">
      <p>© 2024 Calculadora Financiera. Creado por <a href="https://carlosmeneses.dev" style="color: var(--color-primary); text-decoration: none;">Carlos Meneses</a></p>
    </footer>
  `;

  app.innerHTML = htmlContent;

  setupTheme();
  setupTabs();
  loadCalculator("ahorro");
}

function setupTheme() {
  const toggle = document.getElementById("theme-toggle");
  const isDark = localStorage.getItem("theme") !== "light";

  if (!isDark) {
    document.body.classList.add("light");
    toggle.textContent = "☀️ Claro";
  }

  toggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    toggle.textContent = isLight ? "☀️ Claro" : "🌙 Oscuro";
  });
}

function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.getAttribute("data-tab");
      loadCalculator(tab);

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      currentTab = tab;
    });
  });
}

function loadCalculator(tab) {
  const container = document.getElementById("calculator-container");

  switch (tab) {
    case "ahorro":
      container.innerHTML = renderAhorroCalculator();
      setupAhorroCalculator();
      break;
    case "inversion":
      container.innerHTML = renderInversionCalculator();
      setupInversionCalculator();
      break;
    case "presupuesto":
      container.innerHTML = renderPresupuestoCalculator();
      setupPresupuestoCalculator();
      break;
  }
}

document.addEventListener("DOMContentLoaded", initApp);