<script setup lang="ts">
import SearchDashboard from './SearchDashboard.vue';
</script>
<template>
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
    <img src="https://avatars.githubusercontent.com/u/73316162?s=400&u=e9fb989b32a0b6c554418dfc09fb4c0e4784e773&v=4" alt="">
</div>
</div>
</div>
</div>
</template>
<style scoped>
.container-nav-top{
  position: fixed;
  width: calc(100% - 12rem) ;
  left: 12rem;
  background-color: var(--bkg-black);
  z-index: 2;
  box-shadow: var(--shadow-elevation-low);
}
.nav-top{
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
}
.search{
  width: 72%;  
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
    box-shadow: var(--shadow-elevation-low);;
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
    border-radius: 50%;
}
</style>