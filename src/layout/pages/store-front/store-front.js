import carousel from 'vue-owl-carousel'
import AddToCart from '../../../components/add-to-cart'
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'StoreFront',
  components: { carousel, AddToCart },
  data() {
    return {
      storeFrontList: [
        {
          id: 1,
          price: 50,
          newPrice: '',
          link: '/some-link',
          thumbnail: require('@/assets/img/store-front-page/bathoil-popular.jpg'),
          defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
          title: 'Bath-oil',
          quantity: 1
        },
        {
          id: 2,
          price: 59.99,
          newPrice: '',
          link: '/some-link',
          thumbnail: require('@/assets/img/store-front-page/office-popular.jpg'),
          defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
          title: 'Office',
          quantity: 1
        },
        {
          id: 3,
          price: 40,
          newPrice: 20,
          link: '/some-link',
          thumbnail: require('@/assets/img/store-front-page/board-popular.jpg'),
          defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
          title: 'Board',
          quantity: 1
        },
        {
          id: 4,
          price: 20,
          newPrice: '',
          link: '/some-link',
          thumbnail: require('@/assets/img/store-front-page/iphone-popular.jpg'),
          defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
          title: 'Iphone',
          quantity: 1
        },
        {
          id: 5,
          price: 90,
          newPrice: 60,
          link: '/some-link',
          thumbnail: require('@/assets/img/store-front-page/technology-popular.jpg'),
          defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
          title: 'Technology',
          quantity: 1
        },
        {
          id: 6,
          price: 75,
          newPrice: '',
          link: '/some-link',
          thumbnail: require('@/assets/img/store-front-page/visa-popular.jpg'),
          defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
          title: 'Visa',
          quantity: 1
        },
        {
          id: 7,
          price: 65,
          newPrice: 50,
          link: '/some-link',
          thumbnail: require('@/assets/img/store-front-page/premium-popular.jpg'),
          defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
          title: 'Premium',
          quantity: 1
        },
        {
          id: 8,
          price: 100,
          newPrice: '',
          link: '/some-link',
          thumbnail: require('@/assets/img/store-front-page/idea-popular.jpg'),
          defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
          title: 'Idea',
          quantity: 1
        }
      ],
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
              thumbnail: require('@/assets/img/store-front-page/apartment-rooms.jpg'),
            },
            {
              title: 'category',
              thumbnail: require('@/assets/img/store-front-page/tables-room.jpg'),
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
    },
    ...mapGetters('cartsProduct', ['cartsCount'])
  },
  methods: {
    ...mapMutations('cartsProduct', ['addToCart', 'deleteFromCart'])
  }
}
