<template>
  <transition name="popup__appear">
    <product-popup>
      <product-popup-main :popup_data="currentItem" :popupItemSize="itemSize" />
    </product-popup>
  </transition>

  <div class="catalog" v-if="filteredProducts.length">
    <div class="catalog__inner">
      <Select :selected="selected" @select="changeCategory" />
      <h2 class="catalog__title">{{ selected }}</h2>
      <h3 class="catalog__subtitle">Новинки</h3>
      <swiper class="swiper" :slides-per-view="5" :space-between="20" :breakpoints="swiperOptions.breakpoints"
        :navigation="{ clickable: true }">
        <swiper-slide v-for="(product, id) in filteredProducts" :key="id">
          <Card :product_data="product" @chosenItemSize="getItemSizeFromCard" @popup_data="GetPopupData(id)" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Card from '@/components/Card';
import Select from '@/components/Select';

export default {
  components: {
    Card,
    Swiper,
    SwiperSlide,
    Select,
  },

  data() {
    return {
      currentItem: null,
      selected: 'Все',
      itemSize: '',
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

  computed: {
    ...mapGetters(['PRODUCTS']),

    filteredProducts() {
      return this.selected === 'Все'
        ? this.PRODUCTS
        : this.PRODUCTS.filter((f) => f.category === this.selected);
    },
  },

  beforeMount() {
    this.getItemSizeFromCard();
  },

  methods: {
    ...mapActions(['ADD_TO_CART']),

    getItemSizeFromCard(currentSize) {
      this.itemSize = currentSize;
    },

    changeCategory(category) {
      this.selected = category.name;
    },

    GetPopupData(id) {
      const obj = this.filteredProducts[id];
      this.currentItem = obj;
    },
  },
};
</script>

<style lang="scss">

</style>
