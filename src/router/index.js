import { createRouter, createWebHistory } from 'vue-router';
import MainWrapper from '@/layouts/Main-wrapper';

const routes = [
  {
    path: '/',
    name: '',
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
        component: ()=> import('@/views/Cart-page.vue')
      },
      {
        path: '/men',
        name: 'men',
        component: ()=> import('@/views/Men-page.vue')
      },
      {
        path: '/women',
        name: 'women',
        component: ()=> import('@/views/Women-page.vue')
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
