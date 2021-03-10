<template>
  <v-card :width="width" flat tile>
    <v-img
      src="/background/starry-night-1149815_vertical.jpg"
      :gradient="color.backgroundGradient"
      :height="heightInXS"
      :contain="containInXS"
      class="align-center"
    >
      <v-card-subtitle
        class="main-subtitle blue--text text--lighten-1"
        v-html="text.subtitle"
      />
      <v-card-title class="main-title white--text" v-html="text.title" />
      <v-btn
        :color="btns.skills.color"
        :to="btns.skills.to"
        :href="btns.skills.href"
        :small="$vuetify.breakpoint.xsOnly"
        class="mt-5 ml-5"
        dark
      >
        <span>{{ btns.skills.name }}</span>
      </v-btn>
      <v-btn
        :color="btns.youtube.color"
        :to="btns.youtube.to"
        :href="btns.youtube.href"
        :small="$vuetify.breakpoint.xsOnly"
        class="mt-5 ml-2"
        outlined
      >
        <span>{{ btns.youtube.name }}</span>
      </v-btn>
    </v-img>
  </v-card>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import MainFooter from '@/components/default/MainFooter.vue'

@Component({
  components: {
    MainFooter,
  },
  computed: {
    heightInXS(): any {
      const height = this.$vuetify.breakpoint.xsOnly ? 500 : undefined
      return height
    },
    containInXS(): boolean {
      const contain = !this.$vuetify.breakpoint.xsOnly
      return contain
    },
  },
})
class ComponentsIndexTop extends Vue {
  @Provide() width: string = '100%'
  @Provide() text: { subtitle: string; title: string } = {
    subtitle: 'READ AND LEAD THE WORLD',
    title:
      '희망하기 보다' +
      '<span class="ml-sm-2" style="font-weight: 500;">행동하는 매니저</span>',
  }

  @Provide() appBar: { title: string; color: string } = {
    title: 'TMook',
    color: 'rgba(21,31,32,1)',
  }

  @Provide() btns: {
    skills: { name: string; to: string; href: undefined; color: string }
    youtube: { name: string; to: undefined; href: string; color: string }
  } = {
    skills: {
      name: 'CHECK ▼',
      to: '/#skills',
      href: undefined,
      color: 'blue darken-3',
    },
    youtube: {
      name: 'MY YOUTUBE ▶',
      to: undefined,
      href: 'https://youtube.com/c/TMook',
      color: 'white',
    },
  }

  @Provide() color: { backgroundGradient: string } = {
    backgroundGradient: 'to right bottom, rgba(0,0,0,.1), rgba(11,12,23,.8)',
  }
}

export default ComponentsIndexTop
</script>

<style scoped>
.main-subtitle {
  font-size: 1.1rem !important;
  font-weight: 500;
  padding-bottom: 4px;
}
.main-title {
  font-size: 2rem !important;
  font-weight: 300;
  padding-top: 0px;
}
</style>
