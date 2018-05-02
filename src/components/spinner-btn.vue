<template lang="pug">
  .spinner
    .rect1
    .rect2
    .rect3
    .rect4
    .rect5
</template>

<script>
export default {
  name: "SpinnerBtn"
}
</script>

<style lang="scss" scoped>
  @import '../scss/base';
  .spinner {
    //width: 52px;
    height: 1.25rem ;
    text-align: center;
    font-size: 10px;
  }

  .spinner > div {
    background-color: $white;
    height: 100%;
    width: 6px;
    display: inline-block;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
    + div {
      margin-left: 2px;
    }
  }

  .spinner .rect2 {
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    animation-delay: -1.0s;
  }

  .spinner .rect4 {
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    animation-delay: -0.8s;
  }

  @keyframes sk-stretchdelay {
    0%, 40%, 100% { transform: scaleY(0.4); }
    20% { transform: scaleY(1.0); }
  }
</style>
