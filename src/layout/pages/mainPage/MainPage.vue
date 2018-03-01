<script src="./mainPage.js"></script>

<style lang="scss"> @import './_styles.scss'; </style>

<template lang="pug">
  //-(:class="{'popup-shown': registrationPopupShown}")
  .page_main(v-if="content")
    //-include ./blocks/slider
    //-include ./blocks/login-popup
    main.content-wrap.content-indent
      section.main-features_section
        include blocks/features-list

      section.main_title-holder
        h2.h1
          i.fa.fa-bullhorn(aria-hidden="true")
          | &nbsp;
          |{{content.contentTitle}}

      .site-entities-list


      section.main-roles_section
        include ./blocks/roles
</template>
