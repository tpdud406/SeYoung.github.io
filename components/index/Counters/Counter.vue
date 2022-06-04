<template>
  <v-card outlined flat class="fill-height">
    <v-toolbar height="20" flat :color="item.color">
      <v-toolbar-items>
        <v-icon x-small color="white"> mdi-check-circle </v-icon>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Start : Key Number -->
    <v-card-title class="d-flex justify-center text-h2 font-weight-black pb-0">
      {{ item.number }}
    </v-card-title>

    <!-- Start : Key Number Desc -->
    <v-card-title
      class="d-flex justify-center text-h6 font-weight-bold pt-3 pb-1"
    >
      <v-icon :color="item.color" class="mr-2">
        {{ item.icon }}
      </v-icon>
      {{ item.title }}
    </v-card-title>

    <!-- Start : Detail -->
    <v-card-text class="mt-5 mt-sm-0">
      {{ item.text }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentIndexCountersCounter extends Vue {
  @Prop({ type: Object, default: null }) upperItem!: {
    color: string
    number: number
    icon: string
    title: string
    text: string
  }

  @Provide() isActive: boolean = false
  @Provide() item: Object = this.upperItem
}

export default ComponentIndexCountersCounter
</script>
