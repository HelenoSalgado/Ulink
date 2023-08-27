<script setup lang="ts">
import router from '@/router';
import HeaderComnt from '@/components/Header.vue';
import http from '@/api/http';
import { reactive, ref } from 'vue';
import { useAuth } from '@/stores/auth';
import IconEmail from '@/components/icons/IconEmail.vue';
import IconKey from '@/components/icons/IconKey.vue';
import IconLogin from '@/components/icons/IconLogin.vue';
const auth = useAuth();
const message = ref('');

const user = reactive({
    email: '',
    password: '',
})

async function login(){
    try {
        const { data } = await http.post('auth/login', user);
        auth.setToken(data);
        router.push('/dashboard');
    } catch (error: any) {
        message.value = error?.response?.data.message;
    }
   
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
                <IconEmail class="input-icon"/>
                <input type="email" v-model="user.email" />
                </span>
            </label>
            <label>
                <p>Senha:</p> 
                <span>
                <IconKey class="input-icon"/>
                <input type="password" v-model="user.password" />
                </span>
            </label>
         <p class="msg-error">{{ message }}</p>
         <button type="submit" class="link-icon-flex">
            <IconLogin />
            Entrar
         </button>
        </form>
        </div>       
    </div>
    </div>
    </div>
</template>
<style src="@/assets/css/register-login.css" scoped>
</style>
