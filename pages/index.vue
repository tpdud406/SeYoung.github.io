<template>
  <div>
    <!-- Start : Key Point -->
    <index-top :class="marginBtwComponents" />
    <!-- End : Key Point -->

    <!-- Start : Skills -->
    <index-skills :class="marginBtwComponents" />
    <!-- End : Skills -->

    <!-- Start : Best Video -->
    <index-main-youtube-video :class="marginBtwComponents" />
    <!-- End : Best Video -->

    <!--
    <v-divider class="my-2" />
    -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import IndexTop from '@/components/index/Top.vue'
import IndexSkills from '@/components/index/Skills.vue'
import IndexMainYoutubeVideo from '@/components/index/MainYoutubeVideo.vue'

@Component({
  components: {
    IndexTop,
    IndexSkills,
    IndexMainYoutubeVideo,
  },
})
class PagesIndex extends Vue {
  /* data */
  private marginBtwComponents: string = 'mb-4'
}

export default PagesIndex
</script>
