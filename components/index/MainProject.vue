<template>
  <v-container>
    <v-row>
      <v-col v-for="project in projects" :key="project.id" cols="6">
        <v-card style="height: 300px; overflow-y: auto">
          <v-card-title>{{ project.text.title }}</v-card-title>
          <v-card-text v-html="project.text.content" />

          <v-btn
            outlined
            rounded="pill"
            depressed
            :x-small="$vuetify.breakpoint.xsOnly"
            :color="project.ghBtn.color"
            :href="project.ghBtn.href"
            class="mt-6 ml-5"
          >
            {{ project.ghBtn.name }}
          </v-btn>

          <v-btn
            outlined
            rounded="pill"
            depressed
            :x-small="$vuetify.breakpoint.xsOnly"
            :color="project.demoBtn.color"
            :href="project.demoBtn.href"
            class="mt-6 ml-5"
          >
            {{ project.demoBtn.name }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({})
class ComponentsIndexMainProject extends Vue {
  @Provide() isActive: boolean = false
  @Provide() projects: Array<{
    text: {
      title: string
      content: string
    }
    ghBtn: {
      name: string
      href: string | undefined
      color: string
    }
    demoBtn: {
      name: string
      href: string | undefined
      color: string
    }
    cardClass: string
  }> = [
    {
      text: {
        title: 'Stack A Day',
        content:
          '사용자 인터랙션에 따른 게시물 CRUD, 자유로운 이동 및 히스토리 관리와 그룹별 권한에 따른 공지 송수신 기능이 있는 대시보드',
      },
      ghBtn: {
        name: 'Github ▶',
        href: 'https://github.com/tpdud406/stackADay-client',
        color: 'grey',
      },
      demoBtn: {
        name: 'Demo ▶',
        href: 'https://www.slh-dashboard.online',
        color: 'grey',
      },
      cardClass: 'align-center',
    },
    {
      text: {
        title: 'Algorithm Master',
        content:
          '알고리즘 문제를 풀어보며 문제해결 능력을 키우고, 코드의 효율 측정 및 순위를 확인할 수 있는 웹 애플리케이션',
      },
      ghBtn: {
        name: 'Github ▶',
        href: 'https://github.com/tpdud406/algorithm-master-client',
        color: 'grey',
      },
      demoBtn: {
        name: 'Demo ▶',
        href: 'https://www.algorithmweb.site',
        color: 'grey',
      },
      cardClass: 'justify-end align-center',
    },
  ]
}

export default ComponentsIndexMainProject
</script>
