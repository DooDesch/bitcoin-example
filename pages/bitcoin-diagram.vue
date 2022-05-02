<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card class="text-center" max-width="600">
        <v-card-title class="headline"> Bitcoin Diagramm </v-card-title>
        <v-card-text>
          <v-sheet color="rgba(0,0,0, .12)">
            <v-sparkline
              v-if="arrayOfY.length"
              :value="arrayOfY"
              height="100"
              padding="24"
              stroke-linecap="round"
            >
              <template #label="item"> ${{ item.value }} </template>
            </v-sparkline>
          </v-sheet>
        </v-card-text>

        <v-card-text>
          <div class="text-h4 font-weight-thin">
            {{ chartData.name }}
          </div>
        </v-card-text>
      </v-card>
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
  data() {
    return {
      minY: 0,
      maxY: 0,
      arrayOfY: [],
    }
  },
  mounted() {
    this.setArrayOfY()
    this.minY = this.getMinMarketPrice()
    this.maxY = this.getMaxMarketPrice()
  },
  methods: {
    setArrayOfY() {
      if (this.arrayOfY.length === 0) {
        this.arrayOfY = this.chartData.values.map((d) => d.y)
      }

      return this.arrayOfY
    },
    getMinMarketPrice() {
      return Math.min(...this.setArrayOfY())
    },
    getMaxMarketPrice() {
      return Math.max(...this.setArrayOfY())
    },
  },
}
</script>
