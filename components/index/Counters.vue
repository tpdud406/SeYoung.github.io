<template>
  <v-card flat tile>
    <p class="main-title d-flex justify-center mb-8 px-6" v-html="title" />
    <v-container class="px-10" fluid>
      <v-row justify="center">
        <v-col
          v-for="(item, index) in items"
          :key="index"
          :cols="reactiveCols"
          class="d-flex justify-center"
        >
          <counter :upper-item="item" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Counter from '@/components/index/Counters/Counter.vue'

export default {
  components: {
    Counter,
  },
  data() {
    return {
      title: '증명하는 수',
      items: [
        {
          icon: 'mdi-file-video',
          number: '475',
          title: '금융·경제/IT 영상 수',
          text:
            '함께 학습, 교육용 자료로써 Youtube 업로드한 강의 영상의 총 수, ' +
            '2016년 4월 ~ 2021년 2월 9일까지 업로드 분량 기준',
          color: 'blue darken-1',
        },
        {
          icon: 'mdi-clock-start',
          number: '154,138',
          title: '시청된 시간',
          text:
            'Youtube 채널에서 약 22,400명의 구독자가 210만 회 조회하며 ' +
            '실제 시청한 시간의 2021년 2월 10일 기준 총합 (단위: 시간)',
          color: 'blue darken-1',
        },
        {
          icon: 'mdi-television-classic',
          number: '40',
          title: '방송(TV) 출연 횟수',
          text:
            '<해외투자 따라잡기>, <글로벌 이슈5>를 통해 금융 투자 및 이슈 분석 ' +
            '관련으로 매일경제TV M머니에 약 7개월 동안 출연한 총 횟수',
          color: 'blue darken-1',
        },
        {
          icon: 'mdi-keyboard',
          number: '1,267',
          title: '개발 기여 수',
          text:
            'Github에서 프로젝트 참여(Commits, Issues, Pull ' +
            'requests, Discussions)통한 집계 기여 수의 ' +
            '2020년 기준 총합',
          color: 'purple',
        },
      ],
    }
  },
  computed: {
    reactiveCols() {
      const cols = this.$vuetify.breakpoint.xsOnly ? '12' : '6'
      return cols
    },
  },
}
</script>

<style scoped>
.main-title {
  font-size: 1.6rem !important;
  font-weight: 500;
}
</style>
