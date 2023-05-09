<template>
  <v-container>
    <v-row>
      <v-col v-for="project in projects" :key="project.id" cols="6">
        <v-card style="height: 500px; overflow-y: auto">
          <v-card-title>{{ project.text.title }}</v-card-title>
          <v-card-text v-html="project.text.period" />
          <v-card-text v-html="project.text.content" />
          <v-card-text v-html="project.text.desc" />

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
      period: string
      desc: string
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
        period: '개발 기간: 2022.10',
        desc: '사용자 인터랙션에 따른 게시물 CRUD, 자유로운 이동 및 히스토리 관리와 그룹별 권한에 따른 공지 송수신 기능이 있는 대시보드',
        content:
          '* uest / Member / Admin의 3가지의 권한을 설정하여 권한별 역할을 세분화, 중첩된 구조의 DB 모델링을 통한 관계형 데이터의 효율적 관리<br>' +
          '* JsonWebToken(JWT)을 이용하여 입력받은 데이터와 함께 인증에 필요한 정보들을 암호화한 후 서버에서 Passport를 이용하여 암호화된 데이터를 복호화 하여 사용자 인증 기능 구현<br>' +
          '* 사용자 인터랙션에 대한 사용자 경험을 위해, Drop 이벤트 발생 시 정지된 지점에서 가장 가까운 그리드 좌표를 계산해 게시물을 그리드 좌표로 재이동 시킴과 동시에 Framer-Motion의 부드러운 모션을 적용하여 자석과 같은 효과 구현<br>',
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
        period: '개발 기간: 2022.11',
        desc: '알고리즘 문제를 풀어보며 문제해결 능력을 키우고, 코드의 효율 측정 및 순위를 확인할 수 있는 웹 애플리케이션',
        content:
          '* VM2를 이용하여 클라이언트에서 입력받은 사용자의 Javascript 코드를 동기적으로 실행하기 위한 격리된 컨텍스트 생성<br>' +
          '* 클라이언트 단에서 케이스 별 런타임 측정 시 네트워크 환경의 영향을 받아 값의 정확도가 떨어지는 문제를 해소하기 위해 서버(Node.js)의 process.hrtime( )을 이용하여 나노초 단위의 정확성 확보<br>' +
          '* 데이터를 자주 업데이트할 필요 없는 사용자의 로그인 상태를 전역에서 사용할 수 있도록 Context API 적용<br>' +
          '* 고차 컴포넌트(HOC, Higher Order Component)를 사용하여 인증이 필요한 페이지 보호<br>',
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
