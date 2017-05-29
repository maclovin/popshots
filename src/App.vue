<template>
  <div id="app">
    <top v-bind:back="topBarBack" />
    <router-view></router-view>
    <bottom />
  </div>
</template>

<script>
import ViewStore from '@/flux/stores/view';

export default {
  name: 'app',
  computed: {
    topBarBack() {
      return ViewStore.state.topBar.backButton;
    },
  },
};
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 64px

.md-card
  background: white !important
  margin-bottom: 15px

  .md-icon
    margin-left: 5px
    margin-right: 3px
</style>
