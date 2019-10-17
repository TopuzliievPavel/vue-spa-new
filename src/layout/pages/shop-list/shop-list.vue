<template lang="pug">
  .page_main
    .page_content-wrap.content-wrap(v-if="shopController")
      main.page_content
        include blocks/categories-aside.pug
        section.main-content.xlarge-9.large-11.small-12.columns.content-holder
          .row.expanded.top-title-holder
            h1 {{ shopController.categoryData.title }}
            hr
          .row.expanded.small-collapse.shop-content-wrapper
            .large-7.medium-6.small-12.columns.products-list

              ul
                li(
                  v-for="(product, id) in shopController.categoryData.products"
                  :key="id"
                )
                  a(href="#") {{ product.title }}

            .large-5.medium-6.columns.show-for-medium.related-img
              img(:src="shopController.activePhotoSrc")

          .row.expanded.small-collapse.description
            article.small-12.columns
              h2 kitchens
              p House Tipster provides everything from home design inspiration, to customizable virtual rooms, and a network of home improvement professionals to get the job done.
              img(:src="shopController.image")

          .height-fix

</template>

<script src="./shop-list.js"></script>

<style lang="scss" scoped> @import "./shop-list";</style>
