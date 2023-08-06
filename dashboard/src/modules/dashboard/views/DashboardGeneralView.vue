<script setup lang="ts">
import AnalyticsLink from '../components/dashboard/AnalyticsLink.vue';
import BlocksInfoGeneral from '../components/dashboard/BlocksInfoGeneral.vue';
//import PostsRecent from '../components/dashboard/PostsRecent.vue';
import UsedDeviceVue from '../components/dashboard/UsedDevice.vue';
import TopSocialMedia from '../components/dashboard/TopSocialMedia.vue';
import TopLinks from '../components/dashboard/TopLinks.vue';
import MapBrazil from '../components/dashboard/MapBrazil.vue';
import { reactive } from 'vue';
import type { ShortLinkUpdate } from '@/types/ShortLink';
import http from '@/api/http';
import { useAuth } from '@/stores/auth';

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

// const states = [{
//     df: {
//       value: 43, 
//     },
//     mg: {
//       value: 33, 
//     },
//     ba: {
//       value: 25, 
//     },
//     sp: {
//       value: 23, 
//     },
//     go: {
//       value: 23, 
//     },
//     to: {
//       value: 21, 
//     },
//     rr: {
//       value: 71, 
//     },
//     ma: {
//       value: 19, 
//     },
//     am: {
//       value: 16, 
//     },
//     sc: {
//       value: 12, 
//     },
//     rs: {
//       value: 11, 
//     },
//     ce: {
//       value: 18, 
//     },
//     se: {
//       value: 35, 
//     },
//     pb: {
//       value: 13, 
//     },
//     rj: {
//       value: 21, 
//     },
//     ms: {
//       value: 13, 
//     },
//     rn: {
//       value: 13, 
//     },
//     pe: {
//       value: 273, 
//     },
//     pi: {
//       value: 203, 
//     },
//     es: {
//       value: 293, 
//     },
//     al: {
//       value: 283, 
//     },
//     pa: {
//       value: 233, 
//     },
//     mt: {
//       value: 2543, 
//     },
//     ro: {
//       value: 2453, 
//     },
//     ac: {
//       value: 2573, 
//     },
//     ap: {
//       value: 25673, 
//     },
//     pr: {
//       value: 263, 
//     },
// }]

const states = [
    {
      uf: 'DF',
      value: 43, 
    },
    {
      uf: 'MG',
      value: 33, 
    },
    {
      uf: 'RS',
      value: 33, 
    },
    {
      uf: 'SC',
      value: 33, 
    },
    {
      uf: 'MA',
      value: 3, 
    },
    {
      uf: 'AM',
      value: 60, 
    },
    {
      uf: 'RR',
      value: 21, 
    },
    {
      uf: 'TO',
      value: 33, 
    },
    {
      uf: 'GO',
      value: 45, 
    },
    {
      uf: 'BA',
      value: 25, 
    },
    {
      uf: 'SP',
      value: 23,
    },
    {
      uf: 'RN',
      value: 77,
    },
    {
      uf: 'MS',
      value: 12,
    },
    {
      uf: 'RJ',
      value: 100,
    },
    {
      uf: 'PR',
      value: 23,
    },
    {
      uf: 'CE',
      value: 6,
    },
    {
      uf: 'SE',
      value: 5,
    },
    {
      uf: 'PA',
      value: 21,
    },
    {
      uf: 'ES',
      value: 55,
    },
    {
      uf: 'AL',
      value: 45,
    },
    {
      uf: 'PI',
      value: 25,
    },
    {
      uf: 'PE',
      value: 55,
    },
    {
      uf: 'MT',
      value: 88,
    },
    {
      uf: 'AP',
      value: 5,
    },
    {
      uf: 'AC',
      value: 18,
    },
    {
      uf: 'RO',
      value: 2000,
    },
    {
      uf: 'PR',
      value: 5,
    },
];

const { data } = reactive(await http.get<ShortLinkUpdate[]>(`links/recents/${useAuth().user.id}`));

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
        </div>
        <div class="top-links">
            <TopLinks 
            />
        </div>
      </div>
      <div class="group-posts-devices">
        <div>
            <TopSocialMedia :media="topSocialMedia" title="Top fonte tráfico"/>
            <UsedDeviceVue />
        </div>
        <MapBrazil 
          :states="states"
        />
      </div>
</template>
<style src="../assets/css/dashboard.css" scoped>
</style>