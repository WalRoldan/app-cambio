module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", // Incluye todos los archivos con estas extensiones
    "!src/**/*.test.{js,jsx,ts,tsx}", // Excluye los archivos de prueba
    "!src/**/index.{js,jsx,ts,tsx}", // Excluye archivos de entrada
  ],
  coverageDirectory: "coverage", // Directorio donde se genera el informe
  coverageReporters: ["text", "lcov"], // Formatos del informe
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
};
