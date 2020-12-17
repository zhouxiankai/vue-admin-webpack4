module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceMap: "module"
  },
  extends: [
    "plugin:vue/essential",
    "standard"
  ],
  rules: {}
}
  