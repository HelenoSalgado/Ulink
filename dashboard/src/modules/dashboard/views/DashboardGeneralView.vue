<script setup lang="ts">
import AnalyticsLink from '../components/dashboard/AnalyticsLink.vue';
import BlocksInfoGeneral from '../components/dashboard/BlocksInfoGeneral.vue';
import CommentsRecent from '../components/dashboard/CommentsRecent.vue';
//import PostsRecent from '../components/dashboard/PostsRecent.vue';
import UsedDeviceVue from '../components/dashboard/UsedDevice.vue';
import TopSocialMedia from '../components/dashboard/TopSocialMedia.vue';
import AnalyticsRegion from '../components/dashboard/AnalyticsRegion.vue';

const topSocialMedia = [
  {
    name: 'Facebook',
    action: '200k',
    icon: 'pi pi-facebook',
    style: 'color: var(--bkg-dark-contrast)'
  },
  {
    name: 'Twitter',
    action: '400k',
    icon: 'pi pi-twitter',
    style: 'color: var(--bkg-dark-contrast)'
  },
  {
    name: 'WhatsApp',
    action: '100k',
    icon: 'pi pi-whatsapp',
    style: 'color: var(--bkg-dark-contrast)'
  },
  {
    name: 'Telegram',
    action: '200k',
    icon: 'pi pi-telegram',
    style: 'color: var(--bkg-dark-contrast)'
  }
]
</script>
<template>
    <h1 class="title-dashboard">Dashboard</h1>
    <div class="group-analytics-comments">
        <div class="blocks-analytics">
            <div class="blocks-info">
            <BlocksInfoGeneral 
            name="Links"
            action="300k"
            icon="pi pi-chart-line"
            />
            <BlocksInfoGeneral 
            name="Clicks"
            action="5000k"
            icon="pi pi-external-link"
            />
            <BlocksInfoGeneral 
            name="Esta semana"
            action="300k"
            icon="pi pi-heart-fill"
            />
            </div>
            <AnalyticsLink />
            <div class="group-posts-devices">
               <div>
                <UsedDeviceVue />
               </div>
               <div>
                <TopSocialMedia :media="topSocialMedia" title="Top fonte tráfico"/>
               </div>
            </div>
        </div>
        <div class="comments-recent">
            <CommentsRecent />
        </div>
    </div>
    <AnalyticsRegion />
</template>
<style scoped>
@import url('../assets/css/dashboard.css');
</style>