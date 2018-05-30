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
  },
  components: {
    GoogleRecapcha
  }
}
