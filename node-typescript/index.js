module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'promise', 'node', '@typescript-eslint'],
  parserOptions: {
    project: true,
  },
  rules: {
    "max-len": [0],
    "node/no-unsupported-features/es-syntax": [0],
    "node/no-missing-import": [0],
    "import/no-extraneous-dependencies": [0],
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      "typescript": true
    },
  }
};
