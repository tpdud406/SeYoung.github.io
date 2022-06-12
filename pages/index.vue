<template>
  <v-container id="top-container" fluid>
    <!-- ### Start : Top Title ### -->
    <v-row justify="center">
      <v-col cols="6">
        <!-- Start : title -->
        <p
          :class="'text-md-h2 font-weight-bold text-center'"
          :style="{ lineHeight: '4.9rem' }"
          v-html="titleOfTop"
        />

        <!-- Start : subtitle -->
        <p
          :class="'text-md-h4 font-weight-light text-center'"
          :style="{ lineHeight: '4.0rem' }"
          v-html="subTitleOfTop"
        />
      </v-col>
    </v-row>

    <!-- ### Start : Components ### -->
    <top-introduce :class="classOfComponent" />

    <!-- Start : Skills -->
    <sub-title
      :parent-items="objectOfParentItems.advantages"
      :class="classOfComponent + ' pt-md-10'"
    />
    <advantages :class="classOfComponent" />

    <!-- Start : Memory -->
    <sub-title
      :parent-items="objectOfParentItems.memory"
      :class="classOfComponent + ' pt-md-10'"
    />
    <memories :class="classOfComponent" />

    <!-- Start : Main Project -->
    <sub-title
      :parent-items="objectOfParentItems.mainProject"
      :class="classOfComponent + ' pt-md-10'"
    />
    <main-project :class="classOfComponent" />

    <!-- Start : Main Youtube Video -->
    <sub-title
      :parent-items="objectOfParentItems.mainYoutubeVideo"
      :class="classOfComponent + ' pt-md-10'"
    />
    <main-youtube-video :class="classOfComponent" />

    <!-- Start : Carreer Detail -->
    <sub-title
      :parent-items="objectOfParentItems.carreer"
      :class="classOfComponent + ' pt-md-10'"
    />
    <carreer :class="classOfComponent" />

    <!-- Start : Photos -->
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
import MainYoutubeVideo from '@/components/index/MainYoutubeVideo.vue'
import Carreer from '@/components/index/Carreer.vue'
import Photos from '@/components/index/Photos.vue'

@Component({
  components: {
    TopIntroduce,
    SubTitle,
    Advantages,
    Memories,
    MainProject,
    MainYoutubeVideo,
    Carreer,
    Photos,
  },
})
class PagesIndex extends Vue {
  /* data */
  private titleOfTop: string =
    'Park Sung-mouk' + '<br />Presenter <small>&</small> Strategist'

  private subTitleOfTop: string = '경제&#183;금융&#183;IT 트렌드 쉬운 설명'

  private classOfComponent: string = 'my-md-10'

  // sub titles //
  private objectOfParentItems: {
    advantages: { title: string; content: string }
    memory: { title: string; content: string }
    mainProject: { title: string; content: string }
    mainYoutubeVideo: { title: string; content: string }
    carreer: { title: string; content: string }
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
    carreer: {
      title: 'Carreer',
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
