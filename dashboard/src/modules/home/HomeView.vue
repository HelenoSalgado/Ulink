<script setup lang="ts">
import HeaderComnt from '@/components/Header.vue';
import StartedVue from './components/Started.vue';

</script>

<template>
  <HeaderComnt/>
  <main class="apresentation">
    <img src="@/assets/img/multivariate-5917419_1280.webp" alt="">
    <StartedVue/>
  </main>
</template>

<style scoped>
.apresentation{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}
.apresentation > img{
  width: 100%;
  max-width: 400px;
  transition: 300ms all;
}
.apresentation > img:hover{
  filter: brightness(110%);
}
</style>
