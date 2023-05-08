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
    <top-introduce :class="classOfComponent" />

    <!-- Start : Skills -->
    <v-divider class="mx-10 px-10 my-sm-15 my-15" />
    <sub-title
      :parent-items="objectOfParentItems.advantages"
      :class="classOfComponent + ' pt-md-10'"
    />
    <advantages :class="classOfComponent" />

    <!-- Start : Memory -->
    <v-divider class="mx-10 px-10 my-sm-15 my-15" />
    <sub-title
      :parent-items="objectOfParentItems.memory"
      :class="classOfComponent + ' pt-md-10'"
    />
    <memories :class="classOfComponent" />

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

    <!-- Start : Photos -->
    <v-divider class="mx-10 px-10 my-sm-15 my-15" />
    <sub-title
      :parent-items="objectOfParentItems.photos"
      :class="classOfComponent + ' pt-md-10'"
    />
    <photos :class="classOfComponent" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TopIntroduce from '@/components/index/TopIntroduce.vue'
import SubTitle from '@/components/index/SubTitle.vue'
import Advantages from '@/components/index/Advantages.vue'
import Memories from '@/components/index/Memories.vue'
import MainProject from '@/components/index/MainProject.vue'
import Photos from '@/components/index/Photos.vue'
import Career from '@/components/index/Career.vue'

@Component({
  components: {
    TopIntroduce,
    SubTitle,
    Advantages,
    Memories,
    MainProject,
    Career,
    Photos,
  },
})
class PagesIndex extends Vue {
  /* data */
  private titleOfTop: string = 'Lee Se Young'

  private subTitleOfTop: string = 'Frontend Developer'

  private classOfComponent: string = 'my-md-10'

  // sub titles //
  private objectOfParentItems: {
    advantages: { title: string; content: string }
    memory: { title: string; content: string }
    mainProject: { title: string; content: string }
    mainYoutubeVideo: { title: string; content: string }
    career: { title: string; content: string }
    photos: { title: string; content: string }
  } = {
    advantages: {
      title: 'Advantages',
      content:
        '이런 업무를 하거나, 프로그램&#183;툴&#183;언어를 다룰 수 있어요',
    },
    memory: {
      title: 'Memories',
      content: '경제&#183;금융&#183;IT 분야 주요 트렌드와 함께했던 기억이에요',
    },
    mainProject: {
      title: 'Main Project',
      content: '최근 많은 분들과 함께 진행되고 있는 주요 프로젝트입니다',
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
    photos: {
      title: 'Photos',
      content: '감사하게도 남겨주신 사진을 모아놓아 보았습니다',
    },
  }
}

export default PagesIndex
</script>
