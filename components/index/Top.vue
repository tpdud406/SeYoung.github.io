<template>
  <v-container :id="ids.total">
    <v-row :id="ids.top" no-gutters>
      <!-- Start : Text -->
      <v-col cols="9" class="d-flex justify-left align-center">
        <v-card flat tile>
          <v-card-title>
            <p
              class="text-left text-h4 font-weight-black"
              v-html="introduceOnTop.head"
            />
          </v-card-title>

          <v-card-subtitle>
            <p
              class="text-left text-subtitle-1 pl-2"
              v-html="introduceOnTop.body"
            />

            <!-- Start : Examples -->
            <p class="text-left pl-2" v-html="introduceOnTop.bodyExample" />
          </v-card-subtitle>

          <!-- Start : Page Move Buttons -->
          <v-card-actions>
            <v-container fluid class="py-0">
              <v-row>
                <v-col cols="4" class="d-flex justify-center">
                  <!-- Start : Quick Buttons Menu -->
                  <v-menu :rounded="'xl'" offset-y>
                    <!-- menu btn -->
                    <template #activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        id="no-background-hover"
                        color="black"
                        :rounded="false"
                        text
                        :ripple="false"
                        v-on="on"
                      >
                        {{ 'Menu ▼' }}
                      </v-btn>
                    </template>

                    <!-- menu contents -->
                    <v-list>
                      <v-list-item
                        v-for="(quickBtn, index) in quickBtns"
                        :key="index"
                      >
                        <v-list-item-title
                          :color="quickBtn.color"
                          :block="true"
                          :large="false"
                        >
                          <v-icon v-if="!!quickBtn.icon !== false">
                            {{ quickBtn.icon }}
                          </v-icon>
                          {{ quickBtn.name }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>

                <!-- End : Quick Buttons -->

                <!-- Start : Link Buttons -->
                <v-col
                  v-for="(linkBtn, index) in linkBtns"
                  :key="index"
                  cols="1"
                  class="d-flex justify-center"
                >
                  <v-btn
                    :href="linkBtn.url"
                    :color="linkBtn.color"
                    icon
                    target="_blank"
                  >
                    <v-icon>{{ linkBtn.icon }}</v-icon>
                  </v-btn>
                </v-col>
                <!-- End : Link Buttons -->
              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Start : Image -->
      <v-col cols="3" class="d-flex justify-end align-end">
        <v-img :src="images.imageOfTop" max-height="60%" contain />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexTop extends Vue {
  /* data() */
  private ids: { total: string; key: string; quickBtns: string } = {
    total: 'top',
    key: 'key',
    quickBtns: 'quick-buttons',
  }

  private images: { imageOfTop: string; imageOfTop2: string } = {
    imageOfTop: '/index/mygithubpages_img_20220528.png',
    imageOfTop2: '/index/pangyo_image.jpg',
  }

  private introduceOnTop: {
    head: string
    body: string
    bodyExample: string
  } = {
    head:
      '<span style="color: #2979FF;">쉽게,</span><br />어려운 개념<small class="mr-1">을</small> 설명<small>합니다</small>',
    body:
      '경제/금융, 정보기술(IT) 분야에서<br />어려운 개념과 구조들을 이해하기 쉽게 설명하고 있습니다',
    bodyExample: '예시. 채권, 가상화폐, 블록체인, 디지털 전환, 마이데이터 등',
  }

  private linkBtns: Array<{ url: string; color: string; icon: string }> = [
    {
      url: 'https://www.youtube.com/c/TMook',
      color: 'black',
      icon: 'mdi-youtube',
    },
    {
      url: 'https://www.linkedin.com/in/mook-t-34a0a2135/',
      color: 'black',
      icon: 'mdi-linkedin',
    },
  ]

  private quickBtns: Array<{ name: string; color: string; icon: string }> = [
    {
      name: '핵심 역량',
      color: '#2979FF',
      icon: 'mdi-checkbox-multiple-marked-circle',
    },
    { name: '주요 영상', color: 'black', icon: 'mdi-video' },
    { name: '개발/분석 관련', color: 'black', icon: 'mdi-code-tags' },
    { name: '타임라인', color: 'black', icon: 'mdi-calendar-multiple' },
  ]
}

export default ComponentsIndexTop
</script>

<style lang="scss">
#no-background-hover::before {
  background-color: transparent !important;
}
</style>
