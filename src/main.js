import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//Swiper
import './plugins';
//Components
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import ProductPopup from '@/components/UI/Product-popup/Product-popup';
import ProductPopupMain from '@/components/UI/Product-popup/Product-popup-main';


library.add(fas);



createApp(App)
  .use(store)
  .component('fa', FontAwesomeIcon)
  .component('product-popup', ProductPopup)
  .component('product-popup-main', ProductPopupMain)
  .component('theFooter', TheFooter)
  .component('theHeader', TheHeader)
  .use(router)
  .mount('#app');
