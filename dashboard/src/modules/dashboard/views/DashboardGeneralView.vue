<script setup lang="ts">
import AnalyticsLink from '../components/dashboard/AnalyticsLink.vue';
import BlocksInfoGeneral from '../components/dashboard/BlocksInfoGeneral.vue';
import CommentsRecent from '../components/dashboard/CommentsRecent.vue';
//import PostsRecent from '../components/dashboard/PostsRecent.vue';
import UsedDeviceVue from '../components/dashboard/UsedDevice.vue';
import TopSocialMedia from '../components/dashboard/TopSocialMedia.vue';
import MapBrazil from '../components/dashboard/MapBrazil.vue';

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

const states = [{
    df: {
      value: 43, 
    },
    mg: {
      value: 33, 
    },
    ba: {
      value: 25, 
    },
    sp: {
      value: 23, 
    },
    go: {
      value: 23, 
    },
    to: {
      value: 21, 
    },
    rr: {
      value: 71, 
    },
    ma: {
      value: 19, 
    },
    am: {
      value: 16, 
    },
    sc: {
      value: 12, 
    },
    rs: {
      value: 11, 
    },
    ce: {
      value: 18, 
    },
    se: {
      value: 35, 
    },
    pb: {
      value: 13, 
    },
    rj: {
      value: 21, 
    },
    ms: {
      value: 13, 
    },
    rn: {
      value: 13, 
    },
    pe: {
      value: 273, 
    },
    pi: {
      value: 203, 
    },
    es: {
      value: 293, 
    },
    al: {
      value: 283, 
    },
    pa: {
      value: 233, 
    },
    mt: {
      value: 2543, 
    },
    ro: {
      value: 2453, 
    },
    ac: {
      value: 2573, 
    },
    ap: {
      value: 25673, 
    },
    pr: {
      value: 263, 
    },
}]

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
    <MapBrazil 
    :states="states"
    />
    <!-- <Echart /> -->
    <!-- <MapStates /> -->
</template>
<style scoped>
@import url('../assets/css/dashboard.css');
</style>