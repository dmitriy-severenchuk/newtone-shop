import { createStore } from 'vuex';
import products from './products';
import auth from './AuthAPI/auth';

export default createStore({
  modules: {
    products,
    auth,
  },
});
