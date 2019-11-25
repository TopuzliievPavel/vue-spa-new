<template lang="pug">
  main.page_main
    .content-wrap.content-indent(v-if="user")
      .profile_head(
        :style="userBgImg"
      )
        .user_info
          .user-ava-block
            .avatar
              .avatar_pic
                img(:src="[user.avatar || 'https://cdn3.housetipster.com/resize_300x0/default_userpic.png']")
            .edit-button
              label.btn.btn--link
                input.invisible(type="file"
                  @change="pushUserAvatar")
                i.fa.fa-camera(aria-hidden="true") &nbsp;
                | Edit
              button.btn.btn--link(type="button"
                @click="deleteUserAvatar"
                )
                i.fa.fa-trash(aria-hidden="true")
          .user-info-wrapper.business
            .user-info-block
              .name-wrapper
                h1.name
                  span.user-name {{ user.firstName }}
                  span.user-name {{ user.lastName }}

              .soc-block(v-if="isSocial")
                span.spoil-text.show-for-medium Social networks links
                .soc-links()
                  a(v-for="(value, key) in user.social"
                    :href="value"
                    v-if="value")
                    i.fa(aria-hidden="true" :class="'fa-' + key + '-square'")


              span.edit-button.show-for-medium
                label.btn.btn--link
                  input.invisible(type="file"
                  @change="pushUserBg")
                  i.fa.fa-camera(aria-hidden="true") &nbsp;
                  | Edit Background
                button.btn.btn--link(type="button"
                  @click="deleteUserBg"
                  )
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
              button.btn.btn--link(type="button"
                @click="logoutUser"
                ) Sign out

      .page_content(v-if="tabs === 'edit-profile'")
        include blocks/edit-profile.pug

      .page_content(v-if="tabs === 'add-article'")
        add-article

</template>

<script src="./user-profile.js"></script>

<style lang="scss" scoped> @import './user-profile'; </style>
