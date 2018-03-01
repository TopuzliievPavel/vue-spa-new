import { db } from '../../../core/dataBase';


export default {
  name: 'MainPage',
  firebase: {
    content: {
      source: db.ref('dataPages/mainPage'),
      asObject: true,
    }
  },
  data () {
    return {

    }
  }
}
