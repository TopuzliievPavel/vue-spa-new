import { db } from '../../../core/dataBase';
import { unsplashID, unsplashKey } from '../../../core/unsplash';
import loadContent from '../../../core/loadFromDB';
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

    readArticleList () {
      let self = this;
      db.ref('dataPages/vrList/items').limitToFirst(6).once('value').then(function(s){
        self.list = s.val();
      });
    },
    updateArticleList(e) {
      let self = this;
      let start = String(e[0]);
      let stop = String(e[1]);
      this.startArticle = e[0];
      this.stopArticle = e[1];
      this.currentPage = e[2];
      db.ref('dataPages/vrList/items').orderByKey().startAt(start).endAt(stop).once('value').then(function (s) {
        const val = s.val();
        self.list = Array.isArray(val) ? val.filter(val => val !== undefined) : val;
      });
    },
    sortArticleList(value) {
      switch(value) {
        case 'default':
          this.updateArticleList([this.startArticle, this.stopArticle, this.currentPage]);
          break;
        case 'popular':
          // this.list.sort((a, b) => {
          //   return SortService.sort(a.rating, b.rating)
          // });
          break;
        case 'view':
          this.list.sort((a, b) => {
            return SortService.sort(a.viewsCount, b.viewsCount)
          });
          break;
        case 'title':
          this.list.sort((a, b) => {
            return SortService.sort(a.title, b.title)
          });
          break;
      }
    }
  },
  components: {
    ListPagination,
    ListSorting
  }
}
