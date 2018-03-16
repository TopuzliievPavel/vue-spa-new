<template lang="pug">
  .page_main.page_main--article
    .page_content-wrap.content-wrap.content-indent
      main.page_content
        article.article_box.content-indent
          header.article_header
            h1 article edit
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

</template>

<script src="./article-edit.js"></script>

<style lang="scss" scoped> @import './article-edit'; </style>
