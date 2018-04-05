import { Firebase } from '../../core/dataBase';
import UserLogin from '../../components/user-login.vue'


export default {
  name: 'PageHeader',
  data () {
    return {
      openBurgerMenu: false,
      openSignIn: false,
      openProfile: false,
      userIsLogin: false,
      autocomplete: {
        isOpen: false,
        isShowInput: false,
        searchText: ''
      },
    }
  },
  methods: {
    logoutUser () {
      Firebase.auth().signOut()
        .then(() => {
          localStorage.setItem('userId', false);
        }).catch(
        (error) => {
          console.log('error logout');
        });
    },
    checkLoginUser () {
      Firebase.auth().onAuthStateChanged(
        (user) => {
          if (user && user !== null) {
            this.userIsLogin = true;
          } else {
            this.userIsLogin = false;
          }
        });
    }
  },
  watch: {
    '$route' (to, from) {
      this.checkLoginUser();
      window.scrollTo(0,0);
      this.openBurgerMenu = false;
      this.openSignIn = false;
      this.openProfile = false;
    }
  },
  components: {
    UserLogin
  }
}
