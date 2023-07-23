<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import Link from '../api/Link';
import type { UpdateLink } from '../interface/Link';

interface Link extends UpdateLink{
    shortUrl?: string;
}

function visibleShared(e: string){ 
    const link = document.querySelectorAll('.link');
    link.forEach(l => l.classList.toggle('link-z-index-0'));
    const boxShare = document.querySelector('.'+e);
    boxShare?.classList.toggle('shared-visible');
};

function openLink() {
    window.location.href = 'https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg';
    console.log('clicado');
}
function copyLink(e: any) {

    var url = document.querySelector('[data-link]');
    console.log(url);
}
function generateQrCode(e: any) {
    console.log('QR code');
}


const links = reactive<Link[]>([]);

const linksAll = await Link.getAll('64639a8de62e0b27e6753d18');

for (let i = 0; i < linksAll.length; i++) {
    const link: Link = {
        idUrl: linksAll[i].idUrl,
        title: linksAll[i].title,
        description:  linksAll[i].description,
        originUrl: linksAll[i].originUrl,
        urlImg: linksAll[i].urlImg,
        shortUrl: linksAll[i].shortUrl,
    }
    links.push(link);
};
console.log(links);
</script>
<template>
<div class="container-links-recent">
<div class="link" v-for="l in links" :key="l.idUrl" >
    <div class="link-container-flex">
    <div class="previa-img">
        <img src="https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg" alt="">
    </div>
    <div class="title-description">
        <h2 class="title">Interligações de Classe e Estilo</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sed rem sequi suscipit laudantium culpa molestias placeat, tempora quos quae yttth.</p>
    </div>
    </div>
    <div class="info">
        <span @click="openLink">
            <i class="material-icons">open_in_new</i>
            <p>100</p>
        </span>
        <span>
            <i class="material-icons">show_chart</i>
            <p>statistics</p>
        </span>
        <span>
            <i class="material-icons">edit</i>
            <RouterLink 
            to="/dashboard/edit-link">
                Edite
            </RouterLink>
        </span> 
        <span @click="copyLink" data-link="https://heleno.dev">
            <i class="material-icons">content_copy</i>
            <p>copy</p>
        </span>
        <span @click="generateQrCode">
            <i class="material-icons">qr_code</i>
            <p>qrcode</p>
        </span>
        <span @click="visibleShared('hfgfgfdg')">
            <i class="material-icons">share</i>
            <p>share</p>
        </span>
        <span>
            <i class="material-icons">delete</i>
            <p>delete</p>
        </span>     
</div>
</div>
<div class="info-shared">
<div class="shared" :class="'hfgfgfdg'">
  <span>
    <i class="pi pi-whatsapp"></i>
  </span>
  <span>
    <i class="pi pi-facebook"></i>
  </span>
  <span>
    <i class="pi pi-twitter"></i>
  </span>
  <span>
    <i class="pi pi-telegram"></i>
  </span>
  <span>
    <i class="pi pi-facebook"></i>
  </span>
</div>
</div>
</div>
</template>
<style scoped>
.container-links-recent{
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
.link{
    margin-top: 2rem;
    max-width: 800px;
    z-index: 2;
}
.link-z-index-0{
    z-index: 0;
}
.link-container-flex{
    display: flex;
    gap: 1.5rem;
    padding: 1rem;
    background-color: var(--bkg-box);
    border: 1px solid var(--bkg-dark-contrast);
    border-radius: 15px 15px 0 0;
}
.title-description{
    width: 80%;
    color: var(--bkg-dark);
}
.title-description h2{
    margin-bottom: .5rem;
    color: var(--bkg-dark);
}
.previa-img img{
    width: 150px;
    height: 100%;
    max-height: 150px;
    contain: content;
    border-radius: 7px;
    background-color: var(--bkg-dark);
}
.material-icons{
    font-size: 1.2rem;
}
.shared{
    position: absolute;
    top: -2rem;
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: var(--bkg-box);
    color: var(--bkg-dark-contrast);
    padding: 1rem;
    border-radius: 15px;
    visibility: hidden;
    opacity: 0;
    transition: 50ms all;
}
.shared i{
    font-size: 1.2rem;
    cursor: pointer;
}
.shared-visible{
    top: 3rem;
    visibility: visible;
    opacity: 10;
    z-index: 1;
}
.info{
    width: 100%;
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    border-radius: 0 0 15px 15px;
    background-color: var(--bkg-dark-contrast);
    padding: .5rem 1rem;
    z-index: 2;
}
.info span:hover{
    background-color: #fff;
    color: #000;
}
.info span > a{
    transition: 200ms all;
}
.info span > a:hover{
    color: #000;
}
.info span{
    display: inline-flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    color: #fff;
    border-radius: 15px;
    padding: .2rem .5rem;
    transition: 200ms all;
}
.info span > a{
    color: #fff;
}
@media (max-width: 750px) {

    .link-container-flex{
        display: block;
    }
    .previa-img img{
        width: 100%;
    }
    .info span > p, .info span > a{
        display: none;
    }
    
}
</style>