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

<script>
  export default {
    name: "ListPagination",
    props: {
      listLength: {
        type: Number,
        default: 6
      },
      setPage:  {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        selectVal: 6,
        currentPage: 1,
      }
    },
    methods: {
      setRangeArticleList() {
        if(this.currentPage > this.setPagesLength) {
          this.currentPage = this.setPagesLength;
        }
        let startArticle = (this.currentPage * this.selectVal) - this.selectVal;
        let stopArticle = this.currentPage * this.selectVal - 1;
        this.$emit('rangeArticleList', [startArticle, stopArticle, this.currentPage])
      },
      gotoFirstPage() {
        this.currentPage = 1;
        this.setRangeArticleList();
      },
      reducePage() {
        this.currentPage = this.currentPage - 1;
        this.setRangeArticleList();
      },
      thisPage(page) {
        this.currentPage = page;
        this.setRangeArticleList();
      },
      addPage() {
        this.currentPage = this.currentPage + 1;
        this.setRangeArticleList();
      },
      gotoLastPage() {
        this.currentPage = this.setPagesLength;
        this.setRangeArticleList();
      }
    },
    computed: {
      setPagesLength() {
        return Math.ceil(this.listLength / this.selectVal);
      },
      setCurrentPage() {
        return this.setPage
      }
    },
    watch: {
      setCurrentPage() {
        this.thisPage(this.setPage)
      }
    }
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
  .pager {
    display: block;
    margin: 0 auto;
    @include media('>=medium') {
      margin: 0;
    }
    .pagination_btn{
      margin: 0 0.625rem;
    }
  }

  .pagination {
    display: flex;
    align-items: center;
  }

  .pagination_list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 .125rem;
      vertical-align: top;
    }
    button {
      background: transparent;
      font-size: 0.875rem;
      padding: 0 0.4375rem;
      line-height: 27px;
      &:hover,
      &.current {
        background: #ccc;
        color: $white;
      }
    }
  }



  /*----- Pagination BTN -----*/
  .pagination_btn {
    width: 27px;
    height: 27px;
    background-color: transparent;
    text-align: center;
    padding: 0;
    border: $default-border;
    display: flex;
  &:hover {
     color: $white;
     background-color: $col-primary;
     border-color: $col-primary;
   }
  &--primary {
     color: $white;
     background-color: $col-primary;
     border-color: $col-primary;
  &:hover {
     background-color: $col-primary-hover;
     border-color: $col-primary-hover;
   }
  }
  .fa {
    margin: auto;
    line-height: 21px; //- hack for IE11
  }
  }
</style>
