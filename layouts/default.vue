<template>
  <v-app>
    <v-app-bar :color="appBar.color" dense flat>
      <v-spacer />
      <v-app-bar-title class="white--text">
        <small>{{ appBar.title }}</small>
      </v-app-bar-title>
      <v-spacer />
    </v-app-bar>
    <v-container>
      <nuxt />
    </v-container>
  </v-app>
</template>

<script>
export default {
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
