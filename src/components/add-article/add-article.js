import {db, Storage} from "../../core/dataBase";
import SpinnerBtn from '../../components/spinner-btn'

export default {
  name: "AddArticle",
  created: function () {
    this.loadArticleId();
    this.loadTags ();
    this.article.authorID = localStorage.getItem('userId');

    const date = new Date();
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    this.article.date = date.toLocaleString("en-US", options);
  },
  data () {
    return {
      article: {
        title: '',
        leadPar: '',
        image: '',
        date: '',
        tags: [],
        authorID: '',
        slug: '',
        articleId: '',
        content: '',
      },
      allTags: [],
      newTags: [],
      newTag: '',
      sendForm: false,
    }
  },
  methods: {
    cancelArticle () {
      this.article.title = '';
      this.article.leadPar = '';
      this.article.image = '';
      this.article.tags = [];
      this.article.slug = '';
      this.article.content = '';
    },

    loadArticleId () {
      db.ref('dataPages/media/currentId').once('value')
        .then((s) => {
          this.article.articleId = s.val();
        });
    },
    loadTags () {
      db.ref('dataPages/media/listPage/tags').once('value')
        .then((s) => {
          this.allTags = s.val();
        });
    },
    addArticleImg (e) {
      const metadata = {
        contentType: 'image/jpeg',
      };

      e.preventDefault();
      let img = e.target.files[0];
      let uploadTask = Storage.ref('articles/' + this.article.articleId + '.jpg').put(img, metadata);

      uploadTask.on('state_changed', function(snapshot){
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');

        }, function(error) {
          console.log(error);
        },
        () => {
          this.article.image = uploadTask.snapshot.downloadURL;
        });
    },
    saveArticle() {
      this.sendForm = true;
      this.article.articleId = this.article.articleId + 1;
      this.article.slug = this.article.slug + '-' + this.article.articleId;
      let saveTag = this.allTags.concat(this.newTags);

      db.ref('dataPages/media/listItems/' + this.article.slug).set(this.article);
      db.ref('dataPages/media/listPage/tags').set(saveTag);
      db.ref('dataPages/media/currentId').set(this.article.articleId);
    },

    addNewTag() {
      this.article.tags.push(this.newTag);
      this.newTags.push(this.newTag);
      this.newTag = '';
    }
  },
  computed: {
    createSlug() {
      let slug = this.article.title.replace(/ /g, "-");
      this.article.slug = slug;
      return slug
    }
  },
  components: {
    SpinnerBtn
  }
}
