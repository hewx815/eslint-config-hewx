module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ['import', 'promise', 'node'],
  rules: {
    "import/no-extraneous-dependencies": [0],
  },
};
