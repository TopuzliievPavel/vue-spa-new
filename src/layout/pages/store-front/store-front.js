import carousel from 'vue-owl-carousel'
import {GalleryList} from "../../../router";

export default {
  name: 'StoreFront',
  components: {
    carousel,
  },
  data () {
    return {
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      images: [
        require('@/assets/img/photos-for-banner/city.jpg'),
        require('@/assets/img/photos-for-banner/arch.jpg'),
        require('@/assets/img/photos-for-banner/desk.jpg'),
        require('@/assets/img/photos-for-banner/frankfurt.jpg'),
        require('@/assets/img/photos-for-banner/glasses.jpg'),
        require('@/assets/img/photos-for-banner/new-york.jpg'),
        require('@/assets/img/photos-for-banner/frankfurt2.jpg'),
        require('@/assets/img/photos-for-banner/ho-chi-minh.jpg'),
        require('@/assets/img/photos-for-banner/iphone.jpg'),
        require('@/assets/img/photos-for-banner/moscow.jpg'),
        require('@/assets/img/photos-for-banner/mouse.jpg'),
        require('@/assets/img/photos-for-banner/singapore.jpg'),
      ],
      count: 0,
      direction: 'forward',
      frame: 2,
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
            id: 1,
            link: '',
            resize: '',
            slideImage: require('@/assets/img/store-front-page/sliderImg_1.jpg'),
            slideText: 'This is slide text 1',
            slideTitle: 'This is slide title 1',
          },
          {
            id: 2,
            link: '',
            resize: '',
            slideImage: require('@/assets/img/store-front-page/sliderImg_2.jpg'),
            slideText: 'This is slide text 2',
            slideTitle: 'This is slide title 2',
          },
          {
            id: 3,
            link: '',
            resize: '',
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
            defaultImage: require('@/assets/img/store-front-page/technology-popular.jpg'),
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
  created() {
    const slide = setInterval(() => this.slideLoop(this.direction), 2000);
  },
  methods: {
    addToCart(item) {
      return console.log(item);
    },
    slideLoop(pass) {
      let steps = this.storeFrontCtrl.roomsCategoriesList.children.length - this.frame;
      if(this.count >= steps && pass === "forward"){
        this.direction = "backward";
        this.previous();
        return
      }
      if(this.count <= steps && pass === "backward"){
        if(this.count <= 0){
          this.count = 0;
          this.direction = "forward";
          this.next();
          return
        }
        this.previous();
        return
      }
      if(this.count < steps && pass === "forward"){
        if(this.count < 0){
          this.resetScroll();
          return
        } else if(this.count === 0){
          this.next();
          return
        }
        this.next();
        return
      }
      this.resetScroll()
    },
    resetScroll(){
      this.count = 0;
      this.direction = "forward";
      this.scroll("reset")
    },
    previous() {
      this.count--;
      this.scroll('previous');
    },
    next() {
      this.count++;
      this.scroll('next')
    },
    scroll(position) {
      let el = document.getElementById('slide'),
          pos = 0,
          id = setInterval(frame, 5),
          num = this.storeFrontCtrl.roomsCategoriesList.children.length - this.frame,
          width = 250,
          resize = num * width,
          check = position === 'reset' ? resize : width;
      function frame() {
        if (pos === check) {
          clearInterval(id);
        } else {
          pos += 5;
          if (position === 'next') {
            el.scrollLeft += 5;
          } else {
            el.scrollLeft -= 5;
          }
        }
      }

    }
  }
}
