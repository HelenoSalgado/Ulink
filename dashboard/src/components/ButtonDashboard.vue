<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useAuth } from '@/stores/auth';
const auth = useAuth();
</script>
<template>
  <div class="button-dashboard">
    <div class="link-animation">
        <i class="pi pi-chart-line"></i>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
    </div>
    <img v-if="auth.isAuthenticated" src="@/assets/img/73316162.png" alt="avatar" title="perfil">
  </div>
</template>
<style scoped>
.button-dashboard{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.button-dashboard > div{
    transition: 200ms all;
    cursor: pointer;
}
.button-dashboard > div i{
  margin-right: .4rem;
}
.button-dashboard img{
  width: 35px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 1rem;
}
.button-dashboard > div:hover{
  filter: brightness(110%);
}
</style>