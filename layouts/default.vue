<template>
  <v-app>
    <v-container class="mb-4 pa-0">
      <nuxt />
    </v-container>
    <main-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MainFooter from '@/components/default/MainFooter.vue'

@Component({
  components: {
    MainFooter,
  },
})
class LayoutDefault extends Vue {}

export default LayoutDefault
</script>
