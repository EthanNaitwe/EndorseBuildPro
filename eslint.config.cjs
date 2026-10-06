/**
 * Minimal ESLint flat config so `npx --yes eslint .` runs without prompting
 * This avoids requiring additional plugins while letting the linter run.
 */
module.exports = [
  {
    ignores: ["node_modules/**", "dist/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {},
  },
];
