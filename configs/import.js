module.exports = {
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  rules: {
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never" },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/__tests__/**/*",
          "**/*.test.{js,jsx,ts,tsx}",
          "**/util/**/*",
          "**/jest.config.js",
        ],
        peerDependencies: true,
        optionalDependencies: true,
      },
    ],
    "import/no-useless-path-segments": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        groups: [
          ["builtin", "external"],
          "internal",
          "unknown",
          "parent",
          ["sibling", "index"],
        ],
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "import/no-unresolved": "error",
  },
  overrides: [
    {
      files: ["**/jest.config.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"],
      },
    },
  },
};
