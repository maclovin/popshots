<template>
  <header class="header">
    <md-whiteframe md-tag="md-toolbar" md-elevation="3" class="md-toolbar__inverse">
      <md-button class="md-icon-button" v-if="back" @click.native="handleBack">
        <md-icon>keyboard_arrow_left</md-icon>
      </md-button>

      <container>
        <router-link to="/" class="md-title" tag="h1">
          <span class="md-title__pop">Pop</span> Shots
        </router-link>
      </container>
    </md-whiteframe>
  </header>
</template>

<script>
export default {
  name: 'Top',
  props: ['back'],
  methods: {
    handleBack() {
      window.history.back();
    },
  },
};
</script>

<style lang="sass" scoped>
  .header
    top: 0px
    position: fixed
    width: 100vw
    z-index: 99999

  .md-toolbar__inverse
    background: black !important
    color: white !important

  .md-title
    font-weight: bold
    text-transform: uppercase
    cursor: pointer

    &__pop
        color: #f44336
</style>
