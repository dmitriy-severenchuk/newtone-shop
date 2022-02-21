<template>
  <div class="product-popup__wrapper" v-if="GET_POPUP">
    <div class="product-popup">
      <div class="product-popup__header">
        <h3 class="product-popup__title">Product name</h3>
        <button class="product-popup__close" @click="closePopup">
          &#10006;
        </button>
      </div>
      <div class="product-popup__inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'product-popup',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['GET_POPUP']),
  },
  methods: {
    ...mapActions(['CLOSE_PRODUCT_POPUP']),
    closePopup() {
      this.CLOSE_PRODUCT_POPUP();
    },
  },
};
</script>

<style lang="scss">
.product-popup__wrapper {
  width: 100%;
  height: 100%;
  background-color: rgba(97, 97, 97, 0.699);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 15;
}
.product-popup__header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.product-popup {
  width: 500px;
  height: 500px;
  background-color: #fff;
  position: fixed;
  top: calc(50% - 250px);
  right: calc(50% - 250px);
  z-index: 5;
  padding: 10px;
}
.product-popup__close {
  width: 28px;
  height: 28px;
  color: #0c0404;
  background-color: rgb(238, 238, 238);
  border-radius: 3px;
  &:hover {
    background-color: rgb(207, 207, 207);
    cursor: pointer;
  }
}
</style>
