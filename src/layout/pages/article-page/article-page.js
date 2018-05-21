import { db } from '../../../core/dataBase';
import loadContent from '../../../core/loadFromDB';

export default {
  name: 'ArticlePage',
  data () {
    return {
      content: { },
      sidebarContent: []
    }
  },
  created: function () {
    loadContent('dataPages/media/listItems/' + this.$route.params.slug, this);
  },
  methods: {

    readArticleList() {
      let self = this;
      db.ref('dataPages/media').limitToFirst(3).once('value').then(function(s){
        self.sidebarContent = s.val();
      });
    },
  },
  watch: {
    '$route' (to, from) {
      this.readArticle();
    }
  }
}
