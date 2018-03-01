import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC4S6IYq0I62vBFgUeUzFvdy35tpXL24Zg",
  authDomain: "ht-vue.firebaseapp.com",
  databaseURL: "https://ht-vue.firebaseio.com",
  projectId: "ht-vue",
  storageBucket: "ht-vue.appspot.com",
  messagingSenderId: "719971877293"
};

const app = Firebase.initializeApp(config);
const db = app.database();

export { db };
