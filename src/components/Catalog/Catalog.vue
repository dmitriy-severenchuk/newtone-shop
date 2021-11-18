<template>
  <div class="catalog">
    <div class="catalog__inner">
      <Select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
      />
      <p></p>
      <h2 class="catalog__title">Женщины</h2>
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
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      selected: '',
      sortedProducts: [],
      categories: [
        { name: 'Все', value: 'ALL' },
        { name: 'Мужчинам', value: 1 },
        { name: 'Женщинам', value: 2 },
      ],
    };
  },
  components: {
    Card,
    Swiper,
    SwiperSlide,
    Select,
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      console.log(data);
    },
    sortByCategories(category) {
      this.sortedProducts = [];
      this.PRODUCTS.map((item) => {
        if (item.category === category.name) {
          this.sortedProducts.push(item);
        }
      });
    },
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss"></style>
