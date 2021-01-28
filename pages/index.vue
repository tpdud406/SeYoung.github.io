<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline"> TMook's Page </v-card-title>
        <v-card-text> 박성묵(TMook)의 개인 페이지입니다 </v-card-text>
        <v-card-actions>
          <v-btn color="primary" nuxt to="/" text> Home </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
