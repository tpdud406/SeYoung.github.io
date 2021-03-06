<template>
  <v-app>
    <v-app-bar :color="appBar.color" dense flat>
      <v-spacer />
      <v-app-bar-title class="white--text">
        <small>{{ appBar.title }}</small>
      </v-app-bar-title>
      <v-spacer />
    </v-app-bar>
    <v-container class="mb-4">
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
export default class extends Vue {
  appBar: object = {
    title: 'TMook',
    color: 'rgba(21,31,32,1)',
  }
}
</script>
