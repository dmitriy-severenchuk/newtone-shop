<template>
  <div class="main-wrapper">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header/Header';

export default {
  components: {
    Header,
  },

  setup() {},
};
</script>
