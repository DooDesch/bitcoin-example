<template>
  <v-app dark>
    <v-app-bar app fixed flat>
      <v-container class="py-0 fill-height">
        <v-btn
          v-for="{ label, link } in links"
          :key="link"
          :to="link"
          nuxt
          text
        >
          {{ label }}
        </v-btn>

        <!-- <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-btn text> Meine Bitcoin </v-btn>
        </v-responsive> -->
      </v-container>
    </v-app-bar>
    <v-main class="mt-2">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <Nuxt />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      links: [
        { label: 'Dashboard', link: '/' },
        { label: 'Bitcoin-Details', link: 'bitcoin-details' },
      ],
      title: 'Vuetify.js',
    }
  },
}
</script>
