<script setup lang="ts">
</script>
<template>
<footer>
    <div class="container-footer">
        <div class="site-map">
            <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="">Blog</a>
            </li>
            <li>
                <a href="">Tutoriais</a>
            </li>
            <li>
                <a href="">Termos e privacidade</a>
            </li>
            </ul>
        </div>
    </div>
</footer>
</template>
<style scoped>
footer{
    margin-top: 5rem;
    background: var(--bkg-dark);
    background-image: url('@/assets/img/multivariate-5917419_1280.webp');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
footer::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: hwb(218 4% 80% / 0.678);
    /* backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px); */
}
li, a{
    color: var(--color-font-bkg);
}
.container-footer{
    padding: 3rem 1rem;
}
.site-map ul{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
}
.site-map li{
    line-height: 1rem;
    list-style: none;
}
</style>