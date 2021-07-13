module.exports = {
  extends: ["plugin:jest/recommended"],
  rules: {
    "jest/lowercase-name": [
      "error",
      {
        ignore: ["describe"],
      },
    ],
    "jest/valid-title": "error",
  },
};
