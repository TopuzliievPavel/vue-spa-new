import { unsplashKey } from '../../../core/unsplash';

//-import ListPagination from '../../../components/list-pagination.vue'
//-import ListSorting from '../../../components/list-sorting.vue'
export const ListPagination = () => import(/* webpackChunkName: 'ListPagination' */ '../../../components/list-pagination.vue');
export const ListSorting = () => import(/* webpackChunkName: 'ListSorting' */ '../../../components/list-sorting.vue');

const SortService = {
  sort: (a, b, direction) => {
    switch (direction) {
      case "asc":
        return a > b ? 1 : -1;
      default:
        return a < b ? 1 : -1;
    }
  }
};

export default {
  name: 'GalleryList',
  created: function () {
    this.loadPhoto();
  },
  data () {
    return {
      content: '',
      list: '',
      showSidebar: false,
      activeCategory: '',
      listLayoutRow: false,
      activeTab: undefined,
      activeFilter: undefined,
      sortParam: 'default',
      startArticle: 0,
      stopArticle: 5,
      currentPage: 1,
    }
  },

  methods: {
    loadPhoto() {
      let options = {
        params: {
          client_id: unsplashKey,
          page: 1,
          per_page: 20
        }
      };
      this.$http.get('https://api.unsplash.com/photos', options)
        .then((response)=>{
          console.log(response.data);
          this.list = response.data;
        })
        .catch((error)=>{
          console.log(error);
        })
    },
  },
  // components: {
  //   ListPagination,
  //   ListSorting
  // }
}
