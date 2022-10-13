<template>
  <div class="authorization">
    <div class="container">
      <router-link to="/" class="back-button">
        Back
      </router-link>

      <div class="authorization__inner">
        <div class="authorization__logo-wrapper">
          <img src="@/assets/images/logo.svg" alt="NewTone" class="authorization__logo" />
        </div>

        <form action="POST" class="authorization__form" @submit.prevent="register">
          <h1 class="authorization__title">Регистрация</h1>
          <div class="authorization__form__item">
            <div class="authorization__form__item-title">
              Имя
            </div>
            <input v-model="state.name" type="text" class="authorization__form__item-input" placeholder="Имя" />
            <span v-if="v$.name.$errors.length" class="authorization__input-error">Это поле должно быть заполнено</span>
          </div>
          <div class="authorization__form__item">
            <div class="authorization__form__item-title">
              Фамилия
            </div>
            <input v-model="state.surname" type="text" class="authorization__form__item-input" placeholder="Фамилия" />
            <span v-if="v$.surname.$errors.length" class="authorization__input-error">Это поле должно быть
              заполнено</span>
          </div>
          <div class="authorization__form__item">
            <div class="authorization__form__item-title">
              Ваша почта:
            </div>
            <input v-model="state.email" type="email" class="authorization__form__item-input"
              placeholder="example@user.net" />
            <span v-if="v$.email.$errors.length" class="authorization__input-error">Неверно введена почта</span>
          </div>
          <div class="authorization__form__item">
            <div class="authorization__form__item-title">Пароль:</div>
            <input v-model="state.password" type="password" class="authorization__form__item-input"
              placeholder="Пароль" />
            <span v-if="v$.password.$errors.length" class="authorization__input-error">Неверный пароль (мин. 6
              символов)</span>
          </div>
          <div class="authorization__form__item">
            <div class="authorization__form__item-title">
              Подтвердите пароль:
            </div>
            <input v-model="state.password_confirm" type="password" class="authorization__form__item-input"
              placeholder="Подтвердите пароль" />
            <span v-if="v$.password_confirm.$errors.length" class="authorization__input-error">Пароль не
              совпадает</span>
          </div>
          <button class="authorization__form__button" type="submit">
            Зарегистрироваться
          </button>
        </form>

        <router-link to="/login" class="authorization__link">
          Уже есть аккаунт?
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, minLength, email, sameAs } from '@vuelidate/validators';
import { reactive, computed } from 'vue';
// import { mapActions } from 'vuex';

import axios from 'axios';

export default {
  name: 'Register',
  setup() {
    const state = reactive({
      email: '',
      password: '',
      password_confirm: '',
      name: '',
      surname: '',
    });
    const rules = computed(() => {
      return {
        email: { required, email },

        password: { required, minLength: minLength(6) },
        password_confirm: { required, sameAs: sameAs(state.password) },

        name: { required, minLength: minLength(1) },
        surname: { required, minLength: minLength(1) },
      };
    });

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
  methods: {

    // Get a link from Andrew to POST register data to the Backend
    async register() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const data = {
          name: this.state.name,
          surname: this.state.surname,
          email: this.state.email,
          password: this.state.password,
          phone: '090909090',
          // password_confirm: this.state.password_confirm,
          role: 'ADMIN'
        }
        console.log(data)

        await axios.post('http://159.89.235.180:3000/auth/sign-up', data);



        this.$router.push('/login');
      } else {
        return console.log('Ошибка заполения формы!');
      }
    },
  },
};
</script>

<style lang="scss">
.error {
  color: red;
}
</style>
