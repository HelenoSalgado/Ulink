<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Chart } from 'chart.js';

const data = [
    {
        name: 'Seg',
        value: 10
    },
    {
        name: 'Ter',
        value: 11
    },
    {
        name: 'Qua',
        value: 0
    },
    {
        name: 'Qui',
        value: 7
    },
    {
        name: 'Sex',
        value: 15
    },
    {
        name: 'Sáb',
        value: 5
    },
    {
        name: 'Dom',
        value: 2
    },
];

const chartBar = ref('analyticsBar');

onMounted(() => {
   new Chart(
    chartBar.value,
    {
      type: 'bar',
      data: {
        labels:  data.map((n: any) => { return n.name}),
        datasets: [
          {
            label: 'clicks',
            borderColor: '#134E50',
            backgroundColor: '#134e5069',
            data: data.map((n: any) => n.value),
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
<div class="container-analytics">
<div class="container-links-clicks">
<h2 class="title">Clicks</h2>
<div class="posts-analytics">
    <canvas id="analyticsBar"></canvas>
</div>
</div>
</div>
</template>
<style scoped>
.container-analytics{
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    gap: 2rem;
}
h2{
    margin-bottom: 1rem;
    color: var(--color-text-black-soft)
}
.container-links-clicks, .top-media-shared{
  background-color: var(--bkg-box);
  padding: 1rem;
  border-radius: 15px;
}
.container-links-clicks{
    width: 100%;
}
.conatiner-top-social-media{
    width: 100%;
}

</style>