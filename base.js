module.exports = {
  extends: [
    require.resolve('./configs/eslint'),
    require.resolve('./configs/typescript-eslint'),
    require.resolve('./configs/sonar'),
    require.resolve('./configs/jest'),
    require.resolve('./configs/import'),
  ],
  ignorePatterns: ['node_modules/', 'dist/', '*.d.ts'],
  env: {
    jest: true,
    node: true,
  },
}
