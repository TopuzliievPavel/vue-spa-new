import { loginUser } from '../../../core/loginUser';

export const GoogleRecapcha = () => import(/* webpackChunkName: 'recaptcha' */ '../../../components/recapcha.vue');



export default {
  name: "SignIn",
  data() {
    return {
      userEmail: '',
      userPass: '',
      error: '',
      sendForm: false
    }
  },
  methods: {
    loginUser,
    initReCaptcha() {
      setTimeout(()=> {
        if(typeof grecaptcha === 'undefined') {
          this.initReCaptcha();
        }
        else {
          grecaptcha.render('recaptcha', {
            sitekey: '6LdnUlwUAAAAAE4ugZE0dgu7XRHaKN-GmnzCQ-Nu',
            size: 'invisible',
            callback: this.submit,
            'error-callback': this.err
          });
        }
      }, 100);
    },
    validate: function() {
      console.log("validate");
      grecaptcha.execute();
    },
    submit: function(token) {
      console.log(token);
    },
    err: function(err) {
      console.log(err);
    }
  },
  components: {
    GoogleRecapcha
  },
  mounted: function() {
    this.initReCaptcha();
  },
}
