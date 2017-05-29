<template>
  <div class="spinner">
    <md-spinner md-indeterminate class="md-accent" v-if="enable" />
  </div>
</template>

<script>
  export default {
    name: 'Spinner',
    props: ['enable'],
  };
</script>

<style lang="sass" scoped>
  .spinner
    width: 100%
    display: block
</style>
