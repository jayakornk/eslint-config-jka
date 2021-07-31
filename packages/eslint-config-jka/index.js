module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  globals: {
    __DEV__: true,
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
    'jest/globals': true,
    'shared-node-browser': true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', 'import', 'es'],
  rules: {
    // general ESLint rules
    'no-underscore-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicated': 'error',
    'import/prefer-default-export': 'off',
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'it',
        withinDescribe: 'it',
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: '*.js',
      env: { node: true },
      rules: {
        'simple-import-sort/imports': 'off',
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};