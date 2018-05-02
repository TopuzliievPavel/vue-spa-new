import { db } from '../../../core/dataBase';

export default {
  name: 'ArticlePage',
  data () {
    return {
      content: {

      },
    }
  },
  created: function () {
    this.readArticle();
  },
  methods: {
    readArticle() {
      let slug = this.$route.params.slug;
      console.log(slug);
      let self = this;
      db.ref('dataPages/media/listItems').limitToFirst(1).once('value').then(function(s){
        self.content = s.val();
      });
    },
  },
  watch: {
    '$route' (to, from) {
      this.readArticle();
    }
  }
}
