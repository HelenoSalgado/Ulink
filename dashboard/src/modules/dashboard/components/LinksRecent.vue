<script setup lang="ts">
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
            <i class="pi pi-trash"></i>
            <p>delete</p>
        </span>     
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
            <i class="pi pi-trash"></i>
            <p>delete</p>
        </span>     
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
    color: #eee;
}
.link{
    margin-top: 2rem;
    padding: .5rem 1rem 0 1rem;
    border: 1px solid #455A80;
    border-radius: 15px 15px 0 0;
    max-width: 800px;
    background-color: var(--bkg-box);
    color: var(--color-text-black-soft);
}
.link-container-flex{
    display: flex;
    gap: 1.5rem;
}
.title-description{
    width: 80%;
}
.previa-img img{
    max-width: 150px;
    max-height: 150px;
    contain: content;
    border-radius: 7px;
}
.info{
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    border-radius: 0 0 15px 15px;
    background-color: #455A80;
    padding: .5rem 1rem;
}
.info span{
    display: inline-flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    color: var(--bkg-box);
    border-radius: 3px;
}
</style>