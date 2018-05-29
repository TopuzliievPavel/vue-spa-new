import {SortService} from "../core/helpers";

const mixinPaginationList = {
  data () {
    return {
      sortingList: [],
      showList: [],
    }
  },
  computed: {
    paginationData() {
      return this.$store.state.listPagination;
    }
  },
  watch: {
    'content.items'() {
      this.sortingList = this.content.items;
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

    'sortingList'() {
      this.displayList();
    }
  },
  methods: {
    sortList(value) {
      let sortArr = this.sortingList;
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
      let itemList = this.sortingList;

      let start = currPage * qty - qty;
      let end = currPage * qty;

      this.showList = itemList.slice(start, end);
    }
  }
};

export default mixinPaginationList
