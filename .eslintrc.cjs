require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@mf-demo/eslint-config/node'],
  ignorePatterns: ['**/dist/*'],
};
