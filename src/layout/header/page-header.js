export default {
  name: 'page-header',
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
  methods: {
    routing: function (index) {
      this.$router.push(index);
      this.openBurgerMenu = false;
    }
  }
}
