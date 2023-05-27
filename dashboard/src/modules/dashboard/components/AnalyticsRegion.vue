<script setup lang="ts">
import Chart from 'chart.js/auto';
import { onMounted, ref } from 'vue';

const graphic0 = ref('GraphicId00');

const cities = [
    {
        name: 'Brasília',
        value: 10
    },
    {
        name: 'Belo Horizonte',
        value: 11
    },
    {
        name: 'São Sebastião',
        value: 0
    },
    {
        name: 'Florianópolis',
        value: 7
    },
    {
        name: 'Jundiaí',
        value: 15
    },
]

onMounted(() => {
   const extend = document.querySelector('.extend');
   extend?.addEventListener('click', (e) => { 
    let boxRegion = document.querySelector('.region-acess');
    boxRegion?.classList.toggle('region-extend') 
   });

   new Chart(
    graphic0.value,
    {
      type: 'line',
      data: {
        labels:  cities.map((es: any) => { return es.name}),
        datasets: [
          {
            label: 'visitas',
            data: cities.map((es: any) => es.value)
          }
        ]
      }
    }
  );
});
</script>
<template>
<div class="region-acess">
    <div class="cities">
        <h2>Cidades</h2>
        <canvas id="GraphicId00"></canvas>
    </div>  
</div>
</template>
<style scoped>
.region-acess{
    display: flex;
    gap: 2rem;
    background-color: var(--bkg-box);
    border-radius: 15px;
    padding: 1rem;
    margin: 1rem 0;
}

.region-acess h2{
    margin-bottom: 1rem;
    width: fit-content;
}
.cities{
    width: 100%;
}
</style>