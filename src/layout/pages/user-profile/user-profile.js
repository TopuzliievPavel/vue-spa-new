import AddArticle from '../../../components/add-article.vue'
import {db, Firebase} from "../../../core/dataBase";

export default {
  name: 'UserProfile',
  created: function () {
    this.loadUser();
  },
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        avatar: '',
        bg: '',
        social: {
          facebook: '',
          //'google-plus': '',
          instagram: '',
          linkedin: '',
          twitter: '',
          youtube: '',
          pinterest: '',
          rss: '',
        },
      },
      sendForm: false,
      tabs: '',
      ID: '',
    }
  },
  methods: {
    returnToLogin () {
      this.$router.replace('/sign-in');
    },
    loadUser (){
      let userID = localStorage.getItem('userId');
      if (userID) {
        this.ID = userID;
        db.ref('users/' + userID)
          .once('value')
          .then(
            (s)=>{
              if (s.val()) {
                console.log('s=' + s);
                this.user = s.val();
              }
              else {
                console.log('null');
                localStorage.setItem('userId', false);
                this.returnToLogin();
              }
        });
      }
      else {
        console.log('return');
        this.returnToLogin();
      }
    },
    saveUser () {
      console.log('save');
      this.sendForm = true;
      db.ref('users/' + this.ID).set({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        avatar: this.user.avatar,
        bg: this.user.bg,
        social: {
          facebook: this.user.social.facebook,
          //'google-plus': this.user.google-plus,
          instagram: this.user.social.instagram,
          linkedin: this.user.social.linkedin,
          twitter: this.user.social.twitter,
          youtube: this.user.social.youtube,
          pinterest: this.user.social.pinterest,
          rss: this.user.social.rss,
        },
      });
    },
    pushUserAvatar (e) {
      const prefix = 'avatar';
      this.pushImg(e, prefix);
    },
    pushUserBg (e) {
      const prefix = 'bg';
      this.pushImg(e, prefix);
    },
    pushImg (e, prefix) {
      const metadata = {
        contentType: 'image/jpeg',
      };

      e.preventDefault();
      let img = e.target.files[0];
      let uploadTask = Firebase.storage().ref('users/' + this.ID + '-' + prefix + '.jpg').put(img, metadata);

      uploadTask.on('state_changed', function(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case Firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case Firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function(error) {
        // Handle unsuccessful uploads
      },
        () => {
        if (prefix === 'avatar') {
          this.user.avatar = uploadTask.snapshot.downloadURL;
        }
        else {
          this.user.bg = uploadTask.snapshot.downloadURL;
        }
          this.saveUser();
      });
    },
    logoutUser () {
      Firebase.auth().signOut()
        .then(() => {
          localStorage.setItem('userId', false);
          this.$router.replace('/');

      }).catch(
        (error) => {
          console.log('error logout');
      });
    }
  },
  computed: {
    isSocial() {
      for (let item in this.user.social) {
        if(this.user.social[item]) {
          return true
        }
      }
      return false
    }
  },
  components: {
    AddArticle
  }
}
