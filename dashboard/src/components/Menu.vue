<script setup lang="ts">
 import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
     <nav class="navigator">
        <RouterLink class="link-animation" to="/"><i class="pi pi-home"></i> Casa</RouterLink>
        <RouterLink class="link-animation" to="#"><i class="pi pi-book"></i> Sobre</RouterLink>
        <RouterLink class="link-animation" to="#"><i class="pi pi-globe"></i> Blog</RouterLink>
      </nav>
    </div>
</template>

<style scoped>
.navigator{
  display: flex;
  max-width: 500px;
  justify-content: start;
  align-items: center;
  gap: 2rem;
}
</style>