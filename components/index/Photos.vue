<template>
  <v-container fluid class="pa-0">
    <!-- ### Start : title name ### -->
    <v-card-title class="d-flex justify-center">
      <p class="text-center text-h4 font-weight-black" v-html="title" />
    </v-card-title>

    <v-card-subtitle class="text-center">
      <p class="text-center" v-html="desc" />
    </v-card-subtitle>

    <!-- ### Start : contents ### -->
    <v-row no-gutters>
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="12"
        sm="4"
        class="child-flex"
      >
        <v-hover>
          <template #default="{ hover }">
            <!-- Start : Photo (Odd) -->
            <v-img
              v-if="index % 2 === 1"
              :src="item.src"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute :color="item.color">
                  <p class="text-subtitle-1" v-html="item.desc" />
                </v-overlay>
              </v-fade-transition>
            </v-img>

            <!-- Start : Color Board (Even)-->
            <v-card
              v-else
              width="100%"
              height="100%"
              :color="item.color"
              dark
              tile
              flat
              class="d-flex justify-start align-center"
            >
              <v-card-title>
                <p class="text-subtitle-1" v-html="item.desc" />
              </v-card-title>

              <!-- Start : Overlay Img-->
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute opacity="0%">
                  <v-card min-width="100%" min-height="100%" tile>
                    <v-img
                      width="100%"
                      height="100%"
                      :src="item.src"
                      aspect-ratio="1"
                    >
                      <template #placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          />
                        </v-row>
                      </template>

                      <v-card-title>
                        <p
                          class="text-h3"
                          style="color: rgba(0, 0, 0, 0)"
                          v-html="item.alt"
                        />
                      </v-card-title>
                    </v-img>
                  </v-card>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexPhotos extends Vue {
  /* data */
  private title: string = '사진들'
  private desc: string =
    '강연 촬영 및 외부 활동에서<br />촬영해주신 사진들입니다'

  private items: Array<{
    src: string
    alt: string
    desc: string
    color: string
  }> = [
    {
      src: '/photos/1.jpg',
      alt: '마이데이터 촬영 현장',
      desc: '다양한 활동들이<br />있었습니다 <',
      color: 'dark grey',
    },
    {
      src: '/photos/2.jpg',
      alt: '메타버스 촬영 현장',
      desc: '메타버스 촬영 현장<br />(w. 김상균 교수님)',
      color: 'black',
    },
    {
      src: '/photos/3.jpg',
      alt: '판교의 젊은 기획자들 촬영',
      desc: '진행 역을 맡으며<br />직접 강연도 가능합니다 <',
      color: 'black',
    },
    {
      src: '/photos/4.jpg',
      alt: '삼성동 제이든 미디어에서',
      desc: '삼성동 제이든 미디어에서',
      color: 'black',
    },
    {
      src: '/photos/5.jpg',
      alt: '프로필 사진',
      desc: '스튜디오에서 다소의<br />임기응변에 능합니다 <',
      color: 'dark grey',
    },
    {
      src: '/photos/6.jpg',
      alt: '디지털 화폐 관련 촬영 현장',
      desc: '디지털 화폐 관련 촬영 현장',
      color: 'black',
    },
  ]
}

export default ComponentsIndexPhotos
</script>
