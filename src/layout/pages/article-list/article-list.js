//import { db } from '../../../core/dataBase';
import loadContent from '../../../core/loadFromDB';
export const ListPagination = () => import(/* webpackChunkName: 'ListPagination' */ '../../../components/list-pagination/list-pagination.vue');
export const ListSorting = () => import(/* webpackChunkName: 'ListSorting' */ '../../../components/list-sorting/list-sorting.vue');

export default {
  name: 'ArticleList',
  data () {
    return {
      showSidebar: false,
      content: {}
    }
  },
  created: function () {
    loadContent('dataPages/media', this);
  },
  methods: {
    // filterArticle(filter) {
    //   console.log("+");
    //   //this.content.listItems =
    //   //db.ref().child('dataPages/media/listItems').orderByChild('articleId').equalTo(20).once('value') // выбрать все артиклы по значению 20
    //   db.ref().child('dataPages/media/listItems').orderByChild('articleId').equalTo(20).once('value')
    //   .then(snapshot => {
    //     const post = snapshot.val();
    //     //post.id = snapshot.key;
    //
    //     console.log(post)
    //   })
    // },
  },
  components: {
    ListPagination,
    ListSorting
  }
}
