module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'eslint-config-prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['react', 'import'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        distinctGroup: true,
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'apis',
            group: 'internal',
          },
          {
            pattern: 'settings',
            group: 'internal',
          },
          {
            pattern: '@assets/**',
            group: 'internal',
          },
          {
            pattern: '@common/**',
            group: 'internal',
          },
          {
            pattern: '@modules/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: [
          'apis',
          'settings',
          'assets',
          'common',
          'modules',
        ],
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
  },
};
