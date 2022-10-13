<template>
  <div class="filiation">
    <div class="filiation__inner">
      <h3 class="filiation__title filiation__title--mobile">Наши магазины в Киеве</h3>
      <div class="filiation__image-wrapper">
        <img :src="require('@/assets/images/filiation' + FILIATION[index].image)" alt="filiation"
          class="filiation__image" />
      </div>
      <div class="filiation__content">
        <h3 class="filiation__title filiation__title--desktop">Наши магазины в Киеве</h3>
        <div class="filiation__stations">
          <div class="filiation__stations-item" :class="{ 'active-filiation': index === 0 }" @click="index = 0">
            М:
            <span class="filiation__stations-item_name">Хрещатик</span>
          </div>
          <div class="filiation__stations-item" :class="{ 'active-filiation': index === 1 }" @click="index = 1">
            М:
            <span class="filiation__stations-item_name">Шулявская</span>
          </div>
        </div>
        <div class="filiation__address">
          <div class="filiation__text-title">Адрес:</div>
          <div class="filiation__address__text">
            {{ FILIATION[index].adress }}
          </div>
        </div>
        <div class="filiation__contacts">
          <div class="filiation__text-title">Контакты:</div>
          <div class="filiation__contacts-item">
            {{ FILIATION[index].phone_number }}
          </div>
          <div class="filiation__contacts-item">
            {{ FILIATION[index].timetable }}
          </div>
        </div>
        <a href="#" class="filiation__map-link">Посмотреть на карте
          <img src="@/assets/images/next.svg" alt="next" class="filiation__map-link__img" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'filiation',
  data() {
    return {
      index: 0,
    };
  },
  methods: {},
  computed: {
    ...mapGetters(['FILIATION']),
  },
};
</script>

<style lang="scss">

</style>
