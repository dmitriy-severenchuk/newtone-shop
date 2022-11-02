import store from "../store";
import MainLayout from "@/layouts/MainLayout";

export default {
  path: "/",
  name: "content",
  component: MainLayout,
  beforeEnter: (to, from, next) => {
    const isLogged = store.getters["auth/getIsLogin"];

    if (isLogged) {
      if (to.name === "authorization.login") {
        next();
      } else {
        next({
          name: "authorization.login",
        });
      }
    } else {
      next();
    }
  },

  redirect: {
    name: "content.home",
  },

  children: [
    {
      path: "/home",
      name: "content.home",
      component: () => import("@/views/Home-view.vue"),
    },
    {
      path: "/cart",
      name: "content.cart",
      component: () => import("@/views/Cart-view.vue"),
    },
    {
      path: "/category/:categoryId",
      name: "content.category",
      component: () => import("@/views/Category-page-view.vue"),
    },
    {
      path: "/category/:categoryId/type/:type",
      name: "content.category.type",
      component: () => import("@/views/Category-page-view.vue"),
    },
    {
      path: "/subtype/:subtype",
      name: "content.subtype",
      component: () => import("@/views/Category-page-view.vue"),
    },
    {
      path: "/product/:productId",
      name: "content.product",
      component: () => import("@/views/Product-page-view.vue"),
    },
    {
      path: "/user",
      name: "content.user",
      component: () => import("@/views/User-page-view.vue"),
      // beforeEnter: ifAuthenticated,
    },
  ],
};
