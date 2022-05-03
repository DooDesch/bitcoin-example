<template>
  <v-card color="grey darken-3">
    <v-card-title primary-title> Aktueller Kontostand </v-card-title>
    <v-divider></v-divider>
    <v-card-title>
      <v-icon color="#f7931a">mdi-bitcoin</v-icon>
      <div class="text-h5 ml-1">
        {{ bitcoins }}
      </div>
    </v-card-title>
    <v-card-title class="pa-0 ma-0">
      <v-spacer></v-spacer>
      <v-icon>mdi-rotate-3d-variant</v-icon>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-title class="text-right">
      <v-spacer></v-spacer>
      <div class="text-h5 mr-1">
        {{ bitcoinsInEur.toFixed(2) }}
      </div>
      <v-icon color="green">mdi-currency-eur</v-icon>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    bitcoinCurrencies: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    bitcoins() {
      return this.$store.state.user.bitcoins
    },
    bitcoinsInEur() {
      return this.bitcoins * this.bitcoinCurrencies.EUR.buy
    },
  },
  created() {
    this.$store.dispatch('user/initBitcoins')
  },
}
</script>
