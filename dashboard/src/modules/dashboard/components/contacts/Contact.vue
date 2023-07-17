<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const contactId = ref(route.params);

console.log(contactId);

</script>
<template>
    <div class="info-profile">
    <span class="subtitle-icon">
      <h2>Informação do contato</h2> 
      <i class="pi pi-pencil"></i> 
    </span>
    
    <div>
    <div class="group-info">
        <div>
          <strong>Nome</strong> 
          <p>Heleno</p> 
        </div>
        <div>
            <strong>Sobrenome</strong>
            <p>Salgado Lopes</p>
        </div>
    </div>
    <div class="group-info">
        <div>
             <strong>Email</strong>
             <p>helenosalgado19@gmail.com</p>
        </div>
        <div>
            <strong>Telefone</strong>
            <p>3899857420</p>
        </div>
    </div>
    <div class="profile-address">
    <span class="subtitle-icon">
    <h2>Endereço</h2>
    <i class="pi pi-pencil"></i> 
    </span>
    <div class="group-info">
        <div>
           <strong>Cidade</strong>
           <p>São Romão</p>
        </div>
        <div>
           <strong>Estado</strong>
           <p>Minas Gerais</p>
        </div>
    </div>
    </div>
    </div>  
    </div>
</template>
<style scoped>
.group-info{
    width: 100%;
    display: flex;
    gap: 2rem;
}
.group-info strong{
    font-weight: bold;
    opacity: .7;
}
.group-info div{
    width: 100%;
    margin: 1rem 0;
}
.subtitle-icon{
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}
.subtitle-icon i{
    border: .5px solid var(--bkg-dark-contrast-transparent);
    padding: .3rem 1rem;
    border-radius: 15px;
    color: var(--bkg-dark-contrast);
    cursor: pointer;
}
</style>