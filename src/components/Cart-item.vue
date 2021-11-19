<template>
  <div class="cart-item">
    <div class="card__inner">
      <div class="cart-item__quantity"></div>
      <button>Delete</button>
      <div class="card__content-wrapper">
        <div href="#" class="card__content-link">
          <img
            :src="require('@/assets/images/Catalog/' + cart_item_data.image)"
            alt="cloth"
            class="card__content-item"
          />
          <div
            class="card__content-sale"
            id="cardSale"
            v-if="this.cart_item_data.sale"
          >
            -{{ cart_item_data.sale }}%
          </div>
        </div>
        <div class="card__content-footer">
          <span class="card__content-footer-item">S</span>
          <span class="card__content-footer-item">M</span>
          <span class="card__content-footer-item">L</span>
          <span class="card__content-footer-item">XL</span>
        </div>
      </div>
    </div>
    <div class="card__footer">
      <a href="#" class="card__footer-title">{{ cart_item_data.title }}</a>
      <div class="card__footer-price">
        {{ cart_item_data.price }} ₽
        <span
          class="card__footer-price__sale"
          v-if="this.cart_item_data.sale_oldPrice"
        >
          {{ cart_item_data.sale_oldPrice }} ₽
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss"></style>
