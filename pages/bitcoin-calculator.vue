<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <bitcoin-calculator-by-currency
        :data="bitcoinCurrencies"
      ></bitcoin-calculator-by-currency>
    </v-col>
  </v-row>
</template>

<script>
import BitcoinCalculatorByCurrency from '~/components/BitcoinCalculatorByCurrency.vue'
export default {
  components: { BitcoinCalculatorByCurrency },
  name: 'BitcoinCalculator',
  async asyncData({ $axios }) {
    const bitcoinCurrencies = await $axios.$get(
      'https://blockchain.info/ticker'
    )
    return { bitcoinCurrencies }
  },
}
</script>
