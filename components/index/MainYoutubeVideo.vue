<template>
  <v-container :id="tagid">
    <v-carousel
      cycle
      interval="8000"
      show-arrows-on-hover
      hide-delimiters
      touch
      class="px-sm-4"
      height="195"
    >
      <v-carousel-item v-for="(videoInfo, index) in videoInfos" :key="index">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-col
              v-for="(video, childIndex) in videoInfo"
              :key="childIndex"
              cols="4"
            >
              <!-- Start : Embeded Youtube Video (vue-youtube-embed) -->
              <youtube
                :video-id="video.vid"
                :player-width="'100%'"
                :player-height="'100%'"
              />
              <!-- End : Embeded Youtube Video (vue-youtube-embed) -->
              <p class="text-caption text-center">
                {{ video.desc }}
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexMainYoutubeVideo extends Vue {
  /* data */
  private tagid: string = 'top-view-youtube'
  private videoInfos: Array<Array<{ vid: string; desc: string }>> = [
    [
      { vid: '662wnupQ8fg', desc: '블록체인' },
      { vid: 'QzrIBsod1_A', desc: '딥러닝' },
      { vid: 'bEdfc5tdi7c', desc: '통화스왑' },
    ],
    [
      { vid: 'm_4JyZGoVCQ', desc: '클라우드 컴퓨팅' },
      { vid: 'Nazn65-z6VQ', desc: '롤오버 효과' },
      { vid: 'rrFVn3AYpzw', desc: '채권' },
    ],
    [
      { vid: 'SGTNcrjCrS8', desc: '그래픽처리장치(GPU)' },
      { vid: 'e9v6ST9oTB0', desc: '디지털 트윈' },
      { vid: 'E36MpUg5M54', desc: '다크웹' },
    ],
  ]
}

export default ComponentsIndexMainYoutubeVideo
</script>
