<template>
  <div class="product-modal">
    <div class="product-modal__header">
      <h3 class="product-modal__title">Product name</h3>
      <button class="product-modal__close">&#10006;</button>
    </div>
    <div class="product-modal__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-modal',
};
</script>

<style lang="scss">

</style>