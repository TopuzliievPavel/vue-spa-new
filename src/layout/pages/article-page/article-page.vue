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
                time {{ content.date }}

            h1 {{ content.title }}
            h2 {{ content.leadPar }}

          aside.article_social-section
            include ./blocks/social-block.pug

          .article_content(
            v-html="content.content"
            )

          footer.article_footer
            include ./blocks/next-article.pug
            .article_social-section
              include ./blocks/social-block.pug

      aside.page_sidebar
        include ./blocks/sidebar-block.pug

</template>

<script src="./article-page.js"></script>

<style lang="scss" scoped> @import './article-page'; </style>
