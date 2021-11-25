module.exports = {
  extends: ["eslint:recommended"],
  rules: {
    "no-console": "warn",
    "no-constructor-return": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "no-shadow": "off",
    "no-var": "error",
    "no-use-before-define": "off",
    "prefer-const": [
      "error",
      {
        ignoreReadBeforeAssign: true,
      },
    ],
    "no-param-reassign": "off",
    "no-eval": "error",
    "no-else-return": ["error", { allowElseIf: false }],
    "no-extend-native": "error",
    curly: "error",
    "no-implicit-globals": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-caller": "error",
    "no-restricted-properties": [
      "error",
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead.",
      },
    ],
    "no-restricted-globals": [
      "error",
      {
        name: "isFinite",
        message: "Use Number.isFinite instead.",
      },
      {
        name: "isNaN",
        message: "Use Number.isNaN instead",
      },
    ],
    "no-return-assign": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    "no-useless-call": "off",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    radix: "error",
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["const", "let", "var", "if", "for", "while"],
        next: "*",
      },
    ],
  },
};
