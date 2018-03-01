<script src="./pageFooter.js"></script>

<style lang="scss" scoped> @import './_page-footer.scss'; </style>

<template lang="pug">
  - var imgPath = 'https://cdn3.housetipster.com/static-img/'
  mixin footer-logo(linkTo, visibilityClass, logoPic)
    router-link.footer_logo-link(to=linkTo class=visibilityClass)
      img(src=imgPath + logoPic + '.png')

  footer.page_footer
    .content-wrap.content-indent.footer_content-wrap
      .footer_col.footer_contacts
        +footer-logo("/", "medium-show", "new-logo-footer")
        dl.footer_contact-dl.medium-show
          dt {{ content.contacts.phoneTitle }}
          dd
            a(:href="'tel:'+content.contacts.phoneNumber") {{ content.contacts.phoneNumber }}
          dt {{content.contacts.emailTitle}}
          dd
            a(:href="'mailto:'+content.contacts.email") {{content.contacts.email}}
        ul.footer_social-list
          li(
            v-for="social in content.socialLinks"
            v-if="social.link"
          )
            a.footer_social-link(:href="social.link" target="_blank")
              i(aria-hidden="true" class="fa"
                :class="{ 'fa-facebook': social.title === 'Facebook',\
                          'fa-instagram': social.title === 'Instagram',\
                          'fa-twitter': social.title === 'Twitter',\
                          'fa-google-plus': social.title === 'Google Plus',\
                          'fa-youtube': social.title === 'YouTube',\
                          'fa-pinterest-p': social.title === 'Pinterest'\
                        }"
                )
      .footer_col.footer_company
        h3.footer_item-title Company
        ul.footer_links-list
          li(
          v-for="page in content.pages"
          )
            router-link(:to="page.url_key") {{page.title}}

      .footer_col.footer_tips-links
        h3.footer_item-title House Tipster
        ul.footer_links-list
          li(
            v-for="htPage in content.sitePages"
          )
            router-link(:to="htPage.url_key") {{htPage.title}}

      .footer_col.footer_about
        +footer-logo("/", "medium-hide", "new-logo-footer")
        .inner-body.large-show
          h3.footer_item-title about us
          p {{content.aboutUs.mainText}}
        .inner-footer
          .inner-item
            p {{content.aboutUs.leftText}}
          .inner-item
            p {{content.aboutUs.rightText}}

</template>


