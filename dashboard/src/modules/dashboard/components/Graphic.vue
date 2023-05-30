<script setup lang="ts">
import { Chart } from 'chart.js/auto';
import { onMounted, ref } from 'vue';

interface Data {
   name: string;
   value: string;
   label: string;
}
const { data, type, label, id } = defineProps(['data', 'type', 'label', 'id']);

const graphic = ref('GraphicId');

onMounted(() => {
   new Chart(
    graphic.value,
    {
      type,
      data: {
        labels:  data.map((n: any) => { return n.name}),
        datasets: [
          {
            label,
            min: -100,
            max: 100,
            count: 8,
            decimals: 2,
            continuity: 1,
            borderColor: '#134E50',
            backgroundColor: '#134e5069',
            data: data.map((n: any) => n.value),
            fill: true,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
        },
      }
    }
  );
});
</script>
<template>
<div class="container-graphic">
<canvas id="GraphicId"></canvas>
</div>
</template>
<style scoped>
.container-graphic{
    width: 100%;
}
</style>