import Vue from 'vue'
import Router from 'vue-router'

// import MainPage     from '@/layout/pages/main-page/main-page.vue'
// import ComingSoon   from '@/layout/pages/coming-soon/coming-soon.vue'
// import VrList       from '@/layout/pages/virtual-room-list/vr-list.vue'
// import SignIn       from '@/layout/pages/sign-in/sign-in.vue'
// import RegUser      from '@/layout/pages/registration/reg-user.vue'
// import UserProfile  from '@/layout/pages/user-profile/user-profile.vue'


export const MainPage = () => import(/* webpackChunkName: 'MainPage' */ '@/layout/pages/main-page/main-page.vue');
export const ComingSoon = () => import(/* webpackChunkName: 'ComingSoon' */ '@/layout/pages/coming-soon/coming-soon.vue');
export const VrList = () => import(/* webpackChunkName: 'VrList' */ '@/layout/pages/virtual-room-list/vr-list.vue');
export const GalleryList = () => import(/* webpackChunkName: 'VrList' */ '@/layout/pages/gallery-list/gallery-list.vue');
export const StoreFront = () => import(/* webpackChunkName: 'VrList' */ '@/layout/pages/store-front/store-front.vue');
export const SignIn = () => import(/* webpackChunkName: 'SignIn' */ '@/layout/pages/sign-in/sign-in.vue');
export const RegUser = () => import(/* webpackChunkName: 'RegUser' */ '@/layout/pages/registration/reg-user.vue');
export const UserProfile = () => import(/* webpackChunkName: 'UserProfile' */ '@/layout/pages/user-profile/user-profile.vue');
export const ArticleList = () => import(/* webpackChunkName: 'ArticleList' */ '@/layout/pages/article-list/article-list.vue');
export const ArticlePage = () => import(/* webpackChunkName: 'ArticlePage' */ '@/layout/pages/article-page/article-page.vue');
export const ArticleEdit = () => import(/* webpackChunkName: 'ArticleEdit' */ '@/layout/pages/article-edit/article-edit.vue');
export const DepartmentList = () => import(/* webpackChunkName: 'ArticleEdit' */ '@/layout/pages/department-list/department-list.vue');
export const ShopList = () => import(/* webpackChunkName: 'ArticleEdit' */ '@/layout/pages/shop-list/shop-list.vue');
export const CartPage = () => import(/* webpackChunkName: 'ArticleEdit' */ '@/layout/pages/cart-page/cart-page.vue');
export const ProductPage = () => import(/* webpackChunkName: 'ArticleEdit' */ '@/layout/pages/product-page/product-page.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',             name: 'MainPage',     component: MainPage},
    {path: '/virtual-room', name: 'VrList',       component: VrList},
    {path: '/gallery',      name: 'GalleryList',  component: GalleryList},
    {path: '/store-front',  name: 'StoreFront',   component: StoreFront},
    {path: '/registration', name: 'RegUser',      component: RegUser},
    {path: '/sign-in',      name: 'SignIn',       component: SignIn},
    {path: '/user-profile', name: 'UserProfile',  component: UserProfile},
    {path: '/media',        name: 'ArticleList',  component: ArticleList},
    {path: '/media/:slug',  name: 'ArticlePage',  component: ArticlePage},
    {path: '/media-edit',   name: 'ArticleEdit',  component: ArticleEdit},
    {path: '/department-list', name: 'DepartmentList',  component: DepartmentList},
    {path: '/shop-list',    name: 'ShopList',  component: ShopList},
    {path: '/cart-page',    name: 'CartPage',  component: CartPage},
    {path: '/product-page',    name: 'ProductPage',  component: ProductPage},
    {path: '/coming-soon',  name: 'ComingSoon',   component: ComingSoon},
    {path: '*',             redirect: '/coming-soon'}
  ]
})
