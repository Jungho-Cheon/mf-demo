/**
 * Eslint Module Resolver Patch
 * https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    './base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
