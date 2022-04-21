module.exports = {
  "extends": [
    "taro/vue3",
  ],
  plugins: ['@typescript-eslint'],
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": "@typescript-eslint/parser"
  },
  "rules": {
    "prefer-const": "off",
    "no-unused-vars": "off",
    "vue/valid-v-for": "off",
  },
}
