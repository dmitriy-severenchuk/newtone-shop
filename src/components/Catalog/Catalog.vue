<template>
  <div class="catalog" v-if="filteredProducts.length">
    <div class="catalog__inner">
      <Select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
      />
      <p></p>
      <h2 class="catalog__title">{{ selected }}</h2>
      <h3 class="catalog__subtitle">Новинки</h3>
      <swiper
        :slides-per-view="5"
        :space-between="20"
        :navigation="{ clickable: true }"
      >
        <swiper-slide v-for="(product, id) in filteredProducts" :key="id">
          <Card :product_data="product" @addToCart="addToCart" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Catalog/Card';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Select from '@/components/Select';
import { mapActions } from 'vuex';

export default {
  components: {
    Card,
    Swiper,
    SwiperSlide,
    Select,
  },

  data() {
    return {
      selected: 'Все',
      products: [],
      sortedProducts: [],
      categories: [
        { name: 'Все', value: '' },
        { name: 'Мужчинам', value: 1 },
        { name: 'Женщинам', value: 2 },
      ],
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
      console.log(data);
    },

    sortByCategories(category) {
      this.sortedProducts = [];
      this.products.forEach((item) => {
        if (item.category_id === category.value) {
          this.sortedProducts.push(item);
        } else if (!category.value) {
          this.sortedProducts = this.products.slice();
        }
      });
    },
  },
};
</script>

<style lang="scss"></style>
