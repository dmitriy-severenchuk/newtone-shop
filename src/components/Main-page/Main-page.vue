<template>
  <div class="page">
    <div class="container">
      <div class="page__inner">
        <div class="page__intro">
          <div class="page__intro__box">
            <a href="#" class="page__intro__box__link"
              ><img
                src="@/assets/images/women.webp"
                class="page__intro__box__link-img"
              />
              <span class="page__intro__box__link-content">Женское</span>
            </a>
            <a href="#" class="page__intro__box__link"
              ><img
                src="@/assets/images/men.webp"
                class="page__intro__box__link-img"
              />
              <span class="page__intro__box__link-content">Мужское</span>
            </a>
          </div>
          <div class="page__intro__categories">
            <a href="#" class="page__intro__categories__item">
              <div class="page__intro__categories__item-img__wrapper">
                <img
                  src="@/assets/images/categories_img1.webp"
                  alt="Вышевка"
                  class="page__intro__categories__item-img"
                />
              </div>
              <div class="page__intro__categories__item-title">
                Вышевка<span
                  class="page__intro__categories__item-title__icon"
                ></span>
              </div>
            </a>
            <a href="#" class="page__intro__categories__item">
              <div class="page__intro__categories__item-img__wrapper">
                <img
                  src="@/assets/images/categories_img2.webp"
                  alt="Старые коллекции"
                  class="page__intro__categories__item-img"
                />
              </div>
              <div class="page__intro__categories__item-title">
                Старые коллекции<span
                  class="page__intro__categories__item-title__icon"
                ></span>
              </div>
            </a>
            <a href="#" class="page__intro__categories__item">
              <div class="page__intro__categories__item-img__wrapper">
                <img
                  src="@/assets/images/categories_img3.webp"
                  alt="Средиземноморье"
                  class="page__intro__categories__item-img"
                />
              </div>
              <div class="page__intro__categories__item-title">
                Средиземноморье<span
                  class="page__intro__categories__item-title__icon"
                ></span>
              </div>
            </a>
            <a href="#" class="page__intro__categories__item">
              <div class="page__intro__categories__item-img__wrapper">
                <img
                  src="@/assets/images/categories_img4.webp"
                  alt="Спорт"
                  class="page__intro__categories__item-img"
                />
              </div>
              <div class="page__intro__categories__item-title">
                Спорт<span
                  class="page__intro__categories__item-title__icon"
                ></span>
              </div>
            </a>
          </div>
        </div>
        <div class="catalog__wrapper">
          <Catalog />
        </div>
        <!-- <Catalog/> -->
      </div>
    </div>
  </div>
</template>

<script>

import Catalog from '@/components/Catalog/Catalog';
export default {
  data() {
    return {
     
      categories: [
        { name: 'Все', value: 'all' },
        { name: 'Мужские', value: 'м' },
        { name: 'Женские', value: 'ж' },
      ],
    };
  },
 
  components: {
    Catalog,
  },
};
</script>
