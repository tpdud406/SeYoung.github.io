<template>
  <v-row justify="center">
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
            <!-- Start : Image -->
            <v-img
              v-if="!!item.src"
              id="career-card-image"
              :src="item.src"
              :max-width="imageSizeOfsmAndDown"
              contain
            />
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>

            <!-- Start : Text -->
            <v-card-title
              class="text-md-body-1 text-sm-body-2 text-body-2 font-weight-bold pb-2"
            >
              {{ item.title }}
            </v-card-title>
            <v-card-text
              v-if="item.content.length !== 0"
              :class="item.btn.bool === true ? 'pb-sm-0' : ''"
            >
              {{ item.content }}
            </v-card-text>
            <v-card-text v-if="$vuetify.breakpoint.xsOnly" class="mt-0 pt-0">
              <small>{{ item.time }}</small>
            </v-card-text>

            <v-card-actions
              v-if="item.btn.bool"
              class="d-flex justify-end pr-3"
            >
              <v-btn
                text
                small
                :color="item.btn.color"
                :href="item.btn.href"
                :disabled="item.btn.href === ''"
                class="font-weight-light"
              >
                {{ item.btn.text }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexCareer extends Vue {
  private title: string = '전체 이력'
  private desc: string =
    '다양한 활동 중에서도 다른 많은 분들과<br>함께 할 수 있었던 모든 기록입니다'

  private items: Array<{
    src: null | string
    title: string
    time: string
    content: string
    color: string
    left: boolean
    hideDot: boolean
    btn: {
      bool: boolean
      href: string
      text: string
      color: string
    }
  }> = [
    {
      title: '「마이데이터 비즈니스 전략」 강의',
      time: '2023',
      content: '마이데이터 시대 비즈니스 전략 강의 촬영, 현대C&R 주관',
      color: 'dark grey',
      src: '/career/temp.jpg',
      left: true,
      hideDot: false,
      btn: {
        bool: true,
        href: '',
        text: '(출시 예정)',
        color: 'grey lighten-1',
      },
    },
    {
      title: "「'편하게 가입하는 금융상품 안전한가' 경각심 가질 것」, 전기신문",
      time: '2022.7',
      content: '전기신문 오피니언 <금요아침> 6회',
      color: 'dark grey',
      src: null,
      left: false,
      hideDot: true,
      btn: {
        bool: true,
        href: 'https://www.electimes.com/news/articleView.html?idxno=306372',
        text: '읽기 >',
        color: 'grey',
      },
    },
  ]

  /* computed */
  private get imageSizeOfsmAndDown(): number | undefined {
    const width: number | undefined = this.$vuetify.breakpoint.smOnly
      ? this.$vuetify.breakpoint.width / 2 - 40
      : this.$vuetify.breakpoint.xsOnly
      ? this.$vuetify.breakpoint.width - 130
      : undefined
    return width
  }
}

export default ComponentsIndexCareer
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
