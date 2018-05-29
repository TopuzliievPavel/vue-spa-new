<template lang="pug">
  div
    slot(name="beforeList")

    .articles-list(
      :class="{'articles-list--album-view': listLayout}"
    )
      article.articles-list_item(
        v-for="item in listSource"
        :key="item.id"
      )
        .article-item_container
          slot(:item="item")

    slot(name="afterList")
</template>

<script src="./list-articles.js" ></script>

<style lang="scss" scoped> @import './list-articles'; </style>
