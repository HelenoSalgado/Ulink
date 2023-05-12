<script setup lang="ts">
import HeaderComnt from '@/components/Header.vue';
import StartedVue from './components/Started.vue';

</script>

<template>
  <HeaderComnt/>
  <main class="apresentation">
    <img src="./img/home.jpg" alt="">
    <StartedVue/>
  </main>
</template>

<style scoped>
.apresentation{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.apresentation > img{
  width: 100%;
  max-width: 600px;
  border: .5px solid var(--bkg-button);
  border-radius: 7px;
  box-shadow: var(--shadow-elevation-low);
  transition: 300ms all;
}
.apresentation > img:hover{
  filter: brightness(150%);
}
</style>
