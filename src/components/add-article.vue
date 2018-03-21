<template lang="pug">
  div
    h2 Add new Article
    .form-row
      label.input-holder
        input(type="text" placeholder="Title"

        )
      label.input-holder
        textarea(placeholder="Lead paragraf")
    label.input-holder
      textarea(placeholder="Content")
    label.input-holder
      input(type="text" placeholder="Tags")
      button.btn.btn--primary(type="button") Add tag
    ul.tag-list
      li
        span tag
        button.btn.btn--primary.fa.fa-times(type="button")

</template>

<script>
export default {
name: "AddArticle"
}
</script>

<style lang="scss" scoped>

</style>
