<template>
  <v-row>
    <v-col v-for="(item, index) in items" :key="index" cols="4" sm="2">
      <v-card
        :rounded="optionOfCards.rounded"
        flat
        outlined
        class="mb-2 mx-md-3 py-md-10 py-sm-4"
        :style="setGradient(item.number)"
      >
        <v-card-actions class="justify-center">
          <v-icon :size="optionOfCards.iconSize">
            {{ item.icon }}
          </v-icon>
        </v-card-actions>

        <v-card-title
          class="justify-center text-md-h4 font-weight-bold grey--text text--darken-3"
        >
          {{ String(item.number) + '%' }}
        </v-card-title>
      </v-card>

      <v-card-subtitle class="text-center grey--text">
        {{ item.title }}
      </v-card-subtitle>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexAdvantages extends Vue {
  /* data */
  private optionOfCards: {
    color: string
    rounded: string
    iconSize: number
  } = {
    color: 'grey lighten-4',
    rounded: 'pill',
    iconSize: this.$vuetify.breakpoint.width / 20,
  }

  // My Advantages, 6개 최적화
  private items: Array<{ icon: string; number: number; title: string }> = [
    { icon: 'mdi-text-to-speech', number: 95, title: 'Speach' },
    { icon: 'mdi-file-powerpoint', number: 90, title: 'MS PowerPoint' },
    { icon: 'mdi-file-word', number: 75, title: 'MS Word' },
    { icon: 'mdi-language-python', number: 70, title: 'Python' },
    { icon: 'mdi-database', number: 70, title: 'SQL' },
    { icon: 'mdi-language-javascript', number: 65, title: 'JavaScript' },
  ]

  /* method */
  private setGradient(percentage: number): string {
    const transformPercentage: string = String(100 - percentage) + '%'

    const style: string =
      'background: linear-gradient(' +
      'to bottom, ' +
      `rgba(0, 0, 0, 0) ${transformPercentage}, ` +
      'rgba(0, 0, 0, 0.10) 0%)'
    return style
  }
}

export default ComponentsIndexAdvantages
</script>
