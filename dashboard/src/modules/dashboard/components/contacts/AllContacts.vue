<script setup lang="ts">
const contactId = 'sdfdfgfd';
</script>
<template>
    <div class="info-emails">
        <div>
            <p>4 emails</p>
        </div>
    </div>
    <div class="box-user-email">
        <span class="pi pi-user"></span>
        <p>Heleno Salgado</p>
        <p>heleno@gmail.com</p>
        <a :href="'contacts/'+contactId">Ver mais</a>
    </div>
    <div class="box-user-email">
        <span class="pi pi-user"></span>
        <p>Heleno Salgado</p>
        <p>heleno@gmail.com</p>
        <a href="#">Ver mais</a>
    </div>
    <div class="box-user-email">
        <span class="pi pi-user"></span>
        <p>Heleno Salgado</p>
        <p>heleno@gmail.com</p>
        <a href="#">Ver mais</a>
    </div>
    <div class="box-user-email">
        <span class="pi pi-user"></span>
        <p>Heleno Salgado</p>
        <p>heleno@gmail.com</p>
        <a href="#">Ver mais</a>
    </div>
    
</template>
<style scoped>
.info-emails{
    display: flex;
    justify-content: end;
    color: var(--bkg-white-shaded);
}

.info-emails div{
    width: fit-content;
    background-color: var(--bkg-dark-contrast);
    color: var(--bkg-white-shaded);
    padding: 0 .5rem;
    border-radius: 15px;
}
.box-user-email{
   margin: 1rem 0;
   display: inline-flex;
   gap: 2rem;
   align-items: center;
   border: 1px solid var(--bkg-dark);
   color: var(--color-text-black-soft);
   padding: .5rem;
   border-radius: 15px;
}
.box-user-email > a{
   padding: .3rem 1rem;
   border-radius: 15px;
   background-color: var(--bkg-dark-contrast);
   color: var(--bkg-white-shaded);
}
</style>
    
