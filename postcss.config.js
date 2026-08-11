
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
