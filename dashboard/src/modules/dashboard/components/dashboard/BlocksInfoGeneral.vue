<script setup lang="ts">
const { name, action } = defineProps(['name', 'action']);
</script>
<template>
<div class="blocks-info">
    <div>
       <slot></slot>
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
    color: var(--color-text-black-soft)
}
.pi{
    font-size: 2rem;
}
@media (max-width: 750px){
    .blocks-info > div{
        flex: 1 1 60px;
        gap: .5rem;
    }
    .blocks-info span{
        font-size: .8rem;
        line-height: 1rem;
    }
    .blocks-info i{
        font-size: 1rem;
    }
}
</style>