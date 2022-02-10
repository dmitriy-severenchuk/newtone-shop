<template>
  <div class="product-popup">
    <div class="product-popup__header">
      <h3 class="product-popup__title">Product name</h3>
      <button class="product-popup__close">&#10006;</button>
    </div>
    <div class="product-popup__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-popup',
};
</script>

<style lang="scss">

</style>