<template>
  <div>
    <!-- Start : Greeting -->
    <div>
      <v-card flat dark tile>
        <v-card-text class="text-center"> 있어보이는 거 쓰고 </v-card-text>

        <v-card-title class="justify-center"> 안녕하세요 </v-card-title>

        <v-card-subtitle class="text-center"> 난 누구입니다 </v-card-subtitle>
      </v-card>
    </div>

    <!-- Start : Greeting -->
    <v-row name="total" justify="center">
      <v-col cols="12">
        <!-- Start : Main Contents -->
        <v-sheet>
          <v-row name="main" justify="center">
            <v-col cols="6">
              <v-card>
                {{ $vuetify.breakpoint.xs }}
                {{ $vuetify.breakpoint.sm }}
                {{ $vuetify.breakpoint.md }}
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card>
                {{ $vuetify.breakpoint.xs }}
                {{ $vuetify.breakpoint.sm }}
                {{ $vuetify.breakpoint.md }}
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class PagesIndex extends Vue {}

export default PagesIndex
</script>
