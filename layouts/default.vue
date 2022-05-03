<template>
  <v-app dark>
    <v-app-bar dense fixed app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="'Bitcoin Tool'" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed clipped app>
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
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
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
      drawer: true,
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
