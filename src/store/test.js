import axios from 'axios';

export default {
  state: {
    products: [],
    cart: []
  },

  getters: {
    PRODUCTS(state){
      return state.products;
    },
    CART(state){
      return state.cart;
    }
  },

  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios( 'http://localhost:3000/products', {
      method: "GET"
      })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })
    },
    ADD_TO_CART({commit}, product){
      commit('SET_CART', product)
    }
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      state.cart.push(product)
    }
  },

  
};
