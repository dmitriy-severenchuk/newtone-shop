<template>
  <div class="product-page__wrapper">
    <transition name="popup__appear">
      <product-popup>
        <product-popup-main :popup_data="currentPopupItem" :popupItemSize="cardProductSize" />
      </product-popup>
    </transition>
    <div class="container">
      <div class="product-page__inner">
        <div class="product-page__flex-wrapper">
          <div class="product-page__image-wrapper"
            :style="{ 'background-image': 'url(' + getItemFromProducts.image + ')' }">
            <div class="product-page__sale" id="sale" v-if="getItemFromProducts.sale">
              -{{ getItemFromProducts.sale }}%
            </div>
          </div>
          <div class="product-page__content-box">
            <h1 class="product-page__title">{{ getItemFromProducts.title }}</h1>
            <div class="product-page__price-wrapper">
              <span class="product-page__price">{{ getItemFromProducts.price/100 * productItemQuantity }} грн</span>
              <span class="product-page__old-price" v-if="getItemFromProducts.sale_old_price">
                {{ getItemFromProducts.sale_old_price/100 * productItemQuantity }} грн</span>
            </div>

            <div class="product-page__size">
              <div class="product-page__size-item" :class="{ 'active-size': productSize == 'S' }"
                @click="clickOnSizeButton($event)">
                S
              </div>
              <div class="product-page__size-item" :class="{ 'active-size': productSize == 'M' }"
                @click="clickOnSizeButton($event)">
                M
              </div>
              <div class="product-page__size-item" :class="{ 'active-size': productSize == 'L' }"
                @click="clickOnSizeButton($event)">
                L
              </div>
              <div class="product-page__size-item" :class="{ 'active-size': productSize == 'XL' }"
                @click="clickOnSizeButton($event)">
                XL
              </div>
            </div>
            <div class="product-page__add-to-cart__wrapper">
              <section class="product-page__add-to-cart__section" v-if="!productAlreadyInCart">
                <div class="product-page__counter">
                  <div class="product-page__counter__wrapper">
                    <button class="product-page__counter__button" @click="decrementproductItemQuantity()">
                      −
                    </button>
                    <span class="product-page__counter__quantity">
                      {{ productItemQuantity }}
                    </span>
                    <button class="product-page__counter__button" @click="incrementproductItemQuantity()">
                      +
                    </button>
                  </div>
                </div>
                <button class="product-page__button" @click="addToCart()">
                  В корзину
                </button>
              </section>
              <!-- Section Shows when Product in Cart -->
              <section class="product-page__add-to-cart__section" v-if="productAlreadyInCart">
                <router-link :to="{ name: 'cart' }">
                  <div class="product-page__route-to-cart__button">
                    <span class="product-page__route-to-cart__button__text">Перейти в Корзину
                    </span>
                    <fa icon="check" class="product-page__route-to-cart__button__icon" />
                  </div>
                </router-link>
              </section>
            </div>
            <div class="product-page__info">
              <p class="product-page__info-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                laboriosam,
                illum autem accusamus,
                aliquid
                suscipit fugit commodi officiis provident eveniet dicta necessitatibus quisquam! Ab repudiandae adipisci
                est voluptates consequuntur praesentium?</p>
              <p class="product-page__info-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quas
                nisi sint illum soluta tempore
                esse
                rerum. Dicta ut, neque harum hic nam quibusdam. Esse, necessitatibus cumque. Beatae, repudiandae rem!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laboriosam, illum autem accusamus,
                aliquid
                suscipit fugit commodi officiis provident eveniet dicta necessitatibus quisquam! Ab repudiandae adipisci
                est voluptates consequuntur praesentium?</p>

              <p class="product-page__info-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                quas nisi sint illum soluta tempore
                esse
                rerum. Dicta ut, neque harum hic nam quibusdam. Esse, necessitatibus cumque. Beatae, repudiandae rem!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laboriosam, illum autem accusamus,
                aliquid
                suscipit fugit commodi officiis provident eveniet dicta necessitatibus quisquam! Ab repudiandae adipisci
                est voluptates consequuntur praesentium?</p>


            </div>
          </div>
        </div>
        <div class="product-page__flex-wrapper__bottom">
          <div class="product-page__catalog" v-if="filteredProducts.length">
            <div class="product-page__catalog__inner">
              <h2 class="product-page__catalog__title">
                Рекомендуемое для вас
              </h2>
              <swiper :slides-per-view="5" :space-between="20" :navigation="{ clickable: true }"
                :breakpoints="swiperOptions.breakpoints">
                <swiper-slide v-for="(product, id) in filteredProducts" :key="id">
                  <Card :product_data="product" @chosenItemSize="getItemSizeFromCard" @popup_data="GetPopupData(id)" />
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
      productSize: 'M',

      cardProductSize: 'М',
      productItemQuantity: 1,
      swiperOptions: {
        breakpoints: {
          1: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          421: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          601: {
            slidesPerView: 3,
            spaceBetween: 17,
          },
          851: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1231: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        },
      },
    };
  },

  components: {
    Swiper,
    SwiperSlide,
    Card,
  },
  computed: {
    ...mapGetters(['CART', 'PRODUCTS', 'GET_POPUP']),

    onItemChange: function () {
      return this.getItemFromProducts;
    },

    currentUniqueIndex: function () {
      return `${this.getItemFromProducts.id}${this.productSize}`;
    },
    productAlreadyInCart: function () {
      return this.CART.find((item) => {
        if (`${item.product.id}${item.size}` === this.currentUniqueIndex) {
          return true;
        }
      });
    },

    filteredProducts: function () {
      return this.PRODUCTS.filter((item) => {
        return (
          item.category === this.getItemFromProducts.category &&
          item.id !== this.getItemFromProducts.id
        );
      });
    },
    getItemFromProducts: function () {
      return this.PRODUCTS.find((item) => item.id === this.$route.params.id)
    }
  },
  methods: {
    ...mapActions(['ADD_TO_CART']),

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
        product: this.getItemFromProducts,
        quantity: this.productItemQuantity,
        size: this.productSize,
        uniqueCartItemIndex: this.currentUniqueIndex,
      });
    },
  },
  beforeMount() {
    this.getItemSizeFromCard();
  },


};
</script>

