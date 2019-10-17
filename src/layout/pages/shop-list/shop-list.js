export default {
  name: 'ShopList',
  data () {
    return {
      shopController: {
        image: '@/assets/img/product-page/iphone.jpg',
        activeCategory: 'Active category',
        activePhotoSrc: '',
        categoryData: {
          title: 'Categories',
          products: [
            {
              title: 'First product'
            },
            {
              title: 'Second product'
            },
            {
              title: 'Third product'
            }
          ]
        },
        categoriesList: [
          {
            name: 'Sport',
            title: 'Sport title'
          },
          {
            name: 'IT',
            title: 'IT title'
          },
          {
            name: 'Nature',
            title: 'Nature title'
          }
        ]
      }
    }
  }
}
