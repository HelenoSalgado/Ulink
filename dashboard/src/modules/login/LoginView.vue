<script setup lang="ts">
import router from '@/router';
import HeaderComnt from '@/components/Header.vue';
import http from '@/services/http';
import { reactive } from 'vue';
import { useAuth } from '@/stores/auth'

const auth = useAuth();

const user = reactive({
    email: '',
    password: '',
})

async function login(){
    const { data } = await http.post('auth/login', user);
    auth.setToken(data);
    console.log(data);
   //router.push('/sucess')
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
                <input type="email" v-model="user.email" />
                </span>
            </label>
            <label>
                <p>Senha:</p> 
                <span>
                <i class="pi pi-key"></i>
                <input type="password" v-model="user.password" />
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
