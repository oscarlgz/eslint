module.exports = {
  extends: ['plugin:sonarjs/recommended'],
  rules: {
    'sonarjs/no-duplicate-string': ['error', 10],
    'sonarjs/cognitive-complexity': ['error', 50],
    'sonarjs/prefer-immediate-return': 'off',
    'sonarjs/no-identical-functions': 'off',
  },
}
