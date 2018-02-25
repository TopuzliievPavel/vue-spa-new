<template lang="pug">
  #app.page
    .page_main
      main.content-wrap.content-indent(ng-controller="HT.mainPageContentCtrl as mainPageContentCtrl")
        router-view
    page-footer

</template>

<script>
  import pageFooter from './layout/footer/Footer.vue'

export default {
  name: 'App',
  components: {pageFooter}
}
</script>

<style lang="scss">
  @import 'scss/_common.scss';
</style>
