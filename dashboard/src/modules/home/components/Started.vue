<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="started">
      <h1>Encurte seu link agora mesmo.</h1>
      <h2>Você terá acesso a todas as estatísticas. <br>Crie uma conta por apenas R$ 19,00.</h2>
      <p>De brinde, ganhe uma página de links para suas redes.</p>
        <div class="started-buttons">

            <RouterLink to="/registrar" 
            class="action-btn register-btn link-icon-flex">
               <i class="pi pi-user"></i>Registrar-se
            </RouterLink>
            <RouterLink to="/entrar" 
            class="action-btn login-btn link-icon-flex">
               <i class="pi pi-sign-in"></i>Entrar
            </RouterLink>

        </div>

    </div>
</template>

<style>
.started{
    width: 100%;
    max-width: 600px;
    border-radius: 7px;
    color: var(--color-text-black-soft);
    background-color: var(--background-gradient-blue-soft);
}
h1{
    font-weight: 700;
    margin-bottom: 1rem;
}
.started p{
    margin: 1rem 0 3rem 0;
}
.started-buttons{
    display: flex;
    align-items: center;
    gap: 20px;
}
.register-btn{
    background-color: var(--bkg-button-action);
    color: #fff;
}
.login-btn{
    background-color: #133978;
    color: #fff;
}
.register-btn:hover, .login-btn:hover{
    filter: brightness(120%);
    box-shadow: var(--shadow-elevation-low);
}
</style>