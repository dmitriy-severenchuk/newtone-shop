import { createRouter, createWebHistory } from 'vue-router';
import MainWrapper from '@/layouts/Main-wrapper';
import Authorization from '@/layouts/Authorization-wrappper';
import store from '../store';

// Authorization

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/login');
};

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainWrapper,

    children: [
      {
        path: '/',
        name: 'home-page',
        component: () => import('@/views/Home-view.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/Cart-view.vue'),
      },
      {
        path: '/category/:category',
        name: 'categoryPage',
        component: () => import('@/views/Category-page-view.vue'),
      },
      {
        path: '/category/:category/type/:type',
        name: 'typePage',
        component: () => import('@/views/Category-page-view.vue'),
      },
      {
        path: '/subtype/:subtype',
        name: 'subtypePage',
        component: () => import('@/views/Category-page-view.vue'),
      },
      {
        path: '/product/:id',
        name: 'productPage',
        component: () => import('@/views/Product-page-view.vue'),
      },
      {
        path: '/user',
        name: 'userPage',
        component: () => import('@/views/User-page-view.vue'),
        beforeEnter: ifAuthenticated,
      },
    ],
  },
  {
    path: '/login',
    name: 'authorization',
    component: Authorization,
    children: [
      {
        path: '/login',
        name: 'Login-page',
        component: () => import('@/views/Login-view.vue'),
        beforeEnter: ifNotAuthenticated,
      },
      {
        path: '/register',
        name: 'Register-page',
        component: () => import('@/views/Register-view.vue'),
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
