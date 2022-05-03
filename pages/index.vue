<template>
  <v-row justify="center" class="px-3">
    <v-col cols="12" md="4">
      <bitcoin-balance
        :bitcoin-currencies="bitcoinCurrencies"
      ></bitcoin-balance>
    </v-col>
    <v-col cols="12" md="8">
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
