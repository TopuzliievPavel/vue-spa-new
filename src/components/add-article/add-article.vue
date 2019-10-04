<template lang="pug">
  div
    h2 Add new Article
    time
      i.fa.fa-calendar(aria-hidden="true") &ensp;
      | {{ article.date }}

    .form-row
      label.input-holder
        input(type="text" placeholder="Title" v-model="article.title" style="margin-bottom: 10px")
        input(type="text" placeholder="Slug" :value="createSlug" readonly)
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
          @click.prevent="saveArticle"
          v-btn-spinner="true"
        ) Save
      div
        button.btn.btn--primary(type="button"
          @click="deleteCom"
        ) del
</template>

<script src="./add-article.js"></script>

<style lang="scss"> @import './add-article'; </style>
