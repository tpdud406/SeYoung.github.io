<template>
  <v-card flat tile>
    <!-- ### Start : title name ### -->
    <v-card-title class="d-flex justify-center">
      <p class="text-center text-h4 font-weight-black" v-html="title" />
    </v-card-title>

    <v-card-subtitle class="text-center">
      <p class="text-center" v-html="desc" />
    </v-card-subtitle>

    <!-- ### Start : Numbers ### -->
    <v-container fluid>
      <v-row justify="center">
        <v-col v-for="(item, index) in items" :key="index" cols="6" md="3">
          <counter :upper-item="item" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Counter from '@/components/index/Counters/Counter.vue'

@Component({
  components: {
    Counter,
  },
})
class ComponentsIndexCounters extends Vue {
  private title: string = '증명하는 수'
  private desc: string = '숫자로 나타낼 수 있는<br />다양한 업무 기록들입니다.'

  private items: Array<{
    icon: string
    number: string
    title: string
    text: string
    color: string
  }> = [
    {
      icon: 'mdi-file-video',
      number: '492',
      title: '금융·경제/IT 영상',
      text:
        '함께 학습, 교육용 자료로써 Youtube 업로드한 강의 영상의 총 수, ' +
        '2016년 4월 ~ 2022년 5월 31일까지 업로드 분량 기준',
      color: 'dark grey',
    },
    {
      icon: 'mdi-clock-start',
      number: '176,000',
      title: '시청된 시간',
      text:
        'Youtube 채널에서 약 22,400명의 구독자가 210만 회 조회하며 ' +
        '실제 시청한 시간의 2022년 5월 31일 기준 총합 (단위: 시간)',
      color: 'dark grey',
    },
    {
      icon: 'mdi-television-classic',
      number: '40',
      title: '방송(TV) 출연 횟수',
      text:
        '<해외투자 따라잡기>, <글로벌 이슈5>를 통해 금융 투자 및 이슈 분석 ' +
        '관련으로 매일경제TV M머니에 약 7개월 동안 출연한 총 횟수',
      color: 'dark grey',
    },
    {
      icon: 'mdi-keyboard',
      number: '1,917',
      title: '개발 기여 수',
      text:
        'Github에서 프로젝트 참여(Commits, Issues, Pull ' +
        'requests, Discussions)통한 집계 기여 수의 ' +
        '2021년 기준 총합',
      color: 'black',
    },
  ]
}

export default ComponentsIndexCounters
</script>

<style scoped>
.main-title {
  font-size: 1.6rem !important;
  font-weight: 500;
}
</style>
