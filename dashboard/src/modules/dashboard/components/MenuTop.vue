<script setup lang="ts">
import { ref } from 'vue';
import AvatarInfo from '@/components/AvatarInfo.vue';
import IconBell from '@/components/icons/IconBell.vue';
import IconMessageCircle from '@/components/icons/IconMessageCircle.vue';

const visibleNotifCard = ref(false);
const visibleMsgCard = ref(false);

</script>
<template>
<div class="cristal-effect"></div>
<div class="container-nav-top">
<div class="nav-top">
<div class="infos">
<div class="notifications">
    <div @click="visibleNotifCard = !visibleNotifCard" >
        <IconBell />
        <span>5</span>
        <div class="notification-card card" 
        :class="{'visible-notification-card': visibleNotifCard}"></div>
    </div>
    <div @click="visibleMsgCard = !visibleMsgCard">
        <IconMessageCircle />
        <span>8</span>
        <div class="message-card card"  
        :class="{'visible-massage-card': visibleMsgCard}"></div>
    </div>
</div>
<AvatarInfo />
</div>
</div>
</div>
</template>
<style scoped>
.cristal-effect, .container-nav-top{
  position: fixed;
  width: 100%;
  z-index: 3;
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
@media (max-width: 750px) {
    .nav-top{
        gap: 0;
    }
    .infos{
        gap: .5rem;
    }
}
</style>