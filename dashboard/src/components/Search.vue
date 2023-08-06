<script setup lang="ts">
import { ref } from "vue";
import IconSearch from "./icons/IconSearch.vue";
const search = ref('');
</script>
<template>
    <div>
        <label class="label-search"> 
            <div class="lupa">
                <IconSearch />
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
    padding: .3rem .5rem .3rem 30px;
    font-size: larger;
    border: .5px solid var(--bkg-box);
    border-radius: 15px;
    width: 100%;
    background-color: transparent;
    font-family: initial;
    color: var(--bkg-box);
    outline: transparent;
    transition: 100ms ease-in;
}
.label-search input:focus{
    outline: 1px solid var(--bkg-box);
}
.label-search input:hover{
    box-shadow: var(--shadow-elevation-low);
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
.lupa svg{
    color: #fff;
    width: 18px;
}
</style>