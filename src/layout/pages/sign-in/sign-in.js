import { loginUser } from '../../../core/loginUser';

export default {
  name: "SignIn",
  data () {
    return {
      userEmail: '',
      userPass: '',
      error: ''
    }
  },
  methods: {
    loginUser,
  }
}
