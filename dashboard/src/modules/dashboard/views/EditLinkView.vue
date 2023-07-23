<script setup lang="ts">
import { ref } from "vue";
import FileUpload from 'primevue/fileupload';
import ButtonVue from './../components/Button.vue';
import { useRoute } from 'vue-router';
import Link from './../api/Link';
import type { UpdateLink } from "../interface/Link";

const route = useRoute();

const p = {
    id: 'frgdfdfg',
    title: 'fdgfh',
    description: 'thgntrhfghfgmh'
};
const id = ref(p.id);
const title = ref(p.title);
const description = ref(p.description);
const message = ref('');
const isUpdate = ref(false);
const isDelete = ref(false);

async function updateLink(){

    isUpdate.value = true;
    message.value = '';

    const data = {
        title: title.value,
        description: description.value,
    }
 
    const updateLink: UpdateLink = await Link.update(data, id.value);
    isUpdate.value = false;
    message.value = 'Link Atualizado';
   
}

async function deleteLink(){
    isDelete.value = true;
    message.value = '';
    const deleteLink = await Link.delete(id.value);
    message.value = deleteLink.message;
    isDelete.value = false;
}

async function onUpload(params:any) {
    
}

const checkdActive = ref(false);
const inputUrlPersonal = ref(false);
const infoCheckdCard = ref(false);

function activePersonalUrl(){
    checkdActive.value = !checkdActive.value;
    inputUrlPersonal.value = !inputUrlPersonal.value;
}

function infoCheckdPersonal(){
    infoCheckdCard.value = !infoCheckdCard.value;
    console.log('olá');
}

console.log(description.value)
</script>

<template>
    <div class="editor-container">
        <div class="container-generate-link">
            <label for="">Titulo</label>
            <input type="text" :value="title" placeholder="">
            <label for="">Descrição</label>
            <textarea name="" id="" cols="30" rows="9">{{ description }}</textarea>
            <label for="">URL Imagem</label>
            <div class="display-flex">
                <input type="url" placeholder="">
                <FileUpload mode="basic" name="demo[]" accept="image/*" :maxFileSize="1000000" @upload="onUpload"/>  
            </div>
            
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
            <!-- Buttons -->
            <span class="message">{{ message }}</span>
            <div class="action-buttons">
                <ButtonVue v-on:click="updateLink">
                    <span>Atualizar</span>
                    <i class="pi pi-sync" :class="{ loading: isUpdate }"></i>
                </ButtonVue>
                <ButtonVue v-on:click="deleteLink">
                    <span>Deletar</span>
                    <i class="pi pi-times" :class="{ 'pi-spinner': isDelete }"></i>
                </ButtonVue>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('../assets/css/short-link.css');
.editor-container{
    margin-top: 6rem;
}
label{
    display: block;
    font-size: 1.2rem;
    color: var(--bkg-box);
    margin-top: 1.5rem;
}
.display-flex{
    display: flex;
    gap: 1.5rem;
    align-items: center;
}
.config-buttons{
    max-width: 500px;
    display: flex;
}
.config-buttons span{
    flex: 1 2 50px;
    cursor: pointer;
}
.editor {
  min-height: 50vh;
}
.input-edite-title{
   margin: 1rem 0;
   padding-bottom: .5rem;
   width: 100%;
   height: auto;
   border: none;
   outline: none;
   border-bottom: .3px solid #8d8d8d;
   transition: all 200ms;
   overflow-y: hidden;
}
.input-edite-title:focus{
   border-bottom: .5px solid var(--bkg-button);
}
.input-edite-title, .input-edite-title::placeholder{
    color: #000000;
    font-size: 2rem;
}
.action-buttons{
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 450px;
    gap: 50px;
}
.pi{
    line-height: 0;
}
.loading, .pi-spinner{
    animation: loading 500ms infinite;
}
@keyframes loading {
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
}
.message{
    color: var(--color-message-sucess);
}
</style>