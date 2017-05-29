<template>
  <section class="user-detail">
    <md-card>
      <md-card-content>
        <md-avatar class="user-detail__avatar md-large">
          <img :src="user.avatar_url" alt="People">
        </md-avatar>

        <h3 class="md-title">
          {{ user.name }}
          <md-icon class="md-size-1x md-accent" v-if="user.pro">stars</md-icon>
        </h3>

        <h5 class="user-detail__username">({{ user.username }})</h5>

        <label class="md-subhead">{{ user.location }}</label>

        <md-card-content v-html="user.bio" />

        <md-list class="user-detail__contact-list">
          <md-list-item class="user-detail__contact-list__item" v-for="link in user.links" :href="link" :key="link">{{ link }}</md-list-item>
        </md-list>
      </md-card-content>
    </md-card>
  </section>
</template>

<script>
  export default {
    name: 'UserDetail',
    props: ['user'],
  };
</script>

<style lang="sass" scoped>
  .user-detail
    text-align: center

    &__avatar
      width: 120px
      height: 120px
      margin-bottom: 10px

    &__username
      margin: 0px 0

    &__contact-list
      &__item
        color: #2c3e50 !important
        font-size: 12px !important
</style>
