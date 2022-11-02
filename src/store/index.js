import { createStore } from 'vuex';
import products from './modules/products';
import auth from './modules/auth';

export default createStore({
  modules: {
    products,
    auth,
  },
});
