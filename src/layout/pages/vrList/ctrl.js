import { db } from '../../../core/dataBase';

export default {
  name: 'vrList',
  firebase: {
    content: {
      source: db.ref('dataPages/vrList'),
      asObject: true
    }
  },
  data () {
    return {
      content: false,
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
