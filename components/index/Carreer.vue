<template>
  <v-timeline :dense="$vuetify.breakpoint.xsOnly" class="mx-4">
    <v-timeline-item
      v-for="(item, index) in items"
      :key="index"
      :color="item.color"
      :left="item.left"
      :right="!item.left"
      :hide-dot="item.hideDot"
      small
    >
      <template #opposite>
        <span>{{ item.time }}</span>
      </template>
      <v-card outlined flat>
        <v-img
          v-if="!!item.src"
          :src="item.src"
          max-width="640"
          contain
        ></v-img>
        <template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
        <v-card-title class="headline">{{ item.title }}</v-card-title>
        <v-card-text v-if="item.content.length !== 0">
          {{ item.content }}
        </v-card-text>
        <v-card-text v-if="$vuetify.breakpoint.xsOnly" class="mt-0 pt-0">
          <small>{{ item.time }}</small>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      items: [
        // {
        //   title: '「EASYTREND」서비스 개발',
        //   time: '2020.7',
        //   content:
        //     '사이드 프로젝트로 사람들이 특정 검색어에 대한 정보를 쉽게 얻고 저장할 수 있게 만드는 서비스 개발',
        //   color: 'blue lighten-1',
        // },
        {
          title: '「쉬운지식 유한책임회사」 설립',
          time: '2020.7',
          content: '지식의 저주를 해소하는 서비스들의 집합을 위한 회사 설립',
          color: 'red lighten-1',
          left: true,
          hideDot: false,
        },
        {
          title: '「EASYXPLAIN」 웹서비스 개발(중)',
          time: '2019.7',
          content: '쉬운 지식을 모으는 웹서비스 직접 개발 시작',
          color: 'blue lighten-2',
          src: '/carreer/easyxplain_og.png',
          left: false,
          hideDot: false,
        },
        {
          title: '『디지털 인재의 8가지 기본지식』 강의',
          time: '2019.8',
          content: '현대C&R 주관, 내용전문가 참여 및 출연',
          color: 'blue lighten-1',
          src: '/carreer/digital8.png',
          left: true,
          hideDot: false,
        },
        {
          title: '「Deep Learning」 추천 영상 Youtube 1위',
          time: '2019.2',
          content: '본 시점 기준 약 27,000 view',
          color: 'blue lighten-2',
          left: false,
          hideDot: true,
        },
        {
          title: '교보문고 북모닝 - All that BlockChain',
          time: '2019.2',
          content: '블록체인의 모든 것 출연 및 진행',
          color: 'blue lighten-2',
          src: '/carreer/2019-02-13_15;45;26.png',
          left: true,
          hideDot: false,
        },
        {
          title: '『보면 아는 블록체인』, 정보문화사 발간',
          time: '2018.7',
          content:
            '블록체인에 대해 쉽게 설명하는 내용으로 책 집필 및 발간 (photo by Doori Kim)',
          color: 'red lighten-1',
          src: '/carreer/mybook_doori_20181102_025716376.jpg',
          left: true,
          hideDot: false,
        },
        {
          title: '「Block Chain」 추천 영상 Youtube 1위',
          time: '2018.1',
          content: '본 시점 기준 약 350,000 view',
          color: 'blue lighten-2',
          left: false,
          hideDot: true,
        },
        {
          title: 'Channel『TMook』',
          time: '2016.4',
          content: '어려운 용어에 대한 쉬운 설명을 제공하는 채널 운영 시작',
          color: 'red lighten-1',
          src: '/carreer/2021-01-29 135905.png',
          left: true,
          hideDot: false,
        },
        {
          title: '매일경제TV M머니 출연',
          time: '2015.3 - 2015.10',
          content: '해외직접투자하기 & 글로벌 이슈 5 PB 패널 출연',
          color: 'blue lighten-2',
          left: true,
          hideDot: false,
        },
        {
          title: '(주)유안타증권',
          time: '2014.7 - 2017.7',
          content: 'PB(지점영업), Retail전략팀 근무',
          color: 'red lighten-1',
          src: '/carreer/agreement-3489902_1920.jpg',
          left: true,
          hideDot: false,
        },
      ],
    }
  },
}
</script>

<style scoped>
.v-card__title.headline {
  font-size: 1rem !important;
  font-weight: 600;
}
</style>
