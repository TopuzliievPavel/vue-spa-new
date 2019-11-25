<template lang="pug">
  .page_main
    .page_content-wrap.content-wrap.content-indent
      article.page_content
        include blocks/breadcrumbs.pug
        include blocks/socBlock.pug

        .product-block(style="max-width: 300px")
          img(:src="product.thumbnail" alt="product.title")
          section.product_info-main
            h1.product_name {{ product.title }}

            .product_code
              span
                | Product code:
                b {{ product.code }}

            .product_info
              product-rating.product_rating(
                :productRateValue="product.rating"
              )
              a.product_reviews(
                v-scroll-to="'.reviews-title, 150px'"
              ) ({{ reviewCount }})

            .product_price
              span.price ${{ product.newPrice[0] || 0 }}
                sup {{ product.newPrice[1] || '00' }}
              span.old-price(
                v-if="product.oldPrice"
              ) ${{ product.oldPrice[0] }}
                sup {{ product.oldPrice[1] }}

            .product_actions
              .product_buy
                label.product_buy-qty
                  span.product_attribute-label Quantity:
                  input(
                    type="number"
                    step="1"
                    min="1"
                    pattern="\\d+"
                    required
                    v-model="product.quantity"
                  )
                button.product_buy-tocart.btn.btn--primary(
                  @click.prevent="addToCart(product)"
                  type="submit"
                )
                  i.fa.fa-shopping-cart
                  | &ensp;
                  span Add to Cart

              .product_options
                .product_attribute(
                  v-for="(optionsGroup, index) in product.options"
                  :key="index"
                )
                  span.product_attribute-label {{ optionsGroup.title }}:
                  ul.product_attribute-list
                    li.product_attribute-wrap(
                      v-for="(option, id) in optionsGroup.filterItems"
                      :key="id"
                      :class="{'selected': option.selected}"
                    )
                      button.product_attribute-option(
                        type="button"
                        :class="{'color-option': optionIsColor}"
                        @click.prevent="option.selected = true"
                      ) {{ option.title }}
                      span.product_attribute-tooltip
                        span.product_attribute-tooltip-bg(
                          :style="getOptionBackground(option)"
                        )
                        span.product_attribute-tooltip-name {{ option.title }}

                .product_options-buttons
                  router-link.product_options-button.towishlist(
                    to="/some-link"
                    unavailable
                  )
                    span.fa.fa-heart
                    span.label-info Add to Wish List
                  router-link.product_options-button.tocompare(
                    to="/some-link"
                    unavailable
                  )
                    span.fa.fa-exchange
                    span.label-info Add to Compare
                  router-link.product_options-button.tovr(
                    :to="{name: 'VrList'}"
                    unavailable
                  )
                    span.fa.fa-cube
                    span.label-info More products in Virtual Room

            .product_feature
              span Preview Features
              ul.product_feature-list
                li.fa.fa-picture-o(
                  :class="{'active': product.images.length}"
                )
                li.ht.visualizer(
                  :class="{'active': product.hasVisualizer}"
                )
                li.ht.vr-rotate(
                  :class="{'active': product.is360}"
                )
                li.fa.fa-film(
                  :class="{'active': product.video.length}"
                )

        include blocks/reviews.pug

      aside.page_sidebar.show-for-xlarge(v-if="product.similarProducts")
        include blocks/sidebar.pug

</template>

<script>
  import { mapState } from 'vuex'
  import UserReview from '../../../components/user-review/user-review.vue'
  import ProductItem from '../../../components/product-item/product-item.vue'
  import ProductRating from '../../../components/product-rating/product-rating'
  export default {
    name: 'StoreFrontCart',
    components: { UserReview, ProductItem, ProductRating },
    data () {
      return {
        storeList: [],
        product: {},
        review: {
          title: '',
          description: '',
        },
        reviews: []
      }
    },
    computed: {
      ...mapState('cartsProduct', ['storeFrontList']),
      reviewCount () {
        return this.reviews.length
      }
    },
    created() {
      let productId = this.$route.params.id;
      this.storeList = this.storeFrontList;
      this.product = this.storeList[productId];
      console.log('--------productId---------', productId);
      console.log('--------product---------', this.product);
      console.log('--------productSimilar---------', this.product.similarProducts)
    },
    methods: {
      addReview() {
        if (this.review.title !== '') {
          this.reviews.push({
            title: this.review.title,
            description: this.review.description
          });
          this.review.title = this.review.description = ''
        }
      },
      deleteReview(index) {
        this.reviews.splice(index, 1)
      },
      optionIsColor(option) {
        return /#[\da-fA-F]/i.test(option.swatchValue) || /^http/.test(option.swatchValue);
      },
      getOptionBackground(option) {
        return `background-image: url(${option.image})`;
      },
      getSelectedFilter(attribute) {
        return attribute
      },
    }
  }
</script>

<style lang="scss" scoped> @import "./store-front-cart";</style>
