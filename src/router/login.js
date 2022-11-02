import store from "../store";
import AuthorizationLayout from "@/layouts/AuthorizationLayout";

export default {
  path: "/",
  name: "authorization",
  component: AuthorizationLayout,
  beforeEnter: (to, from, next) => {
    const isLogged = store.getters["auth/getIsLogin"];

    if (isLogged) {
      if (to.name === "content.home") {
        next();
      } else {
        next({
          name: "content.home",
        });
      }
    } else {
      next();
    }
  },

  redirect: {
    name: "authorization.login",
  },

  children: [
    {
      path: "/login",
      name: "authorization.login",
      component: () => import("@/views/Login-view.vue"),
    },
    {
      path: "/register",
      name: "authorization.register",
      component: () => import("@/views/Register-view.vue"),
    },
  ],
};
