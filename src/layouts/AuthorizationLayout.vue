<template>
  <div class="authorization-wrapper">
    <AuthHeader />
    <div class="authorization-wrapper__content">
      <router-view />
    </div>
  </div>
</template>

<script>
import AuthHeader from "@/components/Authorization/Auth-Header";

export default {
  components: {
    AuthHeader,
  },
};
</script>

<style lang="scss"></style>
