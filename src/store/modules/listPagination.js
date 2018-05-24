const listPagination = {
  namespaced: true,
  state: {
    currentPage: 1,
    allItems: 150,
    showItem: 6,
    sort: 'Newest',
    listLayoutRow: false
  },
  actions: {

  },
  mutations: {
    setValue(state, param) {
      state.param.key = param.value;
    },
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
