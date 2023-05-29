<script setup lang="ts">
import SearchDashboard from './SearchDashboard.vue';
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
    <div>
        <i class="pi pi-bell" style="color: var(--bkg-black);"></i>
        <span>5</span>
    </div>
    <div>
        <i class="pi pi-comment" style="color: var(--bkg-black);"></i>
        <span>8</span>
    </div>
</div>
<div class="user">
    <h3>Olá, Heleno</h3>
    <img src="@/assets/img/73316162.png" alt="">
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
  justify-content: space-between;
  padding-left: 2rem;
  z-index: 2;
}
.search{
  width: calc(72% - 12rem);  
  left: 12rem;
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
.notifications div{
    flex: 1 1 50px;
    background-color: var(--bkg-box);
    border-radius: 5px;
    padding: .3rem;
    transition: 100ms all;
    cursor: pointer;
}
.notifications div:hover{
    box-shadow: var(--shadow-elevation-low);
}
.notifications div i{
    margin: .3rem;
}
.notifications div span{
    position: absolute;
    top: -.3rem;
    font-size: 13px;
    color: #fff;
    background-color: rgb(243, 108, 108);
    box-sizing: border-box;
    border-radius: 3px;
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
    border-radius: 50%;
    background-color: var(--bkg-box);
}
</style>