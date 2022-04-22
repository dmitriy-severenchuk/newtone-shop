<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  // data(){
  //   return {
  //     cart: []
  //   }
  // },
  // mounted(){
  //   if(localStorage.cart){
  //     this.cart = JSON.parse(localStorage.cart);
  //   }
  // },
  // watch: {
  //   cart(productsInCart){
  //     localStorage.cart = JSON.stringify(productsInCart);
  //   }
  // }
};
</script>

<style lang="scss">
@import '@/assets/styles/style.scss';
</style>
