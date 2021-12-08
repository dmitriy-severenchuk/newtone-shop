<template>
  <div class="cart-item" @click="showQuantity">
    <div class="cart-item__image__wrapper">
      <img
        :src="require('@/assets/images/Catalog/' + cartItemData.image)"
        alt="cloth"
        class="cart-item__image"
      />
    </div>
    <div class="cart-item__content">
      <div class="cart-item__content__info">
        <a href="" class="cart-item__title-link">
          <h3 class="cart-item__title">{{ cartItemData.title }}</h3>
          <div class="cart-item__size">(SIZE)</div>
        </a>
        <div class="cart-item__price">{{ cartItemData.price }}.00 ₽</div>
        <div class="cart-item__counter">
          <div class="cart-item__counter__wrapper">
            <button class="cart-item__counter__button">-</button>
            <span class="cart-item__counter__quantity">{{quantity}} </span>
            <button class="cart-item__counter__button">+</button>
          </div>
        </div>
      </div>
      <div class="cart-item__content__elements">
        <div class="cart-item__close-button__wrapper">
          <button class="cart-item__close-button">
            &#10006;
          </button>
        </div>
        <div class="cart-item__total-price">total price</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    showQuantity() {
      console.log(this.cartItemData.quantity);
    },
  },
  // computed: {
  //   quantity() {
  //     return this.$store.getters.PRODUCT_QUANTITY(this.product);
  //   },
  // },
};
</script>

<style lang="scss"></style>
