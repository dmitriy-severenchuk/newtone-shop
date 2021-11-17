<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <img
            src="@/assets/images/logo.svg"
            alt="NEWTONE"
            class="header__logo-img"
          />
        </div>
        <form action="/search" class="header__search">
          <input type="text" class="header__search-input" placeholder="Поиск" />
          <button class="header__search-icon"></button>
        </form>
        <div class="header__controls">
          <a href="#" class="header__controls__icon">
            <span class="header__controls__icon-user"></span>
          </a>
          <a href="#" class="header__controls__icon">
            <span class="header__controls__icon-favourite"></span>
            <span class="header__controls__icon-counter" id="favsCounter"
              >0</span
            >
          </a>
          <a href="#" class="header__controls__icon">
            <span class="header__controls__icon-cart"></span>
            <span class="header__controls__icon-counter" id="cartItemsCounter"
              >0</span
            >
          </a>
          <span class="header__controls__total-price">0.00 ₽</span>
        </div>
      </div>
      <div class="header__footer">
        <div class="header__footer-menu">
          <a href="#" class="header__footer-menu__title"
            >Женщины<span class="header__footer-menu__title-icon"
              ><fa icon="caret-down"/></span
          ></a>
          <div class="header__footer-menu__content">
            <ul class="header__footer-menu__content__main">
              <li class="header__footer-menu__content__main__item">
                <a
                  href="#"
                  class="header__footer-menu__content__main__item-link"
                  >Популярное</a
                >
              </li>
              <li class="header__footer-menu__content__main__item">
                <a
                  href="#"
                  class="header__footer-menu__content__main__item-link"
                  >Одежда</a
                >
              </li>
              <li class="header__footer-menu__content__main__item">
                <a
                  href="#"
                  class="header__footer-menu__content__main__item-link"
                  >Обувь</a
                >
              </li>
              <li class="header__footer-menu__content__main__item">
                <a
                  href="#"
                  class="header__footer-menu__content__main__item-link"
                  >Аксессуары</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="header__footer-menu">
          <a href="#" class="header__footer-menu__title"
            >Мужчины<span class="header__footer-menu__title-icon"
              ><fa icon="caret-down"/></span
          ></a>
          <div class="header__footer-menu__content">
            <ul class="header__footer-menu__content__main">
              <li class="header__footer-menu__content__main__item">
                <a
                  href="#"
                  class="header__footer-menu__content__main__item-link"
                  >Популярное</a
                >
              </li>
              <li class="header__footer-menu__content__main__item">
                <a
                  href="#"
                  class="header__footer-menu__content__main__item-link"
                  >Одежда</a
                >
              </li>
              <li class="header__footer-menu__content__main__item">
                <a
                  href="#"
                  class="header__footer-menu__content__main__item-link"
                  >Обувь</a
                >
              </li>
              <li class="header__footer-menu__content__main__item">
                <a
                  href="#"
                  class="header__footer-menu__content__main__item-link"
                  >Аксессуары</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
};
</script>
