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
      <v-menu offset-x rounded :close-on-click="closeOnClick">
        <template #activator="{ on, attrs }">
          <v-btn
            color="blue darken-1"
            class="mt-0 ml-5"
            dark
            rounded
            v-bind="attrs"
            v-on="on"
          >
            <span>목록 ▼</span>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item v-for="(menu, index) in menus" :key="index" class="pa-0">
            <v-list-item-content class="pa-0">
              <v-btn :to="menu.to" :href="menu.href" tile flat text>
                <span>{{ menu.name }}</span>
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        :color="btns.youtube.color"
        :to="btns.youtube.to"
        :href="btns.youtube.href"
        :small="$vuetify.breakpoint.xsOnly"
        class="mt-0 ml-2"
        icon
      >
        <v-icon>mdi-youtube</v-icon>
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

  @Provide() menus: Array<{
    name: string
    to: string
    href: undefined
    color: string
  }> = [
    {
      name: '특징',
      to: '/#skills',
      href: undefined,
      color: 'blue darken-3',
    },
    {
      name: '주요 숫자',
      to: '/#skills',
      href: undefined,
      color: 'blue darken-3',
    },
    {
      name: '진행 프로젝트',
      to: '/#skills',
      href: undefined,
      color: 'blue darken-3',
    },
    {
      name: '이력',
      to: '/#carreer',
      href: undefined,
      color: 'blue darken-3',
    },
  ]

  @Provide() btns: {
    youtube: { name: string; to: undefined; href: string; color: string }
  } = {
    youtube: {
      name: 'YOUTUBE 채널 ▶',
      to: undefined,
      href: 'https://youtube.com/c/TMook',
      color: 'red',
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

/* menu */
.v-application .rounded {
  border-radius: 40px !important;
}
</style>
