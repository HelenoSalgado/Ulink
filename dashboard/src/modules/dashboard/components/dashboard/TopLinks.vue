<script setup lang="ts">
import { defineProps } from 'vue';
const { data } = defineProps(['data']);
console.log(data);
</script>
<template>
<div class="container-links">
<h3 class="title-main title">Top Links</h3>
<div v-for="link in data" :key="link.id" class="links">
    <div class="link">
      <span class="etiqueta">{{ link.clicks }}</span>
      <img :src="link.urlImg" />
    </div>
    <div>
      <h3 class="title-top-link title">{{ link?.title }}</h3>
    </div>
    </div>
  </div>
</template>
<style scoped>
.container-links{
    width: 100%;
    height: calc(100% - 2rem);
    background-color: var(--bkg-box);
    padding: 1rem;
    border-radius: 15px;
}
.title-main{
  margin-bottom: 1rem;
  color: var(--color-text-black-soft);
}
.links{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}
.link{
  height: 80px;
  background-color: var(--bkg-dark-contrast);
  overflow: hidden;
  border-radius: 15px;
  border: 2px solid var(--bkg-dark-contrast);
}
.link img{
  width: 100%;
  min-height: 100px;
  filter: brightness(110%);
  opacity: .8;
  transition: 100ms ease-in;
  cursor: pointer;
}
.link img:hover{
  opacity: 10;
}
.etiqueta{
  display: block;
  width: auto;
  height: 30px;
  background-color: var(--bkg-dark-contrast);
  position: absolute;
  border-bottom: .5px solid var(--bkg-box);
  border-right: .5px solid var(--bkg-box);
  border-radius: 15px 0 5px 0;
  padding: 7px;
  color: var(--bkg-box);
  z-index: 2;
}
.title-top-link{
  color: var(--color-text-black-soft);
  margin: .2rem 0;
  font-size: 1rem;
}
</style>