import { db } from '../../../core/dataBase';

export default {
  name: 'vrList',
  beforeCreate: function () {
    let self = this;
    db.ref('dataPages/vrList').once('value').then(function(s){
      self.content = s.val();
    });
    db.ref('dataPages/vrList/items').limitToFirst(12).once('value').then(function(s){
      self.list = s.val();
    });
  },
  data () {
    return {
      content: '',
      list: '',
      showSidebar: false,
      activeCategory: '',
      listLayoutRow: false,
      activeTab: undefined,
      activeFilter: undefined
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
    }
  }
}
