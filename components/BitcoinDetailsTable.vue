<template>
  <v-card color="grey darken-3">
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
          <tbody v-if="data">
            <tr v-for="(value, name) in data" :key="name">
              <td>{{ labels[name] || name }}</td>
              <td class="text-right">{{ addSeperators(value.data) }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
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
