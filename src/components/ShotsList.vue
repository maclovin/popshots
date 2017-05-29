<template>
  <grid class="shots-list">
    <div class="shots-list__loader" v-if="shots.length === 0">
      <spinner :enable="true" />
    </div>
    <grid-item class="shots-list__item" size="1/3" :rwd="{ compact: '1/1', tablet: '1/2', desktop: '1/3' }" v-for="shot in shots" :key="shot.id">
      <router-link :to="`shot/${shot.id}`">
        <md-card md-with-hover>
          <md-card-header>
            <md-avatar>
              <img :src="shot.user.avatar_url" alt="People" />
            </md-avatar>

            <div class="md-title">{{ shot.title }}</div>
          </md-card-header>

          <md-card-media>
            <img :src="shot.images.teaser">
          </md-card-media>

          <md-card-content class="shots-list__basic-info">
            <div class="shots-list__basic-info--date">{{ shot.created_at | formatDate }}</div>
            <md-icon class="md-size-1x">visibility</md-icon> {{ shot.views_count }}
            <md-icon class="md-size-1x">favorite</md-icon>{{ shot.likes_count }}
          </md-card-content>
        </md-card>
      </router-link>
    </grid-item>
    <grid-item class="shots-list__bottom" size="1/1">
        <md-button class="shots-list__load-more md-fab md-raised md-primary" @click.native="handleLoadMore" v-if="listStatus === 'DONE' && currentPage < 50">
          <md-icon>add</md-icon>
        </md-button>
      <spinner :enable="listStatus === 'WAITING'" />
    </grid-item>
  </grid>
</template>

<script>
  export default {
    name: 'ShotsList',
    props: ['shots', 'loadMore', 'listStatus', 'currentPage'],
    methods: {
      handleLoadMore() {
        this.loadMore();
      },
    },
  };
</script>

<style lang="sass" scoped>
  .shots-list
    list-style: none

    &__loader
      display: flex
      align-items: center
      justify-content: center
      width: 100%
      height: calc(100vh - 90px)
      text-align: center

    &__item
      display: inline-block
      *, *:hover
        color: #2c3e50 !important
        text-decoration: none !important

    &__basic-info
      display: block
      text-align: right

      &--date
        float: left

    &__bottom
        text-align: center
</style>
