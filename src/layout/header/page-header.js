import UserLogin from '../../components/user-login.vue'

export default {
  name: 'PageHeader',
  data () {
    return {
      openBurgerMenu: false,
      openSignIn: false,
      autocomplete: {
        isOpen: false,
        isShowInput: false,
        searchText: ''
      }
    }
  },
  // methods: {
  //   routing: function (index) {
  //     this.$router.push(index);
  //     this.openBurgerMenu = false;
  //   }
  // },
  watch: {
    '$route' (to, from) {
      this.openBurgerMenu = false;
      this.openSignIn = false;
    }
  },
  components: {
    UserLogin
  }
}
