<template lang="pug">
  li.product-item_link
    router-link.btn--link(:to="productSimilar.link")  {{ productSimilar.title }}
</template>

<script>
  export default {
    name: 'ProductItem',
    props: {
      productSimilar: {
        type: Object
      },
      product: {
        type: {
          Array, Object
        }
      }
    }
  }
</script>

<style lang="scss" scoped> @import "./product-item";</style>
