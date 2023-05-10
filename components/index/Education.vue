<template>
  <v-row id="education" justify="center">
    <v-card
      v-for="item in items"
      width="100%"
      class="card-no-border"
      :key="item.title"
    >
      <v-card-title
        class="title-background"
        :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
      >
        {{ item.title }}
      </v-card-title>
      <v-card-subtitle>{{ item.period }}</v-card-subtitle>
      <v-card-text class="text--primary">
        <div v-html="item.desc"></div>
      </v-card-text>

      <v-card-actions v-if="item.href">
        <v-btn :href="item.href" variant="outlined"> 바로가기 </v-btn>
      </v-card-actions>
      <v-col cols="12" sm="6" md="4" lg="3" />
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexEducations extends Vue {
  /* data */

  private items: Array<{
    title: string
    desc: string | null
    period: string
    href: string | null
  }> = [
    {
      title: '바닐라코딩 부트캠프',
      desc:
        '* 자료구조, 정렬 알고리즘, 객체 지향/함수형 프로그래밍, Computer Science 등의 학습을 통해 컴퓨팅 사고력 함양<br>' +
        '* 데일리 알고리즘과 매주 주어지는 프로젝트 형식의 과제, 팀 프로젝트 통해 협업 및 문제 해결 능력 함양<br>',
      period: '2022.3 ~ 2022.12(수료)',
      href: 'https://www.vanillacoding.co/',
    },
    {
      title: '한국방송통신대학교 회계금융전공',
      desc: null,
      period: '2015.3 ~ 2018.08 (졸업)',
      href: null,
    },
  ]
}

export default ComponentsIndexEducations
</script>

<style scoped>
.card-no-border {
  border: none !important; /* border 제거 */
  box-shadow: none !important; /* 그림자 제거 */
  padding: 0 !important; /* padding 제거 */
  margin: 0 !important; /* margin 제거 */
}
</style>
