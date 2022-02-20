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
            v-if="product_data.sale"
          >
            -{{ product_data.sale }}%
          </div>
        </a>
        <div class="card__content-buttons">
          <button
            href="#"
            class="card__content-buttons-link"
            @click="addToCart()"
          >
            <span class="card__content-buttons-item"
              ><fa icon="shopping-cart"
            /></span>
          </button>
          <button href="#" class="card__content-buttons-link" @click="clickToShowPopup(product_data)">
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
      <a href="#" class="card__footer-title">{{ product_data.title }}</a>
      <div class="card__footer-price">
        {{ product_data.price }} ₽
        <span
          class="card__footer-price__sale"
          v-if="product_data.sale_old_price"
        >
          {{ product_data.sale_old_price }} ₽
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Card',

  props: {
    product_data: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions(['SHOW_PRODUCT_POPUP']),
    addToCart() {
      this.$store.dispatch('ADD_TO_CART', {
        product: this.product_data, 'quantity': 1
        
      })
    },
    clickToShowPopup(){
      this.SHOW_PRODUCT_POPUP();
      this.$emit('popup_data', this.product_data)
    }
  },
  computed: {
    ...mapGetters(['GET_POPUP'])
  }
};
</script>
