module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {},
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  plugins: ['prettier'],
  // ignore file or folder
  ignorePatterns: [],
  // add your custom rules here
  rules: {
    'vue/singleline-html-element-content-newline': 'off', // https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
    'vue/no-v-html': 'off', // This rule reports all uses of v-html directive in order to reduce the risk of injecting potentially unsafe / unescaped html into the browser leading to Cross-Site Scripting (XSS) attacks.
    'comma-dangle': ['error', 'only-multiline'], // *conlict prettier, ref : https://eslint.org/docs/rules/comma-dangle
    'space-before-function-paren': ['error', 'never'], // *conlict prettier, ref : https://eslint.org/docs/rules/space-before-function-paren
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // ref: https://velog.io/@realsong/VS-Delete-prettierprettier-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95
    indent: 'off', // error  Delete `··`  prettier/prettier
  },
}
