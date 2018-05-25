import loadContent from '../../../core/loadFromDB';
import {  paginListData,
          paginListWatch,
          paginListComputed,
          paginListMethods } from '../../../core/paginationForListPage';

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
      showSidebar: false,
      activeCategory: '',
      activeTab: undefined,
      activeFilter: undefined,
      paginListData
    }
  },

  computed: {
    ...paginListComputed
  },

  watch: {
    ...paginListWatch
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
    /*pagination*/
    ...paginListMethods

  },

  components: {
    ListPagination,
    ListSorting
  }
}

