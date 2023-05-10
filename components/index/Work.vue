<template>
  <v-row justify="center" id="work">
    <v-col cols="12" md="10">
      <v-timeline :dense="$vuetify.breakpoint.xsOnly" class="px-md-10 px-sm-4">
        <v-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :color="item.color"
          :left="item.left"
          :right="!item.left"
          :hide-dot="item.hideDot"
          small
          :class="item.left == true ? 'd-flex justify-end' : ''"
        >
          <!-- Start : Time -->
          <template #opposite>
            <span>{{ item.time }}</span>
          </template>

          <!-- Start : Content -->
          <v-card>
            <!-- Start : Text -->
            <v-card-title
              class="text-md-body-1 text-sm-body-2 text-body-2 font-weight-bold pb-2"
            >
              {{ item.title }}
            </v-card-title>
            {{ item.content }}
            <v-card-text v-if="$vuetify.breakpoint.xsOnly" class="mt-0 pt-0">
              <small>{{ item.time }}</small>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexWork extends Vue {
  private title: string = '경력'

  private items: Array<{
    title: string
    time: string
    content: string
    color: string
    left: boolean
    hideDot: boolean
  }> = [
    {
      title: '주식회사 게타',
      time: '2023.5 ~',
      content: '프론트엔드',
      color: 'dark grey',
      left: true,
      hideDot: false,
    },
    {
      title: '피플라이프(주) - 비개발',
      time: '2013.8 ~ 2022.9',
      content: '영업지원팀',
      color: 'dark grey',
      left: false,
      hideDot: true,
    },
  ]
}

export default ComponentsIndexWork
</script>

<style scoped>
#career-card-image {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}

/* Disable grayscale on hover */
#career-card-image:hover {
  -webkit-filter: grayscale(0);
  filter: none;
}
</style>
