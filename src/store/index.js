import { createStore } from 'vuex'

import products from './products';

export default createStore({
  modules: {
    products,
  }
})
