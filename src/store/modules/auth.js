import axios, { setAuthHeaders } from "@/plugins/axios";
import { SET_USER_AUTH } from "../mutation-types";

export default {
  state: {
    isLogin: false,
  },

  getters: {
    getIsLogin: (state) => state.isLogin,
  },

  mutations: {
    [SET_USER_AUTH](state, payload) {
      state.isLogin = payload;
    },
  },

  actions: {
    async login({ dispatch }, { email, password }) {
      const { data } = await axios({
        url: "auth/sign-in",
        method: "POST",
        data: { email, password },
      });

      dispatch("setToken", data.token);

      return data;
    },

    setToken({ commit }, auth_token) {
      localStorage.setItem("user-token", auth_token);
      setAuthHeaders();

      commit(SET_USER_AUTH, true);
    },

    checkUserLogin({ commit }) {
      if (localStorage.getItem("user-token")) {
        commit(SET_USER_AUTH, true);
      }
    },

    logout({ commit }) {
      localStorage.removeItem("user-token");
      setAuthHeaders();

      commit(SET_USER_AUTH, false);
    },
  },
};
