import loadContent from '../../../core/loadFromDB';
import { SortService } from '../../../core/helpers';
//import { listData, listWatch, listComputed, listMethods} from '../../../core/paginationForListPage';
//-import ListPagination from '../../../components/list-pagination.vue'
//-import ListSorting from '../../../components/list-sorting.vue'
export const ListPagination = () => import(/* webpackChunkName: 'ListPagination' */ '../../../components/list-pagination/list-pagination.vue');
export const ListSorting = () => import(/* webpackChunkName: 'ListSorting' */ '../../../components/list-sorting/list-sorting.vue');



export default {
  name: 'VrList',
  created() {
    loadContent('dataPages/vrList', this);
  },
  data() {
    return {
      content: '',
      sortingList: [],
      showList: [],
      showSidebar: false,
      activeCategory: '',
      activeTab: undefined,
      activeFilter: undefined,
      //listData
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
    sortingList() {
      this.displayList();
    },
    'paginationData.sort'() {
      this.sortList(this.paginationData.sort);
    }
  },
  methods: {
    /*sidebar*/
    setActiveTab: function (index) {
      if(this.activeTab == index) {
        this.activeTab = undefined;
      }
      else {
        this.activeTab = index;
        this.activeFilter = undefined;
      }
    },
    setActiveFilter: function (index) {
      if(this.activeFilter == index) {
        this.activeFilter = undefined;
      }
      else {
        this.activeFilter = index;
      }
    },
    /*list*/
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

  },
  components: {
    ListPagination,
    ListSorting
  }
}
