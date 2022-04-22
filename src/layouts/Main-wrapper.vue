<template>
  <div class="main-wrapper">
    <theHeader />
    <div class="main-wrapper__content" v-if="isReady">
      <router-view />
    </div>
    <theFooter />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      isReady: false,
    };
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),

    async initProducts() {
      await this.GET_PRODUCTS_FROM_API();
      this.isReady = true;
    },
  },
  beforeMount() {
    this.initProducts();
  },
};
</script>

<style lang="scss"></style>
