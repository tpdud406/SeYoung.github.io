<template>
  <v-container id="top-container" fluid>
    <!-- ### Start : Top Title ### -->
    <v-row justify="center">
      <v-col cols="8" sm="6">
        <!-- Start : title -->
        <p
          :class="'text-sm-h4 text-h6 font-weight-bold text-center'"
          :style="{
            lineHeight: $vuetify.breakpoint.smAndUp ? '2.9rem' : '2rem',
          }"
          v-html="titleOfTop"
        />

        <!-- Start : subtitle -->
        <p
          :class="'text-sm-h6 font-weight-light text-center'"
          :style="{ lineHeight: '1.2rem' }"
          v-html="subTitleOfTop"
        />
      </v-col>
    </v-row>

    <!-- ### Start : Components ### -->

    <!-- Start : Main Project -->
    <v-divider class="mx-10 px-10 my-sm-15 my-15" />
    <sub-title
      :parent-items="objectOfParentItems.mainProject"
      :class="classOfComponent + ' pt-md-10'"
    />
    <main-project :class="classOfComponent" />

    <!-- Start : Career Detail -->
    <v-divider class="mx-10 px-10 my-sm-15 my-15" />
    <sub-title
      :parent-items="objectOfParentItems.career"
      :class="classOfComponent + ' pt-md-10'"
    />
    <career :class="classOfComponent" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SubTitle from '@/components/index/SubTitle.vue'
import MainProject from '@/components/index/MainProject.vue'
import Career from '@/components/index/Career.vue'

@Component({
  components: {
    SubTitle,
    MainProject,
    Career,
  },
})
class PagesIndex extends Vue {
  /* data */
  private titleOfTop: string = '이세영'

  private subTitleOfTop: string = 'Frontend Developer'

  private classOfComponent: string = 'my-md-10'

  // sub titles //
  private objectOfParentItems: {
    mainProject: { title: string; content: string }
    mainYoutubeVideo: { title: string; content: string }
    career: { title: string; content: string }
  } = {
    mainProject: {
      title: 'Projects',
      content: '',
    },
    mainYoutubeVideo: {
      title: 'Best Youtube',
      content:
        '경제&#183;금융&#183;IT 분야에서 많은 분들이 시청해주신 영상들이에요',
    },
    career: {
      title: 'Career',
      content: '다양한 활동들을 시간 순으로 천천히 살펴볼 수 있어요',
    },
  }
}

export default PagesIndex
</script>
