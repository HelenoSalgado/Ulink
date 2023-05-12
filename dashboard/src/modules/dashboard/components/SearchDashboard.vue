<script setup lang="ts">
import { ref } from "vue";
const search = ref('');
</script>
<template>
    <div>
        <label class="label-search"> 
            <div class="lupa">
                <span class="pi pi-search" style="color: var(--bkg-box);"></span>
            </div>
            <input v-model="search" type="search">
        </label>
    </div>
</template>
<style scoped>
.label-search{
    position: relative;
}
.label-search input{
    padding: .3rem .5rem .3rem 25px;
    font-size: larger;
    border: .5px solid var(--bkg-box);
    border-radius: 7px;
    margin: 0;
    transition: 300ms all;
    width: 100%;
    background-color: transparent;
    font-family: initial;
    color: var(--bkg-box);
}
.label-search input:focus{
    outline: solid .6px var(--bkg-button);
    box-shadow: var(--shadow-elevation-medium);
}
.lupa{
    position: absolute;
    left: 7px;
    top: -2px;
    width: fit-content;
}
.lupa:hover{
    left: 0;
}
</style>