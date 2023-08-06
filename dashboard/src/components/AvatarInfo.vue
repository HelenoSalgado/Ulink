<script setup lang="ts">
import { useAuth } from '@/stores/auth';
import { ref } from 'vue';

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
     <RouterLink to="" class="link-icon-flex">
        <i class="pi pi-user"></i>
        Perfil
    </RouterLink>
     <RouterLink to="/dashboard" class="link-icon-flex">
        <i class="pi pi-user"></i>
        Dashboard
    </RouterLink>
     <RouterLink to="" class="link-icon-flex">
        <i class="pi pi-cog"></i>
        Config
    </RouterLink>
     <RouterLink to="/" class="link-icon-flex" @click="logout">
        <i class="pi pi-sign-out"></i>
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
    line-height: 1.2rem;
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
</style>