<template>
  <div class="cart-item">
    <div class="cart-item__image__wrapper">
      <img
        :src="require('@/assets/images/Catalog/' + cartItemData.product.image)"
        alt="cloth"
        class="cart-item__image"
      />
    </div>
    <div class="cart-item__content">
      <div class="cart-item__content__info">
        <a href="#" class="cart-item__title-link">
          <h3 class="cart-item__title">{{ cartItemData.product.title }}</h3>
          <div class="cart-item__size">
            <div
              class="cart-item__size-item"
              :class="{ 'active-size': this.cartItemSize === 'S' }"
              @click="this.cartItemSize = 'S'"
            >
              S
            </div>
            <div
              class="cart-item__size-item"
              :class="{ 'active-size': this.cartItemSize === 'M' }"
              @click="this.cartItemSize = 'M'"
            >
              M
            </div>
            <div
              class="cart-item__size-item"
              :class="{ 'active-size': this.cartItemSize === 'L' }"
              @click="this.cartItemSize = 'L'"
            >
              L
            </div>
            <div
              class="cart-item__size-item"
              :class="{ 'active-size': this.cartItemSize === 'XL' }"
              @click="this.cartItemSize = 'XL'"
            >
              XL
            </div>
            <!-- <div class="cart-item__size-item">S</div>
            <div class="cart-item__size-item">M</div>
            <div class="cart-item__size-item">L</div>
            <div class="cart-item__size-item">XL</div> -->
          </div>
        </a>
        <div class="cart-item__price">
          {{ cartItemData.product.price }}.00 ₽
        </div>
        <div class="cart-item__counter">
          <div class="cart-item__counter__wrapper">
            <button
              class="cart-item__counter__button"
              @click="decrementCartItem"
            >
              −
            </button>
            <span class="cart-item__counter__quantity">
              {{ cartItemData.quantity }}
            </span>
            <button
              class="cart-item__counter__button"
              @click="incrementCartItem"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div class="cart-item__content__elements">
        <div class="cart-item__close-button__wrapper">
          <button
            class="cart-item__close-button"
            @click="removeCartItemFromCart(cartItemData.product)"
          >
            &#10006;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItemSize: '',
    };
  },
  props: {
    cartItemData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getSize() {
      console.log(this.size);
    },
    removeCartItemFromCart(product) {
      this.$store.dispatch('removeProductFromCart', product);
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
