<script setup lang="ts">
import type { ShortLinkUpdate } from '@/types/ShortLink';
import ShortLinks from '../components/ShortLinks.vue';
import Search from '@/components/Search.vue';
import http from '@/api/http';
import { url } from '@/config';
import { useAuth } from '@/stores/auth';
import { reactive, ref } from 'vue';

const auth = useAuth();
const searchWord = ref('');

const data = reactive(await http.get<ShortLinkUpdate[]>(`${url.api}links/all/${auth.user.id}`, {
        headers: {
            Authorization: auth.token,
        }
    })
    .then(data => { return data.data })
);

function searchLink(searched: string) {
   searchWord.value = searched.toLowerCase();
}

</script>
<template>
<div class="search">
<strong class="title-dashboard">Pesquisar</strong>
<Search 
@search-link="searchLink"
/>
</div>
<div class="container-all-links">
    <div>
        <ShortLinks
          :data="data"
          :search-word="searchWord"
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
</style>