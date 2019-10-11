import carousel from 'vue-owl-carousel'
import { addToCart } from "../../../core/loginUser";


export default {
  name: 'StoreFront',
  components: {
    carousel,
  },
  data() {
    return {
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      storeFrontCtrl: {
        categories: [
          {
            id: 1,
            title: 'Porsche',
            thumbnail: require('@/assets/img/store-front-page/porsche.jpg'),
            visible: true,
            children: [
              {
                id: 9,
                title: 'Link to shop list'
              }
            ]
          },
          {
            id: 2,
            title: 'Church',
            thumbnail: require('@/assets/img/store-front-page/church.jpg'),
            visible: true,
            children: [
              {
                id: 10,
                title: 'Link to shop list'
              }
            ]
          },
          {
            id: 3,
            title: 'Work',
            thumbnail: require('@/assets/img/store-front-page/work.jpg'),
            visible: true
          },
          {
            id: 4,
            title: 'Nature',
            thumbnail: require('@/assets/img/store-front-page/nature.jpg'),
            visible: true
          },
          {
            id: 5,
            title: 'Motorcycle',
            thumbnail: require('@/assets/img/store-front-page/motorcycle.jpg'),
            visible: true
          },
          {
            id: 6,
            title: 'Factory',
            thumbnail: require('@/assets/img/store-front-page/factory.jpg'),
            visible: true,
            children: [
              {
                id: 11,
                title: 'Link to shop list'
              }
            ]
          },
          {
            id: 7,
            title: 'Mountain',
            thumbnail: require('@/assets/img/store-front-page/mountains.jpg'),
            visible: true
          },
          {
            id: 8,
            title: 'Waterfalls',
            thumbnail: require('@/assets/img/store-front-page/waterfalls.jpg'),
            visible: true,
            children: [
              {
                id: 12,
                title: 'Link to shop list'
              }
            ]
          },
          {
            id: 9,
            title: 'Waterfalls',
            thumbnail: require('@/assets/img/store-front-page/waterfalls.jpg'),
            visible: true,
            children: [
              {
                id: 13,
                title: 'Link to shop list'
              }
            ]
          }
        ],
        slidesList: [
          {
            slideImage: require('@/assets/img/store-front-page/sliderImg_1.jpg'),
            slideText: 'This is slide text 1',
            slideTitle: 'This is slide title 1',
          },
          {
            slideImage: require('@/assets/img/store-front-page/sliderImg_2.jpg'),
            slideText: 'This is slide text 2',
            slideTitle: 'This is slide title 2',
          },
          {
            slideImage: require('@/assets/img/store-front-page/sliderImg_3.jpg'),
            slideText: 'This is slide text 3',
            slideTitle: 'This is slide title 3',
          }
        ],
        content: {
          banners: [
            {
              id: 1,
              link: '/some-link',
              thumbnail: require('@/assets/img/store-front-page/paragliding.jpg')
            },
            {
              id: 2,
              link: '/some-link',
              thumbnail: require('@/assets/img/store-front-page/mountains-promo.jpg')
            },
            {
              id: 3,
              link: '/some-link',
              thumbnail: require('@/assets/img/store-front-page/castle-promo.jpg')
            }
          ],
          singleBanner: {
            thumbnail: require('@/assets/img/store-front-page/highway-promo.jpg'),
            title: 'Single banner title',
            text: 'Single banner text',
            link: '/gallery',
            linkTitle: ''
          }
        },
        productsList: [
          {
            price: 50,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('@/assets/img/store-front-page/bathoil-popular.jpg'),
            defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
            title: 'Bath-oil'
          },
          {
            price: 59.99,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('@/assets/img/store-front-page/office-popular.jpg'),
            defaultImage: require('@/assets/img/store-front-page/technology-popular.jpg'),
            title: 'Office'
          },
          {
            price: 40,
            newPrice: 20,
            link: '/some-link',
            thumbnail: require('@/assets/img/store-front-page/board-popular.jpg'),
            defaultImage: require('@/assets/img/store-front-page/technology-popular.jpg'),
            title: 'Board'
          },
          {
            price: 20,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('@/assets/img/store-front-page/iphone-popular.jpg'),
            defaultImage: require('@/assets/img/store-front-page/technology-popular.jpg'),
            title: 'Iphone'
          },
          {
            price: 90,
            newPrice: 60,
            link: '/some-link',
            thumbnail: require('@/assets/img/store-front-page/technology-popular.jpg'),
            defaultImage: require('@/assets/img/store-front-page/technology-popular.jpg'),
            title: 'Technology'
          },
          {
            price: 75,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('@/assets/img/store-front-page/visa-popular.jpg'),
            defaultImage: require('@/assets/img/store-front-page/technology-popular.jpg'),
            title: 'Visa'
          },
          {
            price: 65,
            newPrice: 50,
            link: '/some-link',
            thumbnail: require('@/assets/img/store-front-page/premium-popular.jpg'),
            defaultImage: require('@/assets/img/store-front-page/technology-popular.jpg'),
            title: 'Premium'
          },
          {
            price: 100,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('@/assets/img/store-front-page/idea-popular.jpg'),
            defaultImage: require('@/assets/img/store-front-page/technology-popular.jpg'),
            title: 'Idea'
          }
        ],
        roomsList: [
          require('@/assets/img/store-front-page/computer-rooms.jpg'),
          require('@/assets/img/store-front-page/conference-rooms.jpg'),
          require('@/assets/img/store-front-page/couch-rooms.jpg'),
          require('@/assets/img/store-front-page/chairs-rooms.jpg'),
          require('@/assets/img/store-front-page/apartment-rooms.jpg'),
          require('@/assets/img/store-front-page/dining-rooms.jpg'),
          require('@/assets/img/store-front-page/furniture-rooms.jpg')
        ],
        roomsCategoriesList: {
          children: [
            {
              title: 'Computer',
              thumbnail: require('@/assets/img/store-front-page/computer-rooms.jpg'),
              children: [
                {
                  tittle: ''
                }
              ]
            },
            {
              title: 'Conference',
              thumbnail: require('@/assets/img/store-front-page/conference-rooms.jpg'),
              children: [
                {
                  tittle: ''
                }
              ]
            },
            {
              title: 'Couch',
              thumbnail: require('@/assets/img/store-front-page/couch-rooms.jpg'),
              children: [
                {
                  tittle: ''
                }
              ]
            },
            {
              title: 'Chairs',
              thumbnail: require('@/assets/img/store-front-page/chairs-rooms.jpg'),
              children: [
                {
                  tittle: ''
                }
              ]
            },
            {
              title: 'Apartment',
              thumbnail: ''
            },
            {
              title: 'category',
              thumbnail: require('@/assets/img/store-front-page/apartment-rooms.jpg'),
              children: [
                {
                  tittle: ''
                }
              ]
            },
            {
              title: 'Dining',
              thumbnail: require('@/assets/img/store-front-page/dining-rooms.jpg')
            },
            {
              title: 'Furniture',
              thumbnail: require('@/assets/img/store-front-page/furniture-rooms.jpg')
            }
          ]
        }
      }
    }
  },
  computed: {
    userIsLogin() {
      return this.$store.state.auth.isLogin;
    }
  },
  methods: {
    addToCart
  }
}
