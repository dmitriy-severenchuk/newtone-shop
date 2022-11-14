<template>
  <div class="cart-item">
    <div class="cart-item__image__wrapper" :style="{ 'background-image': 'url(' + cartItemData.product.image + ')' }">
      <div class="cart-item__sale" id="cardSale" v-if="cartItemData.product.sale">
        -{{ cartItemData.product.sale }}%
      </div>
    </div>
    <div class="cart-item__content">
      <div class="cart-item__content__info">
        <h3 class="cart-item__title">{{ cartItemData.product.title }}</h3>
        <div class="cart-item__size">
          Размер: <span>{{ cartItemData.size }}</span>
        </div>
        <div class="cart-item__price">
          {{ cartItemData.product.price/100 * cartItemData.quantity }} грн
        </div>
        <div class="cart-item__counter">
          <div class="cart-item__counter__wrapper">
            <button class="cart-item__counter__button" @click="decrementCartItem">
              −
            </button>
            <span class="cart-item__counter__quantity">
              {{ cartItemData.quantity }}
            </span>
            <button class="cart-item__counter__button" @click="incrementCartItem">
              +
            </button>
          </div>
        </div>
      </div>
      <div class="cart-item__content__elements">
        <div class="cart-item__close-button__wrapper">
          <button class="cart-item__close-button" @click="removeCartItemFromCart(cartItemData.uniqueCartItemIndex)">
            &#10006;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  props: {
    cartItemData: {
      type: Object,
      default: () => { },
    },
  },
  methods: {
    ...mapActions(['GET_CART_ITEM_SIZE']),
    removeCartItemFromCart(uniqueCartItemIndex) {
      this.$store.dispatch('REMOVE_PRODUCT_FROM_CART', uniqueCartItemIndex);
    },
    decrementCartItem() {
      this.$emit('decrement');
    },
    incrementCartItem() {
      this.$emit('increment');
    },
  },
};
</script>

<style lang="scss">

</style>
