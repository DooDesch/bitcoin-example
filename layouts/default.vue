<template>
  <v-app dark>
    <v-app-bar dense fixed app clipped-left>
      <v-app-bar-nav-icon
        v-if="!$vuetify.breakpoint.smAndUp"
        @click.stop="drawer = !drawer"
      />
      <v-app-bar-title
        :class="{ 'left-title-spacer pl-3': $vuetify.breakpoint.smAndUp }"
        v-text="'Bitcoin Tool'"
      />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :permanent="$vuetify.breakpoint.smAndUp"
      fixed
      clipped
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in links"
          :key="i"
          :to="item.link"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="mt-2">
      <v-container>
        <v-row>
          <v-col cols="12" align="center">
            <v-sheet min-height="70vh" max-width="1400" rounded="lg">
              <Nuxt />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
      links: [
        { title: 'Dashboard', link: '/', icon: 'mdi-view-dashboard' },
        {
          title: 'Bitcoin Details',
          link: 'bitcoin-details',
          icon: 'mdi-view-list',
        },
        {
          title: 'Bitcoin Umrechner',
          link: 'bitcoin-calculator',
          icon: 'mdi-calculator-variant',
        },
        {
          title: 'Bitcoin Diagramm',
          link: 'bitcoin-diagram',
          icon: 'mdi-chart-line',
        },
        { title: 'Meine Bitcoin', link: 'bitcoin-user', icon: 'mdi-account' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.left-title-spacer {
  margin-left: 256px;
}
</style>
