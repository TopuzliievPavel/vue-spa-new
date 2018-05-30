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
        .err-combination(v-if="error")
          p {{error}}
        form(name="loginForm")
          label.input-holder
            input(type="email" placeholder="E-mail"
              v-model="userEmail"
            )
          .input-holder
            input(type="password" placeholder="Password"
              v-model="userPass"
              @keyup.enter="loginUser"
            )
            router-link.input_link(to="/restore-password") Forgot password?

          .custom-checkbox
            label
              input(type='checkbox'
              )
              span.checkbox-fake
              span.checkbox-text Remember me
              span.checkbox-description.show-for-medium Protect your account. Uncheck this box if you use public or shared device

          #recaptcha.g-recaptcha
          button#submit( type="button" @click="validate") capcha

          button.btn.btn--primary(type="button"
            @click="loginUser"
            v-btn-spinner="sendForm"
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
        router-link(:to="{name: 'RegUser'}") Sign up.

</template>

<script src="./sign-in.js"></script>


<style lang="scss" scoped>@import './sign-in';</style>
