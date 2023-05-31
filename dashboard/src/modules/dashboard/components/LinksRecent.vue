<script setup lang="ts">
import { onMounted, ref } from 'vue';

function visibleShared(e: string){ 
    const link = document.querySelectorAll('.link');
    link.forEach(l => l.classList.toggle('link-z-index-0'));
    const boxShare = document.querySelector('.'+e);
    boxShare?.classList.toggle('shared-visible');
};

</script>
<template>
<div class="container-links-recent">
    <h2 class="title-link-recent title">Links Recentes</h2>
<div class="link">
    <div class="link-container-flex">
    <div class="previa-img">
        <img src="https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg" alt="">
    </div>
    <div class="title-description">
        <h2 class="title">Interligações de Classe e Estilo</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sed rem sequi suscipit laudantium culpa molestias placeat, tempora quos quae yttth.</p>
    </div>
    </div>
</div>
<div class="info-shared">
<div class="info">
        <span>
            <i class="pi pi-external-link"></i>
            <p>100</p>
        </span>
        <span>
            <i class="pi pi-chart-line"></i>
            <p>statistics</p>
        </span>
        <span>
            <i class="pi pi-pencil"></i>
            <p>edite</p>
        </span> 
        <span>
            <i class="pi pi-copy"></i>
            <p>copy</p>
        </span>
        <span>
            <i class="pi pi-qrcode"></i>
            <p>qrcode</p>
        </span>
        <span @click="visibleShared('hfgfgfdg')">
            <i class="pi pi-share-alt"></i>
            <p>share</p>
        </span>
        <span>
            <i class="pi pi-trash"></i>
            <p>delete</p>
        </span>     
</div>
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
<div class="link">
    <div class="link-container-flex">
    <div class="previa-img">
        <img src="https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg" alt="">
    </div>
    <div class="title-description">
        <h2 class="title">Interligações de Classe e Estilo</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sed rem sequi suscipit laudantium culpa molestias placeat, tempora quos quae yttth.</p>
    </div>
    </div>
</div>
<div class="info-shared">
<div class="info">
        <span>
            <i class="pi pi-external-link"></i>
            <p>100</p>
        </span>
        <span>
            <i class="pi pi-chart-line"></i>
            <p>statistics</p>
        </span>
        <span>
            <i class="pi pi-pencil"></i>
            <p>edite</p>
        </span> 
        <span>
            <i class="pi pi-copy"></i>
            <p>copy</p>
        </span>
        <span>
            <i class="pi pi-qrcode"></i>
            <p>qrcode</p>
        </span>
        <span @click="visibleShared('sdfsdfrt')">
            <i class="pi pi-share-alt"></i>
            <p>share</p>
        </span>
        <span>
            <i class="pi pi-trash"></i>
            <p>delete</p>
        </span>     
</div>
<div class="shared" :class="'sdfsdfrt'">
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
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
}
.title-link-recent{
    margin-bottom: 1rem;
    color: #fff;
}
.link{
    margin-top: 2rem;
    padding: .5rem 1rem;
    border: 1px solid var(--bkg-dark-contrast);;
    border-radius: 15px 15px 0 0;
    max-width: 800px;
    background-color: var(--bkg-box);
    z-index: 2;
}
.link-z-index-0{
    z-index: 0;
}
.link-container-flex{
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
.previa-img img{
    width: 150px;
    height: 100%;
    max-height: 150px;
    contain: content;
    border-radius: 7px;
    background-color: var(--bkg-dark);
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
.info span{
    display: inline-flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    color: #fff;
    border-radius: 3px;
    transition: 200ms all;
}
.info span:hover{
    color: #000;
}
@media (max-width: 750px) {

    .link-container-flex{
        display: block;
    }
    .previa-img img{
        width: 100%;
    }
    .info span > p{
        display: none;
    }
    
}
</style>