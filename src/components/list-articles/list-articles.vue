<template lang="pug">
  .articles-list(
    v-if="listSource.length"
    :class="{'articles-list--album-view': listLayout}"
  )
    article.articles-list_item(
      v-for="room in listSource"
      :key="room.id"
    )
      .article-item_container
        slot(:room="room")

</template>

<script src="./list-articles.js" ></script>

<style lang="scss" scoped> @import './list-articles'; </style>
