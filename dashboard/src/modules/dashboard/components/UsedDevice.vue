<script setup lang="ts">
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

const device = [
    {
        type: 'mobile',
        acess: 10
    },
    {
        type: 'desktop',
        acess: 5
    },
]
onMounted(() => {
   new Chart(
    document.getElementById('devicesAnalytics'),
    {
      type: 'doughnut',
      data: {
        labels:  device.map(day => { return day.type}),
        datasets: [
          {
            label: 'acessos',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            borderRadius: 5,
            data: device.map(post => post.acess)
          }
        ]
      }
    }
  );
})
</script>
<template>
<div class="container-device">
    <canvas id="devicesAnalytics"></canvas>
</div>
</template>
<style scoped>
.container-device{
    max-width: 400px;
    height: calc(100% - 3rem);
    background-color: var(--bkg-box);
    padding: 1rem;
    border-radius: 15px;
}
</style>