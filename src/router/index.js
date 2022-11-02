import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Content from "./content";
import Login from "./login";

const routes = [
  {
    path: "/",
    name: "index",

    beforeEnter: (to, form, next) => {
      store.dispatch("checkUserLogin");

      next();
    },

    children: [Login, Content],
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
