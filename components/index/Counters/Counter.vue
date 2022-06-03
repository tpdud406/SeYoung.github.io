<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 1,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <v-card outlined flat max-width="350" :min-height="handlingMinHeight">
      <v-toolbar height="20" flat :color="item.color">
        <v-toolbar-items>
          <v-icon x-small color="white"> mdi-check-circle </v-icon>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-title class="d-flex justify-center main-number mt-3 mt-sm-2 pb-0">
        {{ item.number }}
      </v-card-title>
      <v-card-title class="d-flex justify-center number-title pt-3 pb-1">
        <v-icon :color="item.color" class="mr-2">
          {{ item.icon }}
        </v-icon>
        {{ item.title }}
      </v-card-title>
      <v-card-text class="detail-text mt-5 mt-sm-0 mb-1 mb-sm-5">
        {{ item.text }}
      </v-card-text>
    </v-card>
  </v-lazy>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'nuxt-property-decorator'

@Component({
  computed: {
    handlingMinHeight(): number | undefined | string {
      const height: number | undefined | string = this.$vuetify.breakpoint
        .xsOnly
        ? 250
        : '100%'
      return height
    },
  },
})
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

<style scoped>
.main-number {
  font-size: 2rem !important;
  font-weight: 500;
}
.number-title {
  font-size: 1.2rem !important;
  font-weight: 400;
}
.detail-text {
  font-size: 0.9rem !important;
  font-weight: 400;
  padding-bottom: 0px;
}
</style>
