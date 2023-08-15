<script setup lang="ts">
import AnalyticsLink from '../components/dashboard/AnalyticsLink.vue';
import BlocksInfoGeneral from '../components/dashboard/BlocksInfoGeneral.vue';
import UsedDeviceVue from '../components/dashboard/UsedDevice.vue';
import TopSocialMedia from '../components/dashboard/TopSocialMedia.vue';
import TopLinks from '../components/dashboard/TopLinks.vue';
import MapBrazil from '../components/dashboard/MapBrazil.vue';
import { reactive } from 'vue';
import type { ShortLinkUpdate } from '@/types/ShortLink';
import http from '@/api/http';
import { useAuth } from '@/stores/auth';
import IconLink from '@/components/icons/IconLink.vue';
import IconExternalLink from '@/components/icons/IconExternalLink.vue';
import IconBarChart from '@/components/icons/IconBarChart.vue';
import Link from '@/api/ShortLink';

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
];

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

const { data } = reactive(await Link.getLinksRecents());

</script>
<template>
    <h1 class="title-dashboard">Dashboard</h1>
    <div class="group-analytics-comments">
        <div class="blocks-analytics">
            <div class="blocks-info">
            <BlocksInfoGeneral name="Links" action="300k">
              <IconLink />
            </BlocksInfoGeneral>
            <BlocksInfoGeneral name="Clicks" action="5000k">
              <IconExternalLink />
            </BlocksInfoGeneral>
            <BlocksInfoGeneral name="Esta semana" action="300k">
              <IconBarChart />
            </BlocksInfoGeneral>
            </div>
            <AnalyticsLink />
        </div>
        <div class="top-links">
            <TopLinks 
            :data="data"
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