<template>
  <v-card class="text-center" max-width="600" color="grey darken-3">
    <v-card-title class="headline"> Bitcoin Diagramm (Highchart) </v-card-title>
    <v-card-text>
      <highchart
        v-if="Object.keys(chartOptions).length > 0"
        :options="chartOptions"
      ></highchart>
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
      chartOptions: {},
    }
  },
  mounted() {
    this.setArrayOfY()

    this.chartOptions = {
      title: {
        text: this.data.description,
      },
      yAxis: {
        title: {
          text: this.data.unit,
        },
      },
      series: [
        {
          name: this.data.name,
          data: this.arrayOfY,
        },
      ],
    }
  },
  methods: {
    setArrayOfY() {
      this.arrayOfY = this.data.values.map((d) => d.y)

      return this.arrayOfY
    },
  },
}
</script>
