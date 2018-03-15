<template lang="pug">
  .page_main
    main.page_content.content-wrap(:class="{'error-combination': false}")
      header.reg_header
        h1.h2 Registration
        p We are glad to meet new users. All fields are required
      .reg_body
        .err-combination(v-if="null")
          p Error

        //-#reg-form
        form(name="regForm")
          .form-row
            label.input-holder
              input(type="text" placeholder="First name" name="firstname" required

              )
            label.input-holder
              input(type="text" placeholder="Last name" name="secondname" required

              )

          label.input-holder
            input(type="email" placeholder="E-mail" name="email" required


            )
          label.input-holder
            input(type="password", placeholder="Password" name="password" required

            )
          label.input-holder
            input(type="password" placeholder="Repeat password" name="confirmPassword" required

            )
          input(type="hidden"  name="g-recaptcha-response"

          )

          .custom-checkbox
            label
              input(type='checkbox' name='receiveDelivery'

              )
              span.checkbox-fake
              span.checkbox-text Would you like to receive promotional emails and newsletters?

          p.terms By creating an account, you agree with our
            router-link(to="/some-link") &nbsp;Terms & Conditions


          button(type="button"
          ).btn.btn--primary.main-slide_popup-send Sign Up

      footer.reg_footer
        h4.h4 OR USE SOCIAL MEDIA ACCOUNT FOR REGISTRATION
        .d-flex
          router-link.btn.btn--social-login(to="/some-link")
            i.fa.fa-facebook
            span facebook sign in
          router-link.btn.btn--social-login(to="/some-link")
            i.fa.fa-google
            span google sign in

    div
      p.text-center Already have an account? Please,&nbsp;
        router-link(to="/some-link") Sign in.


</template>

<script src="./reg-user.js"></script>

<style lang="scss" scoped> @import './reg-user'; </style>
