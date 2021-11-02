<template>
  <div class="card">
    <div class="card__inner">
      <div class="card__content-wrapper">
        <a href="#" class="card__content-link">
          <img
            :src="require('@/assets/images/Catalog/' + product_data.image)"
            alt="cloth"
            class="card__content-item"
          />
          <div
            class="card__content-sale"
            id="cardSale"
            v-if="this.product_data.sale"
          >
            -{{ product_data.sale }}%
          </div>
        </a>
        <div class="card__content-buttons">
          <a href="#" class="card__content-buttons-link"
            ><span class="card__content-buttons-item"
              ><fa icon="heart"/></span>
          </a>
          <a href="#" class="card__content-buttons-link">
            <span class="card__content-buttons-item"
              ><fa icon="eye"/></span>
          </a>
        </div>
        <div class="card__content-footer">
          <a href="#" class="card__content-footer-item">S</a>
          <a href="#" class="card__content-footer-item">M</a>
          <a href="#" class="card__content-footer-item">L</a>
          <a href="#" class="card__content-footer-item">XL</a>
        </div>
      </div>
    </div>
    <div class="card__footer" >
      <a href="#" class="card__footer-title">{{ product_data.title }}</a>
      <div class="card__footer-price">
        {{ product_data.price }} ₽
        <span
          class="card__footer-price__sale"
          v-if="this.product_data.sale_oldPrice"
        >
          {{ product_data.sale_oldPrice }} ₽
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {};
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>
