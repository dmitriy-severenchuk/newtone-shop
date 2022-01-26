import axios from 'axios';

export default {
  state: {
    products: [],
    cart: [
      // {
      //   image: 'w1.webp',
      //   title: 'Твидовый кардиган из хлопка',
      //   price: '7490',
      //   sale: '',
      //   sale_oldPrice: '',
      //   category: 'Женщинам',
      //   id: 1,
      // },
    ],
  },

  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    CART_ITEM_COUNT(state){
      return state.cart.length;
    }
  },
  actions: {
    async GET_PRODUCTS_FROM_API({ commit }) {
      try {
        const { data } = await axios('http://localhost:3000/products', {
          method: 'GET',
        });

        // const result = data.data.map((item) => {
        //   item.price = item.price / 100;
        //   item.sale_old_price = item.sale_old_price / 100;
        //   return item;
        // });

        commit('SET_PRODUCTS_TO_STATE', data);
        return data;
      } catch (e) {
        console.log(e);
      }
    },

    ADD_TO_CART({ commit }, { product, quantity }) {
      commit('SET_TO_CART', { product, quantity });
    },

  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_TO_CART: (state, { product, quantity }) => {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });

      if (productInCart) {
        productInCart.quantity += quantity;
        return;
      }

      state.cart.push({ product, quantity });
    },
  },
};
