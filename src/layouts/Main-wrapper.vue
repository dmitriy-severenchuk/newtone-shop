<template>
  <div class="main-wrapper">
    <TheHeader />
    <Cart v-if="CART.length" :cart_data="CART" />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import Cart from '@/components/Cart';
import { mapGetters } from 'vuex';

export default {
  components: {
    TheHeader,
    TheFooter,
    Cart,
  },

  computed: {
    ...mapGetters(['CART']),
  },

  setup() {},
};
</script>
