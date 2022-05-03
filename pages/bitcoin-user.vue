<template>
  <v-row justify="center">
    <v-col cols="12" sm="6">
      <v-card color="grey darken-3 ml-3">
        <v-card-title primary-title> Balance </v-card-title>
        <v-card-title>
          <v-icon color="#f7931a">mdi-bitcoin</v-icon>
          <v-spacer></v-spacer>
          {{ bitcoins }}
        </v-card-title>

        <v-card-subtitle class="text-right">
          <v-icon small>mdi-currency-eur</v-icon>
          {{ (bitcoins * bitcoinCurrencies['EUR'].buy).toFixed(2) }}
        </v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                ref="currencyTextField"
                v-model="currency.value"
                :disabled="loading || !update"
                :hint="`${currency.selected.label}`"
                label="Währungsbetrag"
                type="number"
                persistent-hint
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="currency.selected"
                :disabled="loading || !update"
                :items="currency.items"
                :hint="`${currency.selected.short}`"
                item-text="label"
                item-value="short"
                label="Währung"
                persistent-hint
                return-object
                single-line
              ></v-select>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :loading="loading"
            :color="update ? 'green' : 'primary'"
            text
            @click="editBitcoins"
          >
            {{ update ? 'Update Bitcoins' : 'Edit Bitcoins' }}
          </v-btn>
          <v-btn v-if="update" color="error" text @click="update = !update">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card color="grey darken-3 mr-3">
        <v-card-title primary-title> Balance History </v-card-title>
        <v-card-text>
          <sparkline-diagram
            :data="bitcoinHistory"
            color="green"
          ></sparkline-diagram>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const bitcoinCurrencies = await $axios.$get(
      'https://blockchain.info/ticker'
    )
    return { bitcoinCurrencies }
  },
  data() {
    return {
      currency: {
        value: 0,
        selected: { label: 'Bitcoin', short: 'BC' },
        items: [
          { label: 'Bitcoin', short: 'BC' },
          { label: 'Euro', short: 'EUR' },
          { label: 'US-Dollar', short: 'USD' },
          { label: 'Australischer Dollar', short: 'AUD' },
          { label: 'Neuseeland-Dollar', short: 'NZD' },
          { label: 'Pfund Sterling', short: 'GBP' },
        ],
      },
      update: false,
      loading: false,
    }
  },
  computed: {
    bitcoins() {
      return this.$store.state.user.bitcoins
    },
    bitcoinHistory() {
      return this.$store.state.user.bitcoinHistory
    },
  },
  methods: {
    editBitcoins() {
      if (this.loading) return

      this.update = !this.update
      this.loading = true

      setTimeout(() => {
        this.loading = false

        if (this.update) {
          this.$nextTick(() => this.$refs.currencyTextField.focus())
        }
      }, 200)

      if (!this.update && this.currency.value !== 0) {
        const currency = this.currency.selected.short
        const amount = this.currency.value

        this.$store.dispatch('user/updateBitcoinsByCurrency', {
          currency,
          amount,
        })

        this.currency.value = 0
      }
    },
  },
  created() {
    this.$store.dispatch('user/initBitcoins')
  },
}
</script>

<style lang="scss" scoped></style>
