<script setup lang="ts">
//import type { CommentCreate } from '../interface/Comment';
//import Comment from '../api/Comment'
import { reactive, onMounted } from 'vue';
import preview from '@/assets/img/multivariate-5917419_1280.webp';
import a from '@/assets/img/register.jpg';
import b from '@/assets/img/home.jpg';

interface LinkCreate{
  id: string;
  title: string;
  description: string;
  urlImage: string;
  urlOrigin: string;
  shortUrl: string;
  clicks: number;
}

//const isAutentication = ref(false);
const refLinks = reactive<LinkCreate[]>([]);

onMounted(async () => {
  
  const links: LinkCreate[] = [
  {
		"id": "bJLempegX9A",
    "title": "Aprendendo o framework JavaScript VueJs.",
		"description": "Venha estudar na melhor plataforma de programação online.",
		"urlImage": preview,
    "urlOrigin": "https://vuenaveia.com.br",
    "shortUrl": "https://click/HIUh",
    "clicks": 9
	},
  {
		"id": "bJLempegX9A",
    "title": "Aprendendo o framework JavaScript VueJs.",
		"description": "Venha estudar na melhor plataforma de programação online.",
		"urlImage": a,
    "urlOrigin": "https://vuenaveia.com.br",
    "shortUrl": "https://click/HIUh",
    "clicks": 9
	},
  {
		"id": "bJLempegX9A",
    "title": "Aprendendo o framework JavaScript VueJs.",
		"description": "Venha estudar na melhor plataforma de programação online.",
		"urlImage": b,
    "urlOrigin": "https://vuenaveia.com.br",
    "shortUrl": "https://click/HIUh",
    "clicks": 19
	},
  ]

  for (let i = 0; i < 4; i++) {

    const link = {
      id: links[i].id,
      title: links[i].title,
      description: links[i].description,
      urlImage: links[i].urlImage,
      urlOrigin: links[i].urlOrigin,
      shortUrl: links[i].shortUrl,
      clicks: links[i].clicks
    }
    refLinks.push(link);
  }
});


</script>
<template>
<div class="container-links">
<h3 class="title-main title">Top Links</h3>
<div v-for="link in refLinks" :key="link.id" class="links">
    <div class="link">
      <span class="etiqueta">{{ link.clicks }}</span>
      <img v-if="link?.urlImage != null" :src="link.urlImage" />
      <span v-else class="pi pi-user" style="font-size: 1.5rem;"></span>
    </div>
    <div>
      <h3 class="title-top-link title">{{ link?.title }}</h3>
    </div>
    <a :href="link.shortUrl">
      {{link.shortUrl}}
    </a>
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
}
</style>