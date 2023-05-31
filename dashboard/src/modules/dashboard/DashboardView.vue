<script setup lang="ts">
import MenuSide from './components/MenuSide.vue';
import NavTop from './components/NavTop.vue';
import './assets/css/global.css';
import { RouterView } from 'vue-router';
import { Transition } from 'vue';
import './assets/css/global.css';
import FooterDashboard from './components/FooterDashboard.vue';

</script>
<template>
    <div class="background">
        <div>
            <NavTop />
            <MenuSide />
        </div>
        <div class="container-dashboard">
            <div class="router-view">
                <Transition>
                <RouterView />
                </Transition>
            </div> 
        </div>
        <FooterDashboard />
    </div>
</template>
<style scoped>
.background{
    width: 100%;
    background-color: var(--bkg-dark);
    min-height: 100vh;
    overflow-y: hidden;
}
.container-dashboard{
    width: 100%;
    max-width: 900px;
    margin: auto;
    position: relative;
    display: flex;
    gap: 2rem; 
    padding: 1rem;
}
.router-view{
    width: 100%;
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