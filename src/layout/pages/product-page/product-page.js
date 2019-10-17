import UserReview from '../../../components/user-review/user-review.vue'
import UserAvatar from '../../../components/user-avatar/user-avatar.vue'
import ProductItem from '../../../components/product-item/product-item.vue'
import ProductRating from '../../../components/product-rating/product-rating.vue'
import Carousel from 'vue-owl-carousel'
import { addToCart } from "../../../core/loginUser";

export default {
  name: 'ProductPage',
  data () {
    return {
      activeTab: 1,
      navArrow: [
        '<i class="prevButton fa fa-angle-left"></i>',
        '<i class="nextButton fa fa-angle-right"></i>'
      ],
      defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
      productPageCtrl: {
        review: {
          title: '',
          description: '',
        },
        reviews: [
          {
            title: 'Review-1',
            description: 'I think it\'s good product for our time'
          }
        ],
        similarProducts: [
          {
            title: 'Product'
          },
          {
            title: 'Another Product'
          }
        ],
        recentViewedProducts: [
          {
            description: 'Lorem ipsum dolor sit amet'
          },
          {
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
          }
        ],
        media: {
          img: require('@/assets/img/product-page/computer.jpg')
        },
        mediaThumbnails: [
          {
            image: require('@/assets/img/product-page/computer.jpg'),
            type: 'Type of video',
            url: 'https://www.youtube.com/watch?v=c2SK1IlmYL8&t=667s'
          },
          {
            image: require('@/assets/img/product-page/computer2.jpg'),
            type: 'Type of video',
            url: 'https://www.youtube.com/watch?v=c2SK1IlmYL8&t=667s'
          },
          {
            image: require('@/assets/img/product-page/startup.jpg'),
            type: 'Type of video',
            url: 'https://www.youtube.com/watch?v=c2SK1IlmYL8&t=667s'
          },
          {
            image: require('@/assets/img/product-page/iphone.jpg'),
            type: 'Type of video',
            url: 'https://www.youtube.com/watch?v=c2SK1IlmYL8&t=667s'
          }
        ],
        mainMediaIndex: 0,
        product: {
          title: 'Product title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi ipsam iure neque nesciunt obcaecati odio porro quae ratione sit. Aperiam at dicta eius, excepturi expedita fugiat impedit itaque labore maiores nam natus nobis praesentium quaerat quam repellat saepe soluta! Aliquid animi culpa cum cumque earum ipsa officia repellendus vitae! Accusamus animi dignissimos dolorem eveniet id ipsam minima natus, necessitatibus nemo nulla officia quaerat quibusdam, reiciendis, saepe sequi sint temporibus veniam vitae! Ab aliquam at commodi consectetur dolores dolorum earum enim eveniet ex exercitationem fuga id ipsa labore laboriosam laborum neque omnis pariatur, quis quisquam saepe suscipit ullam vel veritatis.',
          code: 21332,
          rating: 100,
          totalReviews: 1,
          likes: 11,
          shares: 13,
          isLiked: true,
          isShared: true,
          newPrice: [150, 300],
          oldPrice: [300, 600],
          images: ['https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
          video: ['https://www.youtube.com/watch?v=c2SK1IlmYL8&t=667s'],
          hasVisualizer: true,
          is360: true,
          sellerInfo: {
            isFollowed: true,
            isSeller: false,
            isElite: false,
            userPhoto: require('@/assets/img/product-page/men.jpg'),
            accountType: 'Account type',
            blog: 'Blog seller',
            slug: 'Slag seller',
            id: 1,
            proType: 'Seller\'s info',
            userName: 'John Dow',
            rating: 80,
            reviewsCount: 3,
            phone: 80993225599,
            address: 'New York',
            webSite: 'https://en.wikipedia.org/wiki/New_York_City',
            facebookLink: 'https://www.facebook.com/',
            googleLink: 'https://google.com/',
            instagramLink: 'https://instagram.com/',
            linkedinLink: 'https://www.linkedin.com/',
            twitterLink: 'https://twitter.com/',
            youtubeLink: 'https://youtube.com/',
            pinterestLink: 'https://pinterest.com/',
          },
          options: [
            {
              title: 'Option title',
              filterItems: [
                {
                  id: 1,
                  selected: false,
                  image: require('@/assets/img/product-page/diary.jpg')
                }
              ]
            }
          ],
          attrsList: [
            {
              title: 'Attrs title'
            },
            {
              title: 'Attrs title - 2'
            },
            {
              title: 'Attrs title - 3',
              code: 35055
            }
          ],
        },
        selectedOptions: {
          qty: 10
        }
      },
      shopCtrl: {
        activeCategories: [
          {
            title: 'category'
          }
        ]
      }
    }
  },
  computed: {
    reviewCount() {
      return this.productPageCtrl.reviews.length
    }
  },
  methods: {
    addReview() {
      if (this.productPageCtrl.review.title !== '') {
        this.productPageCtrl.reviews.push({
          title: this.productPageCtrl.review.title,
          description: this.productPageCtrl.review.description
        });
        this.productPageCtrl.review.title = this.productPageCtrl.review.description = ''
      }
    },
    deleteReview(index) {
      this.productPageCtrl.reviews.splice(index, 1)
    },
    optionIsColor(option) {
      return /#[\da-fA-F]/i.test(option.swatchValue) || /^http/.test(option.swatchValue);
    },
    getOptionBackground(option) {
      return `background-image: url(${option.image})`;
    },
    getSelectedFilter(attribute) {
      return attribute
    },
    showImage(index) {
      index = index < 0 ? this.productPageCtrl.media.length - 1 : index > this.productPageCtrl.media.length - 1 ? 0 : index;
      this.productPageCtrl.mainMediaIndex = index;
    },
    setActiveCategory() {
      console.log('hello')
    },
    addToCart
  },
  components: {
    UserReview,
    UserAvatar,
    ProductItem,
    ProductRating,
    Carousel
  }
}
