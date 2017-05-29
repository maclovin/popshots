<template>
  <container class="shot">
    <shot-detail v-bind:shot="currentShot" v-bind:detail-status="detailStatus" />
  </container>
</template>

<script>
import ShotsStore from '@/flux/stores/shots';
import ViewStore from '@/flux/stores/view';
import UrlHelper from '@/utils/helpers';

export default {
  name: 'Shot',
  computed: {
    currentShot() {
      return ShotsStore.state.currentShot.shot;
    },
    detailStatus() {
      return ShotsStore.state.currentShot.status;
    },
  },
  beforeCreate: () => {
    const shotId = UrlHelper(2);

    window.scrollTo(0, 0);
    ViewStore.dispatch('setTopBarBack', true);
    ShotsStore.dispatch('fetchOne', shotId);
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
  .shot
    padding: 30px 0
</style>
