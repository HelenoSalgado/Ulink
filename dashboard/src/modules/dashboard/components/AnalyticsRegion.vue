<script setup lang="ts">
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

const estados = [
    {
        es: 'DF',
        views: 10
    },
    {
        es: 'SC',
        views: 11
    },
    {
        es: 'MG',
        views: 0
    },
    {
        es: 'BA',
        views: 7
    },
    {
        es: 'RS',
        views: 15
    },
    {
        es: 'SP',
        views: 5
    },
    {
        es: 'RJ',
        views: 2
    },
];
const cities = [
    {
        city: 'Brasília',
        views: 10
    },
    {
        city: 'Belo Horizonte',
        views: 11
    },
    {
        city: 'São Sebastião',
        views: 0
    },
    {
        city: 'Florianópolis',
        views: 7
    },
    {
        city: 'Jundiaí',
        views: 15
    },
]

onMounted(() => {
   const extend = document.querySelector('.extend');
   extend?.addEventListener('click', (e) => { 
    let boxRegion = document.querySelector('.region-acess');
    boxRegion?.classList.toggle('region-extend') 
   });
   
   new Chart(
    document.getElementById('statesAnalytics'),
    {
      type: 'polarArea',
      data: {
        labels:  estados.map(es => { return es.es}),
        datasets: [
          {
            label: 'visitas',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            borderRadius: 5,
            data: estados.map(es => es.views)
          }
        ]
      }
    }
  );
new Chart(
    document.getElementById('citiesAnalytics'),
    {
      type: 'bar',
      data: {
        labels:  cities.map(es => { return es.city}),
        datasets: [
          {
            label: 'visitas',
            borderRadius: 5,
            indexAxis: 'y',
            data: cities.map(es => es.views)
          }
        ]
      }
    }
  );
  new Chart(
    document.getElementById('traficFontAnalytics'),
    {
      type: 'bar',
      data: {
        labels:  estados.map(es => { return es.es}),
        datasets: [
          {
            label: 'visitas',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            borderRadius: 5,
            data: estados.map(es => es.views)
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
        <canvas id="statesAnalytics"></canvas>
    </div>
    <div class="cities">
        <h2>Cidades</h2>
        <canvas id="citiesAnalytics"></canvas>
        <div class="trafic-font">
            <h2>Fonte do Tráfico</h2>
            <canvas id="traficFontAnalytics"></canvas>
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