import { db, Auth } from '../../../core/dataBase';

export default {
  name: 'RegUser',
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        pass: '',
        repass: '',
        recaptcha: null,
        subscription: true,
      },
      error: '',
      sendForm: false,
      validName: false,
      validEmail: false,
      validPass: false
    }
  },
  methods: {
    sendVerifire () {
      let user = Auth.currentUser;

      user.sendEmailVerification().then(function() {
        console.log('Email sent');
      }).catch(function(error) {
        console.log(error);
      });

    },
    createUser(uid) {
      console.log("create new user");
      db.ref('users/' + uid).set(
        {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          confirm: false,
          avatar: '',
          bg: '',
          social: {
            facebook: '',
            'google-plus': '',
            instagram: '',
            linkedin: '',
            twitter: '',
            youtube: '',
            pinterest: '',
            rss: '',
          },
          articleList: [],
        }
      );
    },
    regUser() {
      if (!this.validName && !this.validEmail && !this.validPass && !this.recaptcha) {
        this.sendForm = true;
        Auth
          .createUserWithEmailAndPassword(this.user.email, this.user.pass)
          .then(
            (user) => {
              this.createUser(user.user.uid);
              this.sendVerifire();
              this.$router.replace('/user-profile');
              this.sendForm = false;
            },
            (error) => {
              this.sendForm = false;
              this.error = error.message;
          });
      }
    },
    isValidName() {
      this.validName = (this.user.firstName.length > 1 && this.user.lastName.length > 1) ? false : true;
    },
    isValidEmail() {
      let emailRegular = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      this.validEmail = !emailRegular.test(this.user.email);
    },
    isValidPass() {
      this.validPass = (this.user.pass.length >= 6 && (this.user.pass === this.user.repass)) ? false : true;
    },
  },
  computed: {

  }
}
