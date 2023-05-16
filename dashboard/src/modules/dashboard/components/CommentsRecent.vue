<script setup lang="ts">
import type { CommentCreate } from '../interface/Comment';
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
    "title": "Topkipokpkpk dfkmbofdfi dosifo f9if",
		"description": "dfgh fghf hfghfgh fghn gh",
		"urlImage": 'https://avatars.githubusercontent.com/u/73316162?s=400&u=e9fb989b32a0b6c554418dfc09fb4c0e4784e773&v=4',
    "urlOrigin": "fdsfsdfdgffdgfdg",
    "clicks": 9
	},
  {
		"id": "bJLempegX9A",
    "title": "Topkipokpkpk",
		"description": "ldtgfdghfehfghghfghgfhfgh fdgh ",
		"urlImage": 'https://avatars.githubusercontent.com/u/73316162?s=400&u=e9fb989b32a0b6c554418dfc09fb4c0e4784e773&v=4',
    "urlOrigin": "fdsfsdfdgffdgfdg",
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
<h3 class="title-main">Top Links</h3>
<div v-for="link in refLinks" :key="link.id" class="links">
    <div class="link">
      <img v-if="link?.urlImage != null" :src="link.urlImage" />
      <span v-else class="pi pi-user" style="font-size: 1.5rem;"></span>
    </div>
    <div>
      <h3 class="title-top-link">{{ link?.title }}</h3>
    </div>
    <div class="link-content">
       <p v-html="link.description"></p>
    </div>
      <div class="info-top-links">
          <a href="#">rr5yrtyhtrht</a>
          <i class="pi pi-external-link"></i>
          <span>1000k</span>
      </div>
     
    </div>
  </div>
</template>
<style scoped>
.container-links{
    max-width: 300px;
    height: calc(100% - 3rem);
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
.title-top-link{
  font-weight: bold;
}
.link{
  height: 100px;
  overflow: hidden;
}
.link img{
  width: 100%;
  border-radius: 5px;
}
.link-description{
  margin: .5rem 0;
}
.info-top-links{
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}
.info-top-links i{
  font-size: .8rem;
}
</style>