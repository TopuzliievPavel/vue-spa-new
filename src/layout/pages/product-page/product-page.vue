<template lang="pug">
  .page_main
    .page_content-wrap.content-wrap.content-indent
      article.page_content
        //-include blocks/breadcrumbs
        //include blocks/socBlock.pug
        include blocks/content.pug
        //include blocks/more-product-slider.pug

        .page_reviews
          span Reviews ({{ reviewCount || 0}})
          button(
            type="button"
            @click.prevent="deleteReview"
          ).btn.btn--gray Delete Review
          button(
            type="button"
            @click.prevent="addReview"
          ).btn.btn--primary.add-review-button Add Review

          user-review.animate-fade-in(
            v-for="(review, index) in productPageCtrl.reviews"
            :key="index"
            :productReview="review"
          )
          p(
            v-if="productPageCtrl.reviewCount === 0"
          ) No reviews added

          aside(v-if="productPageCtrl.similarProducts.length").page_sidebar.show-for-xlarge
            include blocks/sidebar.pug



</template>

<script src="./product-page.js"></script>
<style lang="scss" scoped> @import "./product-page";</style>
