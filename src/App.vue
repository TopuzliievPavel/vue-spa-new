<template lang="pug">
  #app.page
    page-header
    .header_heightfix
    //-.page_main-wrap
    router-view
    page-footer
</template>

<script>
  import PageHeader from './layout/header/page-header.vue'
  import PageFooter from './layout/footer/page-footer.vue'
  //export const PageFooter = () => import(/* webpackChunkName: 'footer' */ './layout/footer/page-footer.vue');

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
