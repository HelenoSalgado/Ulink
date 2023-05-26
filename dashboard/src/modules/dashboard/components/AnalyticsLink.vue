<script setup lang="ts">
import TopSocialMedia from './TopSocialMedia.vue';
import Graphic from './Graphic.vue';

const dataPosts = [
    {
        name: 'Seg',
        value: 10
    },
    {
        name: 'Ter',
        value: 11
    },
    {
        name: 'Qua',
        value: 0
    },
    {
        name: 'Qui',
        value: 7
    },
    {
        name: 'Sex',
        value: 15
    },
    {
        name: 'Sáb',
        value: 5
    },
    {
        name: 'Dom',
        value: 2
    },
];

const topSocialMedia = [
  {
    name: 'Facebook',
    action: '200k',
    icon: 'pi pi-facebook',
    style: 'color: '
  },
  {
    name: 'Twitter',
    action: '400k',
    icon: 'pi pi-twitter',
    style: 'color: '
  },
  {
    name: 'WhatsApp',
    action: '100k',
    icon: 'pi pi-whatsapp',
    style: 'color: green'
  },
  {
    name: 'Telegram',
    action: '200k',
    icon: 'pi pi-telegram',
    style: 'color: blue'
  }
]
 
</script>
<template>
<div class="container-analytics">
<div class="container-posts-views">
<h2 class="title">Clicks</h2>
<div class="posts-analytics">
  <Graphic 
  :data="dataPosts"
  type="bar"
  label="Clicks"
  id="01"
  />
</div>
</div>
<div class="conatiner-top-media-shared">
<TopSocialMedia :media="topSocialMedia" title="Top fonte tráfico"/>
</div>
</div>
</template>
<style scoped>
.container-analytics{
    margin: 3rem 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    width: 100%;
    gap: 2rem;
}
.container-posts-views, .top-media-shared{
  background-color: var(--bkg-box);
  padding: 1rem;
  border-radius: 15px;
}
.container-posts-views{
    width: 40vw;
}
.conatiner-top-social-media{
    width: 15vw;
}

</style>