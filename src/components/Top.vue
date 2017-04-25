<template>
  <header>
    <md-whiteframe md-tag="md-toolbar" md-elevation="3" class="md-toolbar__inverse">
        <container>
            <h1 class="md-title"><span class="md-title__pop">Pop</span> Shots</h1>
        </container>
    </md-whiteframe>
  </header>
</template>

<script>
export default {
  name: 'Top',
  props: [],
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
  .md-toolbar__inverse
    background: black !important
    color: white !important

  .md-title
    font-weight: bold
    text-transform: uppercase

    &__pop
        color: pink
</style>
