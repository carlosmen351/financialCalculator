# 📱 Calculadora Financiera

Herramienta moderna para presupuestos e inversión. Una aplicación web minimalista y funcional para gestionar tus finanzas personales.

## ✨ Características

- **Calculadora de Ahorro**: Calcula el rendimiento de tus ahorros con interés simple
- **Calculadora de Inversión**: Proyecta el crecimiento de inversiones con interés compuesto
- **Calculadora de Presupuesto**: Analiza tu balance mensual y gastos
- **Tema Oscuro/Claro**: Toggle entre temas con persistencia local
- **Animaciones Fluidas**: Transiciones suaves y efectos visuales
- **Responsive Design**: Funciona perfectamente en desktop, tablet y móvil
- **Tests Unitarios**: Cobertura completa con Mocha + Chai

## 🚀 Tech Stack

- **Frontend**: Vanilla JavaScript ES6+
- **Bundler**: Vite 5.0
- **Estilos**: CSS3 + PostCSS
- **Testing**: Mocha + Chai
- **Deployment**: Vercel

## 📦 Instalación

### Requisitos
- Node.js 16+
- npm o yarn

### Setup

\\\ash
# Clonar el repositorio
git clone https://github.com/carlosmen351/financialCalculator.git
cd financialCalculator

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Ejecutar tests
npm test

# Build para producción
npm run build

# Preview del build
npm run preview
\\\

## 📋 Uso

### Calculadora de Ahorro
1. Ingresa tu monto inicial
2. Especifica la tasa de interés anual
3. Define el período en meses
4. Presiona "Calcular" para ver el resultado

### Calculadora de Inversión
1. Ingresa tu inversión inicial
2. Define el retorno anual esperado
3. Especifica el período en años
4. Obtén el monto final y la ganancia

### Calculadora de Presupuesto
1. Ingresa tus ingresos mensuales
2. Registra tus gastos mensuales
3. Visualiza el balance y estado

## 🧪 Testing

Ejecuta los tests con:

\\\ash
npm test
\\\

Los tests cubren:
- Cálculos matemáticos correctos
- Formato de moneda
- Detección de superávit/déficit
- Validación de entrada

## 📐 Estructura

\\\
src/
├── main.js                          # Entry point
├── styles/
│   ├── main.css                    # Estilos principales
│   └── theme.css                   # Variables y tema
└── components/
    ├── calculator-ahorro.js        # Calculadora de ahorro
    ├── calculator-inversion.js     # Calculadora de inversión
    └── calculator-presupuesto.js   # Calculadora de presupuesto

tests/
└── calculators.test.js             # Tests unitarios

index.html                           # HTML principal
vite.config.js                       # Config de Vite
postcss.config.js                    # Config de PostCSS
\\\

## 🎨 Tema

La aplicación usa el esquema de colores del portafolio principal:

- **Primary**: #58A6FF (Azul)
- **Accent**: #39D39F (Verde)
- **Background**: #0D1117 (Oscuro)
- **Text**: #E6EDF3 (Claro)

## 🌐 Deployment

Deployada en Vercel con subdominio personalizado:
- **URL**: https://fin-calc.carlosmeneses.dev

## 📄 Licencia

MIT - Libre para usar y distribuir

## 👤 Autor

**Carlos Meneses** - [@carlosmen351](https://github.com/carlosmen351)

- Portfolio: https://carlosmeneses.dev
- GitHub: https://github.com/carlosmen351

## 📝 Roadmap

- [ ] Guardar historial de cálculos (localStorage)
- [ ] Gráficas de visualización
- [ ] Exportar resultados a PDF
- [ ] PWA (Progressive Web App)
- [ ] Más calculadoras (hipoteca, retiro, etc)
- [ ] Soporte multiidioma
