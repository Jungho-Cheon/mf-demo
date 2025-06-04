/**
 * Eslint Module Resolver Patch
 * https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Prettier와 ESLint 통합
  ],
  env: {
    es2024: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
  },
};
