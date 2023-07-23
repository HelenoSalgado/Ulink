<script setup lang="ts">
import '../assets/css/profile.css';
import LinksRecent from '../components/LinksRecent.vue';
import AllContacts from '../components/contacts/AllContacts.vue';
import Contact from '../components/contacts/Contact.vue';
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
<h1 class="title-dashboard">Todos os Links</h1>
<div class="container-all-links">
    <div>
        <LinksRecent/>
        <LinksRecent/>
        <LinksRecent/>
        <LinksRecent/>
        <LinksRecent/>
    </div>
</div>
</template>
<style scoped>

</style>