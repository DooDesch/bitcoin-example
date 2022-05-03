<template>
  <v-card color="grey darken-3">
    <v-card-title primary-title> Konto Verlauf (Letzte 10) </v-card-title>
    <v-card-text>
      <sparkline-diagram
        :data="bitcoinHistory"
        color="green"
      ></sparkline-diagram>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    bitcoinHistory() {
      return this.$store.state.user.bitcoinHistory
    },
  },
  created() {
    this.$store.dispatch('user/initBitcoins')
  },
}
</script>
