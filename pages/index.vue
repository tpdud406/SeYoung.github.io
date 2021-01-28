<template>
  <v-row justify="center" align="center">
    <v-card :max-width="mainCardMaxWidth" flat>
      <v-row>
        <v-col cols="12">
          <v-card outlined flat>
            <v-card-title class="headline"> TMook's Page </v-card-title>
            <v-card-text> 박성묵(TMook)의 개인 페이지입니다 </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-spacer />
              <v-btn
                v-for="(linkBtn, index) in externalLinkBtn"
                :key="index"
                :href="linkBtn.url"
                :color="linkBtn.color"
                outlined
                small
                >{{ linkBtn.name }}</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
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
          name: 'Youtube',
          url: 'https://www.youtube.com/c/TMook',
          color: 'red darken-1',
        },
      ],
    }
  },
  computed: {
    mainCardMaxWidth() {
      const maxWidth =
        this.$vuetify.breakpoint.width < 800
          ? this.$vuetify.breakpoint.width
          : 800
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
