<template>
  <v-row align="center" class="px-3">
    <v-col cols="12" align="center">
      <bitcoin-sparkline-diagram :data="chartData"></bitcoin-sparkline-diagram>
    </v-col>
    <v-col cols="12">
      <bitcoin-highchart-diagram :data="chartData"></bitcoin-highchart-diagram>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BitcoinDiagram',
  asyncData({ $axios }) {
    // const chartData = await $axios.get(
    //   `https://api.blockchain.info/charts/market-price?timespan=4weeks&rollingAverage=8hours&format=json`
    // )
    const chartData = {
      status: 'ok',
      name: 'Market Price (USD)',
      unit: 'USD',
      period: 'day',
      description: 'Average USD market price across major bitcoin exchanges.',
      values: [
        {
          x: 1651017600,
          y: 38114.94,
        },
        {
          x: 1651104000,
          y: 39249.28,
        },
        {
          x: 1651190400,
          y: 39770.04,
        },
        {
          x: 1651276800,
          y: 38596.28,
        },
        {
          x: 1651363200,
          y: 37661.19,
        },
        {
          x: 1651449600,
          y: 38475.48,
        },
      ],
    }
    return { chartData }
  },
}
</script>
