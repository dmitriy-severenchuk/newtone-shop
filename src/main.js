import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import fontawesome from "./plugins/fontawesome";
import axios from "./plugins/axios";
import components from "./plugins/ui";
// import swiper from "./plugins/swiper";

const app = createApp(App);

components.forEach((element) => {
  app.component(element.name, element);
});

app.component("fa", fontawesome);

app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);
app.use(store);
app.use(router);
app.mount("#app");
