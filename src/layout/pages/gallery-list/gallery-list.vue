<template lang="pug">
  .page_main
    .page_content-wrap.content-wrap(v-if="list")
      main.page_content
        .page_title
          h1.h2 Gallery
          p.h5 This page uses "axios" to load images

        ul.gallery-list
          li.gallery-list_item(
            v-for="item in list"
            :key="item.id"
          )
            include blocks/article-item.pug





</template>

<script src="./gallery-list.js"></script>

<style lang="scss" scoped> @import './gallery-list'; </style>
