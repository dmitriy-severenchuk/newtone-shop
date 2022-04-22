<template>
  <div class="product-page__wrapper">
    <transition name="popup__appear">
      <product-popup>
        <product-popup-main
          :popup_data="currentPopupItem"
          :popupItemSize="cardProductSize"
        />
      </product-popup>
    </transition>
    <div class="container">
      <div class="product-page__inner">
        <div class="product-page__flex-wrapper">
          <div class="product-page__image-wrapper">
            <img
              :src="require('@/assets/images/Catalog/' + productItem.image)"
              alt="cloth"
              class="product-page__image"
            />
            <div class="product-page__sale" id="sale" v-if="productItem.sale">
              -{{ productItem.sale }}%
            </div>
          </div>
          <div class="product-page__content-box">
            <h1 class="product-page__title">{{ productItem.title }}</h1>
            <div class="product-page__price-wrapper">
              <span class="product-page__price"
                >{{ productItem.price * productItemQuantity }} грн</span
              >
              <span
                class="product-page__old-price"
                v-if="productItem.sale_oldPrice"
              >
                {{ productItem.sale_oldPrice * productItemQuantity }} грн</span
              >
            </div>

            <div class="product-page__size">
              <div
                class="product-page__size-item"
                :class="{ 'active-size': productSize == 'S' }"
                @click="clickOnSizeButton($event)"
              >
                S
              </div>
              <div
                class="product-page__size-item"
                :class="{ 'active-size': productSize == 'M' }"
                @click="clickOnSizeButton($event)"
              >
                M
              </div>
              <div
                class="product-page__size-item"
                :class="{ 'active-size': productSize == 'L' }"
                @click="clickOnSizeButton($event)"
              >
                L
              </div>
              <div
                class="product-page__size-item"
                :class="{ 'active-size': productSize == 'XL' }"
                @click="clickOnSizeButton($event)"
              >
                XL
              </div>
            </div>
            <div class="product-page__add-to-cart__wrapper">
              <section
                class="product-page__add-to-cart__section"
                v-if="!productAlreadyInCart"
              >
                <div class="product-page__counter">
                  <div class="product-page__counter__wrapper">
                    <button
                      class="product-page__counter__button"
                      @click="decrementproductItemQuantity()"
                    >
                      −
                    </button>
                    <span class="product-page__counter__quantity">
                      {{ productItemQuantity }}
                    </span>
                    <button
                      class="product-page__counter__button"
                      @click="incrementproductItemQuantity()"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button class="product-page__button" @click="addToCart()">
                  В корзину
                </button>
              </section>
              <!-- Section Shows when Product in Cart -->
              <section
                class="product-page__add-to-cart__section"
                v-if="productAlreadyInCart"
              >
                <router-link :to="{ name: 'cart' }">
                  <div class="product-page__route-to-cart__button">
                    <span class="product-page__route-to-cart__button__text"
                      >Перейти в Корзину
                    </span>
                    <fa
                      icon="check"
                      class="product-page__route-to-cart__button__icon"
                    />
                  </div>
                </router-link>
              </section>
            </div>
            <div class="product-page__info">
              {{ productItem.info }}
            </div>
          </div>
        </div>
        <div class="product-page__flex-wrapper__bottom">
          <div class="product-page__catalog" v-if="filteredProducts.length">
            <div class="product-page__catalog__inner">
              <h2 class="product-page__catalog__title">
                Рекомендуемое для вас
              </h2>
              <swiper
                :slides-per-view="5"
                :space-between="20"
                :navigation="{ clickable: true }"
              >
                <swiper-slide
                  v-for="(product, id) in filteredProducts"
                  :key="id"
                >
                  <Card
                    :product_data="product"
                    @chosenItemSize="getItemSizeFromCard"
                    @popup_data="GetPopupData(id)"
                  />
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Card from '@/components/Card';

export default {
  data() {
    return {
      currentPopupItem: null,

      productItem: null,
      productSize: 'M',

      cardProductSize: 'М',
      productItemQuantity: 1,
    };
  },

  components: {
    Swiper,
    SwiperSlide,
    Card,
  },
  computed: {
    ...mapGetters(['CART', 'PRODUCTS', 'GET_POPUP']),

    currentUniqueIndex: function() {
      return `${this.productItem.id}${this.productSize}`;
    },
    productAlreadyInCart: function() {
      return this.CART.find((item) => {
        if (`${item.product.id}${item.size}` === this.currentUniqueIndex) {
          return true;
        }
      });
    },

    filteredProducts() {
      return this.PRODUCTS.filter((item) => {
        return (
          item.gender === this.productItem.gender &&
          item.id !== this.productItem.id
        );
      });
    },
  },
  beforeMount() {
    this.getItemFromProducts();
    this.getItemSizeFromCard();
  },

  methods: {
    ...mapActions(['ADD_TO_CART']),

    getItemFromProducts() {
      this.PRODUCTS.find((item) => {
        if (item.id == this.$route.params.id) {
          this.productItem = item;
        }
      });
    },

    // Methods to get Catalog (Swiper + Card) ---- //

    GetPopupData(id) {
      const arr = this.filteredProducts[id];
      this.currentPopupItem = arr;
    },

    getItemSizeFromCard(currentSize) {
      this.cardProductSize = currentSize;
    },

    // ---- Methods to get Catalog (Swiper + Card) //

    clickOnSizeButton(event) {
      this.productSize = event.target.innerHTML.trim();
    },

    incrementproductItemQuantity() {
      return this.productItemQuantity++;
    },
    decrementproductItemQuantity() {
      if (this.productItemQuantity >= 2) {
        return this.productItemQuantity--;
      }
    },

    addToCart() {
      this.$store.dispatch('ADD_TO_CART', {
        product: this.productItem,
        quantity: this.productItemQuantity,
        size: this.productSize,
        uniqueCartItemIndex: this.currentUniqueIndex,
      });
    },
  },
};
</script>

<style lang="scss"></style>
