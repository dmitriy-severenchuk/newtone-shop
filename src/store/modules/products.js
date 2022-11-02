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
        adress: 'г. Киев, ул. Сковороды, д. 5',
        phone_number: '+380 95 555 1236',
        timetable: 'пн-пт 10:00-19:00',
        id: 1,
      },
      {
        image: '2.webp',
        adress: 'г. Киев, ул. Политехническая, д. 18, стр. 11',
        phone_number: '+380 96 712 4256',
        timetable: 'пн-пт 10:00-20:00',
        id: 2,
      },
    ],
    showPopup: false,
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
        const { data } = await axios(
          'api/products/',
          {
            method: 'GET',
          }
        );

        commit('SET_PRODUCTS_TO_STATE', data);
        return data;
      } catch (e) {
        console.log(e);
      }
    },

    ADD_TO_CART({ commit }, { product, quantity, size, uniqueCartItemIndex }) {
      commit('SET_TO_CART', { product, quantity, size, uniqueCartItemIndex });
    },
    СLEAR_CART({ commit }) {
      commit('CLEAR_CART');
    },
    REMOVE_PRODUCT_FROM_CART({ commit }, uniqueCartItemIndex) {
      commit('REMOVE_PRODUCT_FROM_CART', uniqueCartItemIndex);
    },

    INCREMENT_CART_ITEM({ commit }, index) {
      commit('INCREMENT', index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit('DECREMENT', index);
    },
    GET_CART_ITEM_SIZE({ commit }, event) {
      commit('SET_CART_ITEM_SIZE', event);
    },
    SHOW_PRODUCT_POPUP({ commit }) {
      commit('CHANGE_POPUP_VALUE');
    },
    CLOSE_PRODUCT_POPUP({ commit }) {
      commit('CHANGE_POPUP_VALUE');
    },
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products.data;
    },

    SET_TO_CART: (state, { product, quantity, size, uniqueCartItemIndex }) => {
      let productInCart = state.cart.find((cart_item) => {
        return cart_item.product.id === product.id && cart_item.size === size;
      });

      if (productInCart) {
        productInCart.quantity += quantity;

        return;
      }

      state.cart.push({ product, quantity, size, uniqueCartItemIndex });
    },
    CLEAR_CART: (state) => {
      return (state.cart.length = 0);
    },
    REMOVE_PRODUCT_FROM_CART: (state, uniqueCartItemIndex) => {
      state.cart = state.cart.filter((cart_item) => {
        return cart_item.uniqueCartItemIndex !== uniqueCartItemIndex;
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
      return (state.showPopup = !state.showPopup);
    },
  },
};
