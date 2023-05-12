<script setup lang="ts">
import MenuCompont from './Menu.vue';
import Search from './Search.vue';
</script>

<template>
    <header class="header">
        <MenuCompont/>
        <Search/>
    </header>
</template>

<style>
  .header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: .5rem;
    border-bottom: 1px solid var(--color-text-black-soft);
    margin-bottom: 4rem;
  }
</style>