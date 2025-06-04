module.exports = {
  extends: [
    './base',
    'plugin:vue/vue2-recommended', // Vue 2.0 사용
    '@vue/typescript/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ],
    // Vue 컴포넌트 props 타입 체크
    'vue/require-prop-types': 'error',
    'vue/require-prop-type-constructor': 'error',
    // Vue 메서드 반환 타입 명시
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
  },
}; 