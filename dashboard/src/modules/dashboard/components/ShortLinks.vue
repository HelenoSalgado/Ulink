<script setup lang="ts">
import http from '@/services/http';

const { data, fullTools } = defineProps(['data', 'fullTools']);

function visibleShared(e: string){ 
    const link = document.querySelectorAll('.link');
    link.forEach(l => l.classList.toggle('link-z-index-0'));
    const boxShare = document.querySelector('.'+e);
    boxShare?.classList.toggle('shared-visible');
};

function openLink() {
    console.log('clicado');
}

function copyLink(e: any) {
    var url = document.querySelector('[data-link]');
    console.log(url);
}

function generateQrCode(e: any) {
    console.log('QR code');
}

async function deleteLink(id: string) {
    await http.delete('links/delete/'+id).then(res => {
      console.log(res); 
    }, (err => { 
        console.log(err);
    }));
}

</script>
<template>
<div class="container-links-recent">
<div class="link" v-for="link in data" :key="link.id" >
    <div class="link-container-flex">
    <div v-if="link.title">
    <div class="previa-img">
        <img :src="link.urlImg" alt="">
    </div>
    <div class="title-description">
        <h2 class="title">{{ link.title }}</h2>
        <p>{{ link.description }}</p>
    </div>
    </div>
    <div v-else class="short-url">
        <a :href="link.shortUrl" target="_blank" rel="noopener noreferrer">
            {{ link.shortUrl }}
        </a>
    </div>
    </div>
    <div class="info">
        <div v-if="!fullTools">
        <span @click="openLink">
            <i class="material-icons">open_in_new</i>
            <p>100</p>
        </span>
        <span>
            <i class="material-icons">show_chart</i>
            <p>statistics</p>
        </span>
        <span>
            <RouterLink :to="'/dashboard/edit-link/'+link.id"> 
                <i class="material-icons">edit</i>
                <span>edit</span>
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
        <span @click="deleteLink(link.id)">
            <i class="material-icons">delete</i>
            <p>delete</p>
        </span> 
    </div> 
    <div v-else>
        <span @click="openLink">
            <i class="material-icons">open_in_new</i>
            <p>100</p>
        </span>
        <span @click="copyLink" data-link="https://heleno.dev">
            <i class="material-icons">content_copy</i>
            <p>copy</p>
        </span>
        <span @click="generateQrCode">
            <i class="material-icons">qr_code</i>
            <p>qrcode</p>
        </span>
    </div>   
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
  display: flex;
  flex-direction: column;
}
.link{
    max-width: 800px;
    z-index: 2;
    margin-bottom: 2rem;
}
.link-z-index-0{
    z-index: 0;
}
.link-container-flex{
    padding: 1rem;
    background-color: var(--bkg-box);
    border: 1px solid var(--bkg-dark-contrast);
    border-radius: 15px 15px 0 0;
}
.link-container-flex > div{
    display: flex;
    gap: 1.5rem;
}
.title-description{
    width: 80%;
    color: var(--bkg-dark);
}
.title-description h2{
    margin-bottom: .5rem;
    color: var(--bkg-dark);
}
.previa-img{
    width: 150px;
    height: 80px;
    background-color: var(--bkg-dark);
    border-radius: 7px;
    overflow: hidden;
}
.previa-img img{
    width: 100%;
    min-height: 100%; 
    transition: 200ms ease-in;
}
.previa-img img:hover{
    filter: brightness(120%);
}
.short-url{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: .5rem 0;
}
.short-url a{
    text-decoration: underline;
    color: var(--bkg-dark-contrast);
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
.info > div{
    width: 100%;
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    border-radius: 0 0 15px 15px;
    background-color: var(--bkg-dark-contrast);
    padding: .5rem 1rem;
    z-index: 2;
}
.info > div > span:hover{
    background-color: #fff;
    color: #000;
}
.info span > a{
    transition: 200ms all;
}
.info span > a:hover{
    color: #000;
}
.info > div > span, .info span > a{
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
    padding: 0; 
}
.info span > a{
    color: #fff;
}
@media (max-width: 750px) {

    .link-container-flex{
        display: block;
    }
    .title{
        font-size: 1.1rem;
        line-height: 16px;
    }
    .previa-img img{
        width: 100%;
    }
    .info span > p, .info a > span{
        display: none;
    }
    
}
</style>