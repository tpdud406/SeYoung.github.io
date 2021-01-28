<template>
  <v-app light>
    <v-app-bar fixed app>
      <v-btn to="/" text> Home </v-btn>
    </v-app-bar>
    <v-container>
      <nuxt />
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
