<template lang="pug">
  .page_main
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

        //-list-sorting(
          v-if="content.listItems"
          //:listLength="listLength"
          //:listViews="false"
          )
        list-articles(
          :listSource="content.listItems"
        )
          template(slot-scope="{item}")
            include blocks/media-article.pug


        //-list-pagination.category-list_settings(
          v-if="content.listItems"
          //:listLength="listLength"
          )

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
