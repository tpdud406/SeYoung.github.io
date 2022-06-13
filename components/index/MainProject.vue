<template>
  <v-row justify="center" no-gutters>
    <v-col v-for="(project, index) in projects" :key="index" cols="12" md="5">
      <v-card :width="width" flat tile dark>
        <v-img
          :src="project.src"
          :gradient="project.color.backgroundGradient"
          :height="heightInXS"
          :max-width="
            $vuetify.breakpoint.mdAndUp
              ? $vuetify.breakpoint.width / 2
              : $vuetify.breakpoint.width
          "
          class="align-center"
        >
          <v-card-subtitle class="text-md-h6 grey--text text--lighten-2 pb-0">
            {{ project.text.subtitle }}
          </v-card-subtitle>

          <v-card-title class="text-md-h4 white--text">
            {{ project.text.title }}
          </v-card-title>

          <v-card-text
            class="text-md-body-2 grey--text text--lighten-2"
            v-html="project.text.content"
          />

          <v-btn
            outlined
            rounded="pill"
            depressed
            :x-small="$vuetify.breakpoint.xsOnly"
            :color="project.btn.color"
            :href="project.btn.href"
            class="mt-6 ml-5"
          >
            {{ project.btn.name }}
          </v-btn>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexMainProject extends Vue {
  /* data */
  private title: string = '진행 프로젝트'
  private desc: string =
    '현재 진행중인 주요 프로젝트입니다<br />주로 쉬운 설명을 보다 빠르고 정확하게 제공하는 프로젝트들입니다'

  @Provide() isActive: boolean = false
  @Provide() width: number = this.$vuetify.breakpoint.width - 40
  @Provide() projects: Array<{
    text: {
      subtitle: string
      title: string
      content: string
    }
    color: {
      backgroundGradient: string
    }
    src: string
    btn: {
      name: string
      href: string | undefined
      color: string
    }
    cardClass: string
  }> = [
    {
      text: {
        subtitle: '「미닛」 - Meaniit, Web Service',
        title: '쉬운 설명을 제공하거나, 얻으세요',
        content:
          "사람들이 작성하는 용어 설명 및 가이드, 이곳에서 그 평가기준은 오직 '쉽다'는 것. " +
          '쉽게 설명하는 능력을 인정받는 공간이기도 합니다',
      },
      color: {
        backgroundGradient: 'to left, rgba(0, 0, 0,.7), rgba(0,0,0,1)',
      },
      src: '/background/office-1209640_1920.jpg',
      btn: {
        name: '바로가기 ▶',
        href: 'https://ko.meaniit.com/main',
        color: 'grey lighten-2',
      },
      cardClass: 'align-center',
    },
    {
      text: {
        subtitle: '「TMook」 - Youtube Channel',
        title: '금융/경제/IT 설명 쉽게 듣고 보세요',
        content:
          '실시간 소통 또는 편집영상을 통해 관심있는, 또는 화제의 어려운 용어들을 다룹니다. ' +
          '매주 수요일 저녁 9시 LIVE 진행됩니다',
      },
      color: {
        backgroundGradient: 'to left bottom, rgba(0,0,0,1), rgba(0,0,0,.3)',
      },
      src: '/background/radio-2722271_1920.jpg',
      btn: {
        name: 'Youtube ▶',
        href: 'https://youtube.com/c/TMook',
        color: 'grey lighten-2',
      },
      cardClass: 'justify-end align-center',
    },
  ]

  /* computed */
  private get heightInXS(): number | undefined {
    const height = this.$vuetify.breakpoint.xsOnly ? 500 : 400
    return height
  }
}

export default ComponentsIndexMainProject
</script>
