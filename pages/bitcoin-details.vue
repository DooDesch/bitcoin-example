<template>
  <v-row justify="center" align="center" class="px-3">
    <v-col cols="12">
      <bitcoin-details-table :data="bitcoinStats"></bitcoin-details-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BitcoinDetails',
  async asyncData({ $axios }) {
    const api = 'https://blockchain.info/q/'

    // const apisToCall = [
    //   'marketcap',
    //   'totalbc',
    //   '24hrtransactioncount',
    //   '24hrbtcsent',
    //   'hashrate',
    //   'getdifficulty',
    // ]
    // const bitcoinStats = {}
    // await apisToCall.forEach(async (element) => {
    //   bitcoinStats[element] = await $axios.get(api + element)
    // })

    const bitcoinStats = {}

    bitcoinStats.marketcap = await $axios.get(api + 'marketcap')
    bitcoinStats.totalbc = await $axios.get(api + 'totalbc')
    bitcoinStats['24hrtransactioncount'] = await $axios.get(
      api + '24hrtransactioncount'
    )
    bitcoinStats['24hrbtcsent'] = await $axios.get(api + '24hrbtcsent')
    bitcoinStats.hashrate = await $axios.get(api + 'hashrate')
    bitcoinStats.getdifficulty = await $axios.get(api + 'getdifficulty')

    return { bitcoinStats }
  },
}
</script>
