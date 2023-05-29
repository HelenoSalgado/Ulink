<script setup lang="ts">
// const us = await fetch('https://cdn.jsdelivr.net/npm/states-10m.json').then((r) => r.json());

// // whole US for the outline
// const nation = ChartGeo.topojson.feature(us, us.objects.nation).features[0];
// // individual states
// const states = ChartGeo.topojson.feature(us, us.objects.states).features;

// const alaska = states.find((d) => d.properties.name === 'Alaska');
// const california = states.find((d) => d.properties.name === 'California');


// const config = {
//   data: {
//     labels: ['Alaska', 'California'],
//     datasets: [{
//       label: 'States',
//       outline: nation, // ... outline to compute bounds
//       showOutline: true,
//       data: [
//         {
//           value: 0.4,
//           feature: alaska // ... the feature to render
//         },
//         {
//           value: 0.3,
//           feature: california
//         }
//       ]
//     }]
//   },
//   options: {
//     scales: {
//       projection: {
//         projection: 'albersUsa' // ... projection method
//       }
//     }
//   }
// };

</script>
<template>

</template>
<style scoped>
</style>