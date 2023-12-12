module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    "react-native/react-native": true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnd',
    'airbnb-typescript',
    'plugin:import/typescript'
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.ts', '.tsx', '.js', '.jsx']},
    ],
    'no-use-before-define': ['error', {variables: false}],
    'react/prop-types': [
      'error',
      {ignore: ['navigation', 'navigation.navigate']},
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
