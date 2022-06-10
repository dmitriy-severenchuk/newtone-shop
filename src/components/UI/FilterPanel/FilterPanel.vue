<template>
  <div class="filter-panel">
    <div class="filter-panel__inner">
      <div class="filter-panel__item">
        <h3
          class="filter-panel__item__title"
          @click="showPriceContent = !showPriceContent"
        >
          Цена
          <span class="filter-panel__item__title-icon"
            ><fa icon="caret-down"
          /></span>
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
  data() {
    return {
      showPriceContent: false,
    };
  },
};
</script>

<style lang="scss">
.filter-panel {
  display: none;
  width: 500px;
  background-color: rgb(226, 226, 226);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  padding: 60px 60px;
}
.filter-panel__item__title {
  &-icon {
    margin-left: 5px;
  }
}
</style>
