<template>
  <div class="cart">
    <div class="container">
      <div class="cart__header">
        <h2 class="cart__title">Корзина</h2>
        <div class="cart__total-price">
          <strong>Итого:</strong> {{ CART_TOTAL_PRICE }}.00 ₽
        </div>
      </div>

      <div class="cart__inner">
        <CartItem
          v-for="(item, index) in CART"
          :key="index"
          :cartItemData="item"
          @increment="increment(index)"
          @decrement="decrement(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/Cart-item';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    CartItem,
  },
  methods: {
    ...mapActions(['INCREMENT_CART_ITEM', 'DECREMENT_CART_ITEM']),
    decrement(index){
      this.DECREMENT_CART_ITEM(index);
    },
    increment(index){
      this.INCREMENT_CART_ITEM(index);
    }
  },
  computed: {
    ...mapGetters(['CART', 'CART_TOTAL_PRICE']),

  },
};
</script>

<style lang="scss"></style>
