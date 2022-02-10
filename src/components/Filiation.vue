<template>
  <div class="filiation">
    <div class="filiation__inner">
      <div class="filiation__image"></div>
      <div class="filiation__content">
        <div class="filiation__title">Наши магазины в Москве</div>
        <div class="filiation__stations">
          <div class="filiation__stations-item">
            М:
            <span class="filiation__stations-item_name">Комсомольская</span>
          </div>
          <div class="filiation__stations-item">
            М:
            <span class="filiation__stations-item_name">Бауманская</span>
          </div>
        </div>
        <div class="filiation__address">
          <div class="filiation__text-title">Адрес:</div>
          <div class="filiation__address__text">
            Новорязанская ул., 18, стр. 11
          </div>
        </div>
        <div class="filiation__contacts">
          <div class="filiation__text-title">Контакты:</div>
          <div class="filiation__contacts-item">+7 800 555-10-61</div>
          <div class="filiation__contacts-item">пн-пт 10:00-19:00</div>
        </div>
        <a href="#" class="filiation__map-link"
          >Посмотреть на карте
          <img
            src="@/assets/images/next.svg"
            alt="next"
            class="filiation__map-link__img"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filiation'
}
</script>