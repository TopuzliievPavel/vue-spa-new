export default {
  name: "ListSorting",
  props: {
    pageName: {
      type: String
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
    }
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
    }
  }
}
