import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//Swiper
import './plugins';
//Components
import AuthHeader from '@/components/Authorization/Auth-Header';
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import ProductPopup from '@/components/UI/Product-popup/Product-popup';
import ProductPopupMain from '@/components/UI/Product-popup/Product-popup-main';
import FilterPanel from '@/components/UI/FilterPanel';

// Auth
const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

library.add(fas);

createApp(App)
  .use(store)
  .component('fa', FontAwesomeIcon)
  .component('product-popup', ProductPopup)
  .component('product-popup-main', ProductPopupMain)
  .component('filter-panel', FilterPanel)
  .component('theFooter', TheFooter)
  .component('theHeader', TheHeader)
  .component('authHeader', AuthHeader)
  .use(router)
  .mount('#app');
