<template>
  <v-timeline>
    <v-timeline-item
      v-for="(item, index) in items"
      :key="index"
      :color="item.color"
    >
      <template #opposite>
        <span>{{ item.time }}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">{{ item.title }}</v-card-title>
        <v-card-text>
          {{ item.content }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: '제목', time: '내용', content: '내용', color: 'blue' },
        { title: '제목', time: '내용', content: '내용', color: 'blue' },
        { title: '제목', time: '내용', content: '내용', color: 'blue' },
        { title: '제목', time: '내용', content: '내용', color: 'blue' },
      ],
    }
  },
}
</script>
