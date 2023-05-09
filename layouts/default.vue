<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list>
        <v-list-item nuxt :to="'/'">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Introduction</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt :to="'/about'">
          <v-list-item-action>
            <v-icon>mdi-code-braces</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt :to="'/about'">
          <v-list-item-action>
            <v-icon>mdi-briefcase</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Experience</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt :to="'/about'">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Education</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
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
    }
  },
})
export default class LayoutDefault extends Vue {}
</script>
