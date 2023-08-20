<script setup lang="ts">
</script>
<template>
    <button>
        <span class="loading"></span>
       <slot></slot>
    </button>
</template>
<style scoped>
button{
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 5px;
    z-index: 2;
    border: solid 1px var(--bkg-button);
    border-radius: 5px;
    padding: 1rem 2rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 300ms;
}
button:hover{
    filter: brightness(120%);
}
</style>