const path = require('path');

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: ['@mf-demo/eslint-config/react'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: path.resolve(__dirname, 'tsconfig.app.json'),
      },
    },
  },
  overrides: [
    {
      files: ['*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  ignorePatterns: ['node_modules/*', 'dist/*', 'turbo/*', 'public/*'],
};
