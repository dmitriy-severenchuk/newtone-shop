<template>
  <div class="user-page">
    <div class="container">
      <div class="user-page__inner">
        <h2 class="user__title">Welcome (User)!!!</h2>
        <button type="submit" @click="logout" class="user__logout-button">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('AUTH_LOGOUT').then(() => {
        this.$router.push('/login');
      });
    },
  },
};
</script>

<style lang="scss">
.user__title {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
}

.user-page__inner {
  margin-top: 30px;
}

.user__logout-button {
  display: block;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  color: #ffffff;
  font-weight: 500;
  padding: 10px 40px;
  border: none;
  background-color: rgba(199, 26, 26, 0.944);
  margin: 40px auto;

  &:hover {
    background-color: rgba(177, 23, 23, 0.984);
  }
}
</style>
