<script setup lang="ts">
import IconBarChart from '@/components/icons/IconBarChart.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconScissors from '@/components/icons/IconScissors.vue';
import IconLink2 from '@/components/icons/IconLink2.vue';
import IconUser from '@/components/icons/IconUser.vue';
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
            <RouterLink 
            class="link-icon-flex" 
            to="/dashboard">
            <IconBarChart />
                Dashboard
            </RouterLink>
            <RouterLink 
            class="link-icon-flex" 
            to="/dashboard/encurta-link">
            <IconSearch />
                Analytic Link
           </RouterLink>
            <RouterLink 
            class="link-icon-flex" 
            to="/dashboard/encurta-link">
            <IconScissors />
                Short Link
            </RouterLink>
            <RouterLink 
            class="link-icon-flex" 
            to="/dashboard/all-links">
            <IconLink2 />
                All Links
            </RouterLink>
            <RouterLink 
            class="link-icon-flex" 
            to="/dashboard/perfil">
            <IconUser />
                Profile
            </RouterLink>

            <!-- <a class="link-icon-flex add-contact" 
            href="">
            <i class="pi pi-user-plus"></i>
                Add Contato</a> -->
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
    z-index: 4;
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
    padding: 1rem;
    font-size: 1.1rem;
    width: fit-content;
    border-radius: 15px;
}
.material-icons{
    font-size: 1.3rem;
}
.add-contact{
    position: absolute;
    bottom: 1rem;
    border: 2px solid var(--bkg-dark-contrast);
}
.add-contact i{
    font-size: 1.3rem;
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
    top: 15px;
    right: -70px;
    cursor: pointer;
    /* z-index: 2; */
    background-color: var(--bkg-box);
    border-radius: 5px;
    padding: 0 .2rem;
    transition: 300ms all;
}
.extend-side-menu:hover{
    box-shadow: var(--shadow-elevation-low);
}
.extend-side-menu span{
    display: block;
    height: 3px;
    background-color: var(--bkg-dark-contrast);
    margin: 5px 0;
    border-radius: 2px;
    transition: 300ms ease-in-out;
}
.menu-animation{
    right: 5px;
    width: 30px;
    background-color: var(--bkg-dark-contrast);
    opacity: .8;
    z-index: 4;
}
.menu-animation span{
    background-color: #fff;
}
.menu-animation span:nth-child(1){
    transform: rotateZ(50deg);
    top: 8px;
}
.menu-animation span:nth-child(2){
    opacity: 0;
}
.menu-animation span:nth-child(3){
    transform: rotateZ(-50deg);
    bottom: 8px;
}
.menu-animation span{
    box-shadow: none;
}
.menu-active{
    right: -5rem;
    z-index: 3;
}
@media (max-width: 750px) {
    .extend-side-menu{
        top: 20px;
    }
}
</style>