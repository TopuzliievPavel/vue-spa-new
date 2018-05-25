export default {
  name: "ListSorting",

  props: {
    pageName: {
      type: String,
      default: 'items'
    },
    listLength: {
      type: Number,
      default: 0
    },
    listViews: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      sort: 'newest',
      namePage: ''
    }
  },

  computed: {
    paginationData() {
      return this.$store.state.listPagination;
    },
    startNumberItem() {
      return (this.paginationData.currentPage * this.paginationData.showItem) - (this.paginationData.showItem - 1)
    },
    stopNumberItem() {
      let stop = this.paginationData.currentPage * this.paginationData.showItem;
      return stop > this.listLength ? this.listLength : stop
    },
    pagesLength() {
      return Math.ceil(this.listLength / this.paginationData.showItem);
    },
  },

  methods: {
    setListLayoutRow(action) {
      this.$store.commit('listPagination/setListLayoutRow', action)
    },
    setListSort() {
      this.$store.commit('listPagination/setListSort', this.sort);
    },
    setCurrentPage(page) {
      this.$store.commit('listPagination/setCurrentPage', page);
    }
  }
}
