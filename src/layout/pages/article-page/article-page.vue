<template lang="pug">
  .page_main.page_main--article
    .page_content-wrap.content-wrap.content-indent
      main.page_content
        article.article_box.content-indent(v-if="content")
          header.article_header
            .article_meta
              include ./blocks/breadcrumbs.pug

              .article_published
                i.fa.fa-clock-o(aria-hidden="true")
                | &nbsp;
                //- TODO Need add timedate=""
                time {{ content['-L9kQbhcWwyqbBvOXynK'].date }}

            h1 {{ content['-L9kQbhcWwyqbBvOXynK'].title }}
            h2 {{ content['-L9kQbhcWwyqbBvOXynK'].leadPar }}

          aside.article_social-section
            include ./blocks/social-block.pug

          .article_content(
            v-html="content['-L9kQbhcWwyqbBvOXynK'].content"
            )

          footer.article_footer
            include ./blocks/next-article.pug
            .article_social-section
              include ./blocks/social-block.pug

      //-aside.page_sidebar
        article-sidebar(
        rooms='#{article.rooms}'
        news='#{article.news}'
        )

</template>

<script src="./article-page.js"></script>

<style lang="scss" scoped> @import './article-page'; </style>
