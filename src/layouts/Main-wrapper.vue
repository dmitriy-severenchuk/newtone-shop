<template>
  <div class="main-wrapper">
    <Header />
    <Cart v-if="CART.length" :cart_data="CART" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Cart from '@/components/Cart';
import {mapGetters} from 'vuex'

export default {
  components: {
    Header,
    Footer,
    Cart
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  setup() {},
};
</script>
