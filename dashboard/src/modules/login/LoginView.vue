<script setup lang="ts">
import router from '@/router';
import HeaderComnt from '@/components/Header.vue';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

async function login(){
   router.push('/sucess')
}

</script>

<template>
    <HeaderComnt/>
    <div class="container">
    <h1>Entrar</h1>
    <div class="login">
        <div class="login-prints">
        </div>

        <div>
        <div class="container-form">
        <form class="form-login" action="" @submit.prevent="login">
            <label>
                <p>Email:</p> 
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
            Entrar
         </button>
        </form>
        </div>
                    
    </div>
    </div>
    </div>
</template>

<style scoped>
@import '../../assets/css/register-login.css';
</style>
