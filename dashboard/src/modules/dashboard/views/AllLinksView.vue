<script setup lang="ts">
import type { ShortLinkUpdate } from '@/types/ShortLink';
import ShortLinks from '../components/ShortLinks.vue';
import Paginator from 'primevue/paginator';
import http from '@/services/http';
import { apiUrl } from '@/shared/apiBaseUrl';
import { useAuth } from '@/stores/auth';

const { data } = await http.get<ShortLinkUpdate[]>(`${apiUrl.links}all/${useAuth().user.id}`);

</script>
<template>
<h1 class="title-dashboard">Todos os Links</h1>
<div class="container-all-links">
    <div>
        <ShortLinks
        :data="data"
        />
    </div>
    <div class="paginator">
         <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>   
    </div>
</div>
</template>
<style scoped>
.paginator{
    margin-top: 4rem;
    max-width: 800px;
}
</style>