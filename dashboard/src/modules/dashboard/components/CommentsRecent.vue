<script setup lang="ts">
//import type { CommentCreate } from '../interface/Comment';
//import Comment from '../api/Comment'
import { ref, reactive, onMounted } from 'vue';

interface LinkCreate{
  id: string;
  title: string;
  description: string;
  urlImage: string;
  urlOrigin: string;
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
		"urlImage": '../../../../public/img/register.jpg',
    "urlOrigin": "https://vuenaveia.com.br",
    "clicks": 9
	},
  {
		"id": "bJLempegX9A",
    "title": "Aprendendo o framework JavaScript VueJs.",
		"description": "Venha estudar na melhor plataforma de programação online.",
		"urlImage": '../../../../public/img/register.jpg',
    "urlOrigin": "https://vuenaveia.com.br",
    "clicks": 9
	},
  {
		"id": "bJLempegX9A",
    "title": "Aprendendo o framework JavaScript VueJs.",
		"description": "Venha estudar na melhor plataforma de programação online.",
		"urlImage": '../../../../public/img/home.jpg',
    "urlOrigin": "https://vuenaveia.com.br",
    "clicks": 9
	},
  ]

  for (let i = 0; i < 4; i++) {

    const link = {
      id: links[i].id,
      title: links[i].title,
      description: links[i].description,
      urlImage: links[i].urlImage,
      urlOrigin: links[i].urlOrigin,
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
      <img v-if="link?.urlImage != null" :src="link.urlImage" />
      <span v-else class="pi pi-user" style="font-size: 1.5rem;"></span>
    </div>
    <div>
      <h3 class="title-top-link title">{{ link?.title }}</h3>
    </div>
    <div class="link-content">
       <p v-html="link.description"></p>
    </div>
      <div class="info-top-links">
          <a class="link-animation" href="#">
            vuenaveia.com
            <i class="pi pi-external-link"></i>
          </a>
          <span>1000k</span>
      </div>
     
    </div>
  </div>
</template>
<style scoped>
.container-links{
    max-width: 300px;
    height: calc(100% - 2rem);
    background-color: var(--bkg-box);
    padding: 1rem 1rem 2rem 1rem;
    border-radius: 15px;
}
.title-main{
  margin-bottom: 1rem;
}
.links{
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}
.link{
  height: 100px;
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
.link-content{
  margin: .3rem 0;
  color: var(--color-text-black-soft);
  line-height: 1.1rem;
}
.title-top-link{
  color: var(--color-text-black-soft);
}
.info-top-links{
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  color: var(--bkg-dark-contrast);
}
.info-top-links a{
  color: var(--bkg-dark-contrast);
}
.info-top-links i{
  font-size: .8rem;
}
</style>