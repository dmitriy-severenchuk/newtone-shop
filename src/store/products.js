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
    filiations: [
      {
        image: '1.webp',
        adress: 'Новорязанская ул., 18, стр. 11',
        phone_number: '7 800 555-10-61',
        timetable: 'пн-пт 10:00-19:00',
        id: 1,
      },
      {
        image: '2.webp',
        adress: 'г. Москва, ул. Новорязанская, 18, стр. 11',
        phone_number: '7 495 649-83-14',
        timetable: 'пн-пт 10:00-20:00',
        id: 2,
      },
    ],
    showPopup: true
  },

  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    CART_ITEMS_COUNT(state) {
      Array.prototype.sum = function(prop) {
        let totalCount = 0;
        for (let i = 0; i < this.length; i++) {
          totalCount += this[i][prop];
        }
        return totalCount;
      };
      return state.cart.sum('quantity');
    },
    CART_TOTAL_PRICE(state) {
      let totalPrice = 0;

      state.cart.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
      });

      return totalPrice;
    },
    CATEGORIES(state) {
      return state.categories;
    },

    FILIATION(state) {
      return state.filiations;
    },
    GET_POPUP(state) {
      return state.showPopup;
    },
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

    removeProductFromCart({ commit }, product) {
      commit('REMOVE_PRODUCT_FROM_CART', product);
    },

    INCREMENT_CART_ITEM({ commit }, index) {
      commit('INCREMENT', index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit('DECREMENT', index);
    },
    SHOW_PRODUCT_POPUP({commit}){
      commit('CHANGE_POPUP_VALUE')
    }
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

    REMOVE_PRODUCT_FROM_CART: (state, product) => {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== product.id;
      });
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity >= 2) {
        return state.cart[index].quantity--;
      } else {
        return 1;
      }
    },
    CHANGE_POPUP_VALUE: (state) => {
      console.log(state.showPopup)
      return state.showPopup = true;
    }
  },
};
