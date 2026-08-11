// calculator-presupuesto.js
export class PresupuestoCalculator {
  constructor() {
    this.ingresos = 0;
    this.gastos = 0;
    this.resultado = 0;
  }

  calcular(ingresos, gastos) {
    this.ingresos = parseFloat(ingresos) || 0;
    this.gastos = parseFloat(gastos) || 0;
    this.resultado = this.ingresos - this.gastos;

    return this.resultado;
  }

  getFormatted(valor = this.resultado) {
    return valor.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    });
  }

  getStatus() {
    if (this.resultado > 0) {
      return { text: 'Superávit', color: 'var(--color-success)', emoji: '✓' };
    } else if (this.resultado < 0) {
      return { text: 'Déficit', color: 'var(--color-error)', emoji: '✗' };
    }
    return { text: 'Equilibrado', color: 'var(--color-info)', emoji: '=' };
  }

  getPercentage() {
    if (this.ingresos === 0) return 0;
    return ((this.gastos / this.ingresos) * 100).toFixed(2);
  }
}

export function renderPresupuestoCalculator() {
  return `
    <div class="calculator-card">
      <h2 style="color: var(--color-primary); margin-bottom: var(--spacing-lg);">📊 Calculadora de Presupuesto</h2>
      <form id="presupuesto-form">
        <div class="form-row">
          <div class="form-group">
            <label for="presupuesto-ingresos">Ingresos Mensuales ($)</label>
            <input type="number" id="presupuesto-ingresos" placeholder="30000" min="0" step="0.01" required>
          </div>
          <div class="form-group">
            <label for="presupuesto-gastos">Gastos Mensuales ($)</label>
            <input type="number" id="presupuesto-gastos" placeholder="20000" min="0" step="0.01" required>
          </div>
        </div>
        <div class="button-group">
          <button type="submit" class="btn btn-primary">Calcular</button>
          <button type="reset" class="btn btn-secondary">Limpiar</button>
        </div>
        <div id="presupuesto-result" class="hidden">
          <div class="result-box">
            <div class="result-label">Balance</div>
            <div class="result-value" id="presupuesto-value">$0.00</div>
            <div style="margin-top: var(--spacing-lg); padding-top: var(--spacing-lg); border-top: 1px solid var(--color-border); display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-lg);">
              <div>
                <div class="result-label">Estado</div>
                <div class="result-value" id="presupuesto-status" style="font-size: var(--font-size-lg);">-</div>
              </div>
              <div>
                <div class="result-label">% de Gastos</div>
                <div class="result-value" id="presupuesto-percentage" style="font-size: var(--font-size-lg);">-</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  `;
}

export function setupPresupuestoCalculator() {
  const calculator = new PresupuestoCalculator();
  const form = document.getElementById('presupuesto-form');
  const resultDiv = document.getElementById('presupuesto-result');
  const resultValue = document.getElementById('presupuesto-value');
  const statusValue = document.getElementById('presupuesto-status');
  const percentageValue = document.getElementById('presupuesto-percentage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ingresos = document.getElementById('presupuesto-ingresos').value;
    const gastos = document.getElementById('presupuesto-gastos').value;

    calculator.calcular(ingresos, gastos);
    resultValue.textContent = calculator.getFormatted();
    
    const status = calculator.getStatus();
    statusValue.textContent = status.emoji + ' ' + status.text;
    statusValue.style.color = status.color;

    percentageValue.textContent = calculator.getPercentage() + '%';

    resultDiv.classList.remove('hidden');
  });
}