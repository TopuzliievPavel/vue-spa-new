<template lang="pug">
  button(type="button" @click="$emit('click-btn')")
    i.fa.fa-shopping-cart(aria-hidden="true")
    | Add to cart
</template>

<script>
  export default {
    name: 'AddCart'
  }
</script>

<style scoped>

</style>
