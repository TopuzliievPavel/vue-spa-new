import { loginUser } from '../../../core/loginUser';

export default {
  name: "SignIn",
  data () {
    return {
      userEmail: '',
      userPass: '',
      error: '',
      sendForm: false
    }
  },
  methods: {
    loginUser,
  }
}
