import axios from 'axios';

export default {
  state: {
    products: [],
    cart: [
      {
        image: 'w1.webp',
        title: 'Твидовый кардиган из хлопка',
        price: '7490',
        sale: '',
        sale_oldPrice: '',
        category: 'Женщинам',
        id: 1,
      },
    ],
  },

  getters: {
    // PRODUCT_QUANTITY: (state, product) => {
    //   const item = state.cart.find(i, i.id === product.id);
    //   if (item) {
    //     return item.quantity;
    //   } else {
    //     return null;
    //   }
    // },
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },

  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET',
      }).then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      });
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_TO_CART', product);
    },
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_TO_CART: (state, product) => {
      state.cart.push(product);

    //   let item = state.cart.find(i => i.id === product.id)
    //   if(item){
    //     item.quantity++
    //   } else {
    //     state.cart.push({...product, quantity: 1})
    //   }
    // },
    }
  },
};
