<script setup lang="ts">
import { reactive, ref } from 'vue';
import ShortenLink from '../components/ShortenLink.vue';
import type { ShortLink, ShortLinkUpdate } from '@/types/ShortLink';
import http from '@/api/http';
import { useAuth } from '@/stores/auth';
import ShortLinks from '../components/ShortLinks.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';

const auth = useAuth();
const IsExtend = ref(true);
const shortUrl = ref('');
const message = ref('');
const isLoading = ref(false);

const link = reactive<ShortLink>({
  idUser: useAuth().user.id,
  title: '',
  description: '',
  originUrl: '',
  urlImg: '',
});

const { data } = reactive(await http.get<ShortLinkUpdate[]>(`links/recents/${auth.user.id}`, {
    headers: {
        Authorization: auth.token,
    }
}));

async function generateShortLink(shortLink: ShortLink) {
    isLoading.value = true;
    await http.post('links/create', shortLink, {
        headers: {
            Authorization: auth.token
        }
    })
    .then(res => { 
        shortUrl.value = res.data?.shortUrl;
        data.splice(0, 0, res.data);
        data.splice(3, 1);
        isLoading.value = false;
        message.value = 'Link encurtado com sucesso'
    }, (err => { 
        isLoading.value = false;
        message.value = err.response.data?.message[0];
    }));
};

</script>
<template>
    <div class="container-short-link">
        <h1 class="title-dashboard">Encurta Link</h1>
        <span 
         class="extend"><i class="pi pi-angle-double-down"
         @click="IsExtend = !IsExtend"
         v-bind:class="{'pi-angle-double-up': IsExtend}"></i>
        </span>
        <div class="toggler">
        <ShortenLink 
        :link="link"
        @actions="generateShortLink"
        output-url="true"
        :short-url="shortUrl"
        msg-button="Gerar"
        :is-loading="isLoading"
        :message="message"
        />
        </div>
        </div>
        <div class="links-recents">
        <h2>Links Recentes</h2>
        <ShortLinks
        :data="data"
        :search-word="''"
        /> 
        <RouterLink class="all-links link-icon-flex" to="/dashboard/all-links">
            <span>Todos os Links </span>
            <IconArrowRight />
        </RouterLink>
    </div>
</template>
<style scoped>
.container-short-link, .links-recents{
    max-width: 800px;
    margin: auto; 
}
.title-dashboard{
    padding-left: .5rem;
}
.toggler{
    min-height: 100%;
    color: var(--bkg-white-shaded); 
}
.toggler-extend{
    overflow-y: hidden;
    height: 0;
    transition: 200ms all;
}
.extend{
    position: absolute;
    top: 5px;
    right: .5rem;
    cursor: pointer;
    z-index: 1;
    color: var(--bkg-white-shaded); 
}
.links-recents{
   margin-top: 3rem;
   padding: .5rem;
   color: var(--bkg-box);
}
.links-recents h2{
    margin-bottom: 2.5rem;  
}
.all-links{
    color: var(--bkg-box);
    font-size: 1.3rem;
}
.all-links i{
    margin-left: .5rem;
}
</style>