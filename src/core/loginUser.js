import { Auth } from '../core/dataBase';

const setUserLogin = function(value, id, ctx) {
  ctx.$store.commit('auth/setIsLogin', {
    userId: id,
    isLogin: value,
  });
};


const loginUser = function() {
  Auth.signInWithEmailAndPassword(this.userEmail, this.userPass)
    .then((user)=> {
        setUserLogin(true, user.uid, this);
        this.$router.replace('/user-profile');
      })
    .catch((error)=> {
        if (error.code) {
          this.error = error.message;
          this.$router.replace('/sign-in');
        }
      }
    );
};

const logoutUser = function () {
  Auth.signOut()
    .then(() => {
      setUserLogin(false, '', this);
      this.$router.replace('/');
    })
    .catch((error) => {
      console.log(error);
    });
  };



const checkLoginUser = function() {
  Auth.onAuthStateChanged(
    (user) => {
      if (user && user !== null) {
        setUserLogin(true, user.uid, this);
      } else {
        setUserLogin(false, '', this);
      }
    });
  };

export { loginUser, logoutUser, checkLoginUser, setUserLogin };
