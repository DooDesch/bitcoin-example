<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <bitcoin-price-table :data="bitcoinCurrencies"></bitcoin-price-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BitcoinDashboard',
  async asyncData({ $axios }) {
    const bitcoinCurrencies = await $axios.$get(
      'https://blockchain.info/ticker'
    )
    return { bitcoinCurrencies }
  },
}
</script>
