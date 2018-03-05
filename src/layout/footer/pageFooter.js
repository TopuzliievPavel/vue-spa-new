import { db } from '../../core/dataBase';

export default {
  name: 'page-footer',
  firebase: {
    content: {
      source: db.ref('dataComponent/footer'),
      asObject: true,

    }
  },
  // beforeCreate: function () {
  //   let self = this;
  //   db.ref('dataComponent/footer').once('value').then(function(s){
  //     self.content = s.val();
  //   });
  // },
  data () {
    return {
      content: ""
    }
  }
}

