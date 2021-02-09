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

<script>
import MainFooter from '@/components/default/MainFooter.vue'
export default {
  components: {
    MainFooter,
  },
  data() {
    return {
      appBar: {
        title: 'TMook',
        color: 'rgba(21,31,32,1)',
      },
    }
  },
}
</script>
