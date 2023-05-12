<script setup lang="ts">
</script>
<template>
<div class="container-posts-recent">
    <h3>Posts Recentes</h3>
<div class="post">
    <div class="order">
        <span>1</span>
    </div>
    <div class="previa-img">
        <img src="https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg" alt="">
    </div>
    <div>07 Abril 2023</div>
    <div><span>600</span><i class="pi pi-comments"></i></div>
    <div><span>3000</span><i class="pi pi-heart-fill"></i></div>
    <div><span>300</span><i class="pi pi-share-alt"></i></div>
    <div><span>6000</span><i class="pi pi-eye"></i></div>
</div>
<div class="post">
    <div class="order">
        <span>1</span>
    </div>
    <div class="previa-img">
        <img src="https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg" alt="">
    </div>
    <div>07 Abril 2023</div>
    <div><span>600</span><i class="pi pi-comments"></i></div>
    <div><span>3000</span><i class="pi pi-heart-fill"></i></div>
    <div><span>300</span><i class="pi pi-share-alt"></i></div>
    <div><span>6000</span><i class="pi pi-eye"></i></div>
</div>
<div class="post">
    <div class="order">
        <span>1</span>
    </div>
    <div class="previa-img">
        <img src="https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg" alt="">
    </div>
    <div>07 Abril 2023</div>
    <div><span>600</span><i class="pi pi-comments"></i></div>
    <div><span>3000</span><i class="pi pi-heart-fill"></i></div>
    <div><span>300</span><i class="pi pi-share-alt"></i></div>
    <div><span>6000</span><i class="pi pi-eye"></i></div>
</div>
</div>
</template>
<style scoped>
.container-posts-recent{
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--bkg-box);
  border-radius: 15px;
  max-width: 800px;
}
.container-posts-recent h3{
    margin-bottom: 2rem;
}
.post{
    display: flex;
    align-items: center;
    gap: .5rem;
}
.order{
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #7e95fc;
}
.post div{
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.post div i{
    line-height: 0;
    margin: .7rem;
}
.previa-img img{
    width: 100px;
    height: 50px;
    contain: content;
    border-radius: 7px;
}
</style>