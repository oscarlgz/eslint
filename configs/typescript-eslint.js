module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  env: {
    jest: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "_e",
      },
    ],
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/no-use-before-define": "error",
    camelcase: "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: "property",
        format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
      {
        selector: "variable",
        modifiers: ["destructured"],
        format: null,
      },
    ],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "off",
      {
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowedNames: [],
        shouldTrackReferences: true,
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: false,
        types: {
          String: {
            message: "Use string instead",
            fixWith: "string",
          },
          Boolean: {
            message: "Use boolean instead",
            fixWith: "boolean",
          },
          Number: {
            message: "Use number instead",
            fixWith: "number",
          },
          Symbol: {
            message: "Use symbol instead",
            fixWith: "symbol",
          },
          Function: {
            message: [
              "The `Function` type accepts any function-like value.",
              "It provides no type safety when calling the function, which can be a common source of bugs.",
              "It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.",
              "If you are expecting the function to accept certain arguments, you should explicitly define the function shape.",
            ].join("\n"),
          },
          Object: {
            message: [
              'The `Object` type actually means "any non-nullish value":',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` or `Record<string, any>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` or `any` instead.',
            ].join("\n"),
          },
          "{}": {
            message: [
              '`{}` actually means "any non-nullish value":',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` or `Record<string, any>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` or `any` instead.',
              "- If you want to set a generic as an empty object, you problably want to use `never` or `Record<string, unknown>` instead",
            ].join("\n"),
          },
          object: {
            message: [
              "The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).",
              "Consider using `Record<string, unknown>` or `Record<string, any>` instead, as it allows you to more easily inspect and use the keys.",
            ].join("\n"),
          },
        },
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: { constructors: "no-public" },
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/prefer-nullish-coalescing": [
      "off",
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      "off",
      {
        allowString: true,
        allowNumber: true,
        allowNullableObject: true,
        allowNullableBoolean: false, // we disallow `boolean | undefined | null`, see `prefer-nullish-coalescing`
        allowNullableString: true,
        allowNullableNumber: true,
        allowAny: true,
      },
    ],
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        ignoreVoid: true,
      },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowAny: true,
      },
    ],
    "@typescript-eslint/no-extraneous-class": [
      "error",
      {
        // We allow constructors only because we also allow the use of parameter properties in class constructors
        // https://www.typescriptlang.org/docs/handbook/classes.html#parameter-properties
        allowConstructorOnly: true,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: false,
      },
    ],
    "@typescript-eslint/no-invalid-void-type": [
      "error",
      {
        // For example, in promises
        allowInGenericTypeArguments: true,
      },
    ],
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-shadow": "error",
  },
  /**
   * Override some rules on JS files
   */
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
      },
    },
    {
      files: ["jest.config.js", ".eslintrc.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
