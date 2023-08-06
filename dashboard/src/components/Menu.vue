<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AvatarInfo from './AvatarInfo.vue';
import IconHome from './icons/IconHome.vue';
import IconGlobe from './icons/IconGlobe.vue';
import IconBook from './icons/IconBook.vue';
</script>

<template>
<div class="cristal-effect"></div>
<div class="container-nav-top">
<div class="nav-top">
  <nav class="navigator">
      <RouterLink class="link-animation link-icon-flex" to="/">
        <IconHome />
        <span>Casa</span>
      </RouterLink>
      <RouterLink class="link-animation link-icon-flex" to="#">
        <IconGlobe />
        <span>Sobre</span>
      </RouterLink>
      <RouterLink class="link-animation link-icon-flex" to="#">
        <IconBook />
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
  height: 60px;
  z-index: 3;
}

.cristal-effect{
    background: transparent;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    /* box-shadow: var(--shadow-elevation-low); */
}
.nav-top{
  height: 60px;
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