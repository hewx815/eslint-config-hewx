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
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ['import', 'promise', 'node','@typescript-eslint'],
  rules: {
    "node/no-unsupported-features/es-syntax": [0],
    "node/no-missing-import": [0]
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true
    }
  }
};
