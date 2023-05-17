<script setup lang="ts">
import { ref } from 'vue';

const year = ref(new Date().getFullYear());

</script>
<template>
<footer class="footer-container">
 <div class="medias-sociais">

 </div>
 <p class="reserved-rights">&copy;{{ year }}</p>
 <a href="http://www.geoplugin.com/geolocation/" target="_new">Geolocalização IP</a> por <a href="http://www.geoplugin.com/" target=" _new">geoPlugin</a>
</footer>
</template>

<style scoped>
.footer-container{
    bottom: 0;
}
.reserved-rights{
    text-align: center;
    font-size: smaller;
}
</style>