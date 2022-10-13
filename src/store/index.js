import { createStore } from 'vuex';
import auth from './AuthAPI/auth';
import products from './products';

export default createStore({
  modules: {
    products,
    auth,
  },
});
