<template lang="pug">
  div
    #recaptcha.g-recaptcha
    button.btn.btn--primary( type="button"
      @click="validate"
      v-btn-spinner="spinnerOn || validating"
      )
      slot

</template>

<script>
export default {
  name: "GoogleRecapcha",
  props: {
    spinnerOn: {
      type: Boolean,
      default: false
    },

  },
  data () {
    return {
      publicKey: '6LdnUlwUAAAAAE4ugZE0dgu7XRHaKN-GmnzCQ-Nu',
      validating: false,
    }
  },
  methods: {
    initReCaptcha() {
      setTimeout(()=> {
        if(typeof grecaptcha === 'undefined') {
          this.initReCaptcha();
        }
        else {
          grecaptcha.render('recaptcha', {
            sitekey: this.publicKey,
            size: 'invisible',
            callback: this.submit,
            'error-callback': this.err
          });
        }
      }, 100);
    },
    validate: function() {
      this.validating = true;
      grecaptcha.execute();
    },
    submit: function(token) {
      this.$emit('userValid');
      grecaptcha.reset();
      this.validating = false;
    },
    err: function(err) {
      console.log(err);
    }
  },
  mounted: function() {
    this.initReCaptcha();
  },
}
</script>

<style lang="scss" scoped>
  .btn--primary {
    margin-top: 36px;
    font-weight: normal;
    padding: 9px 35px;
  }
</style>
