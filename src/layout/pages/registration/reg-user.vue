<template lang="pug">
  .page_main
    main.page_content.content-wrap(:class="{'error-combination': false}")
      header.reg_header
        h1.h2 Registration
        p We are glad to meet new users. All fields are required
      .reg_body
        ol.err-combination()
          li(v-if="validName") First name and Last name can`t be empty
          li(v-if="validEmail") Entered email is incorrect.
          li(v-if="validPass") Please check password (min 6 letter)
          li(v-if="error") {{ error }}

        //-#reg-form
        form(name="regForm")
          .form-row
            label.input-holder
              input(type="text" placeholder="First name"
                v-model="user.firstName"
                :class="{error: validName}"
              )
            label.input-holder
              input(type="text" placeholder="Last name" required
                v-model="user.lastName"
                :class="{error: validName}"
              )

          label.input-holder
            input(type="email" placeholder="E-mail" required
              v-model="user.email"
              :class="{error: validEmail}"
            )
          label.input-holder
            input(type="password", placeholder="Password" required
              v-model="user.pass"
              :class="{error: validPass}"
            )
          label.input-holder
            input(type="password" placeholder="Repeat password" required
              v-model="user.repass"
              :class="{error: validPass}"
            )
          input(type="hidden"
            v-model="user.recaptcha"
          )

          .custom-checkbox
            label
              input(type='checkbox'
                v-model="user.subscription"
              )
              span.checkbox-fake
              span.checkbox-text Would you like to receive promotional emails and newsletters?

          p.terms By creating an account, you agree with our
            router-link(to="/some-link") &nbsp;Terms & Conditions


          button.btn.btn--primary.main-slide_popup-send(type="button"
            @click.prevent="regUser()"
            :disabled ="sendForm"
          )
            span(v-if="!sendForm") Sign Up
            .spinner(v-if="sendForm")
              .rect1
              .rect2
              .rect3
              .rect4
              .rect5

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
        router-link(to="/sign-in") Sign in.


</template>

<script src="./reg-user.js"></script>

<style lang="scss" scoped> @import './reg-user'; </style>
