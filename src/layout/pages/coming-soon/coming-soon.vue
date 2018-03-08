<template lang="pug">
  .page_main
    .content-wrap.content-indent
      header.main_header
        h1 this page is <br> coming soon
        p Leave your email below and we'll send you an email when the functionality will be available.
      form.main_form
        .form-row
          label
            input(type="email" required)

          button.btn.btn--primary(type="button") Send

      router-link.btn.btn--outline(to="/")
        i(aria-hidden="true").fa.fa-angle-left
        |&ensp;
        | Go to Main page

</template>

<script src="./coming-soon.js"></script>

<style lang="scss" scoped> @import './coming-soon'; </style>
