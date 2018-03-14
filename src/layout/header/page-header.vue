<template lang="pug">
  //:class="{\
    : false,\
    'signin-show'
    'logged': false,\
    'min': false,\
    'beta-hidden': false\
    }"
  header.page_header(
      :class="{\
        'menu-show': openBurgerMenu,\
        'signin-show': openSignIn\
        }"
    )
    section.header_signin
      .content-wrap.content-indent
      .content-wrap.content-indent
        .header_row.header_row--signin
          .head-signin_content-col.xlarge-show
            div
              .head-signin_heading
                h3.head-signin_title Quick tips
              ul.head-signin_bullet-list
                li: router-link(to="/some-link") How to use Virtual rooms
                li: router-link(to="/some-link") How to find Pro
                li: router-link(to="/some-link") How to become Pro
                li: router-link(to="/some-link") How to buy goods
                li: router-link(to="/some-link") How to sell goods
          .head-signin_content-col
            .head-signin_content.head-signin_content--reg
              .head-signin_heading.medium-show
                h3.head-signin_title Registration
              p.medium-show Not a user yet?
                br
                | Create your account right now and start using House Tipster!

              router-link.btn.btn--outline(to="/some-link") Create an Account
          .head-signin_content-col.content-col_form
            .head-signin_content.head-signin_content--outer-width
              h3.head-signin_title Sign in
              form.head-signin_form
                label.input-holder
                  input(type="email" placeholder="E-mail"
                  )
                label.input-holder
                  input(type="password" placeholder="Password"
                  )
                .head-signin_form-action
                  .custom-checkbox
                    label
                      input(type="checkbox"
                      )#forgot_pass
                      span.checkbox-fake
                      span.checkbox-text Remember me
                  router-link.btn.btn--link(to="/some-link") Forgot Password?
              .header_flex-group
                button.btn.btn--outline(type="button"
                ) Sign In
            .head-signin_content
              p or You can sign in via:
              router-link.btn.btn--social-login(to="/some-link")
                i.fa.fa-facebook
                span facebook sign in
              router-link.btn.btn--social-login(to="/some-link")
                i.fa.fa-google
                span google sign in
          button.head-signin_close(type="button"
            v-on:click="openSignIn = !openSignIn"
            )
            i.fa.fa-close
    section.header_main
      .content-wrap.content-indent
        .header_row.header_row--main
          .head-main_col.head-main_col--logo
            router-link(to="/" tabindex="1")
              img(src="https://cdn3.housetipster.com/static-img/Housetipster_logo-new-big.png" width="186" height="auto").medium-show
              img(src="https://cdn2.housetipster.com/Housetipster_logo-new.svg" width="186" height="auto").medium-hide

          .head-main_col.head-main_col--search
            .header_search-holder(
              :class="{'active': autocomplete.isShowInput}"
            )
              input.header_search(type="text", placeholder="Search for pros, galleries, products and more"
                v-model="autocomplete.searchText"
                @focus="autocomplete.isOpen = true"
                @blur="autocomplete.isOpen = false"

              )
              button.fa.fa-search.header_search-btn.btn.btn--link( type="button"
                v-on:click="autocomplete.isShowInput = !autocomplete.isShowInput"
              )
              //- --------------------- autocomplete start ---------------------- -//
              -
                var searchList = [
                {"icon":"fa-cube", "section":"Virtual Rooms", "constant": "VIRTUAL_ROOMS_LIST"},
                {"icon":"fa-book", "section":"Housetips", "constant": "HOUSE_TIPS_LIST"},
                {"icon":"fa-television", "section":"Media List", "constant": "MEDIA_LIST"},
                {"icon":"fa-star", "section":"Find a Pro", "constant": "FIND_PRO_ADVANCED"},
                {"icon":"fa-picture-o", "section":"Gallery", "constant": "PHOTOS_LIST"}
                ]

              .search-autocomplete_wrapper(
                :class="{'show-search': autocomplete.isOpen && autocomplete.searchText.length > 0}"
                )
                ul.search-autocomplete_list
                  each item in searchList
                    li
                      router-link.search-autocomplete_item(to="/search-page")
                        .search-autocomplete_icon.medium-show
                          i.fa(class=item.icon aria-hidden="true")
                        .search-autocomplete_content
                          p.search-autocomplete_search
                            | {{autocomplete.searchText}}
                            span &nbsp;in&nbsp;
                            span.search-autocomplete_category=item.section
              //- --------------------- autocomplete end ---------------------- -//
          .head-main_col.head-main_col--reg
            .header_options.head-main_reg
              button(type="button"

              ).btn.btn--link ARE YOU A PRO?
              button(type="button" tabindex="2"
                v-on:click="openSignIn = !openSignIn"
              ).btn.btn--primary.logged-hidden
                i.fa.fa-user
                span.presmall-show &nbsp;&nbsp;Sign in

              button.btn.btn--link-primary.logged-visible.my-profile(type="button"

              )
                i.fa.fa-user(aria-hidden="true")
                | &nbsp;
                span.medium-show MY PROFILE
              .my-profile_drop
                a.btn.btn--link-primary(href="#")  My Profile
                a.btn.btn--link-primary.disable(href="#")  Notifications
                a.btn.btn--link-primary(href="#")  Edit Profile
                a.btn.btn--link-primary(href="#")  Sign out
            button.nav-opener(type="button"
              v-on:click="openBurgerMenu = !openBurgerMenu"
            )
              span
    nav.header_nav
      .content-wrap.content-indent
        .header_row.header_row--nav
          ul.header_nav-list
            li
              router-link.nav-list_link(to="/vr-list" exact) VIRTUAL ROOMS
            li
              router-link.nav-list_link(to="/some-link" exact ) GALLERY
            li
              router-link.nav-list_link(to="/some-link" exact) HOUSE TIPS
            li
              router-link.nav-list_link(to="/some-link" exact) MARKETPLACE
            li
              router-link.nav-list_link(to="/some-link" exact) DESIGN DEN
            li
              router-link.nav-list_link(to="/some-link" exact) FIND A PRO
            li
              router-link.nav-list_link(to="/some-link" exact) CONTACT
          ul.header_options.header_nav-secondary
            li
              router-link.nav-list_link(to="/some-link")
                span MEDIA
            li
              router-link.nav-list_link(to="/some-link")
                span TIPSTER TV
                | &nbsp;
                i.fa.fa-television.show-for-presmall

</template>

<script src="./page-header.js"></script>

<style lang="scss" scoped> @import './page-header'; </style>
