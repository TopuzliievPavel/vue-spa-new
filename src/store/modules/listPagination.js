const listPagination = {
  namespaced: true,
  state: {
    currentPage: '1',
    allItems: '',
    showItem: '6',
    sort: 'Newest',
    listLayoutRow: false
  },
  actions: {

  },
  mutations: {
    listLayoutRow(state, action) {
      state.listLayoutRow = action;
    },
  }
};

export default listPagination;
