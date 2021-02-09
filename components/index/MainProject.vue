<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <v-card :height="height" :width="width" flat tile>
      <p class="main-title d-flex justify-center mb-8 px-6" v-html="title"></p>
      <v-img
        v-for="(project, index) in projects"
        :key="index"
        :src="project.src"
        :gradient="project.color.backgroundGradient"
        :height="heightInXS"
        :contain="containInXS"
        class="align-center"
      >
        <v-card-subtitle class="project-subtitle white--text">
          {{ project.text.subtitle }}
        </v-card-subtitle>
        <v-card-title class="project-title white--text">{{
          project.text.title
        }}</v-card-title>
        <v-card-text
          class="project-content white--text"
          v-html="project.text.content"
        >
        </v-card-text>
        <v-btn
          outlined
          depressed
          :color="project.btn.color"
          :href="project.btn.href"
          class="mt-6 ml-5"
        >
          {{ project.btn.name }}
        </v-btn>
      </v-img>
    </v-card>
  </v-lazy>
</template>

<script>
export default {
  data() {
    return {
      title: '주요 진행 프로젝트',
      isActive: false,
      height: undefined,
      width: '100%',
      projects: [
        {
          text: {
            subtitle: 'Web Service, EASYXPLAIN',
            title: '쉬운 설명을 제공하거나, 얻으세요',
            content:
              "사람들이 작성하는 용어 설명 및 가이드, 그에 대한 평가지표는 오직 '쉽다는 것' 뿐입니다" +
              '쉽게 설명하는 능력을 인정받는 공간이 될 수도 있습니다',
          },
          color: {
            backgroundGradient:
              'to left bottom, rgba(30,36,77,.8), rgba(30,36,77,1)',
          },
          src: '/background/office-1209640_1920.jpg',
          btn: {
            name: 'Alpha Test (End)',
            href: undefined,
            color: 'red lighten-3',
          },
          cardClass: 'align-center',
        },
        {
          text: {
            subtitle: 'Youtube Channel, TMook ',
            title: '금융/경제/IT 설명 쉽게 듣고 보세요',
            content:
              '실시간 소통 또는 편집영상을 통해 관심있는, 또는 화제의 어려운 용어들을 다룹니다' +
              '매주 수요일 저녁 9시 LIVE 진행됩니다',
          },
          color: {
            backgroundGradient:
              'to left bottom, rgba(11,12,23,1), rgba(11,12,23,.6)',
          },
          src: '/background/radio-2722271_1920.jpg',
          btn: {
            name: 'Go Youtube ▶',
            href: 'https://youtube.com/c/TMook',
            color: 'white',
          },
          cardClass: 'justify-end align-center',
        },
      ],
    }
  },
  computed: {
    heightInXS() {
      const height = this.$vuetify.breakpoint.xsOnly ? 500 : undefined
      return height
    },
    containInXS() {
      const contain = !this.$vuetify.breakpoint.xsOnly
      return contain
    },
  },
}
</script>

<style scoped>
.main-title {
  font-size: 1.6rem !important;
  font-weight: 500;
}
.project-subtitle {
  font-size: 1.2rem !important;
  font-weight: 400;
  padding-bottom: 20px;
}
.project-title {
  font-size: 1.5rem !important;
  padding-top: 0px;
  font-weight: 500;
}
.project-content {
  font-size: 1rem !important;
  font-weight: 300;
}
</style>
