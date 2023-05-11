<template>
  <v-container id="top-container" fluid>
    <!-- Start : Intro -->
    <intro />

    <!-- Start : Main Project -->
    <v-container style="height: 100vh">
      <v-divider class="mx-10 px-10 my-sm-15 my-15" />
      <sub-title
        :parent-items="objectOfParentItems.mainProject"
        :class="classOfComponent + ' pt-md-10'"
      />
      <main-project :class="classOfComponent" />

      <!-- Start : work Detail -->
      <v-divider class="mx-10 px-10" />
      <sub-title
        :parent-items="objectOfParentItems.work"
        :class="classOfComponent + ' pt-md-10'"
      />
      <work :class="classOfComponent" />

      <!-- Start : education Detail -->
      <v-divider class="mx-10 px-10" />
      <sub-title
        :parent-items="objectOfParentItems.education"
        :class="classOfComponent + ' pt-md-10'"
      />
      <education :class="classOfComponent" />
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SubTitle from '../components/index/SubTitle.vue'
import MainProject from '../components/index/MainProject.vue'
import Work from '../components/index/Work.vue'
import Education from '../components/index/Education.vue'
import Intro from '../components/index/Intro.vue'

@Component({
  components: {
    SubTitle,
    MainProject,
    Work,
    Education,
    Intro,
  },
})
class PagesIndex extends Vue {
  /* data */
  private titleOfTop: string = '이세영'

  // private subTitleOfTop: string = 'Frontend Developer'

  private contentOfTop: string =
    '팀 프로젝트 경험으로 인해 원활한 커뮤니케이션과 협력 능력을 보유하며, 사용자 경험 개선과 프로젝트 완수에 기여한 경험이 있습니다. 또한, 적극적인 문제 해결 능력을 보유하고 있습니다.'

  private linkBtns: Array<{ url: string; color: string; icon: string }> = [
    {
      url: 'https://github.com/tpdud406',
      color: 'black',
      icon: 'mdi-github',
    },
    {
      url: 'tpdud406@gmail.com',
      color: 'black',
      icon: 'mdi-gmail',
    },
  ]

  private classOfComponent: string = 'my-md-10'

  // sub titles //
  private objectOfParentItems: {
    mainProject: { title: string; content: string }
    work: { title: string; content: string }
    education: { title: string; content: string }
  } = {
    mainProject: {
      title: 'Projects',
      content: '',
    },
    work: {
      title: 'Work',
      content: '',
    },
    education: {
      title: 'Education',
      content: '',
    },
  }
}

export default PagesIndex
</script>

<style>
.title {
  text-align: center; /* 가운데 정렬 */
  color: black; /* 글자 색상 */
  background-color: white; /* 배경색상 */
  padding: 5px; /*여백 설정*/
  margin-top: 3vh;
  margin-bottom: 5vh;
}

.title h1 {
  display: inline;
}
</style>
