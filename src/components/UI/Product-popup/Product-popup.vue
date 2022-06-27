<template>
  <div class="product-popup__wrapper" v-if="GET_POPUP" ref="popup__wrapper">
    <div class="product-popup">
      <div class="product-popup__header">
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
  mounted(){
    document.addEventListener('click', (item) => {
      if(item.target === this.$refs['popup__wrapper']){
        this.CLOSE_PRODUCT_POPUP();
      }
    })
  }
};
</script>

<style lang="scss"></style>
