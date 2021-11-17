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

        <a href="#" class="page__season__sale-link">
          <div class="page__season__sale"></div>
        </a>
        <div class="our-store">
          <div class="our-store__inner">
            <div class="our-store__image"></div>
            <div class="our-store__content">
              <div class="our-store__title">Наши магазины в Москве</div>
              <div class="our-store__stations">
                <div class="our-store__stations-item">М: <span class="our-store__stations-item_name">Комсомольская</span></div>
                <div class="our-store__stations-item">М: <span class="our-store__stations-item_name">Бауманская</span></div>
              </div>
              <div class="our-store__address">
                <div class="our-store__text-title">Адрес:</div>
                <div class="our-store__address__text">Новорязанская ул., 18, стр. 11</div>
              </div>
              <div class="our-store__contacts">
                <div class="our-store__text-title">Контакты:</div>
                <div class="our-store__contacts-item">+7 800 555-10-61</div>
                <div class="our-store__contacts-item">пн-пт 10:00-19:00</div>
              </div>
              <a href="#" class="our-store__map-link">Посмотреть на карте <img src="@/assets/images/next.svg" alt="next" class="our-store__map-link__img"> </a>
            </div>
          </div>
        </div>
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
        { name: 'Все', value: 'ALL' },
        { name: 'Мужчинам', value: 1 },
        { name: 'Женщинам', value: 2 },
      ],
    };
  },

  components: {
    Catalog,
  },
};
</script>
