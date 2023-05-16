<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
const autentication = ref(true);
</script>
<template>
  <div class="button-dashboard">
    <div>
        <i class="pi pi-chart-line"></i>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
    </div>
    <img v-if="autentication" src="https://avatars.githubusercontent.com/u/73316162?s=400&u=e9fb989b32a0b6c554418dfc09fb4c0e4784e773&v=4" alt="avatar" title="perfil">
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
    background-color: var(--bkg-button-action);
    border-radius: 7px;
    padding: .3rem 1rem;
    transition: 200ms all;
    cursor: pointer;
    box-shadow: var(--shadow-elevation-medium);
}
.button-dashboard > div i{
  margin-right: .4rem;
}
.button-dashboard img{
  width: 35px;
  border-radius: 50%;
  cursor: pointer;
}
.button-dashboard > div:hover{
  filter: brightness(110%);
}
</style>