<template>
  <v-card>
    <v-card-title class="headline"> Aktuelle Bitcoin-Preise </v-card-title>
    <v-card-text>
      <v-switch v-model="showMoreData" label="Show more data"></v-switch>
      <v-simple-table dense>
        <template #default>
          <thead>
            <tr>
              <th class="text-left">Currency</th>
              <th class="text-left">Buy</th>
              <th class="text-left">Sell</th>
              <th v-if="showMoreData" class="text-left">15 minutes</th>
              <th v-if="showMoreData" class="text-left">Last</th>
            </tr>
          </thead>
          <tbody v-if="data">
            <tr v-for="(currency, name) in data" :key="name">
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
      <v-btn color="primary" text @click="$nuxt.refresh()"> Refresh </v-btn>
      <!-- <v-btn color="primary" nuxt to="/inspire" text> Continue </v-btn> -->
    </v-card-actions>
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
