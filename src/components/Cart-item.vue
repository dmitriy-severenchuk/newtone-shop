<template>
  <div class="cart-item">
    <div class="cart__image__wrapper">
      <img
        :src="require('@/assets/images/Catalog/' + cart-item-data.image)"
        alt="cloth"
        class="card__content-item"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'cart-item-data': {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss"></style>
