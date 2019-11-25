export default {
  name: 'MarketPlace',
  data () {
    return {
      items: [],
      qty: 0,
      cartCtrl: {
        cartTotal: {
          subtotal: [1,2,3,4],
          shipping: [5,6,7,8],
          total: [10],
          totalQty: 1
        },
        cartProducts: [
          {
            companyName: 'House-tipster',
            products: [
              {
                title: 'Best Product',
                thumbnail: require('@/assets/img/store-front-page/porsche.jpg'),
                code: '5321',
                description: 'This is the best our product',
                qty: 0,
                oldPrice: [600, 650],
                newPrice: [350, 395]
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    decrementQty() {
      this.qty--
    },
    incrementQty() {
      this.qty++;
    },
    removeProduct() {
      console.log('index')
    }
  }
}
