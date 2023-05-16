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
    v-bind:class="{'menu-active': menuActive}"
    @click="menuActive = !menuActive"
    >Menu</span>
<nav class="nav-menu">
    <li><i class="pi pi-chart-pie"></i>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
    </li>
    <li><i class="pi pi-user-edit"></i>
        <a href="#">Perfil</a>
    </li>
    <li><i class="pi pi-file-edit"></i>
       <RouterLink to="/dashboard/encurta-link">Encuta Link</RouterLink>
    </li>
    <li><i class="pi pi-envelope"></i>
        <a href="#">Emails</a>
    </li>
    <li><i class="pi pi-cog"></i>
        <a href="#">Configurações</a>
    </li>
</nav>
</div>
</template>
<style scoped>
.container-menu{
    position: fixed;
    left: 0;
    min-width: 12rem;
    max-width: 12rem;
    padding: 0 1rem;
    border-right: 1px solid var(--bkg-box);
    background-color: var(--bkg-box);
    min-height: 100vh;
    transition: 300ms ease-in;
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
}
.pi{
    font-size: 1.1rem;
    color: #7D95FC;
}
.nav-menu li:hover{
    background-color: #c5d0ff;
    border-radius: 7px;
    transition: 100ms all;
}
.container-menu-action{
    left: -13rem;
}
.extend-side-menu{
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: .5rem;
    cursor: pointer;
    background-color: #7D95FC;
    z-index: 2;
    transition: 300ms all;
    border-radius: 3px;
}
.menu-active{
    right: -5rem;
    z-index: 3;
}
</style>