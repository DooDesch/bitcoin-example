<template>
  <v-card color="grey darken-3 mr-3">
    <v-card-title primary-title> Balance History </v-card-title>
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
