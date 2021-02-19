module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react',
  ],
  plugins: ['react-hooks', 'security', 'xss', 'no-unsanitized'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
  rules: {
    'no-alert': 'error',
    'xss/no-location-href-assign': 'error',
    'no-unsanitized/method': 'warn',
    'no-unsanitized/property': 'warn',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [],
      },
    ],
    'jsx-a11y/aria-role': [
      'error',
      {
        ignoreNonDOM: true,
      },
    ],
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-onchange': 'off',
    'react/display-name': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'security/detect-unsafe-regex': 'warn',
    'security/detect-non-literal-regexp': 'warn',
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/require-await': 'off',
      },
    },
  ],
}
