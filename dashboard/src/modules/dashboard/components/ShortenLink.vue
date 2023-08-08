<script setup lang="ts">
import { onMounted, reactive, ref, defineEmits, computed } from 'vue';
import type { ShortLink } from '@/types/ShortLink';
import IconRotate from '@/components/icons/IconRotate.vue';
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';

const { link, buttonCancel, outputUrl, shortUrl, msgButton, message, isLoading } = defineProps([
    'link', 
    'buttonCancel', 
    'outputUrl',
    'shortUrl',
    'msgButton',
    'message',
    'isLoading'
]);

const emit = defineEmits<{
    (e: 'actions', value: ShortLink): void
}>();

const isProgress = ref(false);

const data = reactive<ShortLink>({
   idUser: link?.idUser,
   title: link?.title,
   description: link?.description,
   urlImg: link?.urlImg,
   originUrl: link?.originUrl
});


const checkLengthTitl = computed(() => {
   return data.title.length;
});

const checkLengthDesc = computed(() => {
   return data.description.length;
})

function generate(): void{
    isProgress.value = true;
    emit('actions', data);
    isProgress.value = false;
};

const checkdActive = ref(false);
const inputUrlPersonal = ref(false);
const infoCheckdCard = ref(false);

async function cancel(){
window.history.back();
}

function activePersonalUrl(){
    checkdActive.value = !checkdActive.value;
    inputUrlPersonal.value = !inputUrlPersonal.value;
}

function infoCheckdPersonal(){
    infoCheckdCard.value = !infoCheckdCard.value;
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
    <div class="short-link">
        <label class="link-title">
            <p>Título</p>
                <textarea style="font-size: 1.4rem; font-weight: bolder;" v-model="data.title"></textarea>
                <span :class="[
                    'count-caracter',
                    { 'count-caracter-red': checkLengthTitl > 57 }
                ]">
                    {{
                        checkLengthTitl < 57 ? data.title.length : - (data.title.length - 57) }} 
                </span>
        </label>
        <div>
            <label class="description">
                <p>Descrição</p>
                <textarea placeholder="" v-model="data.description"></textarea>
                <span :class="[
                    'count-caracter',
                    { 'count-caracter-red': checkLengthDesc > 155 }
                ]">
                    {{
                        checkLengthDesc < 155 ? data.description.length : - (data.description.length - 155) }} </span>

            </label>
            <label class="input-url-img">
                <p>URL de imagem</p>
                <div>
                    <input v-model="data.urlImg" type="url" placeholder="">
                </div>
            </label>
        </div>
        <label class="input-link">
            <p>URL de origem</p>
            <input v-model="data.originUrl" type="url">
        </label>
        <label class="input-checkd" @click="activePersonalUrl" for="checkd" :class="{ 'checkd-active': checkdActive }">
            <p>Path personalizado?
                <i class="pi pi-info-circle" @mouseenter="infoCheckdPersonal" @mouseout="infoCheckdPersonal"></i>
            </p>
            <div class="card info-card" :class="{ 'info-card-visible': infoCheckdCard }">
                <em>Você pode personalizar o caminho final de sua URL. <strong>Exemplo</strong> de como ficará:
                    https://exemplo.com/eGHgJ/<strong>melhor-produto</strong></em>
            </div>
            <span id="checkd"></span>
        </label>
        <label for="" class="persoanal-path-disnable" :class="{ 'input-url-personal': inputUrlPersonal }">
            <input type="text">
        </label>
        <label v-if="outputUrl" class="output-link">
            <p>URL encurtada</p>
            <input :disabled="!shortUrl" :value="shortUrl" type="url">
        </label>
        <span class="message">{{ message }}</span>
        <div class="action-buttons">
            <button @click="generate">
                <IconRotate :class="{ 'loading-rotate': isLoading }"/>
                <span>{{ msgButton }}</span>
            </button>
            <button v-if="buttonCancel" @click="cancel">
                <IconArrowLeft />
                <span>Voltar</span>
            </button>
        </div>
    </div>
</template>
<style src="../assets/css/short-link.css" scoped>
</style>