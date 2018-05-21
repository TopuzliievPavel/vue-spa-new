<template lang="pug">
  #app.page
    page-header
    .header_heightfix
    router-view
    page-footer
    load-spinner
</template>

<script>
  // import PageHeader from './layout/header/page-header.vue'
  // import PageFooter from './layout/footer/page-footer.vue'
  export const PageHeader = () => import(/* webpackChunkName: 'header' */ './layout/header/page-header.vue');
  export const PageFooter = () => import(/* webpackChunkName: 'footer' */ './layout/footer/page-footer.vue');
  export const LoadSpinner = () => import(/* webpackChunkName: 'header' */'./components/load-spinner.vue');

  export default {
    name: 'App',
    components: {
      PageFooter,
      PageHeader,
      LoadSpinner
    }
  }
</script>

<style lang="scss">
  @import 'scss/_common.scss';
</style>
