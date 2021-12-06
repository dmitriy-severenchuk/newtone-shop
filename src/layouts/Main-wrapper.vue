<template>
  <div class="main-wrapper">
    <TheHeader />
    <router-view class="main-wrapper__middle-of-page" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

import { mapGetters } from 'vuex';

export default {
  components: {
    TheHeader,
    TheFooter,
  },

  computed: {
    ...mapGetters(['CART']),
  },

  setup() {},
};
</script>
