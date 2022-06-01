<template>
  <div>
    <!-- Start : Key Point -->
    <index-top />
    <!-- End : Key Point -->

    <!--
    <v-divider class="my-2" />
    -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import IndexTop from '@/components/index/Top.vue'

@Component({
  components: {
    IndexTop,
  },
})
class PagesIndex extends Vue {}

export default PagesIndex
</script>
