import {SortService} from "./helpers";

const paginListData = {
  sortingList: [],
  showList: [],
};

const paginListWatch = {
  'content.items'() {
    this.paginListData.sortingList = this.content.items;
  },

  'paginationData.currentPage'() {
    this.displayList();
  },
  'paginationData.showItem'() {
    this.displayList();
  },
  'paginationData.sort'() {
    this.sortList(this.paginationData.sort);
  },

  'paginListData.sortingList'() {
    this.displayList();
  }
};

const paginListComputed = {
  paginationData() {
    return this.$store.state.listPagination;
  }
};

const paginListMethods = {
  sortList(value) {
    let sortArr = this.paginListData.sortingList;
    let originArr = this.content.items;
    switch(value) {
      case 'newest':
        sortArr = originArr;
        break;
      case 'popular':
        sortArr = originArr.sort((a, b) => {
          return SortService.sort(a.rating, b.rating)
        });
        break;
      case 'viewed':
        sortArr = originArr.sort((a, b) => {
          return SortService.sort(a.viewsCount, b.viewsCount)
        });
        break;
      case 'title':
        sortArr = originArr.sort((a, b) => {
          return SortService.sort(a.title, b.title, 'reverse')
        });
      break;
    }
  },

  displayList() {
    let qty = this.paginationData.showItem;
    let currPage = this.paginationData.currentPage;
    let itemList = this.paginListData.sortingList;

    let start = currPage * qty - qty;
    let end = currPage * qty;

    this.paginListData.showList = itemList.slice(start, end);
  }
};

export {paginListData, paginListWatch, paginListComputed, paginListMethods}
