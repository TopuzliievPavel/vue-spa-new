<template lang="pug">
  .settings-bottom

    dl.sorting.show-for-medium
      dt Show:
      dd
        select.sorting_select.select-num(
          v-model.number="selectVal"
          @change="setShowItem()"
          )
          option(value="6") 6
          option(value="12") 12
          option(value="24") 24

    .pager
      .pagination
        button.btn.btn--link.show-for-medium(type="button"
          @click="setCurrentPage(1)"
          :disabled="paginationData.currentPage === 1"
          :class="{'disable':paginationData.currentPage === 1}"
        ) First
        button.pagination_btn.pagination_btn--primary(type="button"
          @click="setCurrentPage(paginationData.currentPage - 1)"
          :class="{'invisible':paginationData.currentPage == 1}"
          )
          i(aria-hidden="true").fa.fa-angle-left
        ul.pagination_list
          li(v-for="page in rangeList",
          )
            button(type="button"
              @click="setCurrentPage(page)"
              :class="{'current': page == paginationData.currentPage}"
            ) {{ page }}

        button.pagination_btn.pagination_btn--primary(type="button"
          @click="setCurrentPage(paginationData.currentPage + 1)"
          :class="{'invisible':paginationData.currentPage == pagesLength}"
          )
          i(aria-hidden="true").fa.fa-angle-right
        button.btn.btn--link.show-for-medium(type="button"
          @click="setCurrentPage(pagesLength)"
          :disabled="paginationData.currentPage === pagesLength"
          :class="{'disable': paginationData.currentPage === pagesLength}"
          ) Last
</template>

<script src="./list-pagination.js" ></script>

<style lang="scss" scoped> @import './list-pagination'; </style>
