<template>
  <div class="cart">
    <div class="container">
      <div class="cart__header">
        <h2 class="cart__title">Корзина</h2>
        <div class="cart__total-price"> <strong>Итого:</strong> {{CART_TOTAL_PRICE}}.00 ₽</div>
      </div>
      
      <div class="cart__inner">
        <CartItem
          v-for="item in CART"
          :key="item.product.id"
          :cartItemData="item"
        />
      </div>
      
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/Cart-item';
import { mapGetters } from 'vuex';

export default {
  components: {
    CartItem,
  },
   computed: {
    ...mapGetters(['CART', 'CART_TOTAL_PRICE']),
  },
};
</script>

<style lang="scss"></style>
