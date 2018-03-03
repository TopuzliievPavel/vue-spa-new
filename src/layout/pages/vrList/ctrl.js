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
      setActiveTab: '',
      setActiveFilter: ''
    }
  },
  methods: {
    clearAllFilters: function () {
      console.log("clearAllFilters")
    }
  }
}
