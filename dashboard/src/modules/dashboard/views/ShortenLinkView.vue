<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ShortLink from '../api/Link';
import LinksRecent from '../components/LinksRecent.vue';
import FileUpload from 'primevue/fileupload';
import type { LinkCreate } from '../interface/Link';

const titleLink = ref('')
const inputLink = ref('');
const outputLink = ref('');
const IsExtend = ref(true);

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
        <!-- <div class="blocks-infos-general">
          <BlocksInfoGeneral 
          name="Clicks"
          action="200k"
          icon="pi pi-chart-bar"
          />
          <BlocksInfoGeneral 
          name="URLs"
          action="100k"
          icon="pi pi-link"
          />
        </div> -->
        <div class="container-generate-link">
        <h1 class="title">Encurta Link</h1>
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
.container-short-link{
    margin-top: 6rem;
    width: 100%;
    height: 88%; 
}
.container-generate-link{
    position: relative;
    max-width: 800px;
    margin: auto; 
}
.toggler{
    height: auto;
    transition: 200ms all;
    color: var(--bkg-white-shaded); 
    padding-top: .5rem;
}
.toggler-extend{
    overflow-y: hidden;
    height: 0;
}
.extend{
    position: absolute;
    top: 5px;
    right: .5rem;
    cursor: pointer;
    z-index: 1;
    color: var(--bkg-white-shaded); 
}
.title{
    color: var(--bkg-white-shaded);
    margin-bottom: 1rem;
    padding-left: .5rem;
}
.input-link, .output-link,
.link-title, .input-url-img, .description{
    display: block;
    margin: 1rem 0;
    padding: 0 .5rem; 
}
.description textarea{
    margin: .5rem 0;
    width: 100%;
    max-width: 800px;
    height: 100%;
    min-height: 100px;
    max-height: 200px;
    border: none;
    border-radius: 7px;
    padding: .5rem;
    font-size: 1rem;
    outline: transparent;
    transition: 100ms ease-in;
}
.input-url-img > div{
    display: flex;
    gap: 1rem;
    align-items: center;
}
/* .blocks-infos-general{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 3rem 0;
} */
.container-generate-link input{
    height: 45px;
    width: 100%;
    border-radius: 7px;
    margin: .5rem auto;
    font-size: 1rem;
    border: none;
    padding: .5rem;
    outline: transparent;
    transition: 100ms ease-in;
} 
.button-generate-link{
    display: block;
    background-color: var(--bkg-button-action);
    color: #fff;
    border-radius: 7px;
    padding: 1rem 2rem;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 1.1rem;
    border: none;
    margin: 1rem .5rem;
    cursor: pointer;
}
.link-title input:focus, .description textarea:focus, 
.input-url-img input:focus,
.input-link input:focus, .output-link input:focus{
    outline: 2px solid var(--bkg-button-action);
}
.links-recents{
    padding: .5rem;
}
</style>