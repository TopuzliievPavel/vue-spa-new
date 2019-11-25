<template lang="pug">
  main.page_main.shop-cart-page
    .content-wrap.content-indent.empty-cart(v-if="!cartCtrl.cartProducts.length")
      i.fa.fa-shopping-basket(aria-hidden="true")
      p No item in your shopping cart
      router-link.btn.btn--primary(:to="{name: 'ShopList'}") Continue shopping

    .content-wrap.content-indent(v-if="cartCtrl.cartProducts.length")
      .shop-section_title
        h1.h2 Shopping cart
      .page_content-wrap
        .page_content
          .cart-table_table
            .cart-table_header
              .cart-table_column
                h4.checkout_title item
              .cart-table_column
                h4.checkout_title quantity
              .cart-table_column
                h4.checkout_title price
              .cart-table_column
                h4.checkout_title remove
            .cart-table_body(
              v-for="(seller, index) in cartCtrl.cartProducts"
              :key="index"
            )
              .cart-table_row-seller
                span.cart-table_title seller:
                  strong &nbsp;{{ seller.companyName }}
              .cart-table_row(
                v-for="(product, id) in seller.products"
                :key="id"
              )
                .cart-table_column
                  .cart-table_item
                    .cart-item_img
                      router-link.btn.btn--link(:to="{name: 'ShopList'}")
                        img(
                          :alt="product.title"
                          :src="product.thumbnail || 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg'"
                        )
                    .cart-item_content
                      h5.cart-item_title
                        router-link.btn.btn--link(:to="{name: 'ShopList'}") {{ product.title }}
                      span.cart-item_code Product code:
                        b &nbsp; {{ product.code }}
                .cart-table_column
                  .checkout_title Quantity:&nbsp;
                  .custom-input-num
                    input(type="number" disabled v-model="qty").custom-num
                    .custom-num_btn-wrap
                      button.btn.btn--outline.fa.fa-angle-up.btn-increm(
                        type="button"
                        @click.prevent="incrementQty"
                      )
                      button.btn.btn--outline.fa.fa-angle-down.btn-decrem(
                        type="button"
                        @click.prevent="decrementQty"
                      )
                .cart-table_column
                  .checkout_title Price:&nbsp;
                  .cart-table_price.product_price
                    span.old-price(
                      v-if="product.oldPrice"
                    ) ${{ product.oldPrice[0] }}
                      sup {{ product.oldPrice[1] }}
                    span.price ${{ product.newPrice[0] }}
                      sup {{ product.newPrice[1] }}
                .cart-table_column.cart-column_del
                  button.btn.btn--outline.ht.close-popup-btn(@click.prevent="removeProduct")

        aside.page_sidebar.shop-cart-aside(v-show="cartCtrl.cartTotal")
          .shop-cart_section
            .cart-table_header
              .cart-table_column
                h3.cart-table_title Order Details
            .shop-cart_result
              dl
                dt Subtotal
                dd {{'(' + cartCtrl.cartTotal.totalQty + ' items)'}}&nbsp;
                  span.result-price ${{ cartCtrl.cartTotal.subtotal[0] }}
                    sup {{ cartCtrl.cartTotal.subtotal[1] }}
                dt Shipping
                dd
                  span.result-price ${{cartCtrl.cartTotal.shipping[0] }}
                    sup {{ cartCtrl.cartTotal.shipping[1] }}
              dl.result-price-total.result-price-total--no-bg
                dt Total
                dd
                  span.result-price.total-price ${{ cartCtrl.cartTotal.total[0] }}
                    sup {{ cartCtrl.cartTotal.total[0] }}
              .shop-cart_btn-wrap
                router-link.btn.btn--gray(:to="{name: 'ComingSoon'}") Checkout Now
                router-link.btn.btn--primary.shop-cart_btn(:to="{name: 'StoreFront'}") Keep Shopping
</template>
<script src="./market-place.js"></script>

<style lang="scss" scoped> @import "./market-place";</style>
