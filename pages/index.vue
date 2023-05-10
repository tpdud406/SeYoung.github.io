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
    <v-row justify="center">
      <v-col cols="8" sm="6">
        <img
          src="../static/index/temp.jpg"
          alt=""
          style="width: 100%; height: 55vh"
        />
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

    <!-- Start : work Detail -->
    <v-divider class="mx-10 px-10" />
    <sub-title
      :parent-items="objectOfParentItems.work"
      :class="classOfComponent + ' pt-md-10'"
    />
    <work :class="classOfComponent" />

    <!-- Start : education Detail -->
    <v-divider class="mx-10 px-10" />
    <sub-title
      :parent-items="objectOfParentItems.education"
      :class="classOfComponent + ' pt-md-10'"
    />
    <education :class="classOfComponent" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SubTitle from '../components/index/SubTitle.vue'
import MainProject from '../components/index/MainProject.vue'
import Work from '../components/index/Work.vue'
import Education from '../components/index/Education.vue'

@Component({
  components: {
    SubTitle,
    MainProject,
    Work,
    Education,
  },
})
class PagesIndex extends Vue {
  /* data */
  private titleOfTop: string = '이세영'

  private subTitleOfTop: string = 'Frontend Developer'

  private contentOfTop: string =
    '블라블라~~~ ㅇㅇㅇㅇ하는 개발자이고 싶습니다 블라블라~~~'

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
    work: { title: string; content: string }
    education: { title: string; content: string }
  } = {
    mainProject: {
      title: 'Projects',
      content: '',
    },
    work: {
      title: 'Work',
      content: '',
    },
    education: {
      title: 'Education',
      content: '',
    },
  }
}

export default PagesIndex
</script>
