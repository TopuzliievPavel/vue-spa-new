<template lang="pug">
  .page_main
    div(v-if="!userIsLogin")
      include blocks/slider-top.pug
    main.content-wrap.content-indent
      include blocks/department-section.pug
      include blocks/promo-section.pug
      include blocks/popular-section.pug
      //include blocks/rooms-section.pug

      section.shop_section(
        v-if="storeFrontCtrl.roomsCategoriesList.children.length > 4"
      )
        .shop-section_header
          .shop-section_actions
          .shop-section_title
            h2.h2 Shop by room
          .shop-section_actions
            button.btn.btn--outline.fa.fa-angle-left.arrow-left.prev(
              type="button"
              v-show="storeFrontCtrl.roomsCategoriesList.children.length > 4"
              @click="previous"
            )
            button.btn.btn--outline.fa.fa-angle-right.arrow-right.next(
              type="button"
              v-show="storeFrontCtrl.roomsCategoriesList.children.length > 4"
              @click="next"
            )
        .shop-carousel_mask
          ul#slide(
            carousel-elems-container
          )
            li.shop-tile_wrap.shop-room_tile(
              v-for="(category, index) in storeFrontCtrl.roomsCategoriesList.children"
              :key="index"
            )
              router-link.room-tile_box.slider__slide(to="/some-link")
                .room-tile_img
                  .img-wrapper
                    img(
                      :src="category.thumbnail || 'https://cdn3.housetipster.com/empty.jpg'"
                      alt="description picture"
                    )
                .room-tile_title
                  p {{ category.title }}





</template>

<script src="./store-front.js"></script>

<style lang="scss"> @import "./store-front"; </style>
