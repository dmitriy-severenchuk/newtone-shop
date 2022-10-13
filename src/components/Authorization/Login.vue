<template>
  <div class="authorization">
    <div class="container">
      <div class="authorization__inner">
        <div class="authorization__logo-wrapper">
          <img src="@/assets/images/logo.svg" alt="NewTone" class="authorization__logo" />
        </div>

        <form class="authorization__form" @submit.prevent="login">
          <h1 class="authorization__title">Авторизация</h1>
          <div class="authorization__form__item">
            <div class="authorization__form__item-title">
              Ваша почта:
            </div>
            <input v-model="state.email" type="text" class="authorization__form__item-input"
              placeholder="example@user.net" />
            <span v-if="v$.email.$errors.length" class="authorization__input-error">Неверно введена почта</span>
          </div>
          <div class="authorization__item">
            <div class="authorization__form__item-title">Пароль:</div>
            <input v-model="state.password" type="password" class="authorization__form__item-input"
              placeholder="Пароль" />
            <span v-if="v$.password.$errors.length" class="authorization__input-error">Неверный пароль (мин. 6
              символов)</span>
          </div>
          <button class="authorization__form__button" type="submit" :disabled="!isDisableButton">
            Войти
          </button>

        </form>
        <router-link to="/register" class="authorization__link">
          Еще нет аккаунта?
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, minLength, email } from '@vuelidate/validators';
import axios from 'axios';
import { reactive, computed } from 'vue';

// import { useRouter } from 'vue-router';


export default {
  setup() {
    const state = reactive({
      email: '',
      password: '',
    });
    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    };
    const isDisableButton = computed(() => {
      return state.password.length && state.email.length;
    });

    const v$ = useVuelidate(rules, state);
    return { state, v$, isDisableButton };
  },
  methods: {

    async login() {
      this.v$.$validate();

      if (!this.v$.$error) {
        const response = await axios.post('http://159.89.235.180:3000/auth/sign-in', {
          email: this.state.email,
          password: this.state.password
        })

        localStorage.setItem('token', response.data.token);

        await this.$router.push('/');
      }
    },
  }
};
</script>

<style lang="scss">
.error {
  color: red;
}
</style>
