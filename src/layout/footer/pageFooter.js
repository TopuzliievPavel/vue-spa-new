import { db } from '../../core/dataBase';

export default {
  name: 'page-footer',
  firebase: {
    content: {
      source: db.ref('dataComponent/footer'),
      asObject: true,
    }
  }
}

