import {SortService} from "./helpers";

const listData = {
  sortingList: [],
  showList: [],
};

const listWatch = {
  'content.items'() {
    this.sortingList = this.content.items;
  },
  'paginationData.currentPage'() {
    this.displayList();
  },
  'paginationData.showItem'() {
    this.displayList();
  },
  sortingList() {
    this.displayList();
  },
  'paginationData.sort'() {
    this.sortList(this.paginationData.sort);
  }
};

const listComputed = {
  paginationData() {
    return this.$store.state.listPagination;
  }
};

const listMethods = {
  sortList(value) {
    let sortArr = this.sortingList;
    let originArr = this.content.items;
    console.log(value);
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
    let itemList = this.sortingList;

    let start = currPage * qty - qty;
    let end = currPage * qty;

    this.showList = itemList.slice(start, end);
  }
};

export {listData, listWatch, listComputed, listMethods}
