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
    <li class="link-animation"><i class="pi pi-chart-pie"></i>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
    </li>
    <li class="link-animation"><i class="pi pi-user-edit"></i>
        <a href="#">Perfil</a>
    </li>
    <li class="link-animation"><i class="pi pi-file-edit"></i>
       <RouterLink to="/dashboard/encurta-link">Encuta Link</RouterLink>
    </li>
    <li class="link-animation"><i class="pi pi-envelope"></i>
        <a href="#">Emails</a>
    </li>
    <li class="link-animation"><i class="pi pi-cog"></i>
        <a href="#">Configurações</a>
    </li>
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
/* .logo h2{
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
} */
.nav-menu{
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    gap: 1rem;
}
.nav-menu li{
    display: inline-flex;
    align-items: center;
    gap: 5px;
    line-height: 0;
    margin: .5rem 0;
    padding: 1rem .5rem;
    font-size: 1rem;
}
.pi{
    font-size: 1.2rem;
    color: #7D95FC;
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
    height: 3px;
    background-color: #7D95FC;
    margin: 5px 0;
    border-radius: 2px;
    transition: 300ms ease-in-out;
}
.menu-animation{
    right: 0;
}
.menu-animation span:nth-child(1){
    transform: rotateZ(50deg);
    top: 7.5px;
}
.menu-animation span:nth-child(2){
    opacity: 0;
}
.menu-animation span:nth-child(3){
    transform: rotateZ(-50deg);
    bottom: 7.5px;
}
.menu-active{
    right: -5rem;
    z-index: 3;
}
.link-animation::before{
  height: 3px;
  background-color: #7D95FC;
  border-radius: 1px;
}
</style>