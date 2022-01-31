<template>
  <div class="category-page">
    <div class="container">
      <h2 class="category-page__title">Женщинам</h2>
      <section class="category-page__inner">
        <div
          class="category-page__item"
          v-for="(product, id) in filteredProducts"
          :key="id"
        >
          <Card :product_data="product" class="category-page__card" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'women',
  data() {
    return {
      pageCategory: 'Женщинам',
      products: [],
      sortedProducts: [],
    };
  },
  components: {
    Card,
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return null;
      }
    },
  },

  methods: {
    ...mapActions(['ADD_TO_CART']),

    sortByCategory() {
      this.PRODUCTS.forEach((item) => {
        if (item.category === this.pageCategory) {
          this.sortedProducts.push(item);
          console.log(item.category);
        } else {
            return
        }
      });
    },
  },

  mounted() {
    this.sortByCategory();
  },
};
</script>
