import { db } from '../../../core/dataBase';
import ListPagination from '../../../components/list-pagination.vue'
import ListSorting from '../../../components/list-sorting.vue'

export default {
  name: 'VrList',
  created: function () {
    this.readPageInfo();
    this.readArticleList();
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
    readPageInfo: function () {
      let self = this;
      db.ref('dataPages/vrList').once('value').then(function(s){
        self.content = s.val();
      });

    },
    readArticleList: function () {
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
    }
  },
  components: {
    ListPagination,
    ListSorting
  }
}
