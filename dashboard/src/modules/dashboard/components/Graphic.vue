<script setup lang="ts">
import { Chart } from 'chart.js/auto';
import { onMounted } from 'vue';

interface Data {
   name: string;
   value: string;
   label: string;
}
const { data, type, label, id } = defineProps(['data', 'type', 'label', 'id']);

onMounted(() => {
   new Chart(
    document.getElementById(id),
    {
      type,
      data: {
        labels:  data.map(n => { return n.name}),
        datasets: [
          {
            label,
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            borderRadius: 5,
            data: data.map(n => n.value)
          }
        ]
      }
    }
  );
});
</script>
<template>
<div class="container-graphic">
<canvas v-if="id" :id="id"></canvas>
</div>
</template>
<style scoped>
.container-graphic{
    width: 100%;
}
</style>