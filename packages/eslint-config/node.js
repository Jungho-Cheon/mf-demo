/**
 * Eslint Module Resolver Patch
 * https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'typeAlias',
        format: ['StrictPascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: false,
        },
      },
      {
        selector: 'typeParameter',
        format: ['StrictPascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: false,
        },
      },
      {
        selector: 'interface',
        format: ['StrictPascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
  },
};
