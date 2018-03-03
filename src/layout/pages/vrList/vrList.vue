<script src="./ctrl.js"></script>

<style lang="scss" scoped> @import './styles'; </style>

<template lang="pug">
  .page_main
    //-section.content-wrap
      slider-entity(
      slider-type="roomsSlides"
      ).banners_slider
    .page_content-wrap.content-wrap

      main.page_content(v-if="content")
        button(type="button"
          @click="showSidebar = !showSidebar"
          ).btn.btn--outline.hide-for-xlarge.show-sidebar-btn
          i.fa.fa-filter(aria-hidden="true")
          | &nbsp;
          | Filters

        .page_title
          h1.h2
            | {{ content.pageTitle.title }}
          p.h5 {{ content.pageTitle.description }}

        include blocks/settings.pug
        //-include ./blocks/filters
        //-include ./blocks/vendor-components-popups

        .articles-list(
          v-if="content.items.length"
          :class="{'articles-list--album-view': listLayoutRow}"
          )
          article.articles-list_item(
          v-for="room in content.items"
          :class="{'commercial-img': room.type == 'banner',\
                   'commercial-article': room.type == 'room'\
                 }"
          )
            .article-item_container(v-if="room")
              include blocks/article-item.pug

            //-site-entity-banner(
              ng-switch-when="banner"
              banners="room"
              )
        include ./blocks/pagination.pug
      aside.page_sidebar.page_sidebar--left.category-sidebar(
        :class="{'active': showSidebar}"
        )
        include ./blocks/sidebar.pug


</template>


