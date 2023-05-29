<script setup lang="ts">
import '../assets/css/profile.css';
import Profile from '../components/profile/Profile.vue'
import Security from '../components/profile/Security.vue';
import { ref } from 'vue';

const menuActive = ref('profile');
const focusProfile = ref(false);
const focusSecurity = ref(false);
const focusPayment = ref(false);
const focusAccount = ref(false);

function activeFocus(e: string){

    focusProfile.value = false;
    focusSecurity.value = false;
    focusPayment.value = false;
    focusAccount.value = false;
  
  if(e === 'profile') return focusProfile.value = !focusProfile.value;
  if(e === 'security') return focusSecurity.value = !focusSecurity.value;
  if(e === 'payment') return focusPayment.value = !focusPayment.value;
  if(e === 'account') return focusAccount.value = !focusAccount.value;
}

</script>
<template>
<div class="container-profile">
    <nav class="menu-profile">
        <ul>

            <a 
            @click="menuActive = 'profile', activeFocus('profile')" 
            :class="{ 'focus': focusProfile }"
            ><i class="pi pi-user"></i> Meu Perfil</a>

            <a @click="menuActive = 'security', activeFocus('security')"
            :class="{ 'focus': focusSecurity }"
            ><i class="pi pi-lock"></i> Segurança</a>

            <a @click="menuActive = 'payment', activeFocus('payment')"
            :class="{ 'focus': focusPayment }"
            ><i class="pi pi-wallet"></i> Pagamento</a>

            <a @click="menuActive = 'account', activeFocus('account')"
            :class="{ 'focus': focusAccount }"
            ><i class="pi pi-trash"></i> Delete Conta</a>

        </ul>
    </nav>
    <div v-if="menuActive === 'profile'">
        <Profile/>
    </div>
    <div v-if="menuActive === 'security'">
        <Security/>
    </div>
    
</div>
</template>
<style scoped>
a{
    cursor: pointer;
    width: fit-content;
    padding: .5rem;
    border-radius: 15px;
}
.menu-profile{
    border-right: 1px solid #5a5a5a;
}
.menu-profile ul{
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.focus{
    background-color: var(--bkg-dark-contrast);
    color: #fff;
}
a:hover{
    background-color: var(--bkg-dark-contrast);
    color: #fff;
    opacity: .7;
}
</style>