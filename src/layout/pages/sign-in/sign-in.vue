<template lang="pug">
  .page_main
    main.page_content.content-wrap(
    :class="{'error-combination': false}"
    )
      header.reg_header
        h1.h2 Login
        p To use House Tipster you have to sign in
      .reg_body
        //-h3.err-fields Login data is incorrect. Please, check.
        .err-combination()
          p
        form(name="loginForm")
          label.input-holder
            input(type="email" placeholder="E-mail"

            )
          .input-holder
            input(type="password" placeholder="Password"

            )
            router-link.input_link(to="/restore-password") Forgot password?

          .custom-checkbox
            label
              input(type='checkbox'
              )
              span.checkbox-fake
              span.checkbox-text Remember me
              span.checkbox-description.show-for-medium Protect your account. Uncheck this box if you use public or shared device


          button.btn.btn--primary(type="button"

          ) Sign in

        p By signing in, I acknowledge and agree to
          br
          span House Tipster&ensp;
          router-link(to="/some-link") Terms and Conditions
          span &ensp;and&ensp;
          router-link(to="/some-link") Privacy Policy.

      footer.reg_footer
        h4.h4 or use social account for authentication
        .d-flex
          a.btn.btn--social-login(href="#")
            i.fa.fa-facebook
            span facebook sign in
          a.btn.btn--social-login(href="#")
            i.fa.fa-google
            span google sign in


    //-#signing-block
    div
      p Don't have an account?&nbsp;
        router-link(to="/registration") Sign up.

</template>

<script>
  import Firebase from 'firebase'
  export default {
    name: "SignIn"
  }
</script>

<style lang="scss" scoped>@import './sign-in';</style>
