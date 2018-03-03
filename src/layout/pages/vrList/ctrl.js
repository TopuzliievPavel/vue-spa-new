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
      showSidebar: false,
      activeCategory: '',
      listLayoutRow: false,
    }
  },
  methods: {
    clearAllFilters: function () {
      console.log("clearAllFilters")
    },
    setActiveTab: function (category) {
      console.log("setActiveTab: " + category)
    }
  }
}
