module.exports = {
  plugins: ["sonarjs"],
  extends: ["plugin:sonarjs/recommended-legacy"],
  rules: {
    "sonarjs/no-duplicate-string": ["error", { threshold: 10 }],
    "sonarjs/prefer-immediate-return": "off",
  },
};
