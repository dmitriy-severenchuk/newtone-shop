<template>
  <div class="user-page">
    <div class="container">
      <h2 class="user__title">Welcome (User)!!!</h2>
      <button type="submit">Logout</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods: {
      ...mapActions(['AUTH_LOGOUT']),
    // logout: function() {
    //   this.$store.dispatch('AUTH_LOGOUT').then(() => {
    //     this.$router.push('/login');
    //   });
    // },
  },
};
</script>

<style lang="scss">
.user__title {
  text-align: center;
  font-size: 30px;
}
</style>
