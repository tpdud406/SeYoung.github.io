<template>
  <v-card :height="height" :width="width" flat tile>
    <p class="main-title d-flex justify-center mb-8 px-6" v-html="title"></p>
    <v-img
      v-for="(project, index) in projects"
      :key="index"
      :src="project.src"
      :gradient="project.color.backgroundGradient"
      contain
      class="align-center"
    >
      <v-card-subtitle class="project-subtitle white--text">
        {{ project.text.subtitle }}
      </v-card-subtitle>
      <v-card-title class="project-title white--text">{{
        project.text.title
      }}</v-card-title>
      <v-card-text class="project-content white--text">{{
        project.text.content
      }}</v-card-text>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: '주요 프로젝트',
      height: undefined,
      width: '100%',
      projects: [
        {
          text: {
            subtitle: 'Web Service, EASYXPLAIN',
            title: '쉬운 설명을 제공하거나, 얻으세요',
            content:
              "사람들이 작성하는 용어 설명 및 가이드, 그에 대한 평가지표는 오직 '쉽다는 것' 뿐입니다",
          },
          color: {
            backgroundGradient:
              'to left bottom, rgba(30,36,77,.8), rgba(30,36,77,1)',
          },
          src: '/background/office-1209640_1920.jpg',
        },
        {
          text: {
            subtitle: 'Youtube Channel, TMook ',
            title: '금융/경제/IT 설명 쉽게 듣고 보세요',
            content:
              '실시간 소통 또는 편집영상을 통해 관심있는, 또는 화제의 어려운 용어들을 다룹니다',
          },
          color: {
            backgroundGradient:
              'to left bottom, rgba(11,12,23,1), rgba(11,12,23,.6)',
          },
          src: '/background/radio-2722271_1920.jpg',
        },
      ],
    }
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
