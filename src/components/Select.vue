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

</style>
