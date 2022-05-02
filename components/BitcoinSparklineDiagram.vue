<template>
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
        {{ data.name }}
      </div>
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
        this.arrayOfY = this.data.values.map((d) => d.y)
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
