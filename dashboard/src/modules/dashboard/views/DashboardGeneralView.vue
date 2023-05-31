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
.title{
    margin-top: 6rem;
    color: var(--bkg-white-shaded);
}
.blocks-info{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    flex-wrap: wrap;
}
.group-analytics-comments{
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    border-radius: 15px;
    color: var(--color-font-box);
}
.group-analytics-comments > div{
  max-width: 750px;
  min-width: 400px;
  flex: 1 2 200px;
}
.group-analytics-comments > div:nth-child(2){
  max-width: 250px;
  min-width: 150px;
  flex: 1 2 200px;
}
.group-posts-devices{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    color: var(--color-font-box);
    padding-bottom: 2rem;
}
.group-posts-devices div{
    min-width: 200px;
    flex: 1 2 200px;
    min-height: 100%;
}
.group-posts-devices div:nth-child(2){
  max-width: 200px;
}
.top-media-shared{
  background-color: var(--bkg-box);
  padding: 1rem;
  border-radius: 15px;
}
@media (max-width: 750px) {
  .blocks-info div{
    width: 60px;
  }
  .group-analytics-comments > div:nth-child(2),
  .group-posts-devices div:nth-child(2){
    min-width: 200px;
    width: 100%;
    max-width: 750px;
  }
  .group-analytics-comments{
    flex-direction: column;
  }
  .group-analytics-comments > div{
    min-width: 200px;
  }
}
</style>