<script setup lang="ts">
import type { ShortLinkUpdate } from '@/types/ShortLink';
import ShortLinks from '../components/ShortLinks.vue';
import Search from '@/components/Search.vue';
import http from '@/api/http';
import { url } from '@/config';
import { useAuth } from '@/stores/auth';

const { data } = await http.get<ShortLinkUpdate[]>(`${url.api}links/all/${useAuth().user.id}`);

</script>
<template>
<div class="search">
<strong class="title-dashboard">Pesquisar por ID</strong>
<Search />
</div>
<div class="container-all-links">
    <div>
        <ShortLinks
          :data="data"
         />
    </div>
</div>
</template>
<style scoped>
.search{
    margin: 0 auto 2rem auto;
    max-width: 800px;
}
strong{
    display: block;
    margin-bottom: 1rem;
}
.paginator{
    margin: 4rem auto 2rem auto;
    max-width: 800px;
}
</style>