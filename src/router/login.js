import store from '../store';
import AuthorizationLayout from '@/layouts/AuthorizationLayout';

export default {
  path: '/',
  name: 'authorization',
  component: AuthorizationLayout,
  beforeEnter: (to, from, next) => {
    const isLogged = store.getters['getIsLogin'];

    if (isLogged) {
      next({
        name: 'content',
      });
    } else {
      next();
    }
  },

  redirect: {
    name: 'authorization.login',
  },

  children: [
    {
      path: '/login',
      name: 'authorization.login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'authorization.register',
      component: () => import('@/views/RegisterView.vue'),
    },
  ],
};
