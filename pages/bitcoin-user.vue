<template>
  <v-row justify="center">
    <v-col cols="12" sm="6">
      <bitcoin-editable-balance
        :bitcoinCurrencies="bitcoinCurrencies"
      ></bitcoin-editable-balance>
    </v-col>
    <v-col cols="12" sm="6">
      <bitcoin-balance-history></bitcoin-balance-history>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const bitcoinCurrencies = await $axios.$get(
      'https://blockchain.info/ticker'
    )
    return { bitcoinCurrencies }
  },
}
</script>
