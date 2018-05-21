import loadContent from '../../../core/loadFromDB';

export default {
  name: 'main-page',
  created: function () {
    loadContent('dataPages/mainPage', this);
  },
  data () {
    return {
      content: '',
    }
  },
}
