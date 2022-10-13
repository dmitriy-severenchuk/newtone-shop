<template>
  <div class="page">
    <div class="container">
      <div class="page__inner">
        <div class="page__intro">
          <div class="page__intro__box">
            <router-link :to="{
              name: 'categoryPage',
              params: { category: 'Женщинам' },
            }" class="page__intro__box__link"><img src="@/assets/images/women.webp"
                class="page__intro__box__link-img" />
              <span class="page__intro__box__link-content">Женское</span>
            </router-link>
            <router-link :to="{
              name: 'categoryPage',
              params: { category: 'Мужчинам' },
            }" class="page__intro__box__link"><img src="@/assets/images/men.webp" class="page__intro__box__link-img" />
              <span class="page__intro__box__link-content">Мужское</span>
            </router-link>
          </div>
          <div class="page__intro__categories">
            <router-link :to="{
              name: 'subtypePage',
              params: { subtype: 'Вышевка' },
            }" class="page__intro__categories__item">
              <div class="page__intro__categories__item-img__wrapper">
                <img src="@/assets/images/categories_img1.webp" alt="Вышевка"
                  class="page__intro__categories__item-img" />
              </div>
              <div class="page__intro__categories__item-title">
                Вышевка<span class="page__intro__categories__item-title__icon"></span>
              </div>
            </router-link>
            <router-link :to="{
              name: 'subtypePage',
              params: { subtype: 'Старые-коллекции' },
            }" class="page__intro__categories__item">
              <div class="page__intro__categories__item-img__wrapper">
                <img src="@/assets/images/categories_img2.webp" alt="Старые коллекции"
                  class="page__intro__categories__item-img" />
              </div>
              <div class="page__intro__categories__item-title">
                Старые коллекции<span class="page__intro__categories__item-title__icon"></span>
              </div>
            </router-link>
            <router-link :to="{
              name: 'subtypePage',
              params: { subtype: 'Средиземноморье' },
            }" class="page__intro__categories__item">
              <div class="page__intro__categories__item-img__wrapper">
                <img src="@/assets/images/categories_img3.webp" alt="Средиземноморье"
                  class="page__intro__categories__item-img" />
              </div>
              <div class="page__intro__categories__item-title">
                Средиземноморье<span class="page__intro__categories__item-title__icon"></span>
              </div>
            </router-link>
            <router-link :to="{
              name: 'subtypePage',
              params: { subtype: 'Спорт' },
            }" class="page__intro__categories__item">
              <div class="page__intro__categories__item-img__wrapper">
                <img src="@/assets/images/categories_img4.webp" alt="Спорт" class="page__intro__categories__item-img" />
              </div>
              <div class="page__intro__categories__item-title">
                Спорт<span class="page__intro__categories__item-title__icon"></span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="catalog__wrapper">
          <Catalog />
        </div>
        <router-link :to="{
          name: 'subtypePage',
          params: { subtype: 'Спорт' },
        }" class="page__season__sale-link">
          <div class="page__season__sale">
            <img src="@/assets/images/season_sale.webp" alt="Sale" class="page__season__sale-image">
          </div>
        </router-link>
        <Filiation />
      </div>
    </div>
  </div>
</template>

<script>
import Catalog from '@/components/Catalog';
import Filiation from '@/components/Filiation';
import axios from 'axios';

export default {
  components: {
    Catalog,
    Filiation,
  },

  async created() {
    const response = await axios.get('user', {
      headers: {
        Authorization: 'Bearer' + localStorage.getItem('token')
      }
    })

    console.log(response);
  }
};
</script>
