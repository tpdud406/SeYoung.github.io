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
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TopIntroduce from '@/components/index/TopIntroduce.vue'
import SubTitle from '@/components/index/SubTitle.vue'
import Advantages from '@/components/index/Advantages.vue'
import Memories from '@/components/index/Memories.vue'

@Component({
  components: {
    TopIntroduce,
    SubTitle,
    Advantages,
    Memories,
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
  } = {
    advantages: {
      title: 'Advantages',
      content:
        '이런 업무를 하거나, 프로그램&#183;툴&#183;언어를 다룰 수 있어요',
    },
    memory: {
      title: 'Memories',
      content: '경제&#183;금융&#183;IT 분야 주요 트렌드와 함께했던 기억',
    },
  }
}

export default PagesIndex
</script>
