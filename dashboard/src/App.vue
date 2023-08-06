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
.loading{
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4rem;
  height: 4rem;
  /* border: 2px solid var(--bkg-dark-contrast); */
  border-radius: 50%;
}
.loading::before{
  position: absolute;
  content: '';
  width: 4rem;
  height: 4rem;
  border-top: 2px solid var(--bkg-dark-contrast);
  border-radius: 50%;
  animation: loading 700ms infinite ease-in-out;
}
@keyframes loading {
  0%{
    border-top: 4px solid var(--bkg-dark);
  }
  25%{
    border-right: 4px solid var(--bkg-dark);
  }
  50%{
    border-bottom: 4px solid var(--bkg-dark);
  }
  75%{
    border-left: 4px solid var(--bkg-dark);
  }
}
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
