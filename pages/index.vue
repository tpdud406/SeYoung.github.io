<template>
  <v-row justify="center" align="center">
    <!-- ### Start: LinkedIn Embeding Code ### -->
    <script
      type="text/javascript"
      src="https://platform.linkedin.com/badges/js/profile.js"
      async
      defer
    ></script>
    <v-card :max-width="mainCardMaxWidth" flat color="rgba(0,0,0,0)">
      <v-row class="mt-0">
        <v-col cols="12" class="py-0">
          <v-img src="/background/stock-1863880_1920.jpg" class="align-center">
            <v-card-title class="justify-center white--text"
              >Read The World, Lead The World</v-card-title
            >
          </v-img>
        </v-col>
      </v-row>
      <!-- LinkedIn Badge -->
      <!--
      <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="ko_KR" data-type="vertical" data-theme="dark" data-vanity="성묵-박-34a0a2135"><a class="LI-simple-link" href=\'https://kr.linkedin.com/in/%EC%84%B1%EB%AC%B5-%EB%B0%95-34a0a2135?trk=profile-badge\'>박성묵</a></div>'
      -->
      <!-- 
      <v-row class="mt-0">
        <v-col cols="12" class="py-0">
          <v-img src="/background/stock-1863880_1920.jpg" class="align-end">
            <v-card-title class="white--text"
              >Experience in Finance</v-card-title
            >
          </v-img>
        </v-col>
      </v-row>
      -->
      <!--
      <v-row class="mt-0">
        <v-col cols="12" class="py-0">
          <v-img src="/background/code-1839406_1920.jpg" class="align-end">
            <v-card-title class="white--text"
              >Experience in Programming</v-card-title
            >
          </v-img>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col cols="12" class="py-0">
          <v-img src="/background/business-2884023_1920.jpg" class="align-end">
            <v-card-title class="white--text"
              >Experience in Strategy Planning Team</v-card-title
            >
          </v-img>
        </v-col>
      </v-row>
      -->
      <v-row
        :justify="$vuetify.breakpoint.smAndDown ? 'start' : 'center'"
        class="mt-7 mx-5"
      >
        <v-btn
          v-for="(linkBtn, index) in externalLinkBtn"
          :key="index"
          :href="linkBtn.url"
          :color="linkBtn.color"
          small
          icon
          ><v-icon>{{ linkBtn.name }}</v-icon></v-btn
        >
      </v-row>
      <v-row>
        <v-col v-if="false" cols="12">
          <skills />
        </v-col>
        <v-col cols="12">
          <carreer />
        </v-col>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
import Carreer from '@/components/index/Carreer.vue'
import Skills from '@/components/index/Skills.vue'

export default {
  components: {
    Carreer,
    Skills,
  },
  data() {
    return {
      externalLinkBtn: [
        {
          name: 'mdi-youtube',
          url: 'https://www.youtube.com/c/TMook',
          color: 'red darken-1',
        },
        {
          name: 'mdi-instagram',
          url:
            'https://www.youtube.com/redirect?event=channel_banner&redir_token=QUFFLUhqbGJ2dWZ2TWtWUVpXN1FHZEU5VW5pMDdyODN3Z3xBQ3Jtc0trdXpMaVAtVUwtaUNKbUo1THZ5OVRSRkFQUE9pN1JWb29wV3JnRl9DSkQtclRyM3I3X2Z5dVZ3N2drLXlyWjZmSGljUklkUjNXcmdiV0ZwLUttMTM2MURJTTVYdjZ2UlJWZVV3akI5WTVGZzFQWjA3MA&q=https%3A%2F%2Fwww.instagram.com%2Fchannel_tmook%2F',
          color: 'pink lighten-3',
        },
      ],
    }
  },
  computed: {
    mainCardMaxWidth() {
      const maxWidth =
        this.$vuetify.breakpoint.width < 1280
          ? this.$vuetify.breakpoint.width
          : 1280
      return maxWidth
    },
  },
}
</script>

<style scoped>
#app
  > div
  > div
  > div
  > div
  > div
  > div:nth-child(1)
  > div
  > div.v-card__actions
  > a {
  text-transform: none;
}
</style>
