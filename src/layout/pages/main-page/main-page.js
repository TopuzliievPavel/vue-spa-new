import { db } from '../../../core/dataBase';


export default {
  name: 'MainPage',
  beforeCreate: function () {
    let self = this;
    db.ref('dataPages/mainPage').once('value').then(function(s){
      self.content = s.val();
    });
  },
  data () {
    return {
      content: ""
    }
  }
}
