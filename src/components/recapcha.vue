<template lang="pug">
  div(id="g-recaptcha" class="g-recaptcha"
    :data-sitekey="sitekey"
  ) reca
</template>

<script>
  export default {
    name: "GoogleRecapcha",
    data () {
      return {
        sitekey: '6LdnUlwUAAAAAE4ugZE0dgu7XRHaKN-GmnzCQ-Nu',
        widgetId: 0
      }
    },
    methods: {
      execute () {
        window.grecaptcha.execute(this.widgetId)
      },
      reset () {
        window.grecaptcha.reset(this.widgetId)
      },
      render () {
        if (window.grecaptcha) {
          console.log('response');
          this.widgetId = window.grecaptcha.render('g-recaptcha', {
            sitekey: this.sitekey,
            size: 'invisible',
            // the callback executed when the user solve the recaptcha
            callback: (response) => {
              console.log(response);
              // emit an event called verify with the response as payload
              this.$emit('verify', response)
              // reset the recaptcha widget so you can execute it again
              this.reset()
            }
          })
        }
      }
    },
    mounted () {
      // render the recaptcha widget when the component is mounted
      this.render()
    }
  }
</script>
