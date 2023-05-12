<script setup lang="ts">
import { ref } from 'vue';
import ShortLink from '../api/ShortLink';
import AnalyticsShortLinks from "../components/AnalyticsShortLinks.vue";
import BlocksInfoGeneral from '../components/BlocksInfoGeneral.vue';

const inputLink = ref('');
const outputLink = ref('http://localhost:3000/');

async function generateShortLink() {
    const { shortUrl } = await ShortLink.generate(inputLink.value);
    outputLink.value = shortUrl;
}

</script>
<template>
    <div class="container-short-link">
    <div class="short-link">
        <h1>Links</h1>
        <div class="blocks-infos-general">
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
        </div>
        <label class="input-link">
            <div>
                <i class="pi pi-link"></i>
            </div>
            <input v-model="inputLink" type="text">
        </label>
        <div class="button-generate-link">
           <button @click="generateShortLink">
              <i class="pi pi-sync"></i>
              <span>Gerar</span>
           </button>
        </div>
        <div class="output-link">            
            <i class="pi pi-share-alt"></i>
            <span>{{ outputLink }}</span>
        </div>
        <div class="analytics">
        <AnalyticsShortLinks />
        </div>
    </div>
    </div>
</template>
<style scoped>
.short-link{
    width: 100%;
    margin-top: 6rem;
    background-color: aliceblue; 
    padding: 1rem;
    border-radius: 15px;
}
.short-link h1{
    text-align: center;
    margin: 1rem 0 2rem 0;
}
.blocks-infos-general{
    width: 100%;
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;
}
.input-link, .output-link{
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}
.input-link div{
    position: absolute;
    z-index: 1;
    background-color: var(--bkg-button-action);
    padding: 9px 20px;
}
.input-link div{
    left: 0;
    border-radius: 15px 0 0 15px;
}
.input-link input, .output-link{
  height: 40px;
  width: 100%;
  padding: .3rem;
  font-size: 1.1rem;
  border: 1px solid var(--bkg-black);
  border-radius: 15px;
  transition: 200ms all;
}
.input-link input{
    padding-left: 65px;
}
.output-link{
    padding-left: 1rem;
}
.input-link input:focus{
  outline: 1px #919191;
  box-shadow: var(--shadow-elevation-medium);
}
.button-generate-link{
    padding: 1rem;
    text-align: center;
}
.button-generate-link button{
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 7px;
    border: none;
    background-color: var(--bkg-button-action);
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: 300ms;
    cursor: pointer;
}
.button-generate-link button:hover{
    filter: brightness(90%);
    color: var(--bkg-black);
}
.output-link{
    display: flex;
    justify-content: space-between;
    background-color: #f7f7f7;
}
.output-link i{
    position: absolute;
    right: -1px;
    background-color: var(--bkg-button-action);
    padding: 13px 30px;
    border-radius: 0 15px 15px 0;
}
.analytics{
    margin-top: 3rem;
}
</style>