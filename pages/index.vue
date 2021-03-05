<template>
  <v-row justify="center" align="center">
    <v-card :max-width="mainCardMaxWidth" flat tile color="rgba(0,0,0,0)">
      <top class="mb-12" />
      <skills class="mb-4" />
      <counters class="mb-12" />
      <main-project class="mb-12" />
      <carreer />
    </v-card>
  </v-row>
</template>

<script>
import Top from '@/components/index/Top.vue'
import Counters from '@/components/index/Counters.vue'
import Carreer from '@/components/index/Carreer.vue'
import MainProject from '@/components/index/MainProject.vue'
import Skills from '@/components/index/Skills.vue'

export default {
  components: {
    Top,
    Counters,
    Carreer,
    MainProject,
    Skills,
  },
  data() {
    return {}
  },
  computed: {
    mainCardMaxWidth() {
      const maxWidth =
        this.$vuetify.breakpoint.width < 860
          ? this.$vuetify.breakpoint.width
          : 860
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
