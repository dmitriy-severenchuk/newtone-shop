import { createRouter, createWebHistory } from 'vue-router';
import MainWrapper from '@/layouts/Main-wrapper';

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainWrapper,

    children: [
      {
        path: '/',
        name: 'home-page',
        component: () => import('@/views/Home-page.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/Cart-page.vue'),
      },
      {
        path: '/:gender',
        name: 'genderPage',
        component: () => import('@/views/Category-page-view.vue'),
      },
      {
        path: '/:gender/:category',
        name: 'categoryPage',
        component: () => import('@/views/Category-page-view.vue'),
      },
      {
        path: '/:gender/:subcategory',
        name: 'subcategoryPage',
        component: () => import('@/views/Category-page-view.vue'),
      },
      {
        path: '/:id',
        name: 'productPage',
        component: () => import('@/views/Product-page-view.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
