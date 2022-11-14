<template>
  <div class="filter-panel">
    <div class="filter-panel__header">
      <button class="filter-panel__header__close-button" @click="closePanel()">
        &#10006;
      </button>
    </div>
    <div class="filter-panel__inner">
      <div class="filter-panel__item">
        <h3
          class="filter-panel__item__title"
          @click="showPriceContent = !showPriceContent"
        >
          Цена
          <span class="filter-panel__item__title-icon">
            <fa icon="caret-down" />
          </span>
        </h3>
        <h3 class="filter-panel__item__content" v-if="showPriceContent">
          -----
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "filter-panel",

  data() {
    return {
      showPriceContent: false,
    };
  },
  methods: {
    closePanel() {
      this.$emit("closeClick");
    },
  },
};
</script>

<style lang="scss"></style>
