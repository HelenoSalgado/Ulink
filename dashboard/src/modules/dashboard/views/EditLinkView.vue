<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRoute } from 'vue-router';
import type { ShortLink } from "@/types/ShortLink";
import http from "@/api/http";
import ShortenLink from "../components/ShortenLink.vue";
import { useAuth } from "@/stores/auth";

const auth = useAuth();

const route = useRoute();
const id = route.params.id;
const message = ref('');
const isLoading = ref(false);

const { data } = reactive(await http.get('links/'+id.toString())) ;

async function updateShortLink(shortLink: ShortLink) {

    isLoading.value = true;

    await http.put('links/'+id, shortLink, {
        headers: {
            Authorization: auth.token,
        }
    })
    .then(res => {
        isLoading.value = false;
        message.value = res.data?.message;
    }, (err => { 
        let msg = err.response.data?.message;
        if(msg.length) return message.value = msg[0];
        isLoading.value = false;
        message.value = msg;
    }));
};
</script>
<template>
    <div class="editor-container">
        <h1 class="title-dashboard">Editar Link</h1>
            <ShortenLink 
            :link="data"
            @actions="updateShortLink"
            :message="message"
            :is-loading="isLoading"
            msg-button="Atualizar"
            button-cancel="true"
            />
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