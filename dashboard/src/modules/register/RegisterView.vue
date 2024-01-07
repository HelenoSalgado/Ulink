<script setup lang="ts">
import router from '@/router';
import HeaderComnt from '@/components/Header.vue';
import { reactive, ref } from 'vue';
import http from '@/api/http';
import IconUser from '@/components/icons/IconUser.vue';
import IconEmail from '@/components/icons/IconEmail.vue';
import IconKey from '@/components/icons/IconKey.vue';

const user = reactive({
    username: '',
    email: '',
    password: ''
});

const message = ref('');

async function register(){

   try {
    
        await http.post('users', user);

    } catch (error: any) {

        message.value = error?.response?.data.message;
    }

   router.push('/registrar/sucesso')
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
        <form class="form-register" @submit.prevent="register">
            <label>
                <p>Nome de Usuário:</p>
                <span>
                <IconUser class="input-icon"/>
                <input type="text" v-model="user.username" />
                </span> 
            </label>
            <label>
                <p>Melhor Email:</p> 
                <span>
                <IconEmail class="input-icon"/>
                <input type="email" v-model="user.email" />
                </span>
            </label>
            <label>
                <p>Senha:</p>
                <span>
                <IconKey class="input-icon"/>
                <input type="text" v-model="user.password" />
                </span>
            </label>
         <div>
            {{ message }}
         </div>
         <button type="submit">
            Começar
         </button>
        </form>
        </div>
                    
    </div>
    </div>
    </div>
</template>
<style src="@/assets/css/register-login.css" scoped>
</style>