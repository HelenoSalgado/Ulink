<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuActive = ref(false);

onMounted(() => {
    const extendMenu = document.querySelector('.extend-side-menu');
    extendMenu?.addEventListener('click', () => {
        document.querySelector('.container-menu')?.classList.toggle('container-menu-action');
    })
})
</script>
<template>
<div class="container-menu">
    <span 
    class="extend-side-menu" 
    v-bind:class="{ 'menu-active, menu-animation': menuActive }"
    @click="menuActive = !menuActive"
    >
        <span></span>
        <span></span>
        <span></span>
    </span>
    <nav class="nav-menu">
        <RouterLink to="/dashboard"><i class="pi pi-chart-pie"></i>
            Dashboard</RouterLink>
        <a href="/dashboard/perfil"><i class="pi pi-user-edit"></i>
            Perfil</a>
        <RouterLink to="/dashboard/encurta-link"><i class="pi pi-file-edit"></i>
            Encuta Link</RouterLink>
        <a href="#"><i class="pi pi-envelope"></i>
            Emails</a>
        <a href="#"><i class="pi pi-cog"></i>
            Configurações</a>
    </nav>
</div>
</template>
<style scoped>
.container-menu{
    position: fixed;
    left: -13rem;
    min-width: 12rem;
    max-width: 12rem;
    padding: 0 1rem;
    border-right: 1px solid var(--bkg-box);
    background-color: var(--bkg-box);
    min-height: 100vh;
    transition: 500ms ease-in;
    z-index: 1;
}
.nav-menu{
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    gap: 1rem;
}
.nav-menu a{
    display: inline-flex;
    align-items: center;
    gap: 5px;
    line-height: 0;
    padding: 1rem;
    font-size: 1rem;
    width: fit-content;
    border-radius: 15px;
}
a:hover{
    background-color: var(--bkg-dark-contrast);
    color: #fff;
}
.container-menu-action{
    left: 0;
}
.extend-side-menu{
    position: absolute;
    width: 35px;
    top: 20px;
    right: -70px;
    cursor: pointer;
    /* z-index: 2; */
    transition: 300ms all;
    border-radius: 3px;
}
.extend-side-menu span{
    display: block;
    height: 2px;
    background-color: var(--bkg-dark-contrast);
    margin: 7px 0;
    border-radius: 2px;
    transition: 300ms ease-in-out;
    box-shadow: .3px .3px .7px #fff;
}
.menu-animation{
    right: 0;
}
.menu-animation span:nth-child(1){
    transform: rotateZ(50deg);
    top: 8.5px;
}
.menu-animation span:nth-child(2){
    opacity: 0;
}
.menu-animation span:nth-child(3){
    transform: rotateZ(-50deg);
    bottom: 8.5px;
}
.menu-animation span{
    box-shadow: none;
}
.menu-active{
    right: -5rem;
    z-index: 3;
}
</style>