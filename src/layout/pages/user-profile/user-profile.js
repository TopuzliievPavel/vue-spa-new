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
        pass: '',
        repass: '',
        recaptcha: null,
        subscription: true,
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
    loadUser (){
      let userID = localStorage.getItem('userId');
      if (userID) {
        this.ID = userID;
        db.ref('users/' + userID)
          .once('value')
          .then(
            (s)=>{
              this.user = s.val();
        });
      }
      else {
        this.$router.replace('/');
      }
    },
    pushAvatar (e) {
      const metadata = {
        contentType: 'image/jpeg',
      };

      e.preventDefault();
      let img = e.target.files[0];
      let uploadTask = Firebase.storage().ref('users/'+ this.ID + '-ava.jpg').put(img, metadata);

      uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        this.user.avatar = uploadTask.snapshot.downloadURL;
      });

      db.ref('users/' + this.ID).set({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        pass: this.user.pass,
        repass: this.user.repass,
        recaptcha: null,
        subscription: true,
        avatar: this.user.avatar,
        bg: this.user.bg,
        social: {
          facebook: this.user.facebook,
          //'google-plus': this.user.google-plus,
          instagram: this.user.instagram,
          linkedin: this.user.linkedin,
          twitter: this.user.twitter,
          youtube: this.user.youtube,
          pinterest: this.user.pinterest,
          rss: this.user.rss,
        },
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
