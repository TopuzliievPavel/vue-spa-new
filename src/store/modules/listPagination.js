const listPagination = {
  namespaced: true,

  state: {
    currentPage: 1,
    showItem: 6,
    sort: 'newest',
    listLayoutRow: false
  },

  mutations: {
    setListLayoutRow(state, value) {
      state.listLayoutRow = value;
    },
    setListSort(state, value) {
      state.sort = value;
    },
    setShowItem(state, value) {
      state.showItem = value;
    },
    setCurrentPage(state, value) {
      state.currentPage = value;
    },
  }
};

export default listPagination;
