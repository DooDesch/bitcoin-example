<template>
  <v-sheet color="rgba(0,0,0, .12)">
    <v-sparkline
      v-if="data.length"
      :value="data"
      height="100"
      padding="24"
      stroke-linecap="round"
      :color="color"
    >
      <template #label="item">
        {{ currency }}{{ parseInt(item.value).toFixed(0) }}
      </template>
    </v-sparkline>
  </v-sheet>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
    currency: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'blue',
    },
  },
}
</script>
