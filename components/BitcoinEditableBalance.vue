<template>
  <v-card color="grey darken-3">
    <v-card-title primary-title> Kontostand </v-card-title>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-icon class="mr-2" color="#f7931a">mdi-bitcoin</v-icon>
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
        {{ update ? 'Stand updaten' : 'Bearbeiten' }}
      </v-btn>
      <v-btn v-if="update" color="error" text @click="update = !update">
        Abbrechen
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    bitcoinCurrencies: {
      type: Object,
      default: () => {
        return {}
      },
    },
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
