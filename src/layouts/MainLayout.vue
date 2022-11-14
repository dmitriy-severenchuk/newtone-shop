<template>
  <div class="main-wrapper">
    <TheHeader />
    <div class="main-wrapper__content" v-if="isReady">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import { mapActions } from "vuex";

export default {
  components: {
    TheHeader,
    TheFooter,
  },

  data() {
    return {
      isReady: false,
    };
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),

    async initProducts() {
      await this.GET_PRODUCTS_FROM_API();
      this.isReady = true;
    },
  },
  beforeMount() {
    this.initProducts();
  },
};
</script>

<style lang="scss"></style>
