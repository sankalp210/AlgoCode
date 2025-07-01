// eslint.config.js
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.js'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier: prettier,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Let Prettier handle formatting
      'prettier/prettier': 'warn',

      // Logical/best-practice rules only
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
      'prefer-const': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  {
    ignores: ['dist', 'node_modules'],
  },
];
