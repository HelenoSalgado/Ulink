<script setup lang="ts">
import router from '@/router';
import HeaderComnt from '@/components/Header.vue';
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const subdomain = ref('');
const password = ref('');

async function register(){
   router.push('/sucess')
}

</script>

<template>
    <HeaderComnt />
    <div class="register">

        <div class="register-prints">
            <h1>Registrar</h1>
        </div>

        <div>
        <div class="container-form">
        <form class="form-register" action="" @submit.prevent="register">
            <label>
                <p>Nome Completo:</p> 
                <input type="text" v-model="name" />
            </label>
            <label>
                <p>Melhor Email:</p> 
                <input type="email" v-model="email" />
            </label>
            <label>
                <p>Subdomio:</p> 
                <input type="text" v-model="subdomain" placeholder="meu-negocio"/>
            </label>
            <label>
                <p>Senha:</p> 
                <input type="text" v-model="password" />
            </label>
         <button type="submit">
            Começar
         </button>
        </form>
        </div>
                    
    </div>
    </div>
</template>

<style scoped>
@import '../../assets/css/register-login.css';
</style>