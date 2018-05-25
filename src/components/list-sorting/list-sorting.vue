<template lang="pug">
  .category-list_settings
    .flex-wrapper
      dl.sorting
        dt.show-for-large sort by:
        dd
          select.sorting_select(
            v-model="sort"
            @change="setListSort()"
          )
            option(value="newest") Newest
            option(value="viewed") Viewed
            option(value="popular") Popular
            option(value="title") Title

      ul.list_views.show-for-large(v-if="listViews")
        li.list_views_item(
          :class="{'current': paginationData.listLayoutRow === false}"
          @click="setListLayoutRow(false)"
          )
          span.ht.view-2.view-icon
        li.list_views_item(
          :class="{'current': paginationData.listLayoutRow === true}"
          @click="setListLayoutRow(true)"
          )
          span.ht.view-1.view-icon

    .pagination-light
      button.pagination_btn.btn.btn--outline( type="button"
        @click="setCurrentPage(paginationData.currentPage - 1)"
        v-show="paginationData.currentPage > 1"
      )
        i(aria-hidden="true").fa.fa-angle-left
      .pagination_text
        | {{ startNumberItem }}
        span &nbsp;-&nbsp;
        | {{ stopNumberItem }}
        span &nbsp;of&nbsp;
        | {{ listLength }}
        span.show-for-large &nbsp;{{ pageName }}

      button.pagination_btn.btn.btn--outline(type="button"
        @click="setCurrentPage(paginationData.currentPage + 1)"
        v-show="paginationData.currentPage < pagesLength"
      )
        i(aria-hidden="true").fa.fa-angle-right

</template>

<script src="./list-sorting.js" ></script>

<style lang="scss" scoped> @import './list-sorting'; </style>
