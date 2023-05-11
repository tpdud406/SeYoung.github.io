<template>
  <v-app>
    <v-navigation-drawer
      app
      permanent
      v-model="isDrawerOpen"
      :mini-variant="isDesktop ? false : true"
      :clipped="clipped"
    >
      <v-list>
        <v-list-item nuxt :to="'/'">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Introduction</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt :to="'#project'">
          <v-list-item-action>
            <v-icon>mdi-code-braces</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt :to="'#work'">
          <v-list-item-action>
            <v-icon>mdi-briefcase</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Work</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt :to="'#education'">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Education</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content style="height: 100vh">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  data() {
    return {
      items: ['Introduction', 'Projects', 'Experience', 'Education'],
      isDesktop: true, // 이 값을 브라우저 유형에 따라 적절하게 변경해주세요.
      isDrawerOpen: true,
      clipped: true,
    }
  },
  mounted() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    checkScreenSize() {
      this.isDesktop = window.innerWidth > 960
    },
  },
})
export default class LayoutDefault extends Vue {}
</script>
