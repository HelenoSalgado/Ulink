<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AvatarInfo from './AvatarInfo.vue';
</script>

<template>
<div class="cristal-effect"></div>
<div class="container-nav-top">
<div class="nav-top">
  <nav class="navigator">
      <RouterLink class="link-animation link-icon-flex" to="/">
        <i class="material-icons">home</i>
        <span>Casa</span>
      </RouterLink>
      <RouterLink class="link-animation link-icon-flex" to="#">
        <i class="material-icons">groups</i> 
        <span>Sobre</span>
      </RouterLink>
      <RouterLink class="link-animation link-icon-flex" to="#">
        <i class="material-icons">book</i>
        <span>Tutoriais</span>
      </RouterLink>
  </nav>
  <div>
    <AvatarInfo />
  </div>
</div>
</div>
</template>
<style scoped>
.cristal-effect, .container-nav-top{
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 3;
}

.cristal-effect{
    background: transparent;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    /* box-shadow: var(--shadow-elevation-low); */
}
.nav-top{
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1rem;
  z-index: 2;
}
.navigator{
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.1rem;
}
@media (max-width: 750px) {
    .nav-top{
        gap: 0;
    }
    .link-icon-flex > span{
      display: none;
    }
}
</style>