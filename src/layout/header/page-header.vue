<template lang="pug">
  header.page_header(
      :class="{\
        'menu-show': openBurgerMenu,\
        'signin-show': openSignIn,\
        'logged': userIsLogin\
        }"
    )
    section.header_signin
      include blocks/hidden-section.pug
    section.header_main
      include blocks/top-menu.pug
    nav.header_nav
      .content-wrap.content-indent
        .header_row.header_row--nav
          ul.header_nav-list
            li
              router-link.nav-list_link(:to="{name: 'VrList'}" exact) VIRTUAL ROOMS
            li
              router-link.nav-list_link(:to="{name: 'GalleryList'}" exact ) GALLERY
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
              router-link.nav-list_link(:to="{name: 'ArticleList'}")
                span MEDIA
            li
              router-link.nav-list_link(to="/some-link")
                span TIPSTER TV
                | &nbsp;
                i.fa.fa-television.show-for-presmall

</template>

<script src="./page-header.js"></script>

<style lang="scss"> @import './page-header'; </style>
