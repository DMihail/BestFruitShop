/** @format */

const path = require('path');

module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'prettier', 'react', 'react-hooks', 'react-native'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      [path.resolve('eslint-image-resolver.js')]: {},
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'no-restricted-imports': 'off',
    'react-native/no-inline-styles': 0,
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    // this is for sorting imports
    'import/order': [
      'error',
      {
        'groups': [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
        'pathGroups': [
          {
            pattern: 'react+(|-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '~/**',
            group: 'internal',
          },
          {
            pattern: './styles',
            group: 'index',
            position: 'after',
          },
        ],
        'pathGroupsExcludedImportTypes': ['internal', 'react'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unresolved': ['error', { commonjs: true }],
  },
};
