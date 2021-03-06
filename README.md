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
### 기초
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
### TypeScript for Nuxt 세팅
* Nuxt 2.9 이후 외부모듈로 공식 지원 (코어 분리)
#### 기본
   1. 필요 모듈 설치
      ```bash
      yarn add --dev @nuxt/typescript-build @nuxt/types
      ```
   1. 적용
      ```javascript
      // nuxt.config.js

      export default {
        buildModules: ['@nuxt/typescript-build']
      }
      ```
   1. tsconfig.json 만들기 (`root/`)
      ```json
      {
        "compilerOptions": {
          "target": "ES2018",
          "module": "ESNext",
          "moduleResolution": "Node",
          "lib": [
            "ESNext",
            "ESNext.AsyncIterable",
            "DOM"
          ],
          "esModuleInterop": true,
          "allowJs": true,
          "sourceMap": true,
          "strict": true,
          "noEmit": true,
          "baseUrl": ".",
          "paths": {
            "~/*": [
              "./*"
            ],
            "@/*": [
              "./*"
            ]
          },
          "types": [
            "@types/node",
            "@nuxt/types"
          ]
        },
        "exclude": [
          "node_modules"
        ]
      }
      ```
   1. vue-shim.d.ts 만들기 (`root/`)
      ```typescript
      declare module "*.vue" {
        import Vue from 'vue'
        export default Vue
      }
      ```
#### Runtime (optional)
   > TypeScript runtime is needed for files not compiled by Webpack, such as nuxt.config file, local modules and serverMiddlewares.
   1. 설치
      ```bash
      yarn add @nuxt/typescript-runtime
      ```
   1. 아래 참고하여 package.json 수정 (`nuxt` -> `nuxt-ts`)
      ```json
      "scripts": {
        "dev": "nuxt-ts",
        "build": "nuxt-ts build",
        "generate": "nuxt-ts generate",
        "start": "nuxt-ts start"
      },
      "dependencies": {
        "@nuxt/typescript-runtime": "latest",
        "nuxt": "latest"
      },
      "devDependencies": {
        "@nuxt/types": "latest",
        "@nuxt/typescript-build": "latest"
      }
      ```
#### Lint
   1. 설치
      ```bash
      yarn add -D @nuxtjs/eslint-config-typescript
      ```
   1. `.eslintrc.js` 수정
      > 주의 : If you were using babel-eslint as parser, just remove it from your .eslintrc.js and your dependencies.
      ```javascript
      module.exports = {
        extends: [
          '@nuxtjs/eslint-config-typescript'
        ]
      }
      ```
   1. package.json 수정
      ```json
      "lint": "eslint --ext .ts,.js,.vue ."
      ```
#### 참조
* [TypeScript/Nuxt 공식](https://typescript.nuxtjs.org/)
* [TypeScript로 Nuxt 개발하기](https://jhyeok.com/nuxt-with-typescript/)

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
