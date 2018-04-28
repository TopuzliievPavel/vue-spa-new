import { loginUser, logoutUser, checkLoginUser } from '../../core/loginUser';

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
      userEmail: '',
      userPass: '',
    }
  },
  created: function () {
    this.checkLoginUser();
  },
  methods: {
    loginUser,
    logoutUser,
    checkLoginUser
  },
  watch: {
    '$route' (to, from) {
      this.checkLoginUser();
      window.scrollTo(0,0);
      this.openBurgerMenu = false;
      this.openSignIn = false;
      this.openProfile = false;
    }
  }
}
