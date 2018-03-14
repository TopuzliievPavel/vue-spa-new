<template lang="pug">
  .category-list_settings
    .flex-wrapper
      dl.sorting
        dt.show-for-large sort by:
        dd
          select.sorting_select
            option(value="popular") Popular
            option(value="newest") Newest
            option(value="oldest") Oldest
            option(value="title") Title

      ul.list_views.show-for-large
        li(
        :class="{'current': !listLayoutRow}"
          @click="listLayoutRow = false"
          ).list_views_item
          span.ht.view-2.view-icon
        li(
          :class="{'current': listLayoutRow}"
          @click="listLayoutRow = true"
          ).list_views_item
          span.ht.view-1.view-icon

    .pagination-light(
      v-show="content.pagination.pages > 2"
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

<script>
export default {
name: "ListSorting"
}
</script>

<style lang="scss" scoped>
  @import '../scss/base';
  .category-list_settings {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;
    &.settings-bottom {
      margin: 1.875rem 0 3.125rem;
    }
  }

  /* ---------------------------------------------------------
     Sorting
     ---------------------------------------------------------*/

  .sorting {
    display: flex;
    align-items: center;
    max-width: 375px;
    margin: 0;
    text-transform: capitalize;
    @include media('>=presmall') {
      margin: 0 30px 0 0;
    }
    dt {
      @include media('>=medium') {
        margin: 0 10px 0 0;
      }
    }
    dd {
      margin: 0;
    }
  }

  .sorting_select {
    background-color: transparent;
    font-weight: 300;
    height: 27px;
    min-width: 100px;
    margin-bottom: 0;
    padding: 0 .3rem 0 .2rem;
    &.select-num {
      min-width: 50px;
      font-size: .875rem;
    }
  }

  /* ---------------------------------------------------------
   Views
   ---------------------------------------------------------*/

  .flex-wrapper {
    display: flex;
    align-items: center;
  }

  .list_views {
    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .list_views_item {
    border: 2px solid #c6c6c6;
    border-left: none;
    color: rgba(0,0,0,0.4);
    cursor: pointer;
    display: flex;
    font-size: .75rem;
    align-items: center;
    justify-content: center;
    height: 27px;
    width: 35px;
    transition: color .3s, border-color .3s, background .3s;
    &:first-child {
      border: {
        left: 2px solid #c6c6c6;
        right: none;
      }
    }
    &.current {
      background: #ea7925;
      border-color: #ea7925;
      color: #ffffff;
    }
  }

  /* ---------------------------------------------------------
   Pagination
   ---------------------------------------------------------*/

  .pagination-light {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pagination_text {
    margin: 0 5px;
    @include media('>=medium') {
      margin: 0 15px;
    }
    span {
      //color: #949494;
      color: $placeholder;
    }
  }
</style>
