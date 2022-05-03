<template>
  <v-row justify="center" align="center" class="px-3">
    <v-col cols="12">
      <bitcoin-calculator-by-currency
        :data="bitcoinCurrencies"
      ></bitcoin-calculator-by-currency>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BitcoinCalculator',
  async asyncData({ $axios }) {
    const bitcoinCurrencies = await $axios.$get(
      'https://blockchain.info/ticker'
    )
    return { bitcoinCurrencies }
  },
}
</script>
