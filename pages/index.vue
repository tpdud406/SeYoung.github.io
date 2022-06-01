<template>
  <div>
    <!-- Start : Key Point -->
    <index-top />
    <!-- End : Key Point -->

    <!-- Start : Component Description -->
    <index-component-description :parent-items="youtubeDescItems" />
    <!-- End : Component Description -->

    <!-- Start : Key Point -->
    <index-main-youtube-video />
    <!-- End : Key Point -->

    <!--
    <v-divider class="my-2" />
    -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import IndexTop from '@/components/index/Top.vue'
import IndexComponentDescription from '@/components/index/ComponentDescription.vue'
import IndexMainYoutubeVideo from '@/components/index/MainYoutubeVideo.vue'

@Component({
  components: {
    IndexTop,
    IndexComponentDescription,
    IndexMainYoutubeVideo,
  },
})
class PagesIndex extends Vue {
  private youtubeDescItems: { title: string; desc: string } = {
    title: '인기 영상',
    desc: 'Youtube를 통해서 많은 분들이<br />시청해주신 영상들 중 일부입니다',
  }
}

export default PagesIndex
</script>
