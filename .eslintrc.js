module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // ignore file or folder
  ignorePatterns: [
    'ga.js', // google analytics
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off', // This rule reports all uses of v-html directive in order to reduce the risk of injecting potentially unsafe / unescaped html into the browser leading to Cross-Site Scripting (XSS) attacks.
  },
}
