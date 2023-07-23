<template>
    <button>
       <slot/>
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
    padding: .5rem 1rem;
    font-size: .9rem;
    cursor: pointer;
    transition: all 300ms;
}
button:hover{
    filter: brightness(80%);
}
</style>