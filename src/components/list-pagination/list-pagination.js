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
    }
  },

  computed: {
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
