<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  created: function () {
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('AUTH_LOGOUT')
        }
        throw err;
      });
    });
  }
};

</script>

<style lang="scss">
@import '@/assets/styles/style.scss';
</style>
