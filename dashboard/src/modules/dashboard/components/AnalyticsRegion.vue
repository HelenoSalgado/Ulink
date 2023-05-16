<script setup lang="ts">
import Chart from 'chart.js/auto';
import { onMounted, ref } from 'vue';

const graphic1 = ref('GraphicId01');
const graphic2 = ref('GraphicId02');
const graphic0 = ref('GraphicId00');

const estados = [
    {
        name: 'DF',
        value: 10
    },
    {
        name: 'SC',
        value: 11
    },
    {
        name: 'MG',
        views: 0
    },
    {
        name: 'BA',
        value: 7
    },
    {
        name: 'RS',
        value: 15
    },
    {
        name: 'SP',
        value: 5
    },
    {
        name: 'RJ',
        value: 2
    },
];
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
            indexAxis: 'y',
            data: cities.map((es: any) => es.value)
          }
        ]
      }
    }
  );
   
new Chart(
    graphic1.value,
    {
      type: 'bar',
      data: {
        labels:  cities.map((es: any) => { return es.name}),
        datasets: [
          {
            label: 'visitas',
            borderRadius: 5,
            indexAxis: 'y',
            data: cities.map((es: any) => es.value)
          }
        ]
      }
    }
  );
  new Chart(
    graphic2.value,
    {
      type: 'bar',
      data: {
        labels:  estados.map((es: any) => { return es.name}),
        datasets: [
          {
            label: 'visitas',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            borderRadius: 5,
            data: estados.map((es: any) => es.value)
          }
        ]
      }
    }
  );
});
</script>
<template>
<div class="region-acess">
    <span class="extend">
        <i class="pi pi-angle-down"></i>
    </span>
    <div class="states">
        <h2>Estados</h2>
        <canvas id="GraphicId01"></canvas>
    </div>
    <div class="cities">
        <h2>Cidades</h2>
        <canvas id="GraphicId00"></canvas>
        <div class="trafic-font">
            <h2>Fonte do Tráfico</h2>
            <canvas id="GraphicId02"></canvas>
        </div>
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
    margin-bottom: 3rem;
    height: 4rem;
    overflow-y: hidden;
}
.extend{
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
    padding: 1rem;
    z-index: 1;
}
.region-extend{
    height: auto;
}
.region-acess h2{
    margin-bottom: 1rem;
    width: fit-content;
}
.states, .cities{
    width: 100%;
    max-width: 500px;
}
.trafic-font{
    margin-top: 1.5rem;
}
</style>