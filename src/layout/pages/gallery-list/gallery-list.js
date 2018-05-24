import { unsplashKey } from '../../../core/unsplash';

export default {
  name: 'GalleryList',
  created: function () {
    this.loadPhoto();
  },
  data () {
    return {
      list: '',
    }
  },

  methods: {
    loadPhoto() {
      let options = {
        params: {
          client_id: unsplashKey,
          page: 1,
          per_page: 20
        }
      };
      this.$http.get('https://api.unsplash.com/photos', options)
        .then((response)=>{
          this.list = response.data;
        })
        .catch((error)=>{
          console.log(error);
        })
    },
  },
}
