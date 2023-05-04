<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list>
        <v-list-item nuxt :to="'/'">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt :to="'/about'">
          <v-list-item-action>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
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

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class LayoutDefault extends Vue {
  private color: string = 'grey lighten-4'
  private maxWidth: number = 1264
}

export default LayoutDefault
</script>
