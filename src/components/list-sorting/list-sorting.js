export default {
  name: "ListSorting",
  props: {
    pageName: {
      type: String
    },
    listLength: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      sort: 'newest',
      namePage: ''
    }
  },

  // Hooks
  created() {
    //this.init();
  },

  // Functions
  computed: {
    paginData() {
      return this.$store.state.listPagination;
    },
    startNumberItem() {
      return (this.paginData.currentPage * this.paginData.showItem) - (this.paginData.showItem - 1)
    },
    stopNumberItem() {
      let stop = this.paginData.currentPage * this.paginData.showItem;
      return stop > this.listLength ? this.listLength : stop
    },
    pagesLength() {
      return Math.ceil(this.listLength / this.paginData.showItem);
    },
  },
  methods: {
    // init() {
    //   this.$store.commit('listPagination/setListLayoutRow', action)
    // },
    setListLayoutRow(action) {
      this.$store.commit('listPagination/setListLayoutRow', action)
    },
    setListSort() {
      this.$store.commit('listPagination/setListSort', this.sort);
    },
    setCurrentPage(state, value) {
      state.currentPage = value;
    },
  }
}
