import carousel from 'vue-owl-carousel'
import { addToCart } from "../../../core/loginUser";

export default {
  name: "DepartmentList",
  components: {
    carousel
  },
  data () {
    return {
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      departmentsCtrl: {
        categories: {
          children: [
            {
              id: 1,
              title: 'Lake',
              thumbnail: require('@/assets/img/department-list/lake.jpg'),
              defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
              limit: 0,
              children: [
                {
                  id: 15,
                  title: 'Subcategory 1'
                }
              ]
            },
            {
              id: 2,
              title: 'Bike',
              thumbnail: require('@/assets/img/department-list/bike.jpg'),
              defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
              limit: 0,
              children: [
                {
                  id: 17,
                  title: 'Subcategory 1'
                }
              ]
            },
            {
              id: 3,
              title: 'Sail-boats',
              thumbnail: require('@/assets/img/department-list/sail-boats.jpg'),
              defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
              limit: 0,
              children: [
                {
                  id: 18,
                  title: 'Subcategory 1'
                }
              ]
            },

            {
              id: 4,
              title: 'Horses',
              thumbnail: require('@/assets/img/department-list/horse.jpg'),
              defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
              limit: 0,
              children: [
                {
                  title: 'Subcategory 1'
                }
              ]
            }
          ]
        },
        data: {
          sliderContent: [
            {
              title: 'Venice',
              link: '/some-link',
              price: 18,
              newPrice: null,
              thumbnail: require('@/assets/img/department-list/venice.jpg'),
              defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg'
            },
            {
              title: 'Sunset',
              link: '/some-link',
              price: 38,
              newPrice: 0,
              thumbnail: require('@/assets/img/department-list/sunset.jpg'),
              defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg'
            },
            {
              title: 'Office team',
              link: '/some-link',
              price: 80,
              newPrice: 59,
              thumbnail: require('@/assets/img/department-list/team.jpg'),
              defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg'
            },
            {
              title: '',
              link: '/some-link',
              price: 140,
              newPrice: 0,
              thumbnail: require('@/assets/img/department-list/startup.jpg'),
              defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg'
            },
            {
              title: 'Airplane',
              link: '/some-link',
              price: 110,
              newPrice: 60,
              thumbnail: require('@/assets/img/department-list/dc.jpg'),
              defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg'
            },
            {
              title: 'Water-fall',
              link: '/some-link',
              price: 150,
              newPrice: 0,
              thumbnail: require('@/assets/img/department-list/water-fall.jpg'),
              defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg'
            },
            {
              title: 'City space',
              link: '/some-link',
              price: 210,
              newPrice: 0,
              thumbnail: require('@/assets/img/department-list/cityspace.jpg'),
              defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg'
            },
            {
              title: 'Military raptor',
              link: '/some-link',
              price: 190,
              newPrice: 0,
              thumbnail: require('@/assets/img/department-list/military-raptor.jpg'),
              defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg'
            }
          ],
          singleBanner: {
            title: 'Single banner title',
            text: 'Single banner text',
            link: '',
            thumbnail: require('@/assets/img/department-list/snow.jpg')
          }
        }
      }
    }
  },
  methods: {
    addToCart
  }
}
