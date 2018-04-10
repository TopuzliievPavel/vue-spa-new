import { db } from '../../../core/dataBase';

export default {
  name: 'ArticleList',
  data () {
    return {
      showSidebar: false,
      content: {}
    }
  },
  created: function () {
    this.readArticleList();
  },
  methods: {
    readArticleList() {
      let self = this;
      db.ref('dataPages/media').limitToFirst(6).once('value').then(function(s){
        self.content = s.val();
      });
    },
  }
}
