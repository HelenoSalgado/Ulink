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
    <div class="login">

        <div class="login-prints">
            <h1>Login</h1>
        </div>

        <div>
        <div class="container-form">
        <form class="form-login" action="" @submit.prevent="login">
            <label>
                <p>Email:</p> 
                <input type="email" v-model="email" />
            </label>
            <label>
                <p>Senha:</p> 
                <input type="text" v-model="password" />
            </label>
         <button type="submit">
            Entrar
         </button>
        </form>
        </div>
                    
    </div>
    </div>
</template>

<style scoped>
@import '../../assets/css/register-login.css';
</style>
