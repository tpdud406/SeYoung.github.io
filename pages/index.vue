<template>
  <v-row name="top" justify="center" align="center">
    <v-card :max-width="mainCardMaxWidth" flat tile color="rgba(0,0,0,0)">
      <top class="mb-12" />
      <skills name="skills" class="mb-4" />
      <counters name="counters" class="mb-12" />
      <main-project name="main-project" class="mb-12" />
      <carreer name="carreer" />
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Top from '@/components/index/Top.vue'
import Counters from '@/components/index/Counters.vue'
import Carreer from '@/components/index/Carreer.vue'
import MainProject from '@/components/index/MainProject.vue'
import Skills from '@/components/index/Skills.vue'

@Component({
  components: {
    Top,
    Counters,
    Carreer,
    MainProject,
    Skills,
  },
  computed: {
    mainCardMaxWidth(): number {
      const maxWidth: number =
        this.$vuetify.breakpoint.width < 860
          ? this.$vuetify.breakpoint.width
          : 860
      return maxWidth
    },
  },
})
class PagesIndex extends Vue {}

export default PagesIndex
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
