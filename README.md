# 목표
* Nuxt.js로 SPA 개인 페이지를 만듭니다.

# 제작
## 기초 세팅
> ref: https://ko.nuxtjs.org/docs/2.x/deployment/github-pages/
1. nuxt project 시작
   ```bash
   $ yarn create nuxt-app <project name>
   ```
   1. Git remote 연결
   ```bash
   $ git remote add origin <repo>
   # git init 등 기초 세팅
   ```
1. deploy 기초 세팅
   ```javascript
   // nuxt.config.js
   export default {
     target: 'static',
     router: {
       base: '/<repository-name>/'
     }
   }
   ```
1. push-dir 설치
   ```bash
   yarn add --dev push-dir
   ```
1. `deploy` scripts 추가 (in `package.json`)
   ```json
   "scripts": {
     "dev": "nuxt",
     "generate": "nuxt generate",
     "start": "nuxt start",
     "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
   },
   ```
1. dist 생성 및 배포
   ```bash
   # dist 생성
   npm run generate
   
   # 배포
   npm run deploy
   ```

## Build Setup
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# deploy
$ yarn deploy
```

## Font
### 웹 폰트 적용
* 방법
  1. `nuxt.config.js` 옵션 변경 적용
     ```javascript
     vuetify: {
       customVariables: ['~/assets/variables.scss'],
       treeShake: true,
       defaultAssets: false
     },
     ```
  1. `nuxt.config.js`에 head/link 부분 추가
     ```javascript
     head: {
       /* 생략 */
       link: [
       /* How to use Web Font (Spoka Sans) in Nuxt
       ref: https://ichi.pro/ko/vuetify-js-mich-nuxt-jseseo-gibon-geulkkol-byeongyeong-62212184407824
       ref2 (font Official): https://spoqa.github.io/spoqa-han-sans/ko-KR/
       */
       {
         rel: 'stylesheet',
         type: 'text/css',
         href:
           '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css'
       },
     }
     ```
  2. `/assets/variables.scss` 추가
     ```javascript
     $body-font-family: 'font name';
     $heading-font-family: 'font name';
 
     @import '~vuetify/src/styles/styles.sass';
     ```
* 참조
   * 현재 폰트 : 스포카 한 산스 폰트 ([Official Link](https://spoqa.github.io/spoqa-han-sans/ko-KR/))
   * [Vuetify.js 및 Nuxt.js에서 기본 글꼴 변경](https://ichi.pro/ko/vuetify-js-mich-nuxt-jseseo-gibon-geulkkol-byeongyeong-62212184407824)

# 참조
* For detailed explanation on how things work
* check out [Nuxt.js docs](https://nuxtjs.org).
