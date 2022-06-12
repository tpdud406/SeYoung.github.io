<template>
  <v-container id="top-container" fluid>
    <!-- ### Start : Top Title ### -->
    <v-row justify="center">
      <p
        :class="'text-sm-h2 font-weight-light text-center ' + classOfComponent"
        :style="{ lineHeight: '4.9rem' }"
        v-html="titleOfTop"
      />
    </v-row>

    <!-- ### Start : Components ### -->
    <top-introduce :class="classOfComponent" />

    <sub-title
      :parent-items="objectOfParentItems.advantages"
      :class="classOfComponent + ' pt-md-10'"
    />
    <advantages :class="classOfComponent" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TopIntroduce from '@/components/index/TopIntroduce.vue'
import SubTitle from '@/components/index/SubTitle.vue'
import Advantages from '@/components/index/Advantages.vue'

@Component({
  components: {
    TopIntroduce,
    SubTitle,
    Advantages,
  },
})
class PagesIndex extends Vue {
  /* data */
  private titleOfTop: string =
    '쉬운 설명을 제공하는 사람' +
    '<br /><small>경제&#183;금융 <small>및</small> 비개발직군<small>과</small> 개발직군 사이 커뮤니케이터</small>' +
    '<br /><small>박성묵</small>'

  private classOfComponent: string = 'my-md-10'

  // sub titles //
  private objectOfParentItems: {
    advantages: { title: string; content: string }
  } = {
    advantages: {
      title: 'Advantages',
      content:
        '이런 업무를 하거나, 프로그램&#183;툴&#183;언어를 다룰 수 있어요',
    },
  }
}

export default PagesIndex
</script>
