import Firebase from 'firebase'

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
      sendForm: false
    }
  },
  methods: {
    regUser() {
      if (!this.validName && !this.validEmail && !this.validPass && !this.recaptcha) {
        this.sendForm = true;
        Firebase.auth()
          .createUserWithEmailAndPassword(this.user.email, this.user.pass)
          .then(
            (user) => {
              this.$router.replace('/user-profile');
            },
            (error) => {
              console.log(error.message);
              this.sendForm = false;
              this.error = error.message;
          });
      }
    }
  },
  computed: {
    validName() {
      return (this.user.firstName.length > 1 && this.user.lastName.length > 1) ? false : true;
    },
    validEmail() {
      let emailRegular = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return !emailRegular.test(this.user.email);
    },
    validPass() {
      return (this.user.pass.length >= 6 && (this.user.pass === this.user.repass)) ? false : true;
    },
  }
}
