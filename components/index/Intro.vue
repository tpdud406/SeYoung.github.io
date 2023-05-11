<template>
  <v-container id="top-container" fluid style="height: 100vh">
    <v-row justify="center">
      <v-col cols="6">
        <div style="width: 50%; height: 30%; margin: 0 auto">
          <v-img
            :src="require('@/static/index/tempImg.jpeg')"
            contain
            v-if="isDesktop"
            class="image"
          />
        </div>
      </v-col>
      <v-col cols="8" sm="6">
        <h2 class="title">
          하얀 도화지같은 개발자
          <h1 :class="'text-sm-h4 text-h6 font-weight-bold text-center'">
            이세영
          </h1>
          입니다.
        </h2>

        <v-row>
          <p>{{ contentOfTop }}</p>
        </v-row>

        <v-row class="mt-10">
          <h3>Skills</h3>
          <p>
            JavaScript, React, Redux, Framer-Motion, Node.js, Express, MongoDB,
            Socket.io, JWT, Netlify, AWS Elastic Beanstalk, Jest
          </p>
        </v-row>
        <v-row class="mt-10">
          <h3>Projects?</h3>
          <p>1. 블라블라 2. 블라블라</p>
        </v-row>
      </v-col>
    </v-row>
    <v-row style="position: fixed; bottom: 0; width: 100%">
      <v-col class="d-flex justify-center">
        <v-card-actions>
          <v-btn
            v-for="(linkBtn, btnIndex) in linkBtns"
            :key="btnIndex"
            :href="linkBtn.url"
            icon
            target="_blank"
          >
            <v-icon large>{{ linkBtn.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  data() {
    return {
      isDesktop: true, // 이 값을 브라우저 유형에 따라 적절하게 변경해주세요.
    }
  },
})
class PagesIndexIntro extends Vue {
  /* data */

  private contentOfTop: string =
    '팀 프로젝트 경험으로 인해 원활한 커뮤니케이션과 협력 능력을 보유하며, 사용자 경험 개선과 프로젝트 완수에 기여한 경험이 있습니다. 또한, 적극적인 문제 해결 능력을 보유하고 있습니다.'

  private linkBtns: Array<{ url: string; color: string; icon: string }> = [
    {
      url: 'https://github.com/tpdud406',
      color: 'black',
      icon: 'mdi-github',
    },
    {
      url: 'tpdud406@gmail.com',
      color: 'black',
      icon: 'mdi-gmail',
    },
  ]

  private classOfComponent: string = 'my-md-10'
}

export default PagesIndexIntro
</script>

<style>
.title {
  text-align: center; /* 가운데 정렬 */
  color: black; /* 글자 색상 */
  background-color: white; /* 배경색상 */
  padding: 5px; /*여백 설정*/
  margin-top: 3vh;
  margin-bottom: 5vh;
}

.title h1 {
  display: inline;
}

.image {
  justify-items: center;
}

@media screen and (max-width: 600px) {
  .image {
    display: none;
  }
}
</style>
