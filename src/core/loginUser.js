import { Auth } from '../core/dataBase';

const loginUser = function() {
  Auth.signInWithEmailAndPassword(this.userEmail, this.userPass)
    .then((user)=> {
        this.userIsLogin = true;
        localStorage.setItem('userId', user.uid);
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
      localStorage.setItem('userId', false);
      this.userIsLogin = false;
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
        this.userIsLogin = true;
      } else {
        this.userIsLogin = false;
      }
    });
  };

export { loginUser, logoutUser, checkLoginUser };
