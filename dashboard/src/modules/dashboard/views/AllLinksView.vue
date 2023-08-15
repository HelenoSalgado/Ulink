<script setup lang="ts">
import ShortLinks from '../components/ShortLinks.vue';
import Search from '@/components/Search.vue';
import { reactive, ref } from 'vue';
import Link from '@/api/ShortLink';

const searchWord = ref('');

const { data } = reactive(await Link.getAll());

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