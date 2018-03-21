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
                  span.user-name {{ user.firstName }}

              .soc-block(v-if="isSocial")
                span.spoil-text.show-for-medium Social networks links
                .soc-links()
                  a(v-for="(value, key) in user.social"
                    :href="value"
                    v-if="value")
                    i.fa(aria-hidden="true" :class="'fa-' + key + '-square'")


              span.edit-button.show-for-medium
                button.btn.btn--link(type="button")
                  i.fa.fa-camera(aria-hidden="true") &nbsp;
                  | Edit Background
                button.btn.btn--link(type="button")
                  i.fa.fa-trash(aria-hidden="true")


        .tabs
          ul.tabs_list
            li
              button.btn.btn--link(type="button"
                @click="tabs = ''"
              ) My profile
            li
              button.btn.btn--link(type="button"
                @click="tabs = 'add-article'"
              ) Add article
            li
              button.btn.btn--link(type="button"
                @click="tabs = 'edit-profile'"
              ) Edit profile
            li
              button.btn.btn--link(type="button") Sign out

      .page_content(v-if="tabs == 'edit-profile'")
        include blocks/edit-profile.pug
      .page_content(v-if="tabs == 'add-article'")
        add-article

</template>

<script src="./user-profile.js"></script>

<style lang="scss" scoped> @import './user-profile'; </style>
