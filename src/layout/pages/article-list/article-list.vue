<template lang="pug">
  .page_main
    //-section.content-wrap
      slider-entity.banners_slider(
      slider-type="mediaSlides"
      )
    .page_content-wrap.content-wrap(v-if="content")
      main.page_content
        button.btn.btn--outline.hide-for-xlarge.show-sidebar-btn(type="button"
          @click="showSidebar = !showSidebar"
        )
          i.fa.fa-filter(aria-hidden="true")
          | &nbsp;
          | Filters

        .page_title
          h1.h2 Media
        //-include ./blocks/settings.pug
        //-include ./blocks/filters.pug

        //-no-search-result(ng-if="mediaCtrl.houseTips && !mediaCtrl.houseTips.length")

        .articles-list(
          v-if="true"
          )
          article.articles-list_item(
            v-for="article in content.listItems"
          )
            .article-item_container
              include blocks/media-article.pug


        //-include ./blocks/pagination

        //-.media_info-box
          h3.info-box_title {{::mediaCtrl.staticContentModel.title}}
          p.info-box_text(
          ng-if="!mediaCtrl.staticContentModel.additionalTextVisibility && mediaCtrl.staticContentModel.additionalText"
          ) {{::mediaCtrl.staticContentModel.additionalText}}
          button.btn.btn--primary.info-box_btn-link(type="button"
          ng-click="showPopup = true"
          ) Contact us

      aside.page_sidebar.page_sidebar--left.category-sidebar(
        v-if="content.listPage"
        :class="{'active': showSidebar}"
        )
        include blocks/sidebar.pug

    //-.popup.animate-fade(ng-class="{'active-popup': showPopup}")
      .popup_overlay(ng-click='showPopup = false')
      .popup_wrapper.popup--info-message
        button(type="button"
        ng-click="showPopup = !showPopup"
        ).popup_close-btn.ht.close-popup-btn

        .popup_title
          h5.h2 {{::mediaCtrl.staticContentModel.popupTitle}}
        p Contact us:
          | &nbsp;
          a(href='mailto:{{mediaCtrl.staticContentModel.popupEmail}}') {{::mediaCtrl.staticContentModel.popupEmail}}
        .popup_buttons-holder
          button.btn.btn--primary(type="button"
          ng-click="showPopup = !showPopup"
          ) Ok


</template>

<script src="./article-list.js"></script>

<style lang="scss" scoped> @import './article-list'; </style>
