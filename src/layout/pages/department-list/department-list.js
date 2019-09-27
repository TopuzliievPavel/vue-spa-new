export default {
  name: "DepartmentList",
  data () {
    return {
      departmentsCtrl: {
        categories: {
          children: [
            {
              id: 1,
              title: 'Lake',
              thumbnail: require('../../../assets/img/department-list/lake.jpg'),
              defaultImage: 'https://cdn3.housetipster.com/empty.jpg',
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
              thumbnail: require('../../../assets/img/department-list/bike.jpg'),
              defaultImage: 'https://cdn3.housetipster.com/empty.jpg',
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
              thumbnail: require('../../../assets/img/department-list/sail-boats.jpg'),
              defaultImage: 'https://cdn3.housetipster.com/empty.jpg',
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
              thumbnail: require('../../../assets/img/department-list/horse.jpg'),
              defaultImage: 'https://cdn3.housetipster.com/empty.jpg',
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
              newPrice: '',
              thumbnail: require('../../../assets/img/department-list/venice.jpg'),
              defaultImage: 'https://cdn3.housetipster.com/empty.jpg'
            },
            {
              title: 'Sunset',
              link: '/some-link',
              price: 38,
              newPrice: '',
              thumbnail: require('../../../assets/img/department-list/sunset.jpg'),
              defaultImage: 'https://cdn3.housetipster.com/empty.jpg'
            },
            {
              title: 'Office team',
              link: '/some-link',
              price: 80,
              newPrice: 59,
              thumbnail: require('../../../assets/img/department-list/team.jpg'),
              defaultImage: 'https://cdn3.housetipster.com/empty.jpg'
            },
            {
              title: '',
              link: '/some-link',
              price: 0,
              newPrice: '',
              thumbnail: '',
              defaultImage: 'https://cdn3.housetipster.com/empty.jpg'
            },
            {
              title: 'Airplane',
              link: '/some-link',
              price: 110,
              newPrice: 60,
              thumbnail: require('../../../assets/img/department-list/dc.jpg'),
              defaultImage: 'https://cdn3.housetipster.com/empty.jpg'
            },
            {
              title: 'Water-fall',
              link: '/some-link',
              price: 150,
              newPrice: 0,
              thumbnail: require('../../../assets/img/department-list/water-fall.jpg'),
              defaultImage: 'https://cdn3.housetipster.com/empty.jpg'
            },
            {
              title: 'City space',
              link: '/some-link',
              price: 210,
              newPrice: 0,
              thumbnail: require('../../../assets/img/department-list/cityspace.jpg'),
              defaultImage: 'https://cdn3.housetipster.com/empty.jpg'
            },
            {
              title: 'Military raptor',
              link: '/some-link',
              price: 190,
              newPrice: 0,
              thumbnail: require('../../../assets/img/department-list/military-raptor.jpg'),
              defaultImage: 'https://cdn3.housetipster.com/empty.jpg'
            }
          ],
          singleBanner: {
            title: 'Single banner title',
            text: 'Single banner text',
            link: '',
            thumbnail: require('../../../assets/img/department-list/snow.jpg')
          }
        }
      }
    }
  }
}
