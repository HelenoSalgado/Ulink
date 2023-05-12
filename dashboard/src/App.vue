<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterCompont from '@/components/Footer.vue'
</script>

<template>
    <Suspense>
      <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <component :is="Component" />
        </Suspense>
      </template>
    </RouterView>
    </Suspense>
    <!-- <FooterCompont/> -->
</template>

<style scoped>
</style>
