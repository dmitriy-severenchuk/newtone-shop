import axios from 'axios';

export default {
  state: {
    products: [],
    cart: [],
    categories: [
      { name: 'Все', value: '' },
      { name: 'Мужчинам', value: 1 },
      { name: 'Женщинам', value: 2 },
    ],
  },

  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    CART_ITEM_COUNT(state) {
      return state.cart.length;
    },
    CART_TOTAL_PRICE(state){
      let total = 0;

      state.cart.forEach(item => {
        total += item.product.price * item.quantity;
      })

      return total;
    }
    ,
    CATEGORIES(state){
      return state.categories;
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

      axios.post('')
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
