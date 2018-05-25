import loadContent from '../../../core/loadFromDB';
import { SortService } from '../../../core/helpers';

export const ListPagination = () => import(/* webpackChunkName: 'ListPagination' */ '../../../components/list-pagination/list-pagination.vue');
export const ListSorting = () => import(/* webpackChunkName: 'ListSorting' */ '../../../components/list-sorting/list-sorting.vue');

export default {
  name: 'ArticleList',

  data () {
    return {
      showSidebar: false,
      content: {}
    }
  },

  created: function () {
    loadContent('dataPages/media', this);
  },

  computed: {
    listLength() {
      let qnt = Object.keys(this.content.listItems);
      return qnt.length
    }
  },

  methods: {

  },

  components: {
    ListPagination,
    ListSorting
  }
}
