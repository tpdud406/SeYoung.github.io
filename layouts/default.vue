<template>
  <v-app>
    <nuxt />
    <main-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import MainFooter from '@/components/default/MainFooter.vue'

@Component({
  components: {
    MainFooter,
  },
})
class LayoutDefault extends Vue {
  @Provide() ids: { containerOfTop: string } = {
    containerOfTop: 'containerOfTop',
  }
}

export default LayoutDefault
</script>
