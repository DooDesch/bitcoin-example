<template>
  <v-card>
    <v-card-title class="headline"> Bitcoin Umrechner </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="currency.value"
            label="Währungsbetrag"
            type="number"
            :hint="`${currency.selected.label}`"
            persistent-hint
            single-line
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="currency.selected"
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
      <v-divider class="my-4"></v-divider>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="valueInBitcoins"
            disabled
            label="Bitcoins"
            type="number"
            :hint="`1 Bitcoin = ${data[
              currency.selected.short
            ].buy.toLocaleString()} ${currency.selected.short}`"
            persistent-hint
          ></v-text-field>
        </v-col>
      </v-row>
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
      currency: {
        value: 1,
        selected: { label: 'Euro', short: 'EUR' },
        items: [
          { label: 'Euro', short: 'EUR' },
          { label: 'US-Dollar', short: 'USD' },
          { label: 'Australischer Dollar', short: 'AUD' },
          { label: 'Neuseeland-Dollar', short: 'NZD' },
          { label: 'Pfund Sterling', short: 'GBP' },
        ],
      },
    }
  },
  computed: {
    valueInBitcoins() {
      const factor = this.data[this.currency.selected.short].buy
      return this.currency.value / factor
    },
  },
}
</script>
