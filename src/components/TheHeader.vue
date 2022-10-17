<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link to="/" class="header__logo">
          <img src="@/assets/images/logo.svg" alt="NEWTONE" class="header__logo-img" />
        </router-link>
        <form action="/search" class="header__search">
          <input type="text" class="header__search-input" placeholder="Поиск" />
          <button class="header__search-icon"></button>
        </form>
        <div class="header__controls">
          <router-link to="/user" class="header__controls__icon">
            <span class="header__controls__icon-user"></span>
          </router-link>
          <router-link to="/cart" class="header__controls__icon">
            <span class="header__controls__icon-cart"></span>
            <span class="header__controls__icon-counter" id="cartItemsCounter">{{ CART_ITEMS_COUNT }}</span>
          </router-link>
        </div>
      </div>
      <div class="header__footer">
        <div class="header__footer-menu">
          <router-link :to="{
            name: 'categoryPage',
            params: { category: 'Женщинам' },
          }" class="header__footer-menu__title">Женщинам<span class="header__footer-menu__title-icon">
              <fa icon="caret-down" />
            </span></router-link>
          <div class="header__footer-menu__content">
            <ul class="header__footer-menu__content__main">
              <li class="header__footer-menu__content__main__item">
                <router-link :to="{
                  name: 'typePage',
                  params: { category: 'Женщинам', type: 'Одежда' },
                }" class="header__footer-menu__content__main__item-link">Одежда</router-link>
              </li>
              <li class="header__footer-menu__content__main__item">
                <router-link :to="{
                  name: 'typePage',
                  params: { category: 'Женщинам', type: 'Обувь' },
                }" class="header__footer-menu__content__main__item-link">Обувь</router-link>
              </li>
              <li class="header__footer-menu__content__main__item">
                <router-link :to="{
                  name: 'typePage',
                  params: { category: 'Женщинам', type: 'Аксессуары' },
                }" class="header__footer-menu__content__main__item-link">Аксессуары</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="header__footer-menu">
          <router-link :to="{
            name: 'categoryPage',
            params: { category: 'Мужчинам' },
          }" class="header__footer-menu__title">Мужчинам<span class="header__footer-menu__title-icon">
              <fa icon="caret-down" />
            </span></router-link>
          <div class="header__footer-menu__content">
            <ul class="header__footer-menu__content__main">
              <li class="header__footer-menu__content__main__item">
                <router-link :to="{
                  name: 'typePage',
                  params: { category: 'Мужчинам', type: 'Одежда' },
                }" class="header__footer-menu__content__main__item-link">
                  Одежда
                </router-link>
              </li>
              <li class="header__footer-menu__content__main__item">
                <router-link :to="{
                  name: 'typePage',
                  params: { category: 'Мужчинам', type: 'Обувь' },
                }" class="header__footer-menu__content__main__item-link">Обувь</router-link>
              </li>
              <li class="header__footer-menu__content__main__item">
                <router-link :to="{
                  name: 'typePage',
                  params: { category: 'Мужчинам', type: 'Аксессуары' },
                }" class="header__footer-menu__content__main__item-link">Аксессуары</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheHeader',
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(['CART_ITEMS_COUNT']),
  },

  methods: {},
};
</script>
