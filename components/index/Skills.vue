<template>
  <v-card id="skills" flat class="py-8">
    <!-- Start : Title & Description -->
    <v-card-title class="d-flex justify-center">
      <p
        class="text-center text-h3 text-sm-h2 font-weight-black"
        v-html="title"
      />
    </v-card-title>

    <v-card-subtitle class="text-center">
      <p class="text-center" v-html="desc" />
    </v-card-subtitle>

    <!-- Start : Contents -->
    <v-container fluid>
      <v-row justify="center">
        <v-col
          v-for="(item, index) in items"
          :key="index"
          :cols="colsPositioning"
          class="d-flex justify-center"
        >
          <v-card outlined flat class="justify-center">
            <v-img
              :src="item.src"
              :max-width="
                $vuetify.breakpoint.xsOnly
                  ? $vuetify.breakpoint.width
                  : undefined
              "
            />
            <v-card-title class="justify-center" v-html="item.title" />
            <v-card-text class="d-flex justify-center" v-html="item.text" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexSkills extends Vue {
  private title: string = '주요 역량'
  private desc: string =
    '증권사 & IT스타트업의 금융 및 IT서비스 경험 통한<br />비즈니스, 강연/정보 시각화, 개발/분석 업무 역량'

  @Provide() items: Array<{ title: string; text: string; src: string }> = [
    {
      title: '비즈니스 이해',
      text:
        '- 증권사 Retail전략기획팀 근무<br />' +
        '- 증권사 PB (Retail Sales) 근무<br />' +
        '- 16개 기업 분석 & 24개 주제 경제TV 출연',
      src: '/skills/email-4284157_640.png',
    },
    {
      title: '숙달된 발표 & 시각화',
      text:
        '- 교육 영상 Youtube 검색 1위 달성<br />' +
        '- 중국투자 고객 세미나 (7개월)<br />' +
        '- 사내외 카드뉴스 & 사내 총괄 회의 자료 제작',
      src: '/skills/pixel-cells-3976296_640.png',
    },
    {
      title: '업무 자동화 & 코딩 경험',
      text:
        "- 웹서비스 '미닛(Meaniit)' 개발<br />" +
        '- Python, Javascript, MySQL 경험<br />' +
        '- (*본 페이지 직접 제작)',
      src: '/skills/dual-screen-1745705_640.png',
    },
  ]

  /* computed */
  private get colsPositioning(): number {
    const cols: number = this.$vuetify.breakpoint.xsOnly ? 12 : 4
    return cols
  }
}

export default ComponentsIndexSkills
</script>
