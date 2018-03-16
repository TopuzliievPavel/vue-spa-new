<template lang="pug">
  .page_main.page_main--article
    .page_content-wrap.content-wrap.content-indent
      main.page_content
        article.article_box.content-indent
          header.article_header
            .article_meta
              h1 Create the new article

              .article_published
                i.fa.fa-clock-o(aria-hidden="true")
                | &nbsp;
                time {{ date }}

            label.h1.input-holder
              input(type="text" placeholder="Article title *"
              v-model="title")
            label.h2.input-holder
              textarea(v-model="tagLine" placeholder="Preview paragraph")

          label.input-holder
            input(type="text" placeholder="Url main image *"
            v-model="image")

          .article_content
            textarea(v-model="content" placeholder="Content *")

          button.btn.btn--primary(type="button") Save and publish

</template>

<script src="./article-edit.js"></script>

<style lang="scss" scoped> @import './article-edit'; </style>
