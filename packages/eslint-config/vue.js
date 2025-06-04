/**
 * Eslint Module Resolver Patch
 * https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['./base', 'plugin:vue/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'vue/multi-word-component-names': 'warn',
    'vue/require-default-prop': 'error',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
