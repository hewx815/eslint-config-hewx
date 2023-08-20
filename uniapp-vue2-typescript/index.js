module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:vue/recommended',
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
  globals: {
    // 全局变量
    uni: 'writable',
    getCurrentPages: 'readonly',

    // @dcloudio/types
    UniNamespace: 'readonly',
    UniApp: 'readonly',
    UniCloudNamespace: 'readonly',
    UniCloud: 'readonly',
    HBuilderX: 'readonly',
    Plus: 'readonly',
    App: 'readonly',
    Page: 'readonly',
    Uni: 'readonly',
  },
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
    "import/no-extraneous-dependencies": [
      "error",
      {
        "peerDependencies": false
      }
    ],
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
