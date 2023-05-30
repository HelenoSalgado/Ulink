<script setup lang="ts">
import AnalyticsLink from '../components/AnalyticsLink.vue';
import BlocksInfoGeneral from '../components/BlocksInfoGeneral.vue';
import CommentsRecent from '../components/CommentsRecent.vue';
import PostsRecent from '../components/PostsRecent.vue';
import UsedDeviceVue from '../components/UsedDevice.vue';
import TopSocialMedia from '../components/TopSocialMedia.vue';
import AnalyticsRegion from '../components/AnalyticsRegion.vue';

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
    <h1 class="title">Dashboard</h1>
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
               <UsedDeviceVue />
               <TopSocialMedia :media="topSocialMedia" title="Top fonte tráfico"/>
            </div>
        </div>
        <div class="comments-recent">
            <CommentsRecent />
        </div>
    </div>
    <AnalyticsRegion />
</template>
<style scoped>
.title{
    margin-top: 6rem;
    color: var(--bkg-white-shaded);
}
.blocks-info{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
.group-analytics-comments, .group-posts-devices{
    margin-top: 0rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    border-radius: 15px;
    color: var(--color-font-box);
}
.group-analytics-comments{
    margin-top: 3rem;
}
.group-posts-devices{
    color: var(--color-font-box);
    padding-bottom: 2rem; 
}
.top-media-shared{
  background-color: var(--bkg-box);
  padding: 1rem;
  border-radius: 15px;
}
</style>