import { loginUser, logoutUser, checkLoginUser } from '../../core/loginUser';

export default {
  name: 'PageHeader',
  data () {
    return {
      openBurgerMenu: false,
      openSignIn: false,
      openProfile: false,
      sendForm: false,
      autocomplete: {
        isOpen: false,
        isShowInput: false,
        searchText: ''
      },
      userEmail: '',
      userPass: '',
    }
  },
  created () {
    this.checkLoginUser();
  },
  computed: {
    userIsLogin() {
      return this.$store.state.auth.isLogin;
    }
  },
  watch: {
    '$route' (to, from) {
      this.checkLoginUser();
      window.scrollTo(0,0);
      this.openBurgerMenu = false;
      this.openSignIn = false;
      this.openProfile = false;
      this.$store.commit('listPagination/setCurrentPage', 1);
    }
  },
  methods: {
    loginUser,
    logoutUser,
    checkLoginUser
  },
}
