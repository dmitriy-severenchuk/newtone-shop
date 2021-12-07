<template>
  <div>
    <Cart 
    :cartData="CART"
    />
  </div>
</template>

<script>
import Cart from '@/components/Cart';
import { mapGetters } from 'vuex';

export default {
  components: {
    Cart,
  },
  props: {
    
  },
  computed: {
    ...mapGetters(['CART']),
  },
  setup() {},
};
</script>

<style lang="scss"></style>
