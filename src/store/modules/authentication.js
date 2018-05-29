const auth = {
  namespaced: true,

  state: {
    userId: '',
    isLogin: false,
  },

  mutations: {
    setIsLogin(state, value) {
      state.isLogin = value.isLogin;
      state.userId = value.userId;
    }
  }
};

export default auth;
