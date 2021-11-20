<template>
  <div class="cart">
    <div class="container">
      <div class="cart__inner">
        <CartItem :cart_data="cart_item_data" />
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
    cart_data: {
      type: Array,
      default() {
        [];
      },
    },
  },
};
</script>

<style lang="scss"></style>
