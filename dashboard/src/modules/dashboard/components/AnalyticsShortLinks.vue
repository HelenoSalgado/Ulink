<script setup lang="ts">
import ShortLink from '../api/ShortLink';
import Graphic from './Graphic.vue';

// interface Analytic {
//     clicks: number
// }
// const analytics: Analytic[] = await ShortLink.analytics();

// const dataAnalytics = [];

// for (let i = 0; i < analytics.length; i++) {
//     const dt = {
//         name: 'seg',
//         value: analytics[i].clicks,
//     };
//     dataAnalytics.push(dt); 
// }

const dataLinks = [
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

const fontTrafic = [
    {
        name: 'Instagram',
        value: 10
    },
    {
        name: 'Facebook',
        value: 11
    },
    {
        name: 'WhatsApp',
        value: 0
    },
    {
        name: 'Telegram',
        value: 7
    },
];

</script>
<template>
    <div class="constainer-links-analytics">
        <div class="clicks">
        <Graphic :data="dataLinks" type="line" label="clicks"/>
        </div>
        <div class="font-trafic">
        <Graphic :data="fontTrafic" type="pie" label="trafic"/>
        </div>
    </div>
</template>
<style scoped>
.constainer-links-analytics {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
}
.constainer-links-analytics > div{
    width: 100%;
    max-width: 400px;
}
</style>