export default {
  name: "ListArticles",

  props: {
    listSource: {
      type: [Array, Object],
      default: function () {
        return {
          msg: 'empty list'
        }
      }
    },
    listLayout: {
      type: Boolean,
      default: false
    }
  }
}
