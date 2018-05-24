export default {
  name: "ListSorting",
  data() {
    return {
      sd: 'asd'
    }
  },
  created() {

  },
  computed: {
    paginData: function() {
      return this.$store.state.listPagination;
    }
  },
  methods: {
    init() {
      console.log('init');
    },
    setListLayoutRow(action) {
      this.$store.commit('listPagination/listLayoutRow', action)
    }
  }
}
