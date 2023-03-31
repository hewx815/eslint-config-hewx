module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'airbnb-base',
      'plugin:import/errors',
      'plugin:import/warnings'
    ],
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
          extensions: ['.js', '.vue'], // @/引入问题
        },
      },
    },
    plugins: ['vue', 'import'],
    rules: {
      'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['state'] }], // 函数参数可修改白名单
      'max-len': [0], // 忽略每行长度
    },
  };