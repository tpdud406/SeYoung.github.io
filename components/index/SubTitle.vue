<template>
  <v-row justify="center">
    <v-col cols="8" sm="4">
      <p
        class="text-center text-sm-h4 text-h4 font-weight-normal pb-0"
        v-html="items.title"
      />
      <p
        class="text-center text-md-h6 text-sm-subtitle-1 text-body-1 font-weight-light pb-0"
        v-html="items.content"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexSubTitle extends Vue {
  @Prop({ type: Object, default: null }) parentItems!: {
    title: string
    content: string
  }

  /* data */
  private items: {} = this.parentItems
}

export default ComponentsIndexSubTitle
</script>
