<template>
  <div class="authorization">
    <div class="container">
      <router-link to="/" class="back-button">
        Back
      </router-link>

      <div class="authorization__inner">
        <div class="authorization__logo-wrapper">
          <img
            src="@/assets/images/logo.svg"
            alt="NewTone"
            class="authorization__logo"
          />
        </div>

        <form action="POST" class="authorization__form" @submit.prevent="login">
          <h1 class="authorization__title">Авторизация</h1>
          <div class="authorization__form__item">
            <div class="authorization__form__item-title">
              Ваша почта:
            </div>
            <input
              v-model="state.email"
              type="text"
              class="authorization__form__item-input"
              placeholder="example@user.net"
            />
            <span
              v-if="v$.email.$errors.length"
              class="authorization__input-error"
              >Неверно введена почта</span
            >
          </div>
          <div class="authorization__item">
            <div class="authorization__form__item-title">Пароль:</div>
            <input
              v-model="state.password"
              type="password"
              class="authorization__form__item-input"
              placeholder="Пароль"
            />
            <span
              v-if="v$.password.$errors.length"
              class="authorization__input-error"
              >Неверный пароль (мин. 6 символов)</span
            >
          </div>
          <button
            class="authorization__form__button"
            type="submit"
            :disabled="!isDisableButton"
            @click="submitForm($event)"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, minLength, email } from '@vuelidate/validators';
import { reactive } from 'vue';

import { mapActions } from 'vuex';

export default {
  computed: {
    isDisableButton() {
      return this.state.password.length && this.state.email.length;
    },
  },

  setup() {
    const state = reactive({
      email: '',
      password: '',
    });
    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    };

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
  methods: {
      ...mapActions(['AUTH_REQUEST']),

    submitForm(e) {
      e.preventDefault();
      this.v$.$validate();
      // if (!this.v$.$error) {
      //   alert('Форма отправлена!');
      // } else {
      //   return;
      // }
    },

    login() {
      const { email, password } = this;
      this.$store.dispatch('AUTH_REQUEST', { email, password }).then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>

<style lang="scss">
.error {
  color: red;
}
</style>
