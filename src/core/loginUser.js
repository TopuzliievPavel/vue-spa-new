import { Firebase } from 'dataBase';

const loginMethods = {
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
  },
  loginUser() {
    Firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
      .catch(
        (error)=> {
          console.log(error);
          if (error.code) {
            this.error = error.message;
          }
        }
      );
  },
};

export { loginMethods };
