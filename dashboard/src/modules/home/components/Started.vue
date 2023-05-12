<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="started">
      <h1>Comece com uma página simples.</h1>
      <h2>Você gosta de compartilhar conhecimentos? <br>Escrever para os amigos, talvez.</h2>
      <p>Abra um conta e ganhe uma página de links para suas redes sociais.</p>
        <div class="started-buttons">

            <RouterLink to="/register">
               <button class="register-btn">Começar</button> 
            </RouterLink>
            <RouterLink to="/login">
               <button class="login-btn">Login</button>
            </RouterLink>

        </div>

    </div>
</template>

<style>
.started{
    width: 100%;
    max-width: 600px;
    background-color: #ddd;
    padding: 1rem;
    border-radius: 7px;
    color: var(--color-text-black-soft);
    background-color: var(--background-gradient-blue-soft);
    line-height: 1.5;
}
.started h1{
    font-weight: 700;
}
.started p{
    margin: 1rem 0 3rem 0;
}
.started-buttons{
    display: flex;
    align-items: center;
    gap: 40px;
}
.register-btn{
    background-color: #7eee7e;
}
.login-btn{
    background-color: var(--bkg-button);
}
.register-btn, .login-btn{
    width: 150px;
    padding: 1rem;
    border: none;
    border-radius: 7px;
    font-size: 1rem;
    transition: 200ms all;
    cursor: pointer;
}
.register-btn:hover, .login-btn:hover{
    filter: brightness(90%);
    box-shadow: var(--shadow-elevation-low);
}
</style>