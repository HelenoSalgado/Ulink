<script setup lang="ts">
import { RouterView } from 'vue-router';
import { Transition } from 'vue';
</script>
<template>
      <RouterView v-slot="{ Component }">
      <template v-if="Component">
      <Transition>
        <Suspense>
          <component :is="Component" />
          <template #fallback>
             <span class="loading"></span>
          </template>
        </Suspense>
      </Transition>
      </template>
    </RouterView>
</template>
<style scoped>
.v-enter-active {
  transition: all 200ms;
}
.v-leave-active {
  transition: all 200ms;
}
.v-enter-from,
.v-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
