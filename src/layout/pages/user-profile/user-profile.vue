<template lang="pug">
  .page_main
    main.page_content.content-wrap
      header.reg_header
        h1.h2 User profile
        p You are registered as USER
</template>

<script>
  export default {
    name: 'UserProfile',
      data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../scss/base';
  $padding-l: 17%;

  .page_main {
    background-color: $bg-article;
    font-weight: 300;
    text-align: center;
    flex: 1;
    a {
      color: rgba(0, 105, 180, 0.8);
      text-decoration: underline;
    }
    .bnt--link {
      text-transform: uppercase;
      color: inherit;
      text-decoration: none;
    }
  }
  .page_content {
    max-width: 600px;
    background-color: $white;
    border: 1px solid $col-border;
    padding: 0;
    margin-top: 30px;
    margin-bottom: 47px;
    @include media('<540px') {
      margin-left: 10px;
      margin-right: 10px;
    }
    box-shadow: 0 0 0 10px $white, 0 12px 15px -2px rgba(#000, .75);
  }
  /*----- header -----*/
  .reg_header {
    padding: 42px 15px 0;
    @include media('>=medium') {
      padding-left: $padding-l;
      padding-right: $padding-l;
    }
    .h2 {
      position: relative;
      font-weight: normal;
      padding-bottom: 1em;
      margin-bottom: 1.4em;
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 74px;
        height: 2px;
        background-color: $col-primary;
      }
    }
    p {
      margin: 0 0 .375em;
    }
  }
</style>
