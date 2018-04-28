<template lang="pug">
  .page_main.page_main--article
    .page_content-wrap.content-wrap.content-indent
      main.page_content
        p {{ content }}
        p {{ $route.params.slug}}
        p {{ $route.path  + ' path'}}
        p {{$route.fullPath + ' fullPath'}}
        p {{$route.name + ' name'}}
        router-link.nav-list_link(to="/media/123") go to
        article.article_box.content-indent(v-if="false")
          header.article_header
            router-link.nav-list_link(to="/media-list") media-edit
            .article_meta
              //include ./blocks/breadcrumbs.pug

              .article_published
                i.fa.fa-clock-o(aria-hidden="true")
                | &nbsp;
                //- TODO Need add timedate=""
                time {{ content.info.date }}

            h1 {{ content.info.title }}
            h2 {{ content.info.leadPar }}

          aside.article_social-section
            include ./blocks/social-block.pug

          .article_content(
            v-html="content.content"
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
