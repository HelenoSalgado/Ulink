<script setup lang="ts">
import IconBarChart2 from '@/components/icons/IconBarChart2.vue';
import IconExternalLink from '@/components/icons/IconExternalLink.vue';
import IconEdit from '@/components/icons/IconEdit.vue';
import IconCopy from '@/components/icons/IconCopy.vue';
import IconShare from '@/components/icons/IconShare.vue';
import IconTrash from '@/components/icons/IconTrash.vue';
import IconQrCode from '@/components/icons/IconQrCode.vue';
import Link from '@/api/ShortLink';

const { data, searchWord } = defineProps(['data', 'searchWord']);

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
    await Link.delete(id);
}

</script>
<template>
<div class="container-links-recent">
<div 
class="link"
v-for="link in data" 
:key="link.id"
>
<div 
:class="[
    { 'link-hidden': searchWord.length > 0}, 
    { 'link-visible': searchWord.length > 0 && link.title.toLowerCase().includes(searchWord)}
    ]">
    <div class="link-container-flex ">
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
        <span @click="openLink">
            <IconExternalLink />
            <p>100</p>
        </span>
        <span>
          <IconBarChart2 />
        </span>
        <span>
            <RouterLink :to="'/dashboard/edit-link/'+link.id"> 
                <IconEdit />
            </RouterLink>
        </span> 
        <span @click="copyLink" data-link="https://heleno.dev">
            <IconCopy />
        </span>
        <span @click="generateQrCode">
            <IconQrCode />
        </span>
        <span @click="visibleShared('hfgfgfdg')">
            <IconShare />
        </span>
        <span @click="deleteLink(link.id)">
            <IconTrash />
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
.link-hidden{
    display: none;
}
.link-visible{
    display: block;
}
.link{
    max-width: 800px;
    z-index: 2;
    margin: 0 auto 2rem auto;
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
.title-description p{
    text-overflow: ellipsis;
    overflow: hidden;
    height: 30px;
}
.title-description p::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #ffffff, transparent 30%);
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
    gap: 1rem;
    border-radius: 0 0 15px 15px;
    background-color: var(--bkg-dark-contrast);
    padding: .5rem 1rem;
    z-index: 2;
}
.info svg{
    width: 20px;
}
.info span:hover{
    background-color: #fff;
    color: #000;
}
.info span:nth-child(5) svg:hover{
    fill: #000;
}
.info span > a{
    transition: 200ms all;
}
.info span > a:hover{
    color: #000;
}
.info span, .info span > a{
    display: inline-flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    color: #fff;
    border-radius: 15px;
    padding: .2rem 1rem;
    transition: 200ms all;
}
.info span > a{
    padding: 0; 
}
.info span > a{
    color: #fff;
}
@media (max-width: 560px) {
    .title{
        font-size: 1.1rem;
        line-height: 16px;
    }
    .previa-img img{
        width: 100%;
    }
    .info p{
        display: none;
    }
    .info{
        gap: 0;
    }
    .info span{
        padding: .3rem .7rem;
    }
    .info svg{
        width: 1rem;
    }
    
}
</style>