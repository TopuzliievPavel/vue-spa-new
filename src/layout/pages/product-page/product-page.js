import UserReview from '../../../components/user-review/user-review.vue'
import ProductItem from '../../../components/product-item/product-item.vue'

export default {
  name: 'ProductPage',
  data () {
    return {
      productPageCtrl: {
        review: {
          title: '',
          description: '',
        },
        reviews: [
          {
            title: 'Review-1',
            description: "I think it's good product for our time"
          }
        ],
        similarProducts: [
          {
            title: 'First product'
          },
          {
            title: 'Second product'
          },
          {
            title: 'Another product'
          }
        ],
        media: [],
        mainMediaIndex: '',
        product: {
          title: 'Product title',
          code: 21332,
          rating: 100,
          totalReviews: 10,
          newPrice: [150, 300],
          oldPrice: [300, 600],
          options: [
            {
              title: 'option title',
              filterItems: [
                {
                  selected: 'true'
                }
              ]
            }
          ],
          images: [],
          video: [],
          hasVisualizer: 'hasVisualizer',
          is360: 'is360'
        },
        selectedOptions: {
          qty: 1000
        }
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
    }
  },
  components: {
    UserReview,
    ProductItem
  }
}
