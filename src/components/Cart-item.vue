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
            <div class="cart-item__size-item" :class="{ active: isActive }">S</div>
            <div class="cart-item__size-item" type="radio">M</div>
            <div class="cart-item__size-item" type="radio">L</div>
            <div class="cart-item__size-item">XL</div>
          </div>
        </a>
        <div class="cart-item__price">{{ itemTotalPrice }}.00 ₽</div>
        <div class="cart-item__counter">
          <div class="cart-item__counter__wrapper">
            <button class="cart-item__counter__button">−</button>
            <span class="cart-item__counter__quantity">
              {{ cartItemData.quantity }}
              </span>
            <button class="cart-item__counter__button">+</button>
          </div>
        </div>
      </div>
      <div class="cart-item__content__elements">
        <div class="cart-item__close-button__wrapper">
          <button class="cart-item__close-button" @click="removeCartItem">
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
      itemTotalPrice: 0,
    };
  },
  props: {
    cartItemData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    removeCartItem() {},
    calculateItemTotalPrice() {
      this.itemTotalPrice += this.cartItemData.product.price * this.cartItemData.quantity 
    },
  },

  mounted(){
    this.calculateItemTotalPrice();
  }
};
</script>

<style lang="scss"></style>
