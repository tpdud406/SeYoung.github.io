<template>
  <div>
    <!-- Start : Key Point -->
    <index-top :class="marginBtwComponents" />
    <!-- End : Key Point -->

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
class PagesIndex extends Vue {
  /* data */
  private marginBtwComponents: string = 'mb-4 mb-sm-10 mb-md-8'
}

export default PagesIndex
</script>
