<template lang="pug">
  .page_main
    div(v-if="!userIsLogin")
      include blocks/slider-top.pug
    main.content-wrap.content-indent
      include blocks/department-section.pug
      include blocks/promo-section.pug
      include blocks/popular-section.pug
      include blocks/rooms-section.pug

</template>

<script src="./store-front.js"></script>

<style lang="scss"> @import "./store-front"; </style>
