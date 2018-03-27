import { db, Firebase } from '../../../core/dataBase';


export default {
  name: 'main-page',
  beforeCreate: function () {
    let self = this;
    db.ref('dataPages/mainPage').once('value').then(function(s){
      self.content = s.val();
    });
  },
  data () {
    return {
      content: '',
    }
  }
}
