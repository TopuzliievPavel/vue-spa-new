export default {
  name: 'StoreFront',
  data () {
    return {
      storeFrontCtrl: {
        addToCart(item) {
          return console.log(item);
        },
        categories: [
          {
            id: 1,
            title: 'category',
            thumbnail: require('../../../assets/img/store-front-page/porsche.jpg'),
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
            title: 'category',
            thumbnail: require('../../../assets/img/store-front-page/church.jpg'),
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
            title: 'category',
            thumbnail: require('../../../assets/img/store-front-page/work.jpg'),
            visible: true
          },
          {
            id: 4,
            title: 'category',
            thumbnail: require('../../../assets/img/store-front-page/nature.jpg'),
            visible: true
          },
          {
            id: 5,
            title: 'category',
            thumbnail: require('../../../assets/img/store-front-page/motorcycle.jpg'),
            visible: true
          },
          {
            id: 6,
            title: 'category',
            thumbnail: require('../../../assets/img/store-front-page/factory.jpg'),
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
            title: 'category',
            thumbnail: require('../../../assets/img/store-front-page/mountains.jpg'),
            visible: true
          },
          {
            id: 8,
            title: 'category',
            thumbnail: require('../../../assets/img/store-front-page/waterfalls.jpg'),
            visible: true,
            children: [
              {
                id: 12,
                title: 'Link to shop list'
              }
            ]
          }
        ],
        slidesList: [
          {
            id: 1,
            link: '',
            resize: '',
            slideImage: require('../../../assets/img/store-front-page/sliderImg_1.jpg'),
            slideText: 'This is slide text 1',
            slideTitle: 'This is slide title 1',
          },
          {
            id: 2,
            link: '',
            resize: '',
            slideImage: require('../../../assets/img/store-front-page/sliderImg_2.jpg'),
            slideText: 'This is slide text 2',
            slideTitle: 'This is slide title 2',
          },
          {
            id: 3,
            link: '',
            resize: '',
            slideImage: require('../../../assets/img/store-front-page/sliderImg_3.jpg'),
            slideText: 'This is slide text 3',
            slideTitle: 'This is slide title 3',
          }
        ],
        content: {
          banners: [
            {
              id: 1,
              link: '/some-link',
              thumbnail: require('../../../assets/img/store-front-page/paragliding.jpg')
            },
            {
              id: 2,
              link: '/some-link',
              thumbnail: require('../../../assets/img/store-front-page/mountains-promo.jpg')
            },
            {
              id: 3,
              link: '/some-link',
              thumbnail: require('../../../assets/img/store-front-page/castle-promo.jpg')
            }
          ],
          singleBanner: {
            thumbnail: require('../../../assets/img/store-front-page/highway-promo.jpg'),
            title: 'Single banner title',
            text: 'Single banner text',
            link: '/some-link',
            linkTitle: ''
          }
        },
        productsList: [
          {
            price: 50,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('../../../assets/img/store-front-page/bathoil-popular.jpg'),
            defaultImage: require('../../../assets/img/store-front-page/technology-popular.jpg'),
            title: 'bath-oil'
          },
          {
            price: 60,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('../../../assets/img/store-front-page/office-popular.jpg'),
            defaultImage: require('../../../assets/img/store-front-page/technology-popular.jpg'),
            title: 'office'
          },
          {
            price: 40,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('../../../assets/img/store-front-page/board-popular.jpg'),
            defaultImage: require('../../../assets/img/store-front-page/technology-popular.jpg'),
            title: 'board'
          },
          {
            price: 20,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('../../../assets/img/store-front-page/iphone-popular.jpg'),
            defaultImage: require('../../../assets/img/store-front-page/technology-popular.jpg'),
            title: 'iphone'
          },
          {
            price: 90,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('../../../assets/img/store-front-page/technology-popular.jpg'),
            defaultImage: require('../../../assets/img/store-front-page/technology-popular.jpg'),
            title: 'technology'
          },
          {
            price: 75,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('../../../assets/img/store-front-page/visa-popular.jpg'),
            defaultImage: require('../../../assets/img/store-front-page/technology-popular.jpg'),
            title: 'visa'
          },
          {
            price: 65,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('../../../assets/img/store-front-page/premium-popular.jpg'),
            defaultImage: require('../../../assets/img/store-front-page/technology-popular.jpg'),
            title: 'premium'
          },
          {
            price: 100,
            newPrice: '',
            link: '/some-link',
            thumbnail: require('../../../assets/img/store-front-page/idea-popular.jpg'),
            defaultImage: require('../../../assets/img/store-front-page/technology-popular.jpg'),
            title: 'idea'
          }
        ],
        roomsCategoriesList: {
          children: [
            {
              title: 'category',
              thumbnail: require('../../../assets/img/store-front-page/computer-rooms.jpg'),
              children: [
                {
                  tittle: ''
                }
              ]
            },
            {
              title: 'category',
              thumbnail: require('../../../assets/img/store-front-page/conference-rooms.jpg'),
              children: [
                {
                  tittle: ''
                }
              ]
            },
            {
              title: 'category',
              thumbnail: require('../../../assets/img/store-front-page/couch-rooms.jpg'),
              children: [
                {
                  tittle: ''
                }
              ]
            },
            {
              title: 'category',
              thumbnail: require('../../../assets/img/store-front-page/chairs-rooms.jpg'),
              children: [
                {
                  tittle: ''
                }
              ]
            },
            {
              title: 'category',
              thumbnail: ''
            },
            {
              title: 'category',
              thumbnail: require('../../../assets/img/store-front-page/apartment-rooms.jpg'),
              children: [
                {
                  tittle: ''
                }
              ]
            },
            {
              title: 'category',
              thumbnail: require('../../../assets/img/store-front-page/dining-rooms.jpg')
            },
            {
              title: 'category',
              thumbnail: require('../../../assets/img/store-front-page/furniture-rooms.jpg')
            }
          ]
        }
      },
      carouselController: {
        scrollRight () {
          return console.log('scroll right')
        },
        scrollLeft () {
          return console.log('scroll left')
        }
      }
    }
  },
  computed: {
    userIsLogin() {
      return this.$store.state.auth.isLogin;
    }
  }
}
