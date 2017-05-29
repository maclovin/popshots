<template>
  <container class="home">
    <shots-list v-bind:shots="allShots" v-bind:list-status="listStatus" v-bind:current-page="currentPage" :load-more="loadMore" />
    <md-snackbar md-position="bottom right" ref="snackbar" md-duration="5000">
      <span>Connection timeout. Showing limited messages.</span>
      <md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Retry</md-button>
    </md-snackbar>
  </container>
</template>

<script>
import ShotsStore from '@/flux/stores/shots';
import ViewStore from '@/flux/stores/view';

export default {
  name: 'Home',
  computed: {
    allShots() {
      return ShotsStore.state.shots;
    },
    listStatus() {
      return ShotsStore.state.status;
    },
    currentPage() {
      return ShotsStore.state.currentPage;
    },
  },
  beforeCreate: () => {
    if (ShotsStore.state.shots.length === 0) {
      ShotsStore.dispatch('fetchAll');
    }

    ViewStore.dispatch('setTopBarBack', false);
  },
  methods: {
    loadMore() {
      ShotsStore.dispatch('fetchMore');
    },
  },
};
</script>

<style lang="sass" scoped>
  .home
    padding: 30px 0
</style>
