<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ShortLink from '../api/Link';
import LinksRecent from '../components/LinksRecent.vue';
import FileUpload from 'primevue/fileupload';
import type { LinkCreate } from '../interface/Link';

const titleLink = ref('')
const inputLink = ref('');
const outputLink = ref('');
const checkdActive = ref(false);
const inputUrlPersonal = ref(false);
const infoCheckdCard = ref(false);
const IsExtend = ref(true);

function activePersonalUrl(){
    checkdActive.value = !checkdActive.value;
    inputUrlPersonal.value = !inputUrlPersonal.value;
}

function infoCheckdPersonal(){
    infoCheckdCard.value = !infoCheckdCard.value;
    console.log('olá');
}

async function generateShortLink() {
    const createLink: LinkCreate = {
        title: '',
        description: '',
        originUrl: '',
        idUser: '',
    }
    const { shortUrl } = await ShortLink.create(createLink);
    outputLink.value = shortUrl;
}

function onUpload(){
    console.log(event);
};

onMounted(() => {
    const extend = document.querySelector('.extend');
    extend?.addEventListener('click', (e) => {
        let boxGenerateLink = document.querySelector('.toggler');
        boxGenerateLink?.classList.toggle('toggler-extend');
    });
})

</script>
<template>
    <div class="container-short-link">
    <div class="short-link">
        <div class="container-generate-link">
        <h1 class="title-dashboard">Encurta Link</h1>
        <span 
         class="extend"><i class="pi pi-angle-double-down"
         @click="IsExtend = !IsExtend"
         v-bind:class="{'pi-angle-double-up': IsExtend}"></i>
        </span>
        <div class="toggler">
        <label class="link-title">
            <p>Título</p>
            <input type="text" :value="titleLink" placeholder="">
        </label>
        <div>
        <label class="description">
            <p>Descrição</p>
            <textarea placeholder=""></textarea>
        </label>
        <label class="input-url-img"> 
            <p>URL de imagem</p>
            <div>
            <input type="url" placeholder="">
            <FileUpload mode="basic" name="demo[]" accept="image/*" :maxFileSize="1000000" @upload="onUpload"/>  
            </div>
        </label>
        </div>
        <label class="input-link">
            <p>URL de origem</p> 
            <input v-model="inputLink" type="url">
        </label>
        <label 
        class="input-checkd" 
        @click="activePersonalUrl"
        for="checkd" 
        :class="{'checkd-active': checkdActive}">
            <p>Path personalizado? 
                <i 
                class="pi pi-info-circle"
                @mouseenter="infoCheckdPersonal"
                @mouseout="infoCheckdPersonal"
                ></i> 
            </p>
            <div 
            class="card info-card" 
            :class="{'info-card-visible': infoCheckdCard}">
                <em>Você pode personalizar o caminho final de sua URL. <strong>Exemplo</strong> de como ficará: https://exemplo.com/eGHgJ/<strong>melhor-produto</strong></em>
            </div>
            <span id="checkd"></span>
        </label>
        <label for=""
        class="persoanal-path-disnable" 
        :class="{'input-url-personal': inputUrlPersonal}">
            <input type="text">
        </label>
        <label class="output-link"> 
            <p>URL encurtada</p>           
            <input :disabled="true" :value="outputLink" type="url">
        </label>
           <button class="button-generate-link"
            @click="generateShortLink">
              <i class="pi pi-sync"></i>
              <span>Gerar</span>
           </button>
        </div>
        <div class="links-recents">
        <LinksRecent/>
        </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
@import url('../assets/css/short-link.css');
</style>