import { createRouter, createWebHistory } from 'vue-router'
import { ProductsView, NewView, TrendingView, LikedView, SavedView, UserProductsView, ImageView, PurchasedView, UploadView, ProfileView } from '@/views'
import HomeLayout from '../Layouts/HomeLayout.vue'
import ProductLayout from '../Layouts/ProductLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: {
        layout: HomeLayout
      }
    },
    {
      path: '/new',
      name: 'new',
      component: NewView,
      meta: {
        layout: HomeLayout
      }
    },
    {
      path: '/trending',
      name: 'trending',
      component: TrendingView,
      meta: {
        layout: HomeLayout
      }
    },
    {
      path: '/liked',
      name: 'liked',
      component: LikedView,
      meta: {
        layout: HomeLayout
      }
    },
    {
      path: '/saved',
      name: 'saved',
      component: SavedView,
      meta: {
        layout: HomeLayout
      }
    },
    {
      path: '/image',
      name: 'image',
      component: ImageView,
      meta: {
        layout: HomeLayout
      }
    },
    {
      path: '/purchased',
      name: 'purchased',
      component: PurchasedView,
      meta: {
        layout: HomeLayout
      }
    },
    {
      path: '/userProducts',
      name: 'userProducts',
      component: UserProductsView,
      meta: {
        layout: ProductLayout
      }
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadView,
      meta: {
        layout: ProductLayout
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        layout: ProductLayout
      }
    },
  ]
})

export default router
