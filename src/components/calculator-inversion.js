// calculator-inversion.js
export class InversionCalculator {
  constructor() {
    this.monto = 0;
    this.tasa = 0;
    this.anos = 0;
    this.resultado = 0;
  }

  calcular(monto, tasa, anos) {
    this.monto = parseFloat(monto) || 0;
    this.tasa = parseFloat(tasa) || 0;
    this.anos = parseFloat(anos) || 0;

    this.resultado = this.monto * Math.pow(1 + this.tasa / 100, this.anos);

    return this.resultado;
  }

  getFormatted() {
    return this.resultado.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    });
  }

  getGanancia() {
    const ganancia = this.resultado - this.monto;
    return ganancia.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    });
  }
}

export function renderInversionCalculator() {
  return `
    <div class="calculator-card">
      <h2 style="color: var(--color-primary); margin-bottom: var(--spacing-lg);">📈 Calculadora de Inversión</h2>
      <form id="inversion-form">
        <div class="form-row">
          <div class="form-group">
            <label for="inversion-monto">Inversión Inicial ($)</label>
            <input type="number" id="inversion-monto" placeholder="50000" min="0" step="0.01" required>
          </div>
          <div class="form-group">
            <label for="inversion-tasa">Retorno Anual (%)</label>
            <input type="number" id="inversion-tasa" placeholder="8" min="0" step="0.01" required>
          </div>
        </div>
        <div class="form-group">
          <label for="inversion-anos">Período (años)</label>
          <input type="number" id="inversion-anos" placeholder="5" min="0" step="1" required>
        </div>
        <div class="button-group">
          <button type="submit" class="btn btn-primary">Calcular</button>
          <button type="reset" class="btn btn-secondary">Limpiar</button>
        </div>
        <div id="inversion-result" class="hidden">
          <div class="result-box">
            <div class="result-label">Monto Total</div>
            <div class="result-value" id="inversion-value">$0.00</div>
            <div style="margin-top: var(--spacing-lg); padding-top: var(--spacing-lg); border-top: 1px solid var(--color-border);">
              <div class="result-label">Ganancia</div>
              <div class="result-value" style="color: var(--color-success);" id="inversion-ganancia">$0.00</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  `;
}

export function setupInversionCalculator() {
  const calculator = new InversionCalculator();
  const form = document.getElementById('inversion-form');
  const resultDiv = document.getElementById('inversion-result');
  const resultValue = document.getElementById('inversion-value');
  const gananciaValue = document.getElementById('inversion-ganancia');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const monto = document.getElementById('inversion-monto').value;
    const tasa = document.getElementById('inversion-tasa').value;
    const anos = document.getElementById('inversion-anos').value;

    calculator.calcular(monto, tasa, anos);
    resultValue.textContent = calculator.getFormatted();
    gananciaValue.textContent = calculator.getGanancia();
    resultDiv.classList.remove('hidden');
  });
}