<template>
  <v-row id="top-introduce-row" align="center" justify="center">
    <!-- ### Start : column 1 ### -->
    <v-col
      id="top-introduce-col-1"
      cols="12"
      :sm="otherColsThanCenter"
      :order="reordering(0)"
      class="fill-height"
    >
      <v-container fluid class="fill-height">
        <!-- Start : left cards -->
        <v-row v-for="(item, index) in leftItems" :key="index" no-gutters>
          <v-sheet :height="heightOfCols / leftItems.length">
            <v-card-subtitle class="pb-0">
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
      :order="reordering(1)"
      class="fill-height"
    >
      <v-card rounded="pill" outlined class="pa-4 pa-sm-8">
        <v-card rounded="pill" outlined>
          <v-img
            :id="$vuetify.breakpoint.mdAndUp ? 'top-image' : 'top-image-color'"
            :src="profilePhoto"
            :aspect-ratio="aspectRatioOfImg"
          >
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
      :order="reordering(2)"
      class="fill-height"
    >
      <v-container fluid class="fill-height">
        <!-- Start : left cards -->
        <v-row
          v-for="(item, index) in rightItems"
          :key="index"
          justify-sm="end"
          justify="end"
          no-gutters
        >
          <v-sheet :height="heightOfCols / rightItems.length">
            <v-card-subtitle class="d-flex justify-end pb-0">
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

    <!-- ### Start : Empty columns (for smOnly) ### -->
    <v-col
      v-if="$vuetify.breakpoint.smOnly"
      id="top-introduce-empty-col0"
      sm="2"
      order="0"
      class="fill-height"
    />
    <v-col
      v-if="$vuetify.breakpoint.smOnly"
      id="top-introduce-empty-col1"
      sm="2"
      order="2"
      class="fill-height"
    />
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexTopIntroduce extends Vue {
  /* data */
  private profilePhoto: string = '/index/top_image.jpg'
  private centerCols: number = this.$vuetify.breakpoint.mdAndUp ? 4 : 8

  private aspectRatioOfImg: number = 67 / 100
  private heightOfCols: number = this.$vuetify.breakpoint.mdAndUp
    ? (this.$vuetify.breakpoint.width / 3 / 5) * 5
    : this.$vuetify.breakpoint.smOnly
    ? (this.$vuetify.breakpoint.width / 3 / 5) * 9.5 // ((window width / cols) * photo ratio
    : (this.$vuetify.breakpoint.width / 3 / 5) * 18

  private leftInfosOption: {} = {
    class: {
      title: 'text-sm-body-2 text-overline grey--text mb-0',
      content:
        'text-sm-body-1 text-body-2 font-weight-normal grey--text text--darken-3',
    },
  }

  private rightInfosOption: {} = {
    class: {
      title: 'text-sm-body-2 text-overline grey--text mb-0',
      content: 'text-sm-h5 text-md-h4 text-h6 font-weight-medium',
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
    { title: '시청된 강의 시간', content: '176,000' },
    { title: '경제/금융/IT 영상 수', content: '492' },
    { title: 'Github Contribution (2022)', content: '1,917' },
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
    if (this.$vuetify.breakpoint.mdAndUp) {
      const result: number = (12 - this.centerCols) / 2
      return result
    } else if (this.$vuetify.breakpoint.smOnly) {
      return 5
    } else {
      return 8
    }
  }

  /* methods */
  private reordering(idx: number): number {
    if (this.$vuetify.breakpoint.smOnly) {
      const reidx: number = idx === 0 ? 3 : idx === 1 ? 1 : 4
      return reidx
    } else if (this.$vuetify.breakpoint.xsOnly) {
      const reidx: number = idx === 0 ? 1 : idx === 1 ? 0 : 2
      return reidx
    } else {
      return idx
    }
  }
}

export default ComponentsIndexTopIntroduce
</script>

<style scoped>
#top-image {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}

/* Disable grayscale on hover */
#top-image:hover {
  -webkit-filter: grayscale(0);
  filter: none;
}
</style>
