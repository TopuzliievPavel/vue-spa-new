import loadContent from '../../../core/loadFromDB';

export const ListPagination = () => import(/* webpackChunkName: 'ListPagination' */ '../../../components/list-pagination/list-pagination.vue');
export const ListSorting = () => import(/* webpackChunkName: 'ListSorting' */ '../../../components/list-sorting/list-sorting.vue');
export const ListArticles = () => import(/* webpackChunkName: 'ListArticles' */ '../../../components/list-articles/list-articles.vue');

export default {
  name: 'ArticleList',

  data () {
    return {
      showSidebar: false,
      content: {},
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


  components: {
    ListPagination,
    ListSorting,
    ListArticles
  }
}
