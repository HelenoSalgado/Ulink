<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRoute } from 'vue-router';
import type { ShortLink } from "@/types/ShortLink";
import http from "@/services/http";
import { apiUrl } from "@/shared/apiBaseUrl";
import ShortenLink from "../components/ShortenLink.vue";

const route = useRoute();
const id = route.params.id;
const message = ref('');

const { data } = await http.get<ShortLink>(`${apiUrl.links}${id}`);

const link = reactive<ShortLink>({
  idUser: data.idUser,
  title: data.title,
  description: data.description,
  originUrl: data.originUrl,
  urlImg: data.urlImg,
});

async function updateShortLink(shortLink: ShortLink) {
    await http.put('links/update/'+id, shortLink).then(res => {
        message.value = res.data?.message;
    }, (err => { 
        let msg = err.response.data?.message;
        if(msg.length) return message.value = msg[0];
        message.value = msg;
    }));
};

</script>

<template>
    <div class="editor-container">
        <h1 class="title-dashboard">Editar Link</h1>
        <Suspense>
            <ShortenLink 
            :link="link"
            @actions="updateShortLink"
            :message="message"
            msg-button="Atualizar"
            button-cancel="true"
            />
            <template #fallback>
              <i class="pi pi-spin pi-spinner spinner-global"></i>
            </template>
        </Suspense>
        </div>
</template>

<style scoped>
@import url('../assets/css/short-link.css');
.editor-container{
    max-width: 800px;
    margin: auto;
    color: var(--bkg-white-shaded); 
}
.title-dashboard{
    padding-left: .5rem;
}
</style>