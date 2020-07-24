module.exports = {
  extends: ['airbnb-base/legacy', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    // Añadidas reglas para prettier
    'prettier/prettier': 'error',
    // Reglas personalizadas
    'require-await': 'error',
    // Desactivados errores con console.log();
    'no-console': 0,
    'no-underscore-dangle': 0,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  env: {
    node: true,
    es6: true,
  },
};
