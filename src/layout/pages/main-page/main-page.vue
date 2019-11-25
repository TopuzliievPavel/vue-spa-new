<template lang="pug">
  .page_main-wrap
    .page_main(v-if="content")
      div(v-if="!userIsLogin")
        include ./blocks/slider.pug
      main.content-wrap.content-indent
        section.main-features_section(v-if="!userIsLogin")
          include blocks/features-list.pug

        section.main_title-holder
          h2.h1
            i.fa.fa-bullhorn(aria-hidden="true")
            | &nbsp;
            |{{content.contentTitle}}

        section.main-tile_section-list
          include blocks/tile-list.pug

        section.main-roles_section(v-if="!userIsLogin")
          include ./blocks/roles.pug

</template>

<script src="./main-page.js"></script>

<style lang="scss"> @import './main-page'; </style>
