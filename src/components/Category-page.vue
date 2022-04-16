<template>
  <product-popup>
    <product-popup-main
      :popup_data="filteredProducts[this.popupId]"
      :popupItemSize="this.itemSize"
    />
  </product-popup>
  <div class="category-page">
    <div class="container">
      <h2 class="category-page__title">
        {{ this.pageGender }}
        <span v-if="this.pageCategory"
          >- {{ this.$route.params.category }}</span
        >
      </h2>
      <section class="category-page__inner">
        <div class="attention" v-if="this.sortedProducts.length == 0">
          К сожалению данного типа товара нет на складе:(
        </div>
        <div
          class="category-page__item"
          v-for="(product, id) in filteredProducts"
          :key="id"
        >
          <Card
            :product_data="product"
            class="category-page__card"
            @popup_data="GetPopupData(id)"
            @chosenItemSize="getItemSizeFromCard"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      pageCategory: this.$route.params.category,
      pageGender: this.$route.params.gender,
      products: [],
      sortedProducts: [],
      popupId: 0,
      itemSize: '',
      Error: false,
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
    getItemSizeFromCard(currentSize) {
      return (this.itemSize = currentSize);
    },
    sortByCategory() {
      if (this.pageCategory) {
        this.PRODUCTS.forEach((item) => {
          if (
            item.gender == this.pageGender &&
            item.category == this.pageCategory
          ) {
            return this.sortedProducts.push(item);
          } else {
            return;
          }
        });
      } else if (!this.pageCategory) {
        this.PRODUCTS.forEach((item) => {
          if (item.gender == this.pageGender) {
            return this.sortedProducts.push(item);
          } else {
            return;
          }
        });
      }
    },
    GetPopupData(id) {
      this.popupId = id;
    },
  },

  mounted() {
    this.sortByCategory();
    this.getItemSizeFromCard();
  },
};
</script>
