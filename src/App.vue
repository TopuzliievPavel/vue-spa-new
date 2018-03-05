<template lang="pug">
  #app.page
    page-header
    .header_heightfix
    .page_main-wrap
      router-view
    page-footer
</template>

<script>
  import pageFooter from './layout/footer/Footer.vue'
  import pageHeader from './layout/header/Header.vue'

  export default {
    name: 'App',
    components: {
      pageFooter,
      pageHeader
    }
  }
</script>

<style lang="scss">
  @import 'scss/_common.scss';
</style>
