/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import ShotsDataSource from '@/flux/dataSources/shots';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    currentPage: 1,
    limitPage: 50,
    shots: [],
    status: 'DONE',
    currentShot: {
      status: 'DONE',
      shot: {},
    },
  },
  mutations: {
    SET_STATUS(state, status) {
      state.status = status;
    },

    SET_CURRENT_SHOT_STATUS(state, status) {
      state.currentShot.status = status;
    },

    FETCHED_SHOTS(state, shots) {
      state.shots = shots;
    },

    FETCHED_MORE_SHOTS(state, shots) {
      const newShots = _.concat(state.shots, shots);

      state.shots = newShots;
      state.currentPage += 1;
    },

    FETCHED_ONE_SHOT(state, shot) {
      state.currentShot.shot = shot;
    },
  },
  actions: {
    fetchAll(context) {
      context.commit('SET_STATUS', 'WAITING');

      ShotsDataSource.getAll().then((results) => {
        context.commit('FETCHED_SHOTS', results);
        context.commit('SET_STATUS', 'DONE');
      });
    },

    fetchMore(context) {
      const nextPage = context.state.currentPage + 1;

      context.commit('SET_STATUS', 'WAITING');

      ShotsDataSource.getAll(nextPage).then((results) => {
        context.commit('FETCHED_MORE_SHOTS', results);
        context.commit('SET_STATUS', 'DONE');
      });
    },

    fetchOne(context, id) {
      context.commit('SET_CURRENT_SHOT_STATUS', 'WAITING');

      ShotsDataSource.getOne(id).then((result) => {
        context.commit('FETCHED_ONE_SHOT', result);
        context.commit('SET_CURRENT_SHOT_STATUS', 'DONE');
      });
    },
  },
});
