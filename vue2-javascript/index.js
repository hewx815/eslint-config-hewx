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
    'plugin:vue/recommended'
  ],
  overrides: [],
  parserOptions: { ecmaVersion: 'latest' },
  globals: { // 全局变量
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue', 'scss'], // @/引入问题
      },
    },
  },
  plugins: ['import', 'promise', 'vue'],
  rules: {
    'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['state'] }], // 函数参数可修改白名单
    'max-len': [0], // 忽略每行长度
  },
};
