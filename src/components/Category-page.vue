<template>
  <product-popup>
    <product-popup-main :popup_data="currentItem" :popupItemSize="itemSize" />
  </product-popup>
  <!-- <filter-panel v-if="showFilterPanel"/> -->
  <div class="category-page">
    <div class="container">
      <h2 class="category-page__title" v-if="pageGender">
        {{ pageGender }}
        <span v-if="pageCategory">- {{ pageCategory }}</span>
      </h2>
      <h2 class="category-page__title" v-if="pageSubcategory">
        {{ pageSubcategory }}
      </h2>
      <div class="category-page__filter__button-wrapper">
        <button class="category-page__filter__button" @click="showFilterPanel = !showFilterPanel">
          <span>Фильтр</span>
          <img
            src="@/assets/images/gear.svg"
            alt="gear"
            class="category-page__filter__button-icon"
          />
        </button>
      </div>
       <div class="attention" v-if="!filteredProducts.length">
          К сожалению данного типа товара нет на складе:(
        </div>
      <section class="category-page__inner">
       
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
      currentItem: null,
      itemSize: 'XL',
      Error: false,
      showFilterPanel: true
    };
  },
  components: {
    Card,
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
    pageCategory() {
      return this.$route.params.category;
    },
    pageGender() {
      return this.$route.params.gender;
    },
    pageSubcategory() {
      return this.$route.params.subcategory;
    },

    filteredProducts() {
      return this.pageGender && !this.pageCategory && !this.pageSubcategory
        ? this.PRODUCTS.filter((f) => f.gender === this.pageGender)
        : // Gender + Category
        this.pageGender && this.pageCategory && !this.pageSubcategory
        ? this.PRODUCTS.filter(
            (f) =>
              f.gender === this.pageGender && f.category === this.pageCategory
          )
        : // Subcategory
        this.pageSubcategory
        ? this.PRODUCTS.filter((f) => f.subcategory === this.pageSubcategory)
        : this.PRODUCTS.filter((f) => f.sale);
    },
  },

  methods: {
    ...mapActions(['ADD_TO_CART']),
    getItemSizeFromCard(currentSize) {
      return (this.itemSize = currentSize);
    },
    GetPopupData(id) {
      this.currentItem = this.filteredProducts[id]
    },
  },

  mounted() {
    this.getItemSizeFromCard();
  },
};
</script>
