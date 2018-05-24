<template lang="pug">
  .settings-bottom

    dl.sorting.show-for-medium
      dt Show:
      dd
        select.sorting_select.select-num(
          v-model.number="selectVal"
          @change="setRangeArticleList()"
          )
          option(value="6") 6
          option(value="12") 12
          option(value="24") 24

    .pager
      .pagination
        button.btn.btn--link.show-for-medium(type="button"
          @click="gotoFirstPage"
          :class="{'disable': currentPage == 1}"
        ) First
        button.pagination_btn.pagination_btn--primary(type="button"
          @click="reducePage"
          :class="{'invisible':currentPage == 1}"
        )
          i(aria-hidden="true").fa.fa-angle-left
        ul.pagination_list
          li(
          v-for="page in setPagesLength",
          )
            button(type="button"
              @click="thisPage(page)"
              :class="{'current': page == currentPage}"
            ) {{ page }}

        button.pagination_btn.pagination_btn--primary(type="button"
          @click="addPage"
          :class="{'invisible': currentPage == setPagesLength}"
        )
          i(aria-hidden="true").fa.fa-angle-right
        button.btn.btn--link.show-for-medium(type="button"
          @click="gotoLastPage"
          :class="{'disable': currentPage == setPagesLength}"
        ) Last
</template>

<script src="./list-pagination.js" ></script>

<style lang="scss" scoped> @import './list-pagination'; </style>
