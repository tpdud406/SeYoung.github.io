<template>
  <v-card id="card-outline" flat outlined tile class="ma-0 pa-0">
    <v-container fluid class="pa-0">
      <v-row no-gutters align="center">
        <!-- Start : Key Text -->
        <v-col
          :sm="12 - colOfImg.cols"
          cols="12"
          :order="$vuetify.breakpoint.xsOnly ? 2 : undefined"
        >
          <v-card flat tile class="fill-height">
            <v-card-title v-if="$vuetify.breakpoint.smAndUp">
              <p
                class="text-left text-lg-h1 text-sm-h2 text-h3 font-weight-black"
                :style="responsiveStyle"
                v-html="introduceOnTop.head"
              />
            </v-card-title>

            <v-card-subtitle class="pl-5">
              <p class="text-left" v-html="introduceOnTop.body" />
              <p class="text-left" v-html="introduceOnTop.bodyExample" />
            </v-card-subtitle>

            <!-- Start : Page Move Buttons -->
            <v-card-actions class="d-flex justify-start pl-4">
              <v-btn
                v-for="(linkBtn, index) in linkBtns"
                :key="index"
                :href="linkBtn.url"
                icon
                target="_blank"
              >
                <v-icon>{{ linkBtn.icon }}</v-icon>
              </v-btn>
              <v-btn text color="grey" small style="text-transform: none">
                msp770@gmail.com
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Start : Image -->
        <v-col
          :sm="colOfImg.cols"
          cols="12"
          :order="$vuetify.breakpoint.xsOnly ? 1 : undefined"
        >
          <v-img
            :src="topImage"
            class="d-flex text-right align-end fill-height"
            :aspect-ratio="$vuetify.breakpoint.xsOnly ? 3 / 4 : undefined"
          >
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>

            <!-- Start : Content -->
            <v-card-title v-if="$vuetify.breakpoint.xsOnly">
              <p
                class="text-left text-lg-h1 text-sm-h2 text-h3 font-weight-black"
                :style="responsiveStyle"
                v-html="introduceOnTop.head"
              />
            </v-card-title>
            <p
              :class="`text-subtitle-1 text-sm-h5 text-sm-right text-left font-weight-bold pr-4 pl-4`"
              style="color: white"
              v-html="name"
            />
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexTop extends Vue {
  /* data() */
  private colOfImg: { cols: number } = {
    cols: 5,
  }

  private name: string = '<small>쉬운지식 대표</small><br />박성묵'
  private ids: { total: string; key: string } = {
    total: 'top',
    key: 'key',
  }

  private colorOfTotalCard: { color: string; gradient: string } = {
    color: String(this.$vuetify.theme.themes.light.accent),
    gradient: '',
  }

  private images: { imageOfTop: string; imageOfTop2: string } = {
    imageOfTop: '/index/mygithubpages_img_20220528.png',
    imageOfTop2: '/index/pangyo_image.jpg',
  }

  private introduceOnTop: {
    head: string
    body: string
    bodyExample: string
  } = {
    head: `<span style="color: ${
      this.$vuetify.breakpoint.xsOnly
        ? 'white'
        : this.$vuetify.theme.themes.light.primary
    }">쉽게,</span><br />주요한 개념<small>을</small><br />설명<small>합니다</small>`,
    body:
      '경제/금융, 정보기술(IT) 분야에서<br />어려운 개념과 구조들을 이해하기 쉽게 설명하고 있습니다',
    bodyExample: '(예시. 채권, 가상화폐, 블록체인, 디지털 전환, 마이데이터 등)',
  }

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
  private get topImage(): string {
    const src: string = this.$vuetify.breakpoint.xsOnly
      ? '/index/pangyo_image.jpg'
      : '/index/mygithubpages_img_20220528.png'
    return src
  }

  private get responsiveStyle(): {} {
    const result: { lineHeight: string; color: string } = {
      lineHeight: this.$vuetify.breakpoint.lgAndUp
        ? '6.45rem'
        : this.$vuetify.breakpoint.smAndUp
        ? '4.45rem'
        : '3.15rem',
      color: this.$vuetify.breakpoint.smAndUp ? 'dark grey' : 'white',
    }
    return result
  }
}

export default ComponentsIndexTop
</script>

<style lang="scss">
#no-background-hover::before {
  background-color: transparent !important;
}
</style>
