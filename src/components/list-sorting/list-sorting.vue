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
            option(value="oldest") Oldest
            option(value="popular") Popular
            option(value="title") Title

      ul.list_views.show-for-large
        li.list_views_item(
          :class="{'current': paginData.listLayoutRow === false}"
          @click="setListLayoutRow(false)"
          )
          span.ht.view-2.view-icon
        li.list_views_item(
          :class="{'current': paginData.listLayoutRow === true}"
          @click="setListLayoutRow(true)"
          )
          span.ht.view-1.view-icon

    .pagination-light(
      v-show="paginData.currentPage > 0"
      )
      button.pagination_btn( type="button"
      v-show="paginData.currentPage > 1"
      )
        i(aria-hidden="true").fa.fa-angle-left
      .pagination_text
        | {{ (paginData.currentPage * paginData.showItem) - (paginData.showItem - 1) }}
        span &nbsp;-&nbsp;
        | {{ paginData.currentPage * paginData.showItem }}
        span &nbsp;of&nbsp;
        | {{ paginData.allItems }}
        span.show-for-large &nbsp;{{ pageName }}

      button.pagination_btn(type="button"
      v-show="paginData.currentPage < paginData.currentPages"
      )
        i(aria-hidden="true").fa.fa-angle-right

</template>

<script src="./list-sorting.js" ></script>

<style lang="scss" scoped> @import './list-sorting'; </style>
