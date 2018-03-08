<template lang="pug">
  #app.page
    page-header
    .header_heightfix
    .page_main-wrap
      router-view
    page-footer
</template>

<script>
  import PageFooter from './layout/footer/page-footer.vue'
  import PageHeader from './layout/header/page-header.vue'

  export default {
    name: 'App',
    components: {
      PageFooter,
      PageHeader
    }
  }
</script>

<style lang="scss">
  @import 'scss/_common.scss';
</style>
