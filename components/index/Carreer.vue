<template>
  <v-card id="carreer" tile flat>
    <!-- ### Start : title name ### -->
    <v-card-title class="d-flex justify-center">
      <p class="text-center text-h4 font-weight-black" v-html="title" />
    </v-card-title>

    <v-card-subtitle class="text-center">
      <p class="text-center" v-html="desc" />
    </v-card-subtitle>

    <!-- ### Start : Timeline ### -->
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
        <!-- Start : Time -->
        <template #opposite>
          <span>{{ item.time }}</span>
        </template>

        <!-- Start : Content -->
        <v-card outlined flat>
          <!-- Start : Image -->
          <v-img v-if="!!item.src" :src="item.src" max-width="640" contain />

          <!-- Start : Text -->
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5" />
            </v-row>
          </template>
          <v-card-title class="headline pb-2">
            {{ item.title }}
          </v-card-title>
          <v-card-text
            v-if="item.content.length !== 0"
            :class="item.btn.bool === true ? 'pb-sm-0' : ''"
          >
            {{ item.content }}
          </v-card-text>
          <v-card-text v-if="$vuetify.breakpoint.xsOnly" class="mt-0 pt-0">
            <small>{{ item.time }}</small>
          </v-card-text>

          <v-card-actions v-if="item.btn.bool" class="d-flex justify-end pr-3">
            <v-btn
              text
              small
              :color="item.btn.color"
              :href="item.btn.href"
              :disabled="item.btn.href === ''"
            >
              {{ item.btn.text }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexCarreer extends Vue {
  private title: string = '전체 이력'
  private desc: string =
    '다양한 활동 중에서도 다른 많은 분들과<br>함께 할 수 있었던 모든 기록입니다'

  private items: Array<{
    src: null | string
    title: string
    time: string
    content: string
    color: string
    left: boolean
    hideDot: boolean
    btn: {
      bool: boolean
      href: string
      text: string
      color: string
    }
  }> = [
    {
      title: '「마이데이터 비즈니스 전략」 출연',
      time: '2022.5',
      content: '마이데이터 시대 비즈니스 전략 강의 촬영, 현대C&R 주관',
      color: 'blue lighten-1',
      src: null,
      left: true,
      hideDot: false,
      btn: {
        bool: true,
        href: '',
        text: '(예정)',
        color: 'grey lighten-1',
      },
    },
    {
      title: '「디지털 시대에 살아남는 IT 지식」 특강',
      time: '2022.5',
      content: "'임직원 동행' 세미나 일환으로 (주)GS E&R 사내강연 제공",
      color: 'blue lighten-1',
      src: null,
      left: true,
      hideDot: true,
      btn: {
        bool: false,
        href: '',
        text: '',
        color: 'blue lighten-2',
      },
    },
    {
      title: '신규 입사자「디지털 전환」 특강',
      time: '2022.3',
      content: '신규 입사자 위한 DT 세미나로서 (주)대동 출강',
      color: 'blue lighten-1',
      src: null,
      left: true,
      hideDot: true,
      btn: {
        bool: false,
        href: '',
        text: '',
        color: 'blue lighten-2',
      },
    },
    {
      title: '「비전공 직원 코딩하게 만들기」, 전기신문',
      time: '2022.3',
      content: '전기신문 오피니언 <금요아침> 4회',
      color: 'blue lighten-1',
      src: null,
      left: false,
      hideDot: true,
      btn: {
        bool: true,
        href: 'https://www.electimes.com/news/articleView.html?idxno=302019',
        text: '읽기 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '「디지털 화폐의 유형과 원리」출연',
      time: '2022.1',
      content: '케이브레인 주관, 진행 및 내용전문가 참여 8차시',
      color: 'blue lighten-1',
      src: '/carreer/digital_currency.png',
      left: true,
      hideDot: false,
      btn: {
        bool: true,
        href:
          'https://e-koreatech.step.or.kr/page/lms?m1=course&m2=course_detail&course_id=222837',
        text: '확인 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '「코딩 교육이 디지털 전환은 아니다」, 전기신문',
      time: '2022.1',
      content: '전기신문 오피니언 <금요아침> 3회',
      color: 'blue lighten-1',
      src: null,
      left: false,
      hideDot: true,
      btn: {
        bool: true,
        href: 'https://electimes.com/article.php?aid=1641165264227348050',
        text: '읽기 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '「새로운 시장을 성공으로 이끄는 판교의 젊은 기획자들」 출연',
      time: '2021.12',
      content: '현대C&R 주관, 진행 및 내용전문가 참여 4차시',
      color: 'blue lighten-1',
      src: '/carreer/pangyo_2021.jpeg',
      left: true,
      hideDot: false,
      btn: {
        bool: true,
        href:
          'https://www.hihrd.co.kr/usrs/eduRegMgnt/crsInfoDetailForm.do;jsessionid=Gpu1FTByGHBTRRrDsXOeP0FCDPaVEa37tHt2n0NYPamUJEAwp0avVbR2kH7kWlFM.LMS_WAS_002_servlet_engine2?p_crscd=9782&CRSCD=9782&p_hmpgcd=38&p_listType=N&mkey=6442',
        text: '확인 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '「한글을 향할 때, 코인도 돈도 보인다」, 전기신문',
      time: '2021.10',
      content: '전기신문 오피니언 <금요아침> 2회',
      color: 'blue lighten-1',
      src: null,
      left: false,
      hideDot: true,
      btn: {
        bool: true,
        href: 'http://www.electimes.com/article.php?aid=1634703205224009050',
        text: '읽기 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '『디지털 시대에 살아남는 IT 지식』, 정보문화사',
      time: '2021.8',
      content: '전공/직무 무관 잇(IT)세계 입문서 내용의 책 집필 및 발간',
      color: 'blue lighten-1',
      src: '/carreer/mybook_musthaveit_20210813.jpg',
      left: false,
      hideDot: false,
      btn: {
        bool: true,
        href:
          'http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&linkClass=330201&barcode=9788956749112',
        text: '확인 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '「문과/비개발자에게 코딩을 추천하는 이유」, 특강',
      time: '2021.8',
      content:
        "'디지털 트랜스포메이션(DT) 세미나' 일환으로 (주)현대해상 사내강연 제공",
      color: 'blue lighten-1',
      src: null,
      left: true,
      hideDot: true,
      btn: {
        bool: false,
        href: '',
        text: '읽기 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '「비전문가에게 전문지가 필요한 때」, 전기신문',
      time: '2021.8',
      content: '전기신문 오피니언 <금요아침> 1회',
      color: 'blue lighten-1',
      src: null,
      left: false,
      hideDot: true,
      btn: {
        bool: true,
        href: 'https://electimes.com/article.php?aid=1628558190221243050',
        text: '읽기 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '「디지털 지구, 뜨는 것들의 세상 | 메타버스」 출연',
      time: '2021.7',
      content: '현대C&R 주관, 진행 및 내용전문가 참여 8차시',
      color: 'blue lighten-1',
      src: '/carreer/20210716_metaverse.png',
      left: true,
      hideDot: false,
      btn: {
        bool: true,
        href:
          'https://hrd.hihrd.co.kr/usrs/eduRegMgnt/crsInfoDetailForm.do?p_crscd=8875',
        text: '확인 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '「쉬운지식 유한책임회사」 설립',
      time: '2020.7',
      content:
        '지식의 저주를 해소하는 서비스 집합을 위한 회사 설립. 쉬운지식의 서비스로써 <EASYXPLAIN> 지속 개발 및 관련 서비스 준비',
      color: 'red lighten-1',
      src: null,
      left: false,
      hideDot: false,
      btn: {
        bool: true,
        href: 'https://knowease-inc.github.io',
        text: '회사 소개 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '『디지털 인재의 8가지 기본지식』 강의',
      time: '2019.8',
      content: '현대C&R 주관, 내용전문가 참여 및 출연 8차시',
      color: 'blue lighten-1',
      src: '/carreer/digital8.png',
      left: true,
      hideDot: false,
      btn: {
        bool: true,
        href:
          'https://hrd.hihrd.co.kr/usrs/eduRegMgnt/crsInfoDetailForm.do?p_crscd=5804&CRSCD=5804&p_listType=N&purl=/usrs/crsItdce/newCrsListForm.do',
        text: '확인 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '「EASYXPLAIN」 웹서비스 개발(중)',
      time: '2019.7',
      content: '쉬운 지식을 모으는 웹서비스 직접 개발 시작',
      color: 'red lighten-1',
      src: '/carreer/easyxplain_og.png',
      left: false,
      hideDot: false,
      btn: {
        bool: true,
        href: 'https://knowease-inc.github.io/service/easyxplain/introduce',
        text: '서비스 소개 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '「Deep Learning」 추천 영상 Youtube 1위',
      time: '2019.2',
      content: '본 시점 기준 약 27,000 view',
      color: 'blue lighten-2',
      src: null,
      left: false,
      hideDot: true,
      btn: {
        bool: true,
        href: 'https://youtu.be/QzrIBsod1_A',
        text: '보기 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '교보문고 북모닝 - All that BlockChain',
      time: '2019.2',
      content: '블록체인의 모든 것 출연 및 진행',
      color: 'blue lighten-2',
      src: '/carreer/2019-02-13_15;45;26.png',
      left: true,
      hideDot: false,
      btn: {
        bool: true,
        href:
          'http://bm.kyobobook.co.kr/course/active/detail.do?currentPage=1&perPage=10&orderby=-4&srchKey=title&srchWord=%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8&srchMenuParentSeq=1838&courseMasterSeq=703&courseActiveSeq=5170&newWin=N&currentMenuId=900',
        text: '확인 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '창업진흥원 - 블록체인의 이해와 창업',
      time: '2019.1',
      content: '블록체인 종류, 암호화폐 등 8차시 내용전문가(SME)',
      color: 'blue lighten-2',
      src: '/carreer/edu_blockchain.png',
      left: true,
      hideDot: false,
      btn: {
        bool: true,
        href:
          'https://www.k-startup.go.kr/edu/home/package/PTYPE_002/PTYPE_00205/PKG_0000000874/detail',
        text: '확인 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '『보면 아는 블록체인』, 정보문화사',
      time: '2018.7',
      content:
        '블록체인에 대해 쉽게 설명하는 내용으로 책 집필 및 발간 (photo by Doori Kim)',
      color: 'red lighten-1',
      src: '/carreer/mybook_doori_20181102_025716376.jpg',
      left: true,
      hideDot: false,
      btn: {
        bool: true,
        href:
          'https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=1&acq=%EB%B3%B4%EB%A9%B4+%EC%95%84%EB%8A%94+%EB%B8%94%E3%84%B9&qdt=0&ie=utf8&query=%EB%B3%B4%EB%A9%B4+%EC%95%84%EB%8A%94+%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8',
        text: '확인 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '「Block Chain」 추천 영상 Youtube 1위',
      time: '2018.1',
      content: '본 시점 기준 약 350,000 view',
      color: 'blue lighten-2',
      src: null,
      left: false,
      hideDot: true,
      btn: {
        bool: true,
        href: 'https://youtu.be/662wnupQ8fg',
        text: '보기 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: 'Channel『TMook』',
      time: '2016.4',
      content: '어려운 용어에 대한 쉬운 설명을 제공하는 채널 운영 시작',
      color: 'red lighten-1',
      src: '/carreer/2021-01-29 135905.png',
      left: true,
      hideDot: false,
      btn: {
        bool: true,
        href: 'https://www.youtube.com/c/TMook',
        text: '보기 →',
        color: 'blue lighten-2',
      },
    },
    {
      title: '매일경제TV M머니 출연',
      time: '2015.3 - 2015.10',
      content: '해외직접투자하기 & 글로벌 이슈 5 PB 패널 출연',
      color: 'blue lighten-2',
      src: null,
      left: false,
      hideDot: true,
      btn: {
        bool: false,
        href: '',
        text: '소개',
        color: 'blue lighten-2',
      },
    },
    {
      title: '(주)유안타증권',
      time: '2014.7 - 2017.7',
      content: 'PB(지점영업), Retail전략팀 근무',
      color: 'red lighten-1',
      src: '/carreer/stock-1863880_1920.jpg',
      left: true,
      hideDot: false,
      btn: {
        bool: false,
        href: '',
        text: '소개',
        color: 'blue lighten-2',
      },
    },
  ]
}

export default ComponentsIndexCarreer
</script>

<style scoped>
.main-title {
  font-size: 1.6rem !important;
  font-weight: 500;
}
.v-card__title.headline {
  font-size: 1rem !important;
  font-weight: 600;
}
</style>
