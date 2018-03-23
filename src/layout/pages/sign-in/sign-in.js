//import Firebase from 'firebase'
import { db, Firebase } from '../../../core/dataBase';

export default {
  name: "SignIn",
  data () {
    return {
      email: '',
      pass: '',
      error: ''
    }
  },
  methods: {
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
      this.checkUser();
    },
    checkUser() {
      Firebase.auth().onAuthStateChanged(
        (user)=> {
        if (user) {
          localStorage.setItem('userId', user.uid);
          this.$router.replace('/user-profile');
        }
      });
    }
  },
  computed: {

  }
}
