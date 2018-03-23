import AddArticle from '../../../components/add-article.vue'
import {db} from "../../../core/dataBase";

export default {
  name: 'UserProfile',
  created: function () {
    this.loadUser();
  },
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        pass: '',
        repass: '',
        recaptcha: null,
        subscription: true,
        social: {
          facebook: '',
          'google-plus': '',
          instagram: '',
          linkedin: '',
          twitter: '',
          youtube: '',
          pinterest: '',
          rss: '',
        },
      },
      sendForm: false,
      tabs: '',
    }
  },
  methods: {
    loadUser (){
      let userID = localStorage.getItem('userId');
      if (userID) {
        db.ref('users/' + userID)
          .once('value')
          .then(
            (s)=>{
              this.user = s.val();
        });
      }
      else {
        this.$router.replace('/');
      }
    }
  },
  computed: {
    isSocial() {
      for (let item in this.user.social) {
        if(this.user.social[item]) {
          return true
        }
      }
      return false
    }
  },
  components: {
    AddArticle
  }
}
