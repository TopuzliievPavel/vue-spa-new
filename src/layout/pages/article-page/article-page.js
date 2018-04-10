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
      let self = this;
      db.ref('dataPages/media/listItems').limitToFirst(1).once('value').then(function(s){
        self.content = s.val();
      });
    },
  }
}
