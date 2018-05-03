import { db } from '../../../core/dataBase';

export default {
  name: 'ArticlePage',
  data () {
    return {
      content: { },
      sidebarContent: []
    }
  },
  created: function () {
    this.readArticle();
  },
  methods: {
    readArticle() {
      let slug = this.$route.params.slug;
      //let self = this;
      db.ref('dataPages/media/listItems/' + slug).once('value')
        .then(
        (s)=> {
          this.content = s.val();
        },
        (error)=> {
          console.log(error);
        }
      );
    },
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
