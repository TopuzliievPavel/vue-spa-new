<template lang="pug">
  main.page_main
    .content-wrap.content-indent
      .profile_head
        .user_info
          .user-ava-block
            .avatar
              a.avatar_pic(href='/profile/geger5a8828b236a5122fae59ac2d')
                img(src='https://cdn3.housetipster.com/resize_200x0--crop_413-603x0-603/other-loaded-files%2F4yallare0es0000000000_wallpaper_hitman_contracts_06_1600.jpg')
            .edit-button
              button.btn.btn--link(type="button")
                i.fa.fa-camera(aria-hidden="true") &nbsp;
                | Edit
              button.btn.btn--link(type="button")
                i.fa.fa-trash(aria-hidden="true")

          .user-info-wrapper.business
            .user-info-block
              .name-wrapper
                h1.name
                  span.user-name Name

              .soc-block
                span.spoil-text.show-for-medium Social networks links
                .soc-links
                  a(href="#" target="_blank"
                  )
                    i.fa.fa-facebook-square(aria-hidden="true")
                  a(href="#" target="_blank"
                  )
                    i.fa.fa-google-plus-square(aria-hidden="true")
                  a(href="#" target="_blank"
                  )
                    i.fa.fa-instagram(aria-hidden="true")
                  a(href="#" target="_blank"
                  )
                    i.fa.fa-linkedin-square(aria-hidden="true")
                  a(href="#" target="_blank"
                  )
                    i.fa.fa-twitter-square(aria-hidden="true")

                  a(href="#" target="_blank"
                  )
                    i.fa.fa-youtube-square(aria-hidden="true")

                  a(href="#" target="_blank"
                  )
                    i.fa.fa-pinterest-square(aria-hidden="true")

                  a(href="#"   target="_blank"
                  )
                    i.fa.fa-rss-square(aria-hidden="true")

              span.edit-button.show-for-medium
                button.btn.btn--link(type="button")
                  i.fa.fa-camera(aria-hidden="true") &nbsp;
                  | Edit Background
                button.btn.btn--link(type="button")
                  i.fa.fa-trash(aria-hidden="true")


        .tabs
          ul.tabs_list
            li
              button.btn.btn--link(type="button") My profile
            li
              button.btn.btn--link(type="button") Add article
            li
              button.btn.btn--link(type="button") Edit profile
            li
              button.btn.btn--link(type="button") Sign out
      .page_content
        .edit-profile
          .form-row
            label.input-holder
              input(type="text" placeholder="First name"
                v-model="user.firstName"
                :class="{error: validName}"
              )
            label.input-holder
              input(type="text" placeholder="Last name"
                v-model="user.lastName"
                :class="{error: validName}"
              )
            label.input-holder
              input(type="email" placeholder="E-mail"
              v-model="user.email"
                :class="{error: validEmail}"
              )
          h3 Social links
          label.input-holder
            i.fa.fa-facebook-square(aria-hidden="true")
            input(type="url" placeholder="facebook")
          label.input-holder
            i.fa.fa-google-plus-square(aria-hidden="true")
            input(type="url" placeholder="facebook")
          label.input-holder
            i.fa.fa-instagram(aria-hidden="true")
            input(type="url" placeholder="facebook")
          label.input-holder
            i.fa.fa-linkedin-square(aria-hidden="true")
            input(type="url" placeholder="facebook")
          label.input-holder
            i.fa.fa-twitter-square(aria-hidden="true")
            input(type="url" placeholder="facebook")
          label.input-holder
            i.fa.fa-youtube-square(aria-hidden="true")
            input(type="url" placeholder="facebook")
          label.input-holder
            i.fa.fa-pinterest-square(aria-hidden="true")
            input(type="url" placeholder="facebook")
          label.input-holder
            i.fa.fa-rss-square(aria-hidden="true")
            input(type="url" placeholder="facebook")

          button.btn.btn--primary(type="button"

          )
            span(v-if="!sendForm") Save
            .spinner(v-if="sendForm")
              .rect1
              .rect2
              .rect3
              .rect4
              .rect5
</template>

<script>
  export default {
    name: 'UserProfile',
      data () {
      return {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          pass: '',
          repass: '',
          recaptcha: null,
          subscription: true,
        },
      }
    }
  }
</script>

<style lang="scss" scoped> @import './user-profile'; </style>
