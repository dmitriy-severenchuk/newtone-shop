<template>
  <transition name="popup__appear">
    <product-popup>
      <product-popup-main
        :popup_data="filteredProducts[this.popupId]"
        :popupItemSize="this.itemSize"
      />
    </product-popup>
  </transition>

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
          <Card
            :product_data="product"
            @chosenItemSize="getItemSizeFromCard"
            @popup_data="GetPopupData(id)"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
      selected: 'Все',
      products: [],
      sortedProducts: [],
      popupId: 0,
      itemSize: '',
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
    this.getItemSizeFromCard();
  },

  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),

    async initProducts() {
      this.products = await this.GET_PRODUCTS_FROM_API();
    },

    getItemSizeFromCard(currentSize) {
      return (this.itemSize = currentSize);
    },
    sortByCategories(category) {
      this.selected = category.name;
      this.sortedProducts = [];
      this.products.forEach((item) => {
        if (item.gender === category.name) {
          this.sortedProducts.push(item);
        } else if (!category.value) {
          this.sortedProducts = this.products.slice();
        }
      });

      // Убрал (item.category_id === category.value) - с этим не работает сортировка
    },

    GetPopupData(id) {
      return (this.popupId = id);
    },
  },
};
</script>

<style lang="scss"></style>
