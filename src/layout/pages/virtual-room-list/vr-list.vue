<template lang="pug">
  .page_main
    .page_content-wrap.content-wrap(v-if="content")
      main.page_content
        button(type="button"
          @click="showSidebar = !showSidebar"
          ).btn.btn--outline.hide-for-xlarge.show-sidebar-btn
          i.fa.fa-filter(aria-hidden="true")
          | &nbsp;
          | Filters

        .page_title
          h1.h2 {{ content.pageTitle.title }}
          p.h5 {{ content.pageTitle.description }}

        list-sorting(
          :listLength="content.items.length"
          :pageName="content.pageTitle.title"
        )
        list-articles(
          :listSource="paginListData.showList"
          :listLayout="paginationData.listLayoutRow"
        )
          template(slot-scope="{room}")
            include blocks/article-item.pug

        list-pagination.category-list_settings(
          :listLength="content.items.length"
          )

      aside.page_sidebar.page_sidebar--left.category-sidebar(
        :class="{'active': showSidebar}"
        )
        include ./blocks/sidebar.pug


</template>

<script src="./vr-list.js"></script>

<style lang="scss" scoped> @import './vr-list'; </style>
