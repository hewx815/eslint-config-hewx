module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: { ecmaVersion: 'latest' },
  globals: { // 全局变量
    uni: 'writable',
    getCurrentPages: 'readonly',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue', 'scss'], // @/引入问题
      },
    },
  },
  plugins: ['import', 'promise', 'vue', '@typescript-eslint'],
  rules: {
    'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['state'] }], // 函数参数可修改白名单
    'max-len': [0], // 忽略每行长度
  },
};
