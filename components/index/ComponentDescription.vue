<template>
  <v-container>
    <v-card flat>
      <v-card-title class="d-flex justify-center">
        <p class="text-center text-h4 font-weight-black" v-html="parentTitle" />
      </v-card-title>

      <v-card-subtitle class="text-center">
        <p class="text-center" v-html="parentDesc" />
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexComponentDescription extends Vue {
  @Prop({ type: Object, default: null }) parentItems!: {
    title: string
    desc: string
  }

  /* data */
  private parentTitle: string = this.parentItems.title
  private parentDesc: string = this.parentItems.desc
}

export default ComponentsIndexComponentDescription
</script>
