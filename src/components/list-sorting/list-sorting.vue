<template lang="pug">
  .category-list_settings
    .flex-wrapper
      dl.sorting
        dt.show-for-large sort by:
        dd
          select.sorting_select
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

    //-.pagination-light(
      v-show="content.pagination.page > 2"
      )
      button.pagination_btn( type="button"
      v-show="content.pagination.page > 1"
      )
        i(aria-hidden="true").fa.fa-angle-left
      .pagination_text
        | {{ (content.pagination.page * content.pagination.limit) - (content.pagination.limit - 1) }}
        span &nbsp;-&nbsp;
        | {{ content.pagination.page * content.pagination.limit }}
        span &nbsp;of&nbsp;
        | {{ content.pagination.total }}
        span.show-for-large &nbsp;{{ content.pagination.name }}

      button.pagination_btn(type="button"
      v-show="content.pagination.page < content.pagination.pages"
      )
        i(aria-hidden="true").fa.fa-angle-right

</template>

<script src="./list-sorting.js" ></script>

<style lang="scss" scoped> @import './list-sorting'; </style>
