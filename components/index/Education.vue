<template>
  <v-row no-gutters id="education">
    <v-col
      v-for="(item, index) in items"
      :key="index"
      cols="6"
      sm="4"
      class="child-flex"
      :order="reordering(index)"
    >
      <v-hover>
        <template #default="{ hover }">
          <!-- Start : Photo (Odd) -->
          <v-img
            v-if="index % 2 === 1"
            id="photos-card-image"
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

            <!-- Start : Progress circular -->
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>

            <!-- Start : Overlay Img-->
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
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexEducations extends Vue {
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
      src: '/education/temp.jpg',
      alt: '사진1',
      desc: '다양한 활동들 <',
      color: 'dark grey',
    },
    {
      src: '/education/temp.jpg',
      alt: '사진2',
      desc: '메타버스 촬영 현장<br />(w. 김상균 교수님)',
      color: 'black',
    },
  ]

  /* method */
  private reordering(index: number): number {
    const reidx: number =
      this.$vuetify.breakpoint.xsOnly && index === 2
        ? 3
        : this.$vuetify.breakpoint.xsOnly && index === 3
        ? 2
        : index
    return reidx
  }
}

export default ComponentsIndexEducations
</script>

<style scoped>
#photos-card-image {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}

/* Disable grayscale on hover */
#photos-card-image:hover {
  -webkit-filter: grayscale(0);
  filter: none;
}
</style>
