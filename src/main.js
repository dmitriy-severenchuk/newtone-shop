import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//Swiper
import './UI/Swiper/swiper';



library.add(fas);

createApp(App)
  .use(store)
  .component('fa', FontAwesomeIcon)
  .use(router)
  .mount('#app');


  