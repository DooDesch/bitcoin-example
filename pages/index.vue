<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline"> Aktuelle Bitcoin-Preise </v-card-title>
        <v-card-text>
          <v-switch label="Show more data" v-model="showMoreData"></v-switch>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Currency</th>
                  <th class="text-left">Buy</th>
                  <th class="text-left">Sell</th>
                  <th v-if="showMoreData" class="text-left">15 minutes</th>
                  <th v-if="showMoreData" class="text-left">Last</th>
                </tr>
              </thead>
              <tbody v-if="bitcoinCurrencies">
                <tr v-for="(currency, name) in bitcoinCurrencies" :key="name">
                  <td>{{ name }}</td>
                  <td>{{ addSeperators(currency.buy) }}</td>
                  <td>{{ addSeperators(currency.sell) }}</td>
                  <td v-if="showMoreData">
                    {{ addSeperators(currency['15m']) }}
                  </td>
                  <td v-if="showMoreData">
                    {{ addSeperators(currency.last) }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="$nuxt.refresh()" color="primary" text> Refresh </v-btn>
          <!-- <v-btn color="primary" nuxt to="/inspire" text> Continue </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const bitcoinCurrencies = await $axios.$get(
      'https://blockchain.info/ticker'
    )
    return { bitcoinCurrencies }
  },
  data() {
    return {
      showMoreData: false,
    }
  },
  methods: {
    addSeperators: (number) => {
      return number.toLocaleString()
    },
  },
}
</script>
