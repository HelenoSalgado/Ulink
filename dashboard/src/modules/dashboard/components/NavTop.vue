<script setup lang="ts">
import { ref } from 'vue';
import SearchDashboard from './SearchDashboard.vue';

const visibleNotifCard = ref(false);
const visibleMsgCard = ref(false);
const visibleUserCard = ref(false);

</script>
<template>
<div class="cristal-effect"></div>
<div class="container-nav-top">
<div class="nav-top">
<div class="search">
<SearchDashboard />
</div>
<div class="infos">
<div class="notifications">
    <div @click="visibleNotifCard = !visibleNotifCard" >
        <i class="pi pi-bell" style="color: var(--bkg-black);"></i>
        <span>5</span>
        <div class="notification-card card" 
        :class="{'visible-notification-card': visibleNotifCard}"></div>
    </div>
    <div @click="visibleMsgCard = !visibleMsgCard">
        <i class="pi pi-comment" style="color: var(--bkg-black);"></i>
        <span>8</span>
        <div class="message-card card"  
        :class="{'visible-massage-card': visibleMsgCard}"></div>
    </div>
</div>
<div class="user">
    <h3>Olá, Heleno</h3>
    <img 
    @click="visibleUserCard = !visibleUserCard" 
    src="@/assets/img/73316162.png" alt="avatar" title="perfil">
    <div class="user-card card" 
    :class="{'visible-user-card': visibleUserCard}">
     <a class="link-icon-flex" 
     href=""><i class="pi pi-user"></i> Perfil</a>
     <a class="link-icon-flex" 
     href=""><i class="pi pi-cog"></i> Config</a>
     <a class="link-icon-flex" 
     href=""><i class="pi pi-sign-out"></i> Sair</a>
    </div>
</div>
</div>
</div>
</div>
</template>
<style scoped>
.cristal-effect, .container-nav-top{
  position: fixed;
  width: 100%;
  z-index: 1;
}

.cristal-effect{
    background: hsla(218, 65%, 12%, 0.541);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    /* box-shadow: var(--shadow-elevation-low); */
    height: 70px;
}
.nav-top{
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-left: 2rem;
  gap: 2rem;
  z-index: 2;
}
.search{
  width: 100%;
  max-width: 300px;  
}
.infos{
  display: flex;
  gap: 2rem;
}
.notifications{
    display: flex;
    padding: 1rem;
    gap: 1rem;
}
.notifications:nth-child(1),
.notifications:nth-child(2){
    position: relative;
}
.notifications > div{
    flex: 1 1 50px;
    background-color: var(--bkg-box);
    border-radius: 5px;
    padding: .3rem;
    cursor: pointer;
}
.notifications div:hover, .user img:hover{
    box-shadow: var(--shadow-elevation-low);
}
.notifications div i{
    margin: .3rem;
    color: var(--bkg-dark-contrast);
}
.notifications div span{
    position: absolute;
    top: -.3rem;
    font-size: 13px;
    color: #fff;
    background-color: rgb(243, 108, 108);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0 .2rem;
    line-height: 1rem;
}
.user{
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--bkg-box);
}
.user img{
    width: 40px;
    height: 40px;
    border: 2px solid var(--bkg-dark-contrast);
    border-radius: 50%;
    background-color: var(--bkg-box);
    box-sizing: border-box;
    filter: brightness(120%);
    cursor: pointer;
}
.card{
    position: absolute;
    top: 100px;
    min-height: 200px;
    background-color: var(--bkg-box);
    border-radius: 15px;
    transition: 100ms all;
    opacity: 0;
    visibility: hidden;
}
.notification-card,
.message-card,
.user-card{
   width: 150px;
   display: flex;
   flex-direction: column;
   right: 0;
   font-size: 1rem;
}
.user-card a{
    margin: 1rem;
}
.visible-notification-card,
.visible-message-card,
.visible-user-card{
    visibility: visible;
    top: 70px;
    opacity: 10;
}
</style>