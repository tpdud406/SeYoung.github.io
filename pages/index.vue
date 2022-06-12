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

    <!-- ### Start : Top Component ### -->
    <top-introduce :class="classOfComponent" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TopIntroduce from '@/components/index/TopIntroduce.vue'

@Component({
  components: {
    TopIntroduce,
  },
})
class PagesIndex extends Vue {
  /* data */
  private titleOfTop: string =
    '쉬운 설명을 제공하는 사람' +
    '<br /><small>경제&#183;금융 <small>및</small> 비개발직군<small>과</small> 개발직군 사이 커뮤니케이터</small>' +
    '<br /><small>박성묵</small>'

  private classOfComponent: string = 'mb-10'
}

export default PagesIndex
</script>
