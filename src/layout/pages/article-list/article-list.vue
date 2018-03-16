<template lang="pug">
  .page_main
    //-section.content-wrap
      slider-entity.banners_slider(
      slider-type="mediaSlides"
      )
    .page_content-wrap.content-wrap
      main.page_content

        button.btn.btn--outline.hide-for-xlarge.show-sidebar-btn(type="button"

        )
          i.fa.fa-filter(aria-hidden="true")
          | &nbsp;
          | Filters

        .page_title
          h1.h2 Media
          router-link.nav-list_link(to="/media-page") media-page
        //-include ./blocks/settings.pug
        //-include ./blocks/filters.pug

        //-no-search-result(ng-if="mediaCtrl.houseTips && !mediaCtrl.houseTips.length")

        //-.articles-list(
          ng-if="mediaCtrl.houseTips.length"
          )
          article.articles-list_item(
          ng-repeat="tip in mediaCtrl.houseTips"
          ng-switch="tip.type"
          ng-class="{\
                       'commercial-article': tip.type == 'sponsored',\
                       'commercial-img': tip.type == 'banner'\
                       }"
          )
            .article-item_container(ng-if="tip.type !== 'banner'")
              include blocks/media-article

            site-entity-banner(
            ng-if="tip.type == 'banner'"
            ng-switch-when="banner"
            banners="tip"
            )

        //-include ./blocks/pagination

        //-.media_info-box
          h3.info-box_title {{::mediaCtrl.staticContentModel.title}}
          p.info-box_text(
          ng-if="!mediaCtrl.staticContentModel.additionalTextVisibility && mediaCtrl.staticContentModel.additionalText"
          ) {{::mediaCtrl.staticContentModel.additionalText}}
          button.btn.btn--primary.info-box_btn-link(type="button"
          ng-click="showPopup = true"
          ) Contact us

      //-aside.page_sidebar.page_sidebar--left.category-sidebar(
        ng-class="{'active': showSidebar, 'invisible': !mediaCtrl.leftMenuTree.length}"
        )
        include ./blocks/sidebar.pug

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
