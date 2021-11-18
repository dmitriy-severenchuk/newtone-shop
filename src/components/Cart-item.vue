<template>
  <div class="cart-item">
    <div class="card__inner">
      <div class="card__content-wrapper">
        <a href="#" class="card__content-link">
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
        </a>
        <div class="card__content-buttons">
          <button href="#" class="card__content-buttons-link"
          @click="addToCart"
            ><span class="card__content-buttons-item"><fa icon="shopping-cart"/></span> 
          </button>
          <button href="#" class="card__content-buttons-link">
            <span class="card__content-buttons-item"><fa icon="eye"/></span>
          </button>
        </div>
        <div class="card__content-footer">
          <a href="#" class="card__content-footer-item">S</a>
          <a href="#" class="card__content-footer-item">M</a>
          <a href="#" class="card__content-footer-item">L</a>
          <a href="#" class="card__content-footer-item">XL</a>
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
                return {}
            }
        }
    }
};
</script>

<style lang="scss"></style>
