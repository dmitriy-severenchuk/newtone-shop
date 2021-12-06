import { createRouter, createWebHistory } from 'vue-router';
import MainWrapper from '@/layouts/Main-wrapper';
// import Cart from '@/components/Cart'

const routes = [
  {
    path: '/',
    name: '',
    component: MainWrapper,

    children: [
      {
        path: '/',
        name: 'home-page',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: ()=> import('@/views/Cart-page.vue')
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
