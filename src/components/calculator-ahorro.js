export class AhorroCalculator {
  constructor() {
    this.monto = 0;
    this.tasa = 0;
    this.meses = 0;
    this.resultado = 0;
  }

  calcular(monto, tasa, meses) {
    this.monto = parseFloat(monto) || 0;
    this.tasa = parseFloat(tasa) || 0;
    this.meses = parseFloat(meses) || 0;

    const interes = this.monto * (this.tasa / 100) * (this.meses / 12);
    this.resultado = this.monto + interes;

    return this.resultado;
  }

  getFormatted() {
    return this.resultado.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    });
  }
}

export function renderAhorroCalculator() {
  return `
    <div class="calculator-card">
      <h2 style="color: var(--color-primary); margin-bottom: var(--spacing-lg);">💰 Calculadora de Ahorro</h2>
      <form id="ahorro-form">
        <div class="form-row">
          <div class="form-group">
            <label for="ahorro-monto">Monto Inicial ($)</label>
            <input type="number" id="ahorro-monto" placeholder="10000" min="0" step="0.01" required>
          </div>
          <div class="form-group">
            <label for="ahorro-tasa">Tasa de Interés Anual (%)</label>
            <input type="number" id="ahorro-tasa" placeholder="5" min="0" step="0.01" required>
          </div>
        </div>
        <div class="form-group">
          <label for="ahorro-meses">Período (meses)</label>
          <input type="number" id="ahorro-meses" placeholder="12" min="0" step="1" required>
        </div>
        <div class="button-group">
          <button type="submit" class="btn btn-primary">Calcular</button>
          <button type="reset" class="btn btn-secondary">Limpiar</button>
        </div>
        <div id="ahorro-result" class="hidden">
          <div class="result-box">
            <div class="result-label">Monto Total con Intereses</div>
            <div class="result-value" id="ahorro-value">$0.00</div>
          </div>
        </div>
      </form>
    </div>
  `;
}

export function setupAhorroCalculator() {
  const calculator = new AhorroCalculator();
  const form = document.getElementById('ahorro-form');
  const resultDiv = document.getElementById('ahorro-result');
  const resultValue = document.getElementById('ahorro-value');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const monto = document.getElementById('ahorro-monto').value;
    const tasa = document.getElementById('ahorro-tasa').value;
    const meses = document.getElementById('ahorro-meses').value;

    calculator.calcular(monto, tasa, meses);
    resultValue.textContent = calculator.getFormatted();
    resultDiv.classList.remove('hidden');
  });
}