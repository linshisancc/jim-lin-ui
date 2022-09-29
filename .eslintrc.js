module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 先删除 'plugin:@typescript-eslint/recommended'
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/display-name': 'off',
    'no-var-requires': 'off',
  },
};
