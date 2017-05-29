/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    topBar: {
      backButton: false,
    },
  },
  mutations: {
    SET_TOPBAR_BACK(state, status) {
      state.topBar.backButton = status;
    },
  },
  actions: {
    setTopBarBack(context, status) {
      context.commit('SET_TOPBAR_BACK', status);
    },
  },
});
