<script setup lang="ts">
import Emails from '../components/contacts/Emails.vue';
</script>
<template>
    <h1 class="title-dashboard">Contatos</h1>
    <div class="container-emails">
       <Emails /> 
    </div>
</template>
<style scoped>
.container-emails{
    padding: 1rem;
    border-radius: 15px;
    background-color: var(--bkg-box);
}
</style>