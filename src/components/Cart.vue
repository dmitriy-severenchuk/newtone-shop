<template>
  <div class="cart">
    <div class="container">
      <h2 class="cart__title">Корзина</h2>
      <div class="cart__inner">
        <CartItem
          v-for="item in cartData"
          :key="item.article"
          :cartItemData="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/Cart-item';

export default {
  components: {
    CartItem,
  },
  props: {
    cartData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss"></style>
