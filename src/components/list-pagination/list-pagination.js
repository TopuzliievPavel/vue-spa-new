export default {
  name: "ListPagination",
  props: {
    listLength: {
      type: Number,
      default: 0
    },
    // setPage:  {
    //   type: Number,
    //   default: 1
    // }
  },
  data () {
    return {
      selectVal: 6,
    }
  },
  methods: {
    setShowItem() {
      this.$store.commit('listPagination/setShowItem', this.selectVal);
    },
    // setRangeArticleList() {
    //   if(this.currentPage > this.setPagesLength) {
    //     this.currentPage = this.setPagesLength;
    //   }
    //   let startArticle = (this.currentPage * this.selectVal) - this.selectVal;
    //   let stopArticle = this.currentPage * this.selectVal - 1;
    //   this.$emit('rangeArticleList', [startArticle, stopArticle, this.currentPage])
    // },
    setCurrentPage(page) {
      this.$store.commit('listPagination/setCurrentPage', page);
    },

  },
  computed: {
    paginData() {
      return this.$store.state.listPagination;
    },
    pagesLength() {
      return Math.ceil(this.listLength / this.selectVal);
    },
    // setCurrentPage() {
    //   return this.setPage
    // }
  },
  watch: {
    selectVal() {
      if(this.paginData.currentPage > this.pagesLength) {
        this.setCurrentPage(this.pagesLength)
      }
    }
  }
}
