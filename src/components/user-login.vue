<template lang="pug">
  .head-signin_content-col.content-col_form
    .head-signin_content.head-signin_content--outer-width
      h3.head-signin_title Sign in
      form.head-signin_form
        label.input-holder
          input(type="email" placeholder="E-mail"
            v-model="mail"
          )
        label.input-holder
          input(type="password" placeholder="Password"
            v-model="pass"
          )
        .head-signin_form-action
          .custom-checkbox
            label
              input(type="checkbox"
              )
              span.checkbox-fake
              span.checkbox-text Remember me
          router-link.btn.btn--link(to="/some-link") Forgot Password?
      .header_flex-group
        button.btn.btn--outline(type="button"
          @click.prevent="signIn"
        ) Sign In
    .head-signin_content
      p or You can sign in via:
      router-link.btn.btn--social-login(to="/some-link")
        i.fa.fa-facebook
        span facebook sign in
      router-link.btn.btn--social-login(to="/some-link")
        i.fa.fa-google
        span google sign in

</template>

<script>
    import { db, Firebase } from '../core/dataBase';
    export default {
      name: "UserLogin",
      data () {
        return {
          mail: '',
          pass: ''
        }
      },
      methods: {
        signIn() {
          Firebase.auth().signInWithEmailAndPassword(this.mail, this.pass)
            .then(
              (user) => {
                console.log(user);
              },
              (error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
              });
        }
      }
    }
</script>

<style scoped>

</style>
