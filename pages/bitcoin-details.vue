<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline"> Bitcoin Details </v-card-title>
        <v-card-text>
          <v-simple-table>
            <template #default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-right">Value</th>
                </tr>
              </thead>
              <tbody v-if="stats">
                <tr v-for="(value, name) in stats" :key="name">
                  <td>{{ labels[name] || name }}</td>
                  <td class="text-right">{{ addSeperators(value.data) }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
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
    // const stats = {}
    // await apisToCall.forEach(async (element) => {
    //   stats[element] = await $axios.get(api + element)
    // })

    const stats = {}

    stats.marketcap = await $axios.get(api + 'marketcap')
    stats.totalbc = await $axios.get(api + 'totalbc')
    stats['24hrtransactioncount'] = await $axios.get(
      api + '24hrtransactioncount'
    )
    stats['24hrbtcsent'] = await $axios.get(api + '24hrbtcsent')
    stats.hashrate = await $axios.get(api + 'hashrate')
    stats.getdifficulty = await $axios.get(api + 'getdifficulty')

    return { stats }
  },
  data() {
    return {
      labels: {
        marketcap: 'Marktkapitalisierung',
        totalbc: 'Anzahl aller Bitcoins im Umlauf',
        '24hrtransactioncount': 'Anzahl der Transaktionen in den letzten 24h',
        '24hrbtcsent': 'Anzahl gesendeter Bitcoin in den letzten 24h',
        hashrate: 'Aktuelle Hashrate',
        getdifficulty: 'Aktueller Schwierigkeitsgrad',
      },
    }
  },
  methods: {
    addSeperators: (number) => {
      return number.toLocaleString()
    },
  },
}
</script>

<style lang="scss" scoped></style>
