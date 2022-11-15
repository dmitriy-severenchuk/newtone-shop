import MainLayout from '@/layouts/MainLayout.vue';

export default {
  path: '/',
  name: 'content',
  component: MainLayout,

  redirect: {
    name: 'content.home',
  },

  children: [
    {
      path: '/',
      name: 'content.home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/cart',
      name: 'content.cart',
      component: () => import('@/views/CartView.vue'),
    },
    {
      path: '/category/:category',
      name: 'content.category',
      component: () => import('@/views/CategoryPageView.vue'),
    },
    {
      path: '/category/:category/type/:type',
      name: 'content.category.type',
      component: () => import('@/views/CategoryPageView.vue'),
    },
    {
      path: '/subtype/:subtype',
      name: 'content.subtype',
      component: () => import('@/views/CategoryPageView.vue'),
    },
    {
      path: '/product/:productId',
      name: 'content.product',
      component: () => import('@/views/ProductPageView.vue'),
    },
    {
      path: '/user',
      name: 'content.user',
      component: () => import('@/views/UserPageView.vue'),
    },
  ],
};
