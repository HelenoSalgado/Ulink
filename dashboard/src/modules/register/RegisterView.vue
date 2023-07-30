<script setup lang="ts">
import router from '@/router';
import HeaderComnt from '@/components/Header.vue';
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
//const subdomain = ref('');
const password = ref('');

async function register(){
   router.push('/sucess')
}

</script>

<template>
    <HeaderComnt />
    <div class="container">
    <h1>Registrar</h1>
    <div class="register">

        <div class="register-prints">
        </div>

        <div>
        <div class="container-form">
        <form class="form-register" action="" @submit.prevent="register">
            <label>
                <p>Nome de Usuário:</p>
                <span>
                <i class="pi pi-user"></i>
                <input type="text" v-model="firstName" />
                </span> 
            </label>
            <label>
                <p>Melhor Email:</p> 
                <span>
                <i class="pi pi-envelope"></i>
                <input type="email" v-model="email" />
                </span>
            </label>
            <label>
                <p>Senha:</p>
                <span>
                <i class="pi pi-key"></i>
                <input type="text" v-model="password" />
                </span>
            </label>
         <button type="submit">
            Começar
         </button>
        </form>
        </div>
                    
    </div>
    </div>
    </div>
</template>

<style src="../../assets/css/register-login.css" scoped>
</style>