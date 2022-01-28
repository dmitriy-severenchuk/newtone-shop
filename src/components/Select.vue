<template>
  <div class="select">
    <h5 class="select__title" @click="areOptionsVisible = !areOptionsVisible">
      Выбрать Категорию
      <span class="select__title-icon"><fa icon="caret-down"/></span>
    </h5>
    <div class="select__options" v-if="areOptionsVisible">
      <span
        class="select__options-item"
        v-for="option in CATEGORIES"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  props: {
    selected: {
      type: String,
      default: '',
    },
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option);
      this.areOptionsVisible = false;
    },
  },
  computed: {
    ...mapGetters(['CATEGORIES']),
  },
};
</script>

<style lang="scss">
.select {
  width: 500px;
  cursor: pointer;
  text-align: center;

  position: relative;
  margin: 0 auto 30px;
}
.select__title {
  font-size: 18px;
  background-color: rgb(238, 238, 238);
  border: 2px solid #2d2d2d;
  transition: all linear 0.1s;
  padding: 5px;
  &-icon {
    font-size: 20px;
    margin-left: 5px;
  }
}
.select__title:hover {
  background-color: #d6d6d6;
}
.select__options {
  display: flex;
  flex-direction: column;

  border-top: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 2;
  &-item {
    background-color: #2d2d2d;
    font-size: 18px;
    color: #fff;
    transition: background-color linear 0.2s;
    padding: 8px;
    &:hover {
      background-color: rgb(70, 70, 70);
    }
    border: 2px solid #2d2d2d;
    border-top: none;
  }
}
</style>
