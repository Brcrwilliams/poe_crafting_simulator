module.exports = {
  root: true,
  env: {
    node: true,
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript",
  ],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "quotes": ["error", "double"],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
}
