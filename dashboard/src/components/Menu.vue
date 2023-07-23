<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ButtonDashboard from './ButtonDashboard.vue';
</script>

<template>
<div class="cristal-effect"></div>
<div class="container-nav-top">
<div class="nav-top">
  <nav class="navigator">
        <RouterLink class="link-animation link-icon-flex" to="/"><i class="material-icons">home</i> Casa</RouterLink>
        <RouterLink class="link-animation link-icon-flex" to="#"><i class="material-icons">groups</i> Sobre</RouterLink>
        <RouterLink class="link-animation link-icon-flex" to="#"><i class="material-icons">book</i>Tutoriais</RouterLink>
  </nav>
  <div>
    <ButtonDashboard />
  </div>
</div>
</div>
</template>
<style scoped>
.cristal-effect, .container-nav-top{
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 3;
}

.cristal-effect{
    background: hsla(218, 65%, 12%, 0.541);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    /* box-shadow: var(--shadow-elevation-low); */
}
.nav-top{
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 1rem;
  z-index: 2;
}
.navigator{
  display: flex;
  width: 500px;
  align-items: center;
  gap: 2rem;
}
@media (max-width: 750px) {
    .nav-top{
        gap: 0;
    }
}
</style>