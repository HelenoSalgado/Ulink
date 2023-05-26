<script setup lang="ts">
const props = defineProps(['title', 'media']);
</script>
<template>
    <div class="top-media-shared">
        <h3 class="title">{{ props.title }}</h3>
        <div v-for="m in props.media" class="interations-media">
            <div><i :class="m.icon" :style="m.style"></i>
                <span>{{m.name}}</span><span>{{ m.action }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.top-media-shared{
    width: 100%;
    min-height: 100%;
}
.interations-media div{
  margin: 1rem 0;
  display: flex;
  align-items: center;
}
.interations-media div i{
    line-height: 0;
    margin-right: .5rem;
}
.interations-media div span:nth-child(3){
    margin-left: 1rem;
    font-weight: bold;
}
</style>