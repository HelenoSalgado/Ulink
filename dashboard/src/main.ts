import './assets/css/main.css';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import pinia from './stores/pinia';

const app = createApp(App);

app
.use(pinia)
.use(router)
.mount('#app');

