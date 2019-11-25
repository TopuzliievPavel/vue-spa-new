<template lang="pug">
  .page_main
    .page_content-wrap.content-wrap.content-indent
      article.page_content
        include blocks/breadcrumbs.pug
        include blocks/socBlock.pug
        include blocks/content.pug
        include blocks/more-product-slider.pug
        //include blocks/product-reviews.pug
      aside.page_sidebar.show-for-xlarge(v-if="productPageCtrl.similarProducts.length")
        include blocks/sidebar.pug

</template>

<script src="./product-page.js"></script>
<style lang="scss" scoped> @import "./product-page";</style>
