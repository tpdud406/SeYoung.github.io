<template>
  <v-container id="top-container" fluid>
    <!-- ### Start : Top Title ### -->
    <v-row justify="center">
      <v-col cols="8" sm="6">
        <!-- Start : title -->
        <p
          :class="'text-sm-h4 text-h6 font-weight-bold text-center'"
          :style="{
            lineHeight: $vuetify.breakpoint.smAndUp ? '2.9rem' : '2rem',
          }"
          v-html="titleOfTop"
        />
        <!-- Start : subtitle -->
        <p
          :class="'text-sm-h6 font-weight-light text-center'"
          :style="{ lineHeight: '1.2rem' }"
          v-html="subTitleOfTop"
        />

        <p>{{ contentOfTop }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card-actions>
          <v-btn
            v-for="(linkBtn, btnIndex) in linkBtns"
            :key="btnIndex"
            :href="linkBtn.url"
            icon
            target="_blank"
          >
            <v-icon large>{{ linkBtn.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>

    <!-- ### Start : Components ### -->

    <!-- Start : Main Project -->
    <v-divider class="mx-10 px-10 my-sm-15 my-15" />
    <sub-title
      :parent-items="objectOfParentItems.mainProject"
      :class="classOfComponent + ' pt-md-10'"
    />
    <main-project :class="classOfComponent" />

    <!-- Start : experience Detail -->
    <v-divider class="mx-10 px-10 my-sm-15 my-15" />
    <sub-title
      :parent-items="objectOfParentItems.experience"
      :class="classOfComponent + ' pt-md-10'"
    />
    <experience :class="classOfComponent" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SubTitle from '@/components/index/SubTitle.vue'
import MainProject from '@/components/index/MainProject.vue'
import Experience from '@/components/index/Experience.vue'

@Component({
  components: {
    SubTitle,
    MainProject,
    Experience,
  },
})
class PagesIndex extends Vue {
  /* data */
  private titleOfTop: string = '이세영'

  private subTitleOfTop: string = 'Frontend Developer'

  private contentOfTop: string = 'ㅇㅇㅇㅇ하는 개발자이고 싶습니다 블라블라~~~'

  private linkBtns: Array<{ url: string; color: string; icon: string }> = [
    {
      url: 'https://github.com/tpdud406',
      color: 'black',
      icon: 'mdi-github',
    },
    {
      url: 'tpdud406@gmail.com',
      color: 'black',
      icon: 'mdi-gmail',
    },
  ]

  private classOfComponent: string = 'my-md-10'

  // sub titles //
  private objectOfParentItems: {
    mainProject: { title: string; content: string }
    mainYoutubeVideo: { title: string; content: string }
    experience: { title: string; content: string }
  } = {
    mainProject: {
      title: 'Projects',
      content: '',
    },
    mainYoutubeVideo: {
      title: 'Best Youtube',
      content:
        '경제&#183;금융&#183;IT 분야에서 많은 분들이 시청해주신 영상들이에요',
    },
    experience: {
      title: 'Experience',
      content: '',
    },
  }
}

export default PagesIndex
</script>
