import { db } from '../../../core/dataBase';
export const ListPagination = () => import(/* webpackChunkName: 'ListPagination' */ '../../../components/list-pagination.vue');
export const ListSorting = () => import(/* webpackChunkName: 'ListSorting' */ '../../../components/list-sorting.vue');

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
    filterArticle(filter) {
      console.log("+");
      //this.content.listItems =
      //db.ref().child('dataPages/media/listItems').orderByChild('articleId').equalTo(20).once('value') // выбрать все артиклы по значению 20
      db.ref().child('dataPages/media/listItems').orderByChild('articleId').equalTo(20).once('value')
      .then(snapshot => {
        const post = snapshot.val();
        //post.id = snapshot.key;

        console.log(post)
      })
    },
    readArticleList() {
      let self = this;
      db.ref('dataPages/media').limitToFirst(6).once('value').then(function(s){
        self.content = s.val();
      });
    },
  },
  components: {
    ListPagination,
    ListSorting
  }
}
