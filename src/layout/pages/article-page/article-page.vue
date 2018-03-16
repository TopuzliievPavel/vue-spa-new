<template lang="pug">
  .page_main.page_main--article
    .page_content-wrap.content-wrap.content-indent
      main.page_content
        article.article_box.content-indent
          header.article_header
            h1 article
            router-link.nav-list_link(to="/media-edit") media-edit
            .article_meta
              //include ./blocks/breadcrumbs.pug

              .article_published
                i.fa.fa-clock-o(aria-hidden="true")
                | &nbsp;
                //- TODO Need add timedate=""
                //-time #{(article.date)}

            //h1 #{article.title}
            //h2 #{article.tagLine}

          //-aside.article_social-section
            include ./blocks/social-block.pug

          //-images-for-popup-container(
            ck-editor-gallery="true"
            )
            .article_content!= article.content

          //-footer.article_footer
            include ./blocks/next-article.pug
            .article_social-section
              include ./blocks/social-block.pug

        //-section#comments.article_box.content-indent
          comments(
          show-count="3"
          id="'#{article._id}'"
          type="'article'"
          )

      //-aside.page_sidebar
        article-sidebar(
        rooms='#{article.rooms}'
        news='#{article.news}'
        )

</template>

<script src="./article-page.js"></script>

<style lang="scss" scoped> @import './article-page'; </style>
