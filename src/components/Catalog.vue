<template>
  <ProductPopup>
    
  </ProductPopup>
  <div class="catalog" v-if="filteredProducts.length">
    <div class="catalog__inner">
      <Select :selected="selected" @select="sortByCategories" />
      <h2 class="catalog__title">{{ selected }}</h2>
      <h3 class="catalog__subtitle">Новинки</h3>
      <swiper
        :slides-per-view="5"
        :space-between="20"
        :navigation="{ clickable: true }"
      >
        <swiper-slide v-for="(product, id) in filteredProducts" :key="id">
          <Card :product_data="product" @addToCart="addToCart"/>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Select from '@/components/Select';
import { mapActions } from 'vuex';

import ProductPopup from '@/components/UI/Product-popup/';

export default {
  components: {
    Card,
    Swiper,
    SwiperSlide,
    Select,
    ProductPopup,
  },

  data() {
    return {
      selected: 'Все',
      products: [],
      sortedProducts: [],
    };
  },

  computed: {
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.products;
      }
    },
  },

  beforeMount() {
    this.initProducts();
  },

  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),

    async initProducts() {
      this.products = await this.GET_PRODUCTS_FROM_API();
    },

    addToCart(data) {
      this.ADD_TO_CART(data);
    },

    sortByCategories(category) {
      this.selected = category.name;
      this.sortedProducts = [];
      this.products.forEach((item) => {
        if (item.category === category.name) {
          this.sortedProducts.push(item);
        } else if (!category.value) {
          this.sortedProducts = this.products.slice();
        }
      });

      // Убрал (item.category_id === category.value) - с этим не работает сортировка
    },
  },
};
</script>

<style lang="scss"></style>
