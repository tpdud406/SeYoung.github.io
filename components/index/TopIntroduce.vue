<template>
  <v-row id="top-introduce-row" align="center">
    <!-- ### Start : column 1 ### -->
    <v-col
      id="top-introduce-col-1"
      cols="12"
      :sm="otherColsThanCenter"
      :order="$vuetify.breakpoint.xsOnly ? 2 : 1"
      class="fill-height"
    >
      <v-container fluid class="fill-height">
        <!-- Start : left cards -->
        <v-row v-for="(item, index) in leftItems" :key="index" no-gutters>
          <v-sheet :height="heightOfCols / leftItems.length">
            <v-card-subtitle>
              <p :class="leftInfosOption.class.title" v-html="item.title" />
            </v-card-subtitle>

            <v-card-title>
              <p :class="leftInfosOption.class.content" v-html="item.content" />
            </v-card-title>

            <v-card-actions v-if="index === 2" class="pt-0">
              <v-btn
                v-for="(linkBtn, btnIndex) in linkBtns"
                :key="btnIndex"
                :href="linkBtn.url"
                icon
                target="_blank"
              >
                <v-icon>{{ linkBtn.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-sheet>
        </v-row>
      </v-container>
    </v-col>

    <!-- ### Start : column 2 ### -->
    <v-col
      id="top-introduce-col-2"
      cols="12"
      :sm="centerCols"
      :order="$vuetify.breakpoint.xsOnly ? 1 : 2"
      class="fill-height"
    >
      <v-card rounded="pill" outlined class="pa-sm-8">
        <v-card rounded="pill" outlined>
          <v-img :src="profilePhoto" :aspect-ratio="aspectRatioOfImg">
            <!-- Start : Loading Template -->
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-card>
    </v-col>

    <!-- ### Start : column 1 ### -->
    <v-col
      id="top-introduce-col-3"
      cols="12"
      :sm="otherColsThanCenter"
      order="3"
      class="fill-height"
    >
      <v-container fluid class="fill-height">
        <!-- Start : left cards -->
        <v-row
          v-for="(item, index) in rightItems"
          :key="index"
          justify-sm="end"
          no-gutters
        >
          <v-sheet :height="heightOfCols / rightItems.length">
            <v-card-subtitle class="d-flex justify-end">
              <p :class="rightInfosOption.class.title" v-html="item.title" />
            </v-card-subtitle>

            <v-card-title class="d-flex justify-end">
              <p
                :class="rightInfosOption.class.content"
                v-html="item.content"
              />
            </v-card-title>
          </v-sheet>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexTopIntroduce extends Vue {
  /* data */
  private profilePhoto: string = '/index/5.jpg'
  private centerCols: number = 4

  private aspectRatioOfImg: number = 67 / 100
  private heightOfCols: number = (this.$vuetify.breakpoint.width / 3 / 5) * 7 // ((window width / cols) * photo ratio

  private leftInfosOption: {} = {
    class: {
      title: 'grey--text mb-0',
      content: 'text-sm-h6 text-md-h6 text-lg-h5 font-weight-light',
    },
  }

  private rightInfosOption: {} = {
    class: {
      title: 'grey--text mb-0',
      content: 'text-sm-h6 text-md-h4 text-lg-h3 font-weight-medium',
    },
  }

  private leftItems: Array<{ title: string; content: string }> = [
    {
      title: '경력',
      content:
        '쉬운지식 CEO & Developer' +
        '<br />IT, 블록체인 기초 개념 저서 2권' +
        '<br />(전) 유안타증권 Retail전략팀 & PB',
    },
    {
      title: '주요 역량',
      content:
        '경제&#183;금융&#183;IT 분야 강의 & 발표' +
        '<br />영업 전략 기획 및 데이터 분석' +
        '<br />웹서비스 개발 (Cloud Native)' +
        '<br />Python, JavaScript, SQL 경험',
    },
    { title: 'contact', content: 'msp770@gmail.com' },
  ]

  private rightItems: Array<{ title: string; content: string }> = [
    { title: '총 경력(년)', content: '6' },
    { title: '시청된 시간', content: '176,000' },
    { title: '경제/금융/IT 영상수', content: '492' },
    { title: 'Github Contrivution (2022)', content: '1,917' },
  ]

  private linkBtns: Array<{ url: string; color: string; icon: string }> = [
    {
      url: 'https://www.youtube.com/c/TMook',
      color: 'black',
      icon: 'mdi-youtube',
    },
    {
      url: 'https://www.linkedin.com/in/mook-t-34a0a2135/',
      color: 'black',
      icon: 'mdi-linkedin',
    },
  ]

  /* computed */
  private get otherColsThanCenter(): number {
    const result: number = (12 - this.centerCols) / 2
    return result
  }
}

export default ComponentsIndexTopIntroduce
</script>
