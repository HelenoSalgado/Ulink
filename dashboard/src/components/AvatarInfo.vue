<script setup lang="ts">
import { useAuth } from '@/stores/auth';
import { ref } from 'vue';
import IconUser from './icons/IconUser.vue';
import IconPieChart from './icons/IconPieChart.vue';
import IconSettings from './icons/IconSettings.vue';
import IconLogout from './icons/IconLogout.vue';


const visibleUserCard = ref(false);
const auth = useAuth();

function logout() {
    useAuth().clear();
}
</script>
<template>
    <div v-if="auth.isAuthenticated" class="user">
    <h3>Olá, {{ auth.user.firstName }}</h3>
    <img 
    @click="visibleUserCard = !visibleUserCard" 
    src="@/assets/img/73316162.png" alt="avatar" title="perfil">
    <div class="user-card card" 
    :class="{'visible-user-card': visibleUserCard}">
    <RouterLink to="/dashboard" class="link-icon-flex">
        <IconPieChart />
        Dashboard
    </RouterLink>
     <RouterLink to="" class="link-icon-flex">
        <IconUser />
        Perfil
    </RouterLink>
     <RouterLink to="" class="link-icon-flex">
        <IconSettings />
        Config
    </RouterLink>
     <RouterLink to="/" class="link-icon-flex" @click="logout">
        <IconLogout />
        Sair
    </RouterLink>
    </div>
</div>
</template>
<style scoped>
.user{
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--bkg-box);
}
.user h3{
    font-weight: 400;
}
.user img{
    width: 40px;
    height: 40px;
    border: 2px solid var(--bkg-dark-contrast);
    border-radius: 50%;
    background-color: var(--bkg-box);
    box-sizing: border-box;
    filter: brightness(120%);
    cursor: pointer;
}
.visible-user-card{
    visibility: visible;
    top: 70px;
    opacity: 10;
}
.visible-user-card svg{
    width: 20px;
}
</style>