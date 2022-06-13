<template>
  <v-app>
    <v-sheet :color="color">
      <v-container fluid>
        <v-row justify="center">
          <v-sheet :max-width="maxWidth">
            <nuxt />
          </v-sheet>
        </v-row>
      </v-container>
    </v-sheet>
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
