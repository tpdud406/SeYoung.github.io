<template>
  <div>
    <!-- Start : Key Point -->
    <index-top :class="marginBtwComponents" />
    <!-- End : Key Point -->

    <!-- ### Start: Content ### -->
    <v-row justify="center" class="ma-0 pa-0">
      <v-sheet :max-width="maxWidth">
        <!-- Start : Skills -->
        <index-skills :class="marginBtwComponents" />
        <!-- End : Skills -->

        <!-- Start : Key Number -->
        <index-counters :class="marginBtwComponents" />
        <!-- End : Key Number -->

        <!-- Start : Skills -->
        <index-main-project :class="marginBtwComponents" />
        <!-- End : Skills -->

        <!-- Start : Best Video -->
        <index-main-youtube-video :class="marginBtwComponents" />
        <!-- End : Best Video -->

        <!-- Start : Photos -->
        <index-photos :class="marginBtwComponents" />
        <!-- End : Photos -->

        <!--
    <v-divider class="my-2" />
    -->
        <index-carreer :class="marginBtwComponents" />
      </v-sheet>
    </v-row>
    <!-- ### End: Content ### -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import IndexTop from '@/components/index/Top.vue'
import IndexPhotos from '@/components/index/Photos.vue'
import IndexCounters from '@/components/index/Counters.vue'
import IndexSkills from '@/components/index/Skills.vue'
import IndexMainYoutubeVideo from '@/components/index/MainYoutubeVideo.vue'
import IndexMainProject from '@/components/index/MainProject.vue'
import IndexCarreer from '@/components/index/Carreer.vue'

@Component({
  components: {
    IndexTop,
    IndexPhotos,
    IndexCounters,
    IndexSkills,
    IndexMainProject,
    IndexMainYoutubeVideo,
    IndexCarreer,
  },
})
class PagesOldIndex extends Vue {
  /* data */
  private marginBtwComponents: string = 'mb-8 mb-sm-10 mb-md-8'
  private maxWidth: number = 1264
}

export default PagesOldIndex
</script>
