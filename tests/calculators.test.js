import { expect } from 'chai';
import { AhorroCalculator } from '../src/components/calculator-ahorro.js';
import { InversionCalculator } from '../src/components/calculator-inversion.js';
import { PresupuestoCalculator } from '../src/components/calculator-presupuesto.js';

describe('Calculadora de Ahorro', () => {
  let calculator;

  beforeEach(() => {
    calculator = new AhorroCalculator();
  });

  it('debe calcular el interés correctamente', () => {
    const resultado = calculator.calcular(10000, 5, 12);
    const esperado = 10000 + (10000 * 0.05 * 1); // 10500
    expect(resultado).to.equal(esperado);
  });

  it('debe retornar 0 con valores vacíos', () => {
    const resultado = calculator.calcular('', '', '');
    expect(resultado).to.equal(0);
  });

  it('debe formatar la moneda correctamente', () => {
    calculator.calcular(10000, 5, 12);
    const formatted = calculator.getFormatted();
    expect(formatted).to.include('\$');
  });
});

describe('Calculadora de Inversión', () => {
  let calculator;

  beforeEach(() => {
    calculator = new InversionCalculator();
  });

  it('debe calcular la inversión compuesta correctamente', () => {
    const resultado = calculator.calcular(10000, 10, 2);
    const esperado = 10000 * Math.pow(1.1, 2); // 12100
    expect(resultado).to.be.closeTo(esperado, 0.01);
  });

  it('debe calcular la ganancia correctamente', () => {
    calculator.calcular(10000, 10, 2);
    const ganancia = calculator.resultado - calculator.monto;
    expect(ganancia).to.be.closeTo(2100, 0.01);
  });

  it('debe retornar 0 con valores vacíos', () => {
    const resultado = calculator.calcular('', '', '');
    expect(resultado).to.equal(0);
  });
});

describe('Calculadora de Presupuesto', () => {
  let calculator;

  beforeEach(() => {
    calculator = new PresupuestoCalculator();
  });

  it('debe calcular el balance correctamente', () => {
    const resultado = calculator.calcular(30000, 20000);
    expect(resultado).to.equal(10000);
  });

  it('debe detectar superávit', () => {
    calculator.calcular(30000, 20000);
    const status = calculator.getStatus();
    expect(status.text).to.equal('Superávit');
  });

  it('debe detectar déficit', () => {
    calculator.calcular(20000, 30000);
    const status = calculator.getStatus();
    expect(status.text).to.equal('Déficit');
  });

  it('debe calcular el porcentaje de gastos', () => {
    calculator.calcular(10000, 5000);
    const percentage = calculator.getPercentage();
    expect(percentage).to.equal('50.00');
  });

  it('debe retornar 0 con valores vacíos', () => {
    const resultado = calculator.calcular('', '');
    expect(resultado).to.equal(0);
  });
});
