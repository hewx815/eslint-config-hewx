module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  parser: 'vue-eslint-parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: "@typescript-eslint/parser",
    project: true,
    extraFileExtensions: ['.vue'],
  },
  globals: {},
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue', '.scss', '.ts', '.d.ts'], // @/引入问题
      },
      typescript: true
    },
  },
  plugins: ['import', 'promise', 'vue', '@typescript-eslint'],
  rules: {
    'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['state'] }], // vuex函数参数可修改白名单
    'max-len': [0], // 忽略每行长度
    "import/no-extraneous-dependencies": [0],
    "import/extensions": [
      "error",
      "always",
      {
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
};
