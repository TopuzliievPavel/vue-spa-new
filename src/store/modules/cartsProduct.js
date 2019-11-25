export default {
  namespaced: true,
  state: {
    storeFrontList: [
      {
        id: 1,
        price: 50,
        link: '/some-link',
        thumbnail: require('@/assets/img/store-front-page/bathoil-popular.jpg'),
        defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
        title: 'Bath-oil',
        quantity: 1,
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
        similarProducts: [
          {
            title: 'Another product',
            link: '/some-link'
          }
        ]
      },
      {
        id: 2,
        price: 59.99,
        link: '/some-link',
        thumbnail: require('@/assets/img/store-front-page/office-popular.jpg'),
        defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
        title: 'Office',
        quantity: 1,
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
        similarProducts: [
          {
            title: 'Notebook',
            link: '/department-list'
          },
          {
            title: 'Office team',
            link: '/department-list'
          }
        ],
      },
      {
        id: 3,
        price: 40,
        link: '/some-link',
        thumbnail: require('@/assets/img/store-front-page/board-popular.jpg'),
        defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
        title: 'Board',
        quantity: 1,
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
        similarProducts: [
          {
            title: 'Another product',
            link: '/some-link'
          }
        ]
      },
      {
        id: 4,
        price: 20,
        link: '/some-link',
        thumbnail: require('@/assets/img/store-front-page/iphone-popular.jpg'),
        defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
        title: 'Iphone',
        quantity: 1,
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
        similarProducts: [
          {
            title: 'Another product',
            link: '/some-link'
          }
        ]
      },
      {
        id: 5,
        price: 90,
        link: '/some-link',
        thumbnail: require('@/assets/img/store-front-page/technology-popular.jpg'),
        defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
        title: 'Technology',
        quantity: 1,
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
        similarProducts: [
          {
            title: 'Another product',
            link: '/some-link'
          }
        ]
      },
      {
        id: 6,
        price: 75,
        link: '/some-link',
        thumbnail: require('@/assets/img/store-front-page/visa-popular.jpg'),
        defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
        title: 'Visa',
        quantity: 1,
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
        similarProducts: [
          {
            title: 'Another product',
            link: '/some-link'
          }
        ]
      },
      {
        id: 7,
        price: 65,
        link: '/some-link',
        thumbnail: require('@/assets/img/store-front-page/premium-popular.jpg'),
        defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
        title: 'Premium',
        quantity: 1,
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
        similarProducts: [
          {
            title: 'Another product',
            link: '/some-link'
          }
        ]
      },
      {
        id: 8,
        price: 100,
        link: '/some-link',
        thumbnail: require('@/assets/img/store-front-page/idea-popular.jpg'),
        defaultImage: 'https://s3.amazonaws.com/HT-Shop/default_shop.jpg',
        title: 'Idea',
        quantity: 1,
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
        similarProducts: [
          {
            title: 'Another product',
            link: '/some-link'
          }
        ]
      }
    ],
    cartProducts: []
  },
  mutations: {
    addToCart(state, product) {
      let findId = state.cartProducts.find(item => item.id === product.id);

      if (findId) {
        findId.quantity++
      } else {
        state.cartProducts.push(product);
      }

      console.log('------product---------', product);
      console.log('------cartProducts---------', state.cartProducts)
    },
    deleteFromCart(state, product) {
      let productId = state.cartProducts.find(item => item.id === product.id);
      let cartItem = state.cartProducts.indexOf(product);

      if (productId) {
        productId.quantity--
      }
      if (productId.quantity < 1) {
        state.cartProducts.splice(cartItem, 1);
      }
      if (productId.quantity <= 0) {
        productId.quantity = 1
      }
    }
  },
  getters: {
    cartsCount(state) {
      return state.cartProducts.length;
    }
  }
}
