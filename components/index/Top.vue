<template>
  <v-card :height="height" :width="width" flat tile>
    <v-img
      src="/background/starry-night-1149815_vertical.jpg"
      :gradient="color.backgroundGradient"
      contain
      class="align-center"
    >
      <v-card-subtitle class="main-subtitle blue--text text--lighten-1">
        {{ text.subtitle }}
      </v-card-subtitle>
      <v-card-title class="main-title white--text">{{
        text.title
      }}</v-card-title>
      <v-btn
        :color="btns.skills.color"
        :to="btns.skills.to"
        class="mt-5 ml-5"
        dark
      >
        <span>{{ btns.skills.name }}</span>
      </v-btn>
      <v-btn
        :color="btns.youtube.color"
        :to="btns.youtube.to"
        class="mt-5 ml-2"
        outlined
      >
        <span>{{ btns.youtube.name }}</span>
      </v-btn>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      height: undefined,
      width: '100%',
      text: {
        subtitle: 'Read the world, Lead the world',
        title: '첫 걸음이라도, 내딛습니다',
      },
      btns: {
        skills: {
          name: 'CHECK ▼',
          to: '/#skills',
          color: 'blue darken-3',
        },
        youtube: {
          name: 'MY YOUTUBE ▶',
          to: 'https://youtube.com/c/TMook',
          color: 'white',
        },
      },
      color: {
        backgroundGradient:
          'to right bottom, rgba(0,0,0,.1), rgba(11,12,23,.8)',
      },
    }
  },
}
</script>

<style scoped>
.main-subtitle {
  font-size: 1.2rem !important;
  padding-bottom: 4px;
}
.main-title {
  font-size: 2rem !important;
  padding-top: 0px;
}
</style>
