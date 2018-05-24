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
