<template>
  <v-row justify="center">
    <v-col v-for="(item, index) in items" :key="index" cols="6">
      <v-card outlined flat>
        <v-card-title>
          {{ item.title }}
        </v-card-title>
        <v-card-text>
          {{ item.text }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Presenter', text: '설명하는 능력' },
        { title: 'Presenter', text: '설명하는 능력' },
        { title: 'Presenter', text: '설명하는 능력' },
        { title: 'Presenter', text: '설명하는 능력' },
        { title: 'Presenter', text: '설명하는 능력' },
      ],
    }
  },
}
</script>
