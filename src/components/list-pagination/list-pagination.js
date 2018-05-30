export default {
  name: "ListPagination",

  props: {
    listLength: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      selectVal: 6,
      pageRange: 1,
    }
  },

  computed: {
    rangeStart(){
      let start = this.paginationData.currentPage - this.pageRange;
      return (start > 0) ? start : 1
    },
    rangeList(){
      let arr = [];
      let width = this.pageRange * 2;
      let all = this.pagesLength;
      let start = this.rangeStart;
      let end = this.rangeStart + width;

      if (end > all) {
        end = all;
        start = all - width;
      }
      if (start < 1) {
        start = 1;
      }

      for(var i = start; i <= end; i++) {
        arr.push(i);
      }

      return arr
    },

    paginationData() {
      return this.$store.state.listPagination;
    },
    pagesLength() {
      return Math.ceil(this.listLength / this.selectVal);
    }
  },

  watch: {
    selectVal() {
      if(this.paginationData.currentPage > this.pagesLength) {
        this.setCurrentPage(this.pagesLength)
      }
    }
  },

  methods: {
    setShowItem() {
      this.$store.commit('listPagination/setShowItem', this.selectVal);
    },
    setCurrentPage(page) {
      this.$store.commit('listPagination/setCurrentPage', page);
    }
  },
}
