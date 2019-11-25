<template lang="pug">
  .spinner(v-if="visibleSpinner")
    .spinner_dot
    .spinner_dot
    .spinner_dot
    .spinner_dot
    .spinner_dot
    .spinner_dot
    .spinner_dot
    .spinner_dot

</template>

<script>
  export default {
    name: "LoadSpinner",
    computed: {
      visibleSpinner() {
        return this.$store.state.visibleSpinner
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/base';
  .spinner {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
  }


  .spinner_dot {
    background-color: $col-primary;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    margin: 2px;
    animation-fill-mode: both;
    position: absolute;
    &:nth-child(1) {
      top: 0;
      left: 17px;
      animation: circle-fade 1s 0s infinite linear;
    }
    &:nth-child(2) {
      top: 5px;
      right: 5px;
      animation: circle-fade 1s 0.12s infinite linear;
    }
    &:nth-child(3) {
      top: 17px;
      right: 0;
      animation: circle-fade 1s 0.24s infinite linear;
    }
    &:nth-child(4) {
      bottom: 5px;
      right: 5px;
      animation: circle-fade 1s 0.36s infinite linear;
    }
    &:nth-child(5) {
      bottom: 0;
      left: 17px;
      animation: circle-fade 1s 0.48s infinite linear;
    }
    &:nth-child(6) {
      bottom: 5px;
      left: 5px;
      animation: circle-fade 1s 0.6s infinite linear;
    }
    &:nth-child(7) {
      top: 17px;
      left: 0;
      animation: circle-fade 1s 0.72s infinite linear;
    }
    &:nth-child(8) {
      top: 5px;
      left: 5px;
      animation: circle-fade 1s 0.84s infinite linear;
    }
  }
  @keyframes circle-fade {
    50% {
      opacity: .2;
      transform: scale(.35)
    }
    100% {
      opacity: 1;
      transform: scale(1)
    }
  }
</style>
