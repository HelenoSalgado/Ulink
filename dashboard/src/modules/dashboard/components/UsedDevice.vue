<script setup lang="ts">
import Chart from 'chart.js/auto';
import { onMounted, ref } from 'vue';

const device = ref('devicesAnalytics');

const data = [
    {
        type: 'mobile',
        acess: 10
    },
    {
        type: 'desktop',
        acess: 5
    },
    {
        type: 'tablet',
        acess: 3
    },
]
onMounted(() => {
   new Chart(
    device.value,
    {
      type: 'doughnut',
      data: {
        labels:  data.map(day => { return day.type}),
        datasets: [
          {
            label: 'acessos',
            borderRadius: 5,
            data: data.map(post => post.acess)
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
    width: 100%;
    height: calc(100% - 3rem);
    background-color: var(--bkg-box);
    padding: 1rem;
    border-radius: 15px;
}
</style>