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

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {},
};
</script>
