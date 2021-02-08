<template>
  <v-row justify="center" align="center">
    <v-card :max-width="mainCardMaxWidth" flat color="rgba(0,0,0,0)">
      <top class="mb-8"></top>
      <skills class="mb-8" />
      <carreer />
    </v-card>
  </v-row>
</template>

<script>
import Top from '@/components/index/Top.vue'
import Carreer from '@/components/index/Carreer.vue'
import Skills from '@/components/index/Skills.vue'

export default {
  components: {
    Top,
    Carreer,
    Skills,
  },
  data() {
    return {}
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
