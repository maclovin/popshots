<template>
  <div id="app">
    <top />
    <router-view></router-view>
    <bottom />
  </div>
</template>

<script>
import { Top, Bottom } from '@/components';

export default {
  name: 'app',
  components: { Top, Bottom },
};
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
</style>
