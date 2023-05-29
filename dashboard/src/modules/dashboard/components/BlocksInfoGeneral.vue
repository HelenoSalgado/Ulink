<script setup lang="ts">
const { name, action, icon } = defineProps(['name', 'action', 'icon']);
</script>
<template>
<div class="blocks-info">
    <div>
       <i :class="icon" style="color: var(--bkg-dark-contrast);"></i>
       <div>
        <span>{{ action }}</span>
        <span>{{ name }}</span>
       </div>
    </div>
</div>
</template>
<style scoped>
.blocks-info > div{
    display: block;
    padding: 0 16px;
    flex: 1 1 150px;
    max-width: 200px;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    align-items: center;
    min-height: 100px;
    background-color: var(--bkg-box);
    border-radius: 15px;
}
.blocks-info > div span{
    display: block;
}
.blocks-info > div span:nth-child(1){
    font-weight: bold;
}
.pi{
    font-size: 2rem;
}
</style>