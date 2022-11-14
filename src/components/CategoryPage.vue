<template>
  <div class="category-page__wrapper">
    <product-popup>
      <product-popup-main :popup_data="currentItem" :popupItemSize="itemSize" />
    </product-popup>
    <div class="category-page" ref="category__page">
      <div class="container">
        <h2 class="category-page__title" v-if="pageCategory">
          {{ pageCategory }}
          <span v-if="pageType">- {{ pageType }}</span>
        </h2>
        <h2 class="category-page__title" v-if="pageSubtype">
          {{ pageSubtype }}
        </h2>
        <div class="attention" v-if="!filteredProducts.length">
          К сожалению данного типа товара нет на складе:(
        </div>
        <section class="category-page__inner__flex-wrapper">
          <div class="category-page__filter" v-if="filteredProducts.length">
            <div class="category-page__filter__inner">

              <h3 class="category-page__filter__title">
                Фильтр
              </h3>

              <select name="byPrice" class="category-page__filter__select" v-model="byPriceValue">
                <option disabled value="" selected>По цене</option>
                <option value="descend">От большей к меньшей</option>
                <option value="ascend">От меньшей к большей</option>
              </select>
            </div>
          </div>
          <div class="category-page__inner" ref="category__page-inner">

            <div class="category-page__item" v-for="(product, id) in filteredProducts" :key="id">
              <Card :product_data="product" class="category-page__card" @popup_data="GetPopupData(id)"
                @chosenItemSize="getItemSizeFromCard" />
            </div>
          </div>
        </section>
      </div>
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
      byPriceValue: '',
      all: "По цене",
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
    pageType() {
      return this.$route.params.type;
    },
    pageSubtype() {
      return this.$route.params.subtype;
    },

    filteredProducts() {
      return this.pageCategory && !this.pageType && !this.pageSubtype
        ? this.PRODUCTS.filter((f) => f.category === this.pageCategory)
        : // Category + Type
        this.pageCategory && this.pageType && !this.pageSubtype
          ? this.PRODUCTS.filter(
            (f) =>
              f.category === this.pageCategory && f.type === this.pageType
          )
          : // Subtype
          this.pageSubtype
            ? this.PRODUCTS.filter((f) => f.subtype === this.pageSubtype)
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
    sortProducts() {
      if (this.byPriceValue === 'ascend' || this.byPriceValue === 'descend') {
        this.filteredProducts.sort((a, b) => {
          const diff = a.price - b.price;

          if (diff === 0) return 0;

          const result = Math.abs(diff) / diff;

          return this.byPriceValue === 'ascend' ? result : this.byPriceValue === 'descend' ? -result : 0
        })
      }
    }
  },
  watch: {
    byPriceValue() {
      this.sortProducts();
    },
  },
  mounted() {
    this.getItemSizeFromCard();
  },
};
</script>
