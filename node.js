module.exports = {
  extends: [
    require.resolve("./base"),
    "plugin:node/recommended",
    "plugin:security/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    node: true,
  },
  rules: {
    "node/no-unsupported-features/es-builtins": "off",
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-missing-import": "off",
    "node/no-unpublished-import": "off",
    "node/no-extraneous-import": "off",
    "node/no-extraneous-require": "off",
    "node/no-unsupported-features/node-builtins": [
      "error",
      {
        version: ">=16.0.0",
      },
    ],
    "security/detect-unsafe-regex": "warn",
    "security/detect-buffer-noassert": "warn",
    "security/detect-child-process": "warn",
    "security/detect-disable-mustache-escape": "warn",
    "security/detect-eval-with-expression": "error",
    "security/detect-no-csrf-before-method-override": "warn",
    "security/detect-non-literal-fs-filename": "warn",
    "security/detect-non-literal-regexp": "warn",
    "security/detect-non-literal-require": "warn",
    "security/detect-object-injection": "off",
    "security/detect-possible-timing-attacks": "off",
    "security/detect-pseudoRandomBytes": "warn",
    "security/detect-new-buffer": "warn",
  },
};
