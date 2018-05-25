import loadContent from '../../../core/loadFromDB';

import {  paginListData,
          paginListWatch,
          paginListComputed,
          paginListMethods } from '../../../core/paginationForListPage';

export const ListPagination = () => import(/* webpackChunkName: 'ListPagination' */ '../../../components/list-pagination/list-pagination.vue');
export const ListSorting = () => import(/* webpackChunkName: 'ListSorting' */ '../../../components/list-sorting/list-sorting.vue');

export default {
  name: 'ArticleList',

  data () {
    return {
      showSidebar: false,
      content: {},
      paginListData
    }
  },

  created: function () {
    loadContent('dataPages/media', this);
  },

  computed: {
    listLength() {
      let qnt = Object.keys(this.content.listItems);
      return qnt.length
    },
    ...paginListComputed
  },
  watch: {
    ...paginListWatch
  },
  methods: {
    ...paginListMethods
  },

  components: {
    ListPagination,
    ListSorting
  }
}
