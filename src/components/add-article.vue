<template lang="pug">
  div
    h2 Add new Article
    time Created date: {{ article.date }}
    .form-row
      label.input-holder
        input(type="text" placeholder="Title" v-model="article.title"
        )
      label.input-holder
        input(type="file"
          @change="addArticleImg")
        img(:src="article.image")
        p {{ article.image }}

    label.input-holder
      textarea(placeholder="Lead paragraph" v-model="article.leadPar")
    .input-holder
      wysiwyg(v-model="article.content")
    .form-row
      label.input-holder
        select(multiple
          v-model="article.tags"
          )
          option(v-for="tag in allTags" ) {{ tag }}
      label.input-holder
        input(type="text" placeholder="Add new tag"
          v-model="newTag"
        )
      .input-holder
        button.btn.btn--primary(type="button"
          @click="addNewTag") Add tag
    ul.tag-list
      li(v-for="selectTag in article.tags")
        span {{ selectTag }}
        button.btn.btn--link.fa.fa-times(type="button")
    .edit-btn-wrap
      div
        button.btn.btn--gray(type="button"
          @click="cancelArticle"
        ) Cancel
      div
        button.btn.btn--primary(type="button"
        @click.privent="saveArticle"
        )
          span(v-if="!sendForm") Save
          .spinner(v-if="sendForm")
            .rect1
            .rect2
            .rect3
            .rect4
            .rect5
</template>

<script>
import {db, Firebase, Storage} from "../core/dataBase";

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
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          // switch (snapshot.state) {
          //   case Firebase.storage.TaskState.PAUSED: // or 'paused'
          //     console.log('Upload is paused');
          //     break;
          //   case Firebase.storage.TaskState.RUNNING: // or 'running'
          //     console.log('Upload is running');
          //     break;
          // }
        }, function(error) {
          console.log(error);
        },
        () => {
          this.article.image = uploadTask.snapshot.downloadURL;
        });
    },
    saveArticle () {
      this.article.slug = this.article.title + '-' + this.article.articleId;
      this.sendForm = true;
      var newPostKey = db.ref().child('dataPages/media/listItems').push().key;
      console.log(newPostKey);
      // db.ref('dataPages/media/listItems').push().key.set({
      //   title: this.article.title,
      //   leadPar: this.article.leadPar,
      //   image: this.article.image,
      //   date: this.article.date,
      //   tags: this.article.tags,
      //   authorID: this.article.authorID,
      //   slug: this.article.slug,
      //   content: this.article.content,
      // });
      db.ref('dataPages/media/listPage/tags')
        .push()
        .set(this.newTags);
      this.article.articleId = this.article.articleId + 1;
      db.ref('dataPages/media/currentId')
        .set(this.article.articleId);
    },

    addNewTag () {
      this.article.tags.push(this.newTag);
      this.newTags.push(this.newTag);
      this.newTag = '';
    }
  }

}
</script>

<style lang="scss">
  @import '../scss/base';
  .edit-btn-wrap {
    display: flex;
    justify-content: space-between;
  }
  .tag-list {
    list-style: none;
    margin: 0 0 1em;
    padding: 0;
    display: flex;
    li {
      border: 1px solid $col-border;
      font-size: .75em;
      padding: 0 .5em;
      + li {
        margin-left: .3em;
      }
      .fa {
        margin-left: .5em;
      }
    }
  }
  /*editor*/
  .editr {
    border: 2px solid $col-border;
    width: 100%;
  }
  .editr--toolbar {
    background: #f6f6f6;
    border-bottom: 1px solid #e4e4e4;
    position: relative;
    display: flex;
    height: 32px;
  }
  .editr--toolbar a {
    display: inline-block;
    width: 8vw;
    max-width: 32px;
    height: 32px;
    color: #333;
    fill: #333;
    cursor: pointer;
    text-align: center;
    line-height: 1;
  }
  .editr--toolbar a:hover {
    background: rgba(0,0,0,0.1);
  }
  .editr--toolbar a:active {
    background: rgba(0,0,0,0.2);
  }
  .editr--toolbar a svg {
    width: 16px;
    height: 16px;
    margin: 8px auto;
  }
  .editr--toolbar a svg path {
    fill: inherit;
  }
  .editr--toolbar a.vw-btn-separator {
    width: 1px;
    margin: 0 8px;
  }
  .editr--toolbar a.vw-btn-separator:hover {
    background: initial;
    cursor: default;
  }
  .editr--toolbar a.vw-btn-separator i.vw-separator {
    border-left: 1px solid rgba(0,0,0,0.1);
    height: 100%;
    position: absolute;
    width: 1px;
  }
  .editr--toolbar .dashboard {
    width: 100%;
    position: absolute;
    top: 32px;
    left: 0;
    text-align: left;
    padding: 8px 16px;
    background: rgba(255,255,255,0.95);
    border: 1px solid #f6f6f6;
  }
  .editr--content {
    min-height: 150px;
    padding: 12px 8px 16px 8px;
    line-height: 1.33;
    font-family: inherit;
    color: inherit;
    overflow-y: auto;
    max-height: 100vh;
  }
  .editr--content[contenteditable=true]:empty:before {
    content: attr(placeholder);
    color: rgba(0,0,0,0.3);
    display: block; /* For Firefox */
  }
  .editr--content img {
    max-width: 100%;
  }
  .editr--content table {
    width: 100%;
    border-collapse: collapse;
  }
  .editr--content table th {
    text-align: left;
  }
  .editr--content table th,
  .editr--content table td {
    border: 1px solid #ddd;
    padding: 2px;
  }
  .editr--content:focus {
    outline: 0;
  }
  .editr--content ul li,
  .editr--content ol li {
    list-style-position: inside;
  }
  @media screen and (max-width: 320px) {
    .editr--toolbar a {
      margin: 0 2px;
    }
    .editr--toolbar a.vw-btn-separator {
      display: none;
    }
  }
  .form {
    display: flex;
    align-content: flex-end;
  }
  .form label {
    margin-right: 1rem;
  }
  /*end editor*/
</style>
