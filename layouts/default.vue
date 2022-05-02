<template>
  <v-app dark>
    <v-app-bar fixed app flat>
      <v-container class="py-0 fill-height">
        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

        <!-- <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-btn text> Meine Bitcoin </v-btn>
        </v-responsive> -->
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
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
      links: ['Dashboard'],
      title: 'Vuetify.js',
    }
  },
}
</script>
